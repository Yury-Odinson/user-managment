const mockURL = "https://654cd2be77200d6ba8597e5d.mockapi.io/users"

export const getUsers = async () => {
    const response = await fetch(mockURL)
    // return console.log(await response.json())
    return await response.json()
}
