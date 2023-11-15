import { Tab, Tabs, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useDebounce } from "../tools/debouncer"
import { DataContext, SearchContext } from "../tools/storage"

export const Header = () => {

    const [debounceValue, setDebounceValue] = useState<string>("")

    const tab = useContext(DataContext)
    const search = useContext(SearchContext)

    // const debounce = useDebounce(debounceValue, 1500)

    console.log(search.searchValue)

    return (
        <div className="header-wrapper">
            <div className="header__logo" />
            <TextField id="standard-basic" label="Search" variant="standard"
                onChange={(e) => search.setSearchValue(e.target.value)} />
            <nav className="nav">
                <Tabs value={tab.tab} >
                    <Tab label="Users" value={"users"} onClick={() => tab.setTab("users")} />
                    <Tab label="Admins" value={"admins"} onClick={() => tab.setTab("admins")} />
                </Tabs>
            </nav>
        </div>
    )
}
