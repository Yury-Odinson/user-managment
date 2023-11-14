import { useContext, useEffect, useState } from "react"
import { getData } from "../tools/data"
import { UserItem } from "./UserItem"
import { User } from "../tools/types"
import { DataContext } from "../tools/storage"
import { Pagination } from "@mui/material"

export const Body = () => {

    const [list, setList] = useState<User[]>([])

    const tab = useContext(DataContext)

    useEffect(() => {
        getData(tab.tab).then((users) => setList(users))
    }, [tab.tab])

    const splitData = (arr: User[]) => {

        const sizeArr = 25
        const result: User[][] = []

        for (let i = 0; i < arr.length; i += sizeArr) {
            let separator = i + sizeArr
            const childArr: User[] = []
            for (let j = i; j < separator; j++) {
                if (!arr[j]) break
                childArr.push(arr[j])
            }
            result.push(childArr)
        }

        return console.log(result)
    }

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

            <Pagination count={10} color="primary" />

            <button onClick={() => splitData(list)}>test</button>

            {list.map((item: User) => (
                <li key={item.id}>
                    <UserItem user={item} />
                </li>
            ))}

        </div>
    )
}
