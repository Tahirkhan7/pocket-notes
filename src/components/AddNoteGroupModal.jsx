import { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./AddNoteGroupModal.module.css";

export default function AddNoteGroupModal({ isOpen, onClose }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [noteGroupName, setNoteGroupName] = useState("");
  const { notesGroup, setNotesGroup } = useContext(AppContext);
  const [error, setError] = useState({ groupName: "", color: "" });

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  function handleColorSelect(color) {
    return () => setSelectedColor(color);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let errors = { groupName: "", color: "" };

    if (!noteGroupName.trim()) {
      errors.groupName = "Group name is required!";
    }

    if (!selectedColor) {
      errors.color = "Color must be selected!";
    }

    if (errors.groupName || errors.color) {
      setError(errors);
      return;
    }

    setError({ groupName: "", color: "" });

    const newNoteGroup = {
      id: Date.now(),
      noteGroupName,
      noteGroupColor: selectedColor,
    };
    setNotesGroup([...notesGroup, newNoteGroup]);
    setSelectedColor("");
    setNoteGroupName("");
    onClose();
  }

  return (
    <div className={styles.modalOverlay}>
      <div ref={modalRef} className={styles.modalContainer}>
        <h2 className={styles.modalTitle}>Create New Group</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Group Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter group name"
              name="noteGroupName"
              value={noteGroupName}
              onChange={(e) => setNoteGroupName(e.target.value)}
            />
          </div>
          {error.groupName && (
            <div className={styles.errorMessage}>{error.groupName}</div>
          )}
          <div className={styles.colorOptions}>
            <label className={styles.label}>Choose colour</label>
            <div
              className={`${styles.colorOption} ${selectedColor === '#7c3aed' ? styles.colorOptionSelected : ''}`}
              style={{ backgroundColor: '#7c3aed' }}
              onClick={handleColorSelect("#7c3aed")}
            ></div>
            <div
              className={`${styles.colorOption} ${selectedColor === '#d946ef' ? styles.colorOptionSelected : ''}`}
              style={{ backgroundColor: '#d946ef' }}
              onClick={handleColorSelect("#d946ef")}
            ></div>
            <div
              className={`${styles.colorOption} ${selectedColor === '#22d3ee' ? styles.colorOptionSelected : ''}`}
              style={{ backgroundColor: '#22d3ee' }}
              onClick={handleColorSelect("#22d3ee")}
            ></div>
            <div
              className={`${styles.colorOption} ${selectedColor === '#f87171' ? styles.colorOptionSelected : ''}`}
              style={{ backgroundColor: '#f87171' }}
              onClick={handleColorSelect("#f87171")}
            ></div>
            <div
              className={`${styles.colorOption} ${selectedColor === '#1d4ed8' ? styles.colorOptionSelected : ''}`}
              style={{ backgroundColor: '#1d4ed8' }}
              onClick={handleColorSelect("#1d4ed8")}
            ></div>
            <div
              className={`${styles.colorOption} ${selectedColor === '#60a5fa' ? styles.colorOptionSelected : ''}`}
              style={{ backgroundColor: '#60a5fa' }}
              onClick={handleColorSelect("#60a5fa")}
            ></div>
          </div>

          {error.color && (
            <div className={styles.errorMessage}>{error.color}</div>
          )}
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
