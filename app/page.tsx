import Navbar from '@/components/ui/Navbar';
export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* Add task lists button here */}
      <p className="text-center text-lg text-gray-500 mt-10">Welcome to your Task Manager</p>
    </div>
    
  );
}