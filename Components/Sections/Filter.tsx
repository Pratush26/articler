"use client"

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Filter() {
    const r = useRouter()
    const FormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLFormElement;
        r.push(`/explore?country=${target.country.value}`)
    }
    return (
        <form onSubmit={FormSubmit} className="w-11/12 mx-auto flex items-center justify-center gap-4">
            <select name="country" id="country" className="px-4 py-2 bg-slate-800 rounded-lg">
                <option value="us" className="uppercase" >us</option>
                <option value="ru" className="uppercase" >ru</option>
            </select>
            <button type="submit" className="text-sm font-semibold bg-zinc-900 rounded-lg px-4 py-2">Check</button>
        </form>
    )
}