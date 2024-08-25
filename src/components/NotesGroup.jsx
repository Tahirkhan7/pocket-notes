import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function NotesGroup() {
  const { notesGroup } = useContext(AppContext);

  return (
    <div className="space-y-4">
      {notesGroup.map((noteGroup, index) => (
        <div
          key={index}
          className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-200`}
        >
          <div
            className={`${noteGroup.noteGroupColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold`}
          >
            {noteGroup.noteGroupName.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase()}
          </div>
          <span className="ml-4 text-gray-700 font-medium">{noteGroup.noteGroupName}</span>
        </div>
      ))}
    </div>
  );
}
