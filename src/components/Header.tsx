import { Tab, Tabs } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../tools/storage"

export const Header = () => {


    const tab = useContext(DataContext)

    return (
        <div className="header-wrapper">
            <div className="header__logo" />
            <nav className="nav">
                <Tabs value={tab.tab} >
                    <Tab label="Users" value={"users"} onClick={() => tab.setTab("users")} />
                    <Tab label="Admins" value={"admins"} onClick={() => tab.setTab("admins")} />
                </Tabs>
            </nav>
        </div>
    )
}
