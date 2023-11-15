import { useContext, useEffect, useState } from "react"
import { SearchContext } from "./storage"

export const useDebounce = (value: string, delay: number) => {

    const [debounceValue, setDebounceValue] = useState<string>("")

    const search = useContext(SearchContext)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
            search.setSearchValue(debounceValue)
        }, delay)

        return () => clearTimeout(handler)

    }, [value])

    return debounceValue
}
