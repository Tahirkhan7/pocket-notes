import { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { AppContext } from "../context/AppContext";

export default function AddNote({ noteGroup, setSelectedNoteGroup }) {
  const { notesGroup, setNotesGroup } = useContext(AppContext);
  const [noteContent, setNoteContent] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!noteContent.trim()) {
      setError("Note content is required.");
      return;
    }

    setError("");

    const newNote = {
      id: Date.now(),
      note: noteContent,
    };

    const updatedNotesGroup = notesGroup.map((group) => {
      if (group.id === noteGroup.id) {
        const updatedGroup = {
          ...group,
          notes: [...(group.notes || []), newNote],
        };
        
        setSelectedNoteGroup(updatedGroup);
        return updatedGroup;
      }
      return group;
    });

    setNotesGroup(updatedNotesGroup);
    setNoteContent("");
  }

  function handleChange(e) {
    setNoteContent(e.target.value);

    if (error) {
      setError("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter your text here..........."
        className={`w-full p-2 md:p-4 border rounded-lg focus:outline-none bg-white text-gray-900 placeholder-neutral-400 font-roboto resize-none ${
          error ? "border-red-500" : "border-blue-700"
        }`}
        rows={4}
        value={noteContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>
      <button
        type="submit"
        disabled={!noteContent.trim()}
        className="absolute bottom-10 right-10 text-neutral-400 w-8 h-8"
      >
        <IoMdSend
          className={`w-8 h-8 text-blue-900 ${!noteContent.trim() ? "opacity-50" : ""}`}
        />
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
