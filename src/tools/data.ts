const mockUsersURL = "https://654cd2be77200d6ba8597e5d.mockapi.io/users"
const mockAdminsUTL = "https://654cd2be77200d6ba8597e5d.mockapi.io/admins"

export const getData = async (variable: string) => {
    let correctURL = ""
    switch (variable) {
        case "users":
            correctURL = mockUsersURL
            break
        case "admins":
            correctURL = mockAdminsUTL
            break
        default: return
    }

    const response = await fetch(correctURL)
    return response.json()
}
