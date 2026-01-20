"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const countryCodes = [
    "ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn",
    "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu",
    "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma",
    "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro",
    "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw",
    "ua", "us", "ve", "za"
]

const languages = [
  "ar","de","en","es","fr","he","it","nl","no","pt",
  "ru","sv","ud","zh"
]

const categories = [
    "business", "entertainment", "general", "health", "science", "sports", "technology"
]

export default function Filter() {
    const r = useRouter()
    const [country, setCountry] = useState("us")
    const [language, setLanguage] = useState("en")
    const [category, setCategory] = useState("")
    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLFormElement;
        r.push(`/explore?country=${target.country.value}&language=${target.language.value}&category=${target.category.value}`)
        setCountry(target.country.value)
        setLanguage(target.language.value)
        setCategory(target.category.value)
    }
    console.log(country)
    return (
        <form onSubmit={FormSubmit} className="w-11/12 mx-auto flex items-center justify-center gap-4">
            <select defaultValue={country} name="country" id="country" className="px-4 py-2 bg-slate-800 rounded-lg">
                {
                    countryCodes?.map((e, i) => <option value={e} key={i} className="uppercase">{e}</option>)
                }
            </select>
            <select defaultValue={language} name="language" id="language" className="px-4 py-2 bg-slate-800 rounded-lg">
                <option value="">ALL</option>
                {
                    languages?.map((e, i) => <option value={e} key={i} className="uppercase">{e}</option>)
                }
            </select>
            <select defaultValue={category} name="category" id="category" className="px-4 py-2 bg-slate-800 rounded-lg">
                <option value="">ALL</option>
                {
                    categories?.map((e, i) => <option value={e} key={i} className="capitalize">{e}</option>)
                }
            </select>
            <button type="submit" className="text-sm font-semibold bg-zinc-900 rounded-lg px-4 py-2">Check</button>
        </form>
    )
}