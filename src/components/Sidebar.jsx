import { useState } from "react";
import NotesGroup from "./NotesGroup";
import AddNoteGroupModal from "./AddNoteGroupModal";
import styles from "./Sidebar.module.css";

export default function Sidebar({ setSelectedNoteGroup }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.sidebarContainer}>
      <h1 className={styles.header}>Pocket Notes</h1>
      <div className={styles.notesContainer}>
        <NotesGroup setSelectedNoteGroup={setSelectedNoteGroup} />
      </div>
      <button onClick={toggleModal} className={styles.addButton}>
        +
      </button>
      <AddNoteGroupModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
