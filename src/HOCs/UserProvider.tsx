import { IUserData } from '@/interfaces'
import { FC, ReactNode, useEffect, useState } from 'react'
import { DEFAULT_USER, UserContext } from '@/utils/constants'
import { getUserData } from '@/api'

interface IUserProviderProps {
    children: ReactNode
}

const UserProvider: FC<IUserProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserData>(DEFAULT_USER)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        getUserData()
            .then(({ data }) => setUserData(data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <UserContext.Provider value={{ userData, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
