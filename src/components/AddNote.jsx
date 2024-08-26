import { useContext, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { AppContext } from "../context/AppContext";
import styles from "./AddNote.module.css";

export default function AddNote({ noteGroup, setSelectedNoteGroup }) {
  const { notesGroup, setNotesGroup } = useContext(AppContext);
  const [noteContent, setNoteContent] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!noteContent.trim()) {
      setError("Note is required!");
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        placeholder="Enter your text here..........."
        className={`${styles.textarea} ${styles.textareaPlaceholder} ${
          error ? styles.textareaError : styles.textareaNormal
        }`}
        rows={4}
        value={noteContent}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></textarea>
      <button
        type="submit"
        disabled={!noteContent.trim()}
        className={styles.submitButton}
      >
        <IoMdSend
          className={`${styles.icon} ${
            !noteContent.trim() ? styles.iconDisabled : ""
          }`}
        />
      </button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </form>
  );
}
