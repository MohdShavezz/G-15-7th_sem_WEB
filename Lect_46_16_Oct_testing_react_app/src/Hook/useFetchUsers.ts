import { useEffect, useState } from "react"


type UserType = {
    id: number, firstName: string, email: string
}
const useFetchUser = (url: string) => {
    const [data, setData] = useState<UserType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        async function getData() {
            try {
                setLoading(true)
                let res = await fetch(url)
                let users = await res.json()
                let data:UserType[]=users.users
                setData(data)
                setLoading(false)
            } catch (error: any) {
                console.log(error.message)
                setError(error.message)
                setLoading(false)
            }
        }
        getData()
    }, [])


    return {data, loading, error}
}

export default useFetchUser