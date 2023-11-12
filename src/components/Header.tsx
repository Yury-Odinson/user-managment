import { Tab, Tabs } from "@mui/material"
import { useState } from "react"

export const Header = () => {

    const [tab, setTab] = useState("users")
    console.log(tab)
    return (
        <div className="header-wrapper">
            <div className="header__logo" />
            <nav className="nav">
                <Tabs value={tab} >
                    <Tab label="Users" value={"users"} onClick={() => setTab("users")} />
                    <Tab label="Admins" value={"admins"} onClick={() => setTab("admins")} />
                </Tabs>
            </nav>
        </div>
    )
}
