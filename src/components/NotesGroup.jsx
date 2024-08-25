import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function NotesGroup({ setSelectedNoteGroup }) {
  const [noteGroupId, setNoteGroupId] = useState();
  const { notesGroup } = useContext(AppContext);
  function handleSelectedNoteGroup(noteGroup){
    setSelectedNoteGroup(noteGroup);
    setNoteGroupId(noteGroup.id);
  }

  return (
    <div className="space-y-4 overflow-y-auto flex-grow">
      {notesGroup.map((noteGroup, index) => (
        <div
          key={index}
          onClick={() => handleSelectedNoteGroup(noteGroup)}
          className={`flex items-center p-2 rounded-lg cursor-pointer ${
            noteGroupId === noteGroup.id
              ? "bg-gray-300 "
              : ""
          } hover:bg-gray-300`}
        >
          <div
            className={`${noteGroup.noteGroupColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-roboto`}
          >
            {noteGroup.noteGroupName
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </div>
          <span className="ml-4 text-black font-bold font-roboto">
            {noteGroup.noteGroupName}
          </span>
        </div>
      ))}
    </div>
  );
}
