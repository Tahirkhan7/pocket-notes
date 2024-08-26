import { GrLinkPrevious } from "react-icons/gr";
import AddNote from "./AddNote";
import formatDateAndTime from "../utils/formatDateAndTime";
import styles from "./Notes.module.css";

export default function Notes({ noteGroup, setSelectedNoteGroup }) {
  const handleBackClick = () => {
    setSelectedNoteGroup(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div
          className={styles.backButton}
          onClick={handleBackClick}
        >
          <GrLinkPrevious size={24} />
        </div>
        <div
          style={{
            backgroundColor: noteGroup.noteGroupColor,
            width: "2.5rem" ,
            height: "2.5rem", 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            textAlign: "center", 
            lineHeight: "100px", 
          }}
        >
          <span className={styles.iconText}>
            {noteGroup.noteGroupName
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </span>
        </div>
        <h1 className={styles.groupName}>{noteGroup.noteGroupName}</h1>
      </div>

      <div className={styles.notesContainer}>
        {noteGroup.notes &&
          noteGroup.notes.length > 0 &&
          noteGroup.notes.map((note, index) => (
            <div key={index} className={styles.noteCard}>
              <p className={styles.noteText}>{note.note}</p>
              <div className={styles.noteTimestamp}>
                <span>{formatDateAndTime(note.id).date}</span> •{" "}
                <span>{formatDateAndTime(note.id).time}</span>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.footer}>
        <AddNote
          noteGroup={noteGroup}
          setSelectedNoteGroup={setSelectedNoteGroup}
        />
      </div>
    </div>
  );
}
