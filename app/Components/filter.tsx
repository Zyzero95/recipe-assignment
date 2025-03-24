'use client'
import { useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

// Search and Filter components works the same way, they only return different DOM elements.

function Filter() {
    const [selectedOption, setSelectedOption] = useState("DEFAULT")

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        setSelectedOption(value);
        if(value !== "default"){
            params.set("filter", value.toLowerCase());
        }
        else {
            params.delete("filter");
        }
        replace(`${pathName}?${params.toString()}`, {scroll: false});
    }

  return (
    <div>
        <select onChange={(e) => {handleChange(e.target.value)}} defaultValue={selectedOption}>
            <option value="default">filter by...</option>
            <option value="name">filter by name</option>
            <option value="difficulty">filter by difficulty</option>
            <option value="cuisine">filter by cuisine</option>
        </select>
    </div>
  )
}

export default Filter
