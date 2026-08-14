type CardProps = {
    title: string;
    value: string | number;
};

export default function Card({title, value}: CardProps) {
    return (
        <div className="bg-blue-400 rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-black-200 text-xl mb-2 font-bold">{title}</h2>
            <p className="text-m font-medium text-gray-900">{value}</p>
        </div>
    );
}