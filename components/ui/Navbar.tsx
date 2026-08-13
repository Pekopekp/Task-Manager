export default function Navbar() {
  return (
    <nav className="bg-white shadow-md w-64 h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <span className="text-xl font-bold">Task Manager</span>
        </div>
        <div className="flex flex-col space-y-4">
          {/* {nav links} */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded text-left">Dashboard</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded text-left">Tasks</button>
        </div>
      </div>
    </nav>
  );
}