import { useState } from "react";
import NotesGroup from "./NotesGroup";
import Modal from "./Modal";

export default function Sidebar({ setSelectedNoteGroup }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 relative">
      <h1 className="text-lg text-center font-bold mb-4">Pocket Notes</h1>
      <NotesGroup setSelectedNoteGroup={setSelectedNoteGroup} />
      <button
        onClick={toggleModal}
        className="bg-blue-900 text-white p-4 rounded-full absolute bottom-4 right-4"
      >
        +
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
