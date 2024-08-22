export default function Sidebar() {
  return (
    <div className="w-full md:w-1/4 bg-white p-4 relative">
      <h1 className="text-xl text-center font-bold mb-4">Pocket Notes</h1>
      {/* <div className="flex flex-col space-y-4"> */}
        {/* Sample Navigation Items */}
        {/* <div className="flex items-center space-x-3">
          <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
            MN
          </div>
          <span>My Notes</span>
        </div> */}
        {/* Add other navigation items here */}
      {/* </div> */}
      <button className="bg-blue-900 text-white p-4 rounded-full absolute bottom-4 right-4">
        +
      </button>
    </div>
  );
}
