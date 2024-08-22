import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen">
      
        <div className="flex h-full">
          <Sidebar />
          <MainContent />
        </div>
    </div>
    </>
  );
}

export default App;
