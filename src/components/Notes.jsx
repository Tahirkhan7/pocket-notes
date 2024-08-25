import { useContext } from "react";

import { AppContext } from "../context/AppContext";
import AddNote from "./AddNote";

export default function Notes({ noteGroup }) {
  const { notesGroup } = useContext(AppContext);
  const selectedGroupName = "My Notes";

  return (
    <div className="flex flex-col flex-1 bg-slate-200 h-full">
      <div className="bg-blue-900 text-white p-4 md:p-6 flex items-center">
        <div
          className={`flex items-center justify-center ${noteGroup.noteGroupColor} w-10 h-10 rounded-full mr-4`}
        >
          <span className="text-xl font-bold">
            {selectedGroupName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </span>
        </div>
        <h1 className="text-xl font-bold">{noteGroup.noteGroupName}</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {noteGroup.notes && noteGroup.notes.length > 0 ? (
          noteGroup.notes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4"
            >
              <p className="text-gray-800 mb-4">{note.note}</p>
              <div className="text-right text-sm text-gray-500">
                <span>asd</span> • <span>10:10 AM</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notes available.</p>
        )}
      </div>

      <div className="p-4 md:p-6">
        <AddNote noteGroup={noteGroup} />
      </div>
    </div>
  );
}
