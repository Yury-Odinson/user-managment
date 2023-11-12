import React from "react";
import { ContextType } from "./types";

export const DataContext = React.createContext<ContextType>({
    tab: "",
    setTab: () => { }
})
