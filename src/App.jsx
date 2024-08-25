import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedNoteGroup, setSelectedNoteGroup] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen flex">
      {!isMobileView || !selectedNoteGroup ? (
        <Sidebar setSelectedNoteGroup={setSelectedNoteGroup} />
      ) : null}
      {selectedNoteGroup ? (
        <Notes noteGroup={selectedNoteGroup} setSelectedNoteGroup={setSelectedNoteGroup} />
      ) : (
        <MainContent />
      )}
    </div>
  );
}

export default App;
