import Card from "@/Components/Sections/Card"

export default async function Explore() {
    const result = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=f41062826dd84627be60d24ba70174e0`)
    const {sources} = await result.json()
    console.log(sources.length)
    return (
        <main>
            <h1 className="text-2xl font-semibold text-center m-6">Explore</h1>
            {
                sources?.length > 0 ?
                    <section className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                        {
                            sources.map((e, i) => <Card source={e} key={i} /> )
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