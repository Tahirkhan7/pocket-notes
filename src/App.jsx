import { useState } from "react";
import MainContent from "./components/MainContent";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedNoteGroup, setSelectedNoteGroup] = useState(null);
  return (
    <>
      <div className="h-screen flex">
      <Sidebar setSelectedNoteGroup={setSelectedNoteGroup} />
      {selectedNoteGroup ? <Notes noteGroup={selectedNoteGroup} /> : <MainContent />}
    </div>
    </>
  );
}

export default App;
