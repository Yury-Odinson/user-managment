import { useEffect, useState } from "react"
import { getUsers } from "../tools/data"
import { UserItem } from "./UserItem"
import { User } from "../tools/types"

export const Body = () => {

    const [users, setUsers] = useState<any>([])

    useEffect(() => {
        getUsers().then((users) => setUsers(users))
    }, [])

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

            {users.map((item: User) => (
                <li key={item.id}>
                    <UserItem user={item} />
                </li>
            ))}

        </div>
    )
}
