import { UserItem } from "./UserItem"

export const Body = () => {
    return (
        <div className="body-wrapper">
            <div className="body-description">
                <span className="user-item-data">Фамилия</span>
                <span className="user-item-data">Имя</span>
                <span className="user-item-data">email</span>
                <span className="user-item-data">mack</span>
                <span className="user-item-data">первоначальный IP</span>
                <span className="user-item-data">количество IP</span>
                <span className="user-item-data">наличие gitea</span>
                <span className="user-item-data">наличие vSphere</span>
                <span className="user-item-data">наличие jira</span>
                <span className="user-item-data">наличие wireGuard</span>
            </div>
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
            <UserItem />
        </div>
    )
}