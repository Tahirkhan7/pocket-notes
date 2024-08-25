import { useState } from "react";
import NotesGroup from "./NotesGroup";
import Modal from "./Modal";

export default function Sidebar({ setSelectedNoteGroup }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 relative flex flex-col h-screen">
      <h1 className="text-4xl text-center font-bold mb-4 sticky top-0 bg-gray-100 p-4 z-10">
        Pocket Notes
      </h1>
      <NotesGroup setSelectedNoteGroup={setSelectedNoteGroup} />
      <button
        onClick={toggleModal}
        className="bg-blue-900 text-white p-4 rounded-full sticky bottom-4 right-4 self-end z-10"
      >
        +
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
