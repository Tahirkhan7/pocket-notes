import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./NotesGroup.module.css";

export default function NotesGroup({ setSelectedNoteGroup }) {
  const [noteGroupId, setNoteGroupId] = useState();
  const { notesGroup } = useContext(AppContext);

  function handleSelectedNoteGroup(noteGroup) {
    setSelectedNoteGroup(noteGroup);
    setNoteGroupId(noteGroup.id);
  }

  return (
    <div className={styles.notesGroupContainer}>
      {notesGroup.map((noteGroup, index) => (
        <div
          key={index}
          onClick={() => handleSelectedNoteGroup(noteGroup)}
          className={`${styles.noteGroupItem} ${
            noteGroupId === noteGroup.id ? styles.noteGroupItemSelected : ""
          }`}
        >
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
              color: 'white'
            }}
          >
            {noteGroup.noteGroupName
              .split(" ")
              .slice(0, 2)
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </div>
          <span className={styles.noteGroupName}>
            {noteGroup.noteGroupName}
          </span>
        </div>
      ))}
    </div>
  );
}
