import { GrLinkPrevious } from "react-icons/gr";
import AddNote from "./AddNote";
import formatDateAndTime from "../utils/formatDateAndTime";

export default function Notes({ noteGroup, setSelectedNoteGroup }) {
  const handleBackClick = () => {
    setSelectedNoteGroup(null);
  };

  return (
    <div className="flex flex-col flex-1 bg-slate-200 h-full">
      <div className="bg-blue-900 text-white p-2 md:p-4 flex items-center">
        <div
          className="md:hidden mr-4 hover: cursor-pointer"
          onClick={handleBackClick}
        >
          <GrLinkPrevious size={24} />
        </div>
        <div
          className={`flex items-center justify-center ${noteGroup.noteGroupColor} w-10 h-10 rounded-full mr-4`}
        >
          <span className="text-lg font-bold font-roboto">
            {noteGroup.noteGroupName
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </span>
        </div>
        <h1 className="text-xl font-bold">{noteGroup.noteGroupName}</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {noteGroup.notes &&
          noteGroup.notes.length > 0 &&
          noteGroup.notes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4"
            >
              <p className="text-black font-medium font-roboto mb-4">
                {note.note}
              </p>
              <div className="text-right font-medium font-roboto text-sm text-black">
                <span>{formatDateAndTime(note.id).date}</span> •{" "}
                <span>{formatDateAndTime(note.id).time}</span>
              </div>
            </div>
          ))}
      </div>

      <div className="bg-blue-900 p-4 md:p-4">
        <AddNote noteGroup={noteGroup} setSelectedNoteGroup={setSelectedNoteGroup} />
      </div>
    </div>
  );
}
