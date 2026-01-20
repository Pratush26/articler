
interface dataType {
    name: string;
    category: string;
    id: string;
    language: string;
    country: string;
    description: string;
    url: string;
}
export default function Card({ source }: { source: dataType }) {
    return (
        <div className="w-full flex flex-col justify-between rounded-2xl shadow-md/70 p-4 bg-zinc-900 shadow-zinc-700">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{source.name}</h2>
                <span className="text-xs font-semibold bg-amber-50 text-black px-2 py-1 rounded">
                    {source.category}
                </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">{source.description}</p>

            <div className="mt-3 text-sm">
                <p><strong>ID:</strong> {source.id}</p>
                <p><strong>Country:</strong> {source.country.toUpperCase()}</p>
                <p><strong>Language:</strong> {source.language.toUpperCase()}</p>
            </div>

            <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
                Visit Website →
            </a>
        </div>
    );
}