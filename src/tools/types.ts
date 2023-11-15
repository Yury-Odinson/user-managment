import { Dispatch, SetStateAction } from "react"

export type Admin = {
    lastName: string,
    firstName: string,
    login: string, 
    id: string
}

export type User = {
    lastName: string,
    firstName: string,
    email: string,
    macAddress: string,
    firstIp: string,
    ipValue: number,
    gitea: boolean,
    vSphere: boolean,
    jira: boolean,
    wireGuardCfg: string,
    id: string
}

export type ContextType = {
    tab: string,
    setTab: Dispatch<SetStateAction<string>>
}

export type ContextSearch = {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>
}
