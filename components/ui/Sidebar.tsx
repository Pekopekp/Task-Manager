import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="bg-white shadow-md w-64 h-screen fixed left-0 top-0 border-r border-gray-300">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <span className="text-xl font-bold">Task Manager</span>
        </div>
        <div className="flex flex-col space-y-4">
          {/* {nav links} */}
          <Link href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded text-left">Dashboard</Link>
          <Link href="/task" className="px-4 py-2 bg-blue-500 text-white rounded text-left">Tasks</Link>
        </div>
      </div>
    </nav>
  );
}