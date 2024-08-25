import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Modal({ isOpen, onClose }) {
  const [selectedColor, setSelectedColor] = useState("");
  const { notesGroup, setNotesGroup } = useContext(AppContext);
  if (!isOpen) return null;

  function handleColorClick(color) {
    setSelectedColor(color);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNoteGroup = {
      id: Date.now(),
      noteGroupName: e.target.noteGroupName.value,
      noteGroupColor: selectedColor,
    };
    setNotesGroup([...notesGroup, newNoteGroup]);
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Create New Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Group Name</label>
            <input
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter group name"
              name="noteGroupName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Choose Color</label>
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
                  onClick={() => handleColorClick(colorClass)}
                ></div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 bottom-4 right-4 rounded-lg w-half"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
