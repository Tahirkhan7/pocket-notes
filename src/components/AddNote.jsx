import { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { AppContext } from "../context/AppContext";

export default function AddNote({ noteGroup }) {
  const { notesGroup, setNotesGroup } = useContext(AppContext);
  const [noteContent, setNoteContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      note: noteContent,
    };

    const updatedNotesGroup = notesGroup.map((group) => {
      if (group.id === noteGroup.id) {
        return {
          ...group,
          notes: [...(group.notes || []), newNote],
        };
      }
      return group;
    });

    setNotesGroup(updatedNotesGroup);
    setNoteContent("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-blue-900 p-4 flex items-end relative">
        <textarea
          placeholder="Enter your text here..."
          className="flex-1 p-2 md:p-4 border border-blue-700 rounded-lg focus:outline-none bg-white text-gray-900 placeholder-gray-500 resize-none"
          rows={3}
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
        <button type="submit">
          <IoMdSend className="absolute bottom-4 right-4 text-neutral-400 w-8 h-8" />
        </button>
      </div>
    </form>
  );
}
