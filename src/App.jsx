import MainContent from "./components/MainContent";
import Notes from "./components/Notes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen flex">
        <Sidebar />
        <MainContent />
        {/* <Notes /> */}
      </div>
    </>
  );
}

export default App;
