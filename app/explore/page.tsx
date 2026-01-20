import Card from "@/Components/Sections/Card"
import Filter from "@/Components/Sections/Filter";

type SearchParams = {
    query?: string;
    country?: string;
    category?: string;
    language?: string;
}

interface dataType {
    name: string;
    category: string;
    id: string;
    language: string;
    country: string;
    description: string;
    url: string;
}
type ApiResponse = {
    success: boolean;
    data: {
        status?: string;
        sources?: dataType[];
    };
};

export default async function Explore({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const q = await searchParams
    const { country = "", category = "", language = "" } = q
    const res = await fetch(`/api/news`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country, category, language }),
        cache: "no-store",
    });

    const json: ApiResponse = await res.json();

    const sources: dataType[] = json?.success ? json.data?.sources ?? [] : [];
    return (
        <main>
            <h1 className="text-2xl font-semibold text-center m-6">Explore</h1>
            <Filter />
            {
                sources?.length > 0 ?
                    <section className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                        {
                            sources.map((e, i) => <Card source={e} key={i} />)
                        }
                    </section>
                    :
                    <div className="flex items-center justify-center text-center min-h-[50vh]">
                        <p className="text-xl font-medium">No Data Found!</p>
                    </div>
            }
        </main>
    )
}