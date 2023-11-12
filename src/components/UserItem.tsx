import { User } from "../tools/types"

export const UserItem = (userProps: { user: User }) => {

    return (
        <div className="user-item">
            <div className="user-item-data data-lastName">
                <span>{userProps.user.lastName}</span>
            </div>
            <div className="user-item-data data-firstName">
                <span>{userProps.user.firstName}</span>
            </div>
            <div className="user-item-data data-email">
                <span>{userProps.user.email}</span>
            </div>
            <div className="user-item-data data-mac">
                <span>{userProps.user.macAddress}</span>
            </div>
            <div className="user-item-data data-firstIp">
                <span>{userProps.user.firstIp}</span>
            </div>
            <div className="user-item-data data-ipValue">
                <span>{userProps.user.ipValue}</span>
            </div>
            <div className="user-item-data data-gitea">
                <span>{userProps.user.gitea === true ? "true" : "false"}</span>
            </div>
            <div className="user-item-data data-vSphere">
                <span>{userProps.user.vSphere === true ? "true" : "false"}</span>
            </div>
            <div className="user-item-data data-jira">
                <span>{userProps.user.jira === true ? "true" : "false"}</span>
            </div>
            <div className="user-item-data data-wireGuard">
                <span>{userProps.user.wireGuardCfg}</span>
            </div>
        </div>
    )
}
