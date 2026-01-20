"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

type Item = { name: string };

export default function Filter() {
    const r = useRouter()
    const [categories, setCategories] = useState<Item[]>([]);
    const [languages, setLanguages] = useState<Item[]>([]);
    const [countryCodes, setCountryCodes] = useState<Item[]>([]);
    const [country, setCountry] = useState("")
    const [language, setLanguage] = useState("")
    const [category, setCategory] = useState("")
    useEffect(() => {
        const dataFetching = async () => {
            try {
                const [countryRes, languageRes, categoryRes] = await Promise.all([
                    fetch("/api/country"),
                    fetch("/api/language"),
                    fetch("/api/category"),
                ]);

                if (!countryRes.ok || !languageRes.ok || !categoryRes.ok) throw new Error("One of the API requests failed");

                const countryJson = await countryRes.json();
                const languageJson = await languageRes.json();
                const categoryJson = await categoryRes.json();

                setCountryCodes(countryJson.data);
                setLanguages(languageJson.data);
                setCategories(categoryJson.data);
            } catch (err) {
                console.error(err)
            }
        }
        dataFetching()
    }, [])

    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLFormElement;
        r.push(`/explore?country=${target.country.value}&language=${target.language.value}&category=${target.category.value}`)
        setCountry(target.country.value)
        setLanguage(target.language.value)
        setCategory(target.category.value)
    }
    return (
        <form onSubmit={FormSubmit} className="w-11/12 mx-auto flex items-center justify-center gap-4">
            <select defaultValue={country} name="country" id="country" className="px-4 py-2 bg-slate-800 rounded-lg">
                <option value="">ALL</option>
                {
                    countryCodes?.map((e, i) => <option value={e.name} key={i} className="uppercase">{e.name}</option>)
                }
            </select>
            <select defaultValue={language} name="language" id="language" className="px-4 py-2 bg-slate-800 rounded-lg">
                <option value="">ALL</option>
                {
                    languages?.map((e, i) => <option value={e.name} key={i} className="uppercase">{e.name}</option>)
                }
            </select>
            <select defaultValue={category} name="category" id="category" className="px-4 py-2 bg-slate-800 rounded-lg">
                <option value="">ALL</option>
                {
                    categories?.map((e, i) => <option value={e.name} key={i} className="capitalize">{e.name}</option>)
                }
            </select>
            <button type="submit" className="text-sm font-semibold bg-zinc-900 rounded-lg px-4 py-2">Check</button>
        </form>
    )
}