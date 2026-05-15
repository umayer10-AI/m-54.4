export const getData = async () => {
    const res = await fetch(`http://localhost:5000/destination`)
    return res.json()
}

export const getId = async (id) => {
    const res = await fetch(`http://localhost:5000/destination/${id}`,{
        headers: {
            authorization: "Paisi vai"
        }
    })
    return res.json()
}

export const bookingAllData = async () => {
    const res = await fetch(`http://localhost:5000/booking`)
    return res.json()
}