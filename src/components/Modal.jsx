import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function Modal({ isOpen, onClose }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [noteGroupName, setNoteGroupName] = useState("");
  const { notesGroup, setNotesGroup } = useContext(AppContext);
  const [error, setError] = useState({ groupName: "", color: "" });

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  function handleColorSelect(color) {
    setSelectedColor(color);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let errors = { groupName: "", color: "" };

    if (!noteGroupName.trim()) {
      errors.groupName = "Group name is required.";
    }

    if (!selectedColor) {
      errors.color = "Color must be selected.";
    }

    if (errors.groupName || errors.color) {
      setError(errors);
      return;
    }

    setError({ groupName: "", color: "" });

    const newNoteGroup = {
      id: Date.now(),
      noteGroupName,
      noteGroupColor: selectedColor,
    };
    setNotesGroup([...notesGroup, newNoteGroup]);
    setSelectedColor("");
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
      >
        <h2 className="text-xl font-bold mb-4">Create New Group</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Group Name</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter group name"
              name="noteGroupName"
              onChange={(e) => setNoteGroupName(e.target.value)}
            />
            {error.groupName && (
              <div className="mt-2 text-red-500">{error.groupName}</div>
            )}
          </div>
          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 mr-4">Choose Color</label>
            <div className="flex items-center space-x-2">
              {[
                "bg-violet-400",
                "bg-fuchsia-400",
                "bg-cyan-300",
                "bg-red-400",
                "bg-blue-700",
                "bg-blue-400",
              ].map((colorClass) => (
                <div
                  key={colorClass}
                  className={`h-8 w-8 ${colorClass} rounded-full cursor-pointer ${
                    selectedColor === colorClass ? "border-2 border-black" : ""
                  }`}
                  onClick={() => handleColorSelect(colorClass)}
                ></div>
              ))}
            </div>
            {error.color && (
              <div className="mt-2 text-red-500">{error.color}</div>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-900 text-white pl-4 pr-4 pt-1 pb-1 rounded-lg"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
