import { useContext } from "react";
import { IoMdSend } from "react-icons/io";
import { AppContext } from "../context/AppContext";

export default function Notes() {
  const { notesGroup } = useContext(AppContext);
  console.log(notesGroup);
  const selectedGroupName = "My Notes";

  return (
    <div className="flex flex-col flex-1 bg-slate-200 h-full">
      {/* Header */}
      <div className="bg-blue-900 text-white p-4 md:p-6 flex items-center">
        <div className="flex items-center justify-center bg-blue-700 w-10 h-10 rounded-full mr-4">
          <span className="text-xl font-bold">
            {selectedGroupName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </span>
        </div>
        <h1 className="text-xl font-bold">{selectedGroupName}</h1>
      </div>

      {/* Note Display Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        {/* Example of multiple notes */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 mb-4">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day writing projects, words are
            already flowing from their fingers.
          </p>
          <div className="text-right text-sm text-gray-500">
            <span>9 Mar 2023</span> • <span>10:10 AM</span>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 mb-4">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day writing projects, words are
            already flowing from their fingers.
          </p>
          <div className="text-right text-sm text-gray-500">
            <span>9 Mar 2023</span> • <span>10:10 AM</span>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 mb-4">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day writing projects, words are
            already flowing from their fingers.
          </p>
          <div className="text-right text-sm text-gray-500">
            <span>9 Mar 2023</span> • <span>10:10 AM</span>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 mb-4">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day writing projects, words are
            already flowing from their fingers.
          </p>
          <div className="text-right text-sm text-gray-500">
            <span>9 Mar 2023</span> • <span>10:10 AM</span>
          </div>
        </div>
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 mb-4">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day writing projects, words are
            already flowing from their fingers.
          </p>
          <div className="text-right text-sm text-gray-500">
            <span>9 Mar 2023</span> • <span>10:10 AM</span>
          </div>
        </div>
        {/* Add more notes here */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-4">
          <p className="text-gray-800 mb-4">
            This is another example note. It could be a bit longer or shorter,
            and the content will determine the scroll behavior.
          </p>
          <div className="text-right text-sm text-gray-500">
            <span>10 Mar 2023</span> • <span>12:45 PM</span>
          </div>
        </div>
        {/* Additional notes would go here */}
      </div>

      {/* Input Field */}
      <div className="bg-blue-900 p-4 flex items-end relative">
        <textarea
          placeholder="Enter your text here..."
          className="flex-1 p-2 md:p-4 border border-blue-700 rounded-lg focus:outline-none bg-white text-gray-900 placeholder-gray-500 resize-none"
          rows={3}
        ></textarea>
        <IoMdSend className="absolute bottom-4 right-4 text-neutral-400 w-8 h-8" />
      </div>
    </div>
  );
}
