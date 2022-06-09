import { useContext } from 'react'
import { UserContext } from '@/utils/constants'
import { IUserProviderContext } from '@/interfaces'

export const useUser = (): IUserProviderContext => {
    return useContext(UserContext)
}

export default useUser
