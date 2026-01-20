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

export default async function Explore({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
    const q = await searchParams
    const { country = "", category = "", language = "" } = q
    const result = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=${country}&category=${category}&language=${language}&apiKey=f41062826dd84627be60d24ba70174e0`)
    const data = await result.json()
    const sources: dataType[] = data?.sources
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