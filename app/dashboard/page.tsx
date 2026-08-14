import Card from "@/components/ui/Card";
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Tasks" value={12}/>
        <Card title="Done" value={5} />
        <Card title="Pending" value={7} />
      </div>
    </div>
  );
}