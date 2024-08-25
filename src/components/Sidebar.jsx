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
      <h1 className="text-4xl text-center font-bold font-roboto mb-4 sticky top-0  p-4 z-10">
        Pocket Notes
      </h1>
      <div className="flex-grow overflow-y-auto">
        <NotesGroup setSelectedNoteGroup={setSelectedNoteGroup} />
      </div>
      <button
        onClick={toggleModal}
        className="bg-blue-900 text-white p-3 rounded-full absolute bottom-4 right-12 z-10 text-4xl font-bold"
      >
        +
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
