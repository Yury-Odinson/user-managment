import { useContext, useEffect, useState } from "react"
import { getData } from "../tools/data"
import { UserItem } from "./UserItem"
import { User } from "../tools/types"
import { DataContext } from "../tools/storage"

export const Body = () => {

    const [list, setList] = useState<any>([])

    const tab = useContext(DataContext)

    useEffect(() => {
        getData(tab.tab).then((users) => setList(users))
    }, [tab.tab])

    return (
        <div className="body-wrapper">
            <div className="body-description">
                <span className="user-item-data data-lastName">Фамилия</span>
                <span className="user-item-data data-firstName">Имя</span>
                <span className="user-item-data data-email">email</span>
                <span className="user-item-data data-mac">mac</span>
                <span className="user-item-data data-firstIp">первоначальный IP</span>
                <span className="user-item-data data-ipValue">количество IP</span>
                <span className="user-item-data data-gitea">gitea</span>
                <span className="user-item-data data-vSphere">vSphere</span>
                <span className="user-item-data data-jira">jira</span>
                <span className="user-item-data data-wireGuard">наличие wireGuard</span>
            </div>

            {list.map((item: User) => (
                <li key={item.id}>
                    <UserItem user={item} />
                </li>
            ))}

        </div>
    )
}
