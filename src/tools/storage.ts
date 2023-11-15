import React from "react";
import { ContextSearch, ContextType } from "./types";

export const DataContext = React.createContext<ContextType>({
    tab: "",
    setTab: () => { }
})

export const SearchContext = React.createContext<ContextSearch>({
    searchValue: "",
    setSearchValue: () => { }
})
