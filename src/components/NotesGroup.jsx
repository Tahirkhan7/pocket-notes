export default function NotesGroup() {
  const groups = [
    { name: "My Notes", color: "bg-blue-600" },
    { name: "My personal grp", color: "bg-purple-400" },
    { name: "Javascript grp", color: "bg-pink-500" },
    { name: "HTML grp", color: "bg-teal-400" },
    { name: "CSS Notes", color: "bg-orange-400" },
    { name: "SQL Notes", color: "bg-blue-500" },
    { name: "Python Notes", color: "bg-pink-400" },
  ];

  return (
    <div className="space-y-4">
      {groups.map((group, index) => (
        <div
          key={index}
          className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-200`}
        >
          <div
            className={`${group.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold`}
          >
            {group.name.split(' ').map(word => word[0]).join('')}
          </div>
          <span className="ml-4 text-gray-700 font-medium">{group.name}</span>
        </div>
      ))}
    </div>
  );
}
