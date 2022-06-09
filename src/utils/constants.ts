import { createContext } from 'react'
import { IUserProviderContext } from '@/interfaces'

/**
 * head default values
 */
export const DEFAULT_HEAD_URL = ''
export const DEFAULT_HEAD_DESCRIPTION = 'One of the pages'
export const DEFAULT_HEAD_TITLE = 'Some page'

/**
 * default user values
 */
export const DEFAULT_USERNAME = '#username'
export const DEFAULT_USER = {
    name: DEFAULT_USERNAME,
}

export const UserContext = createContext<IUserProviderContext>({
    userData: DEFAULT_USER,
    isLoading: false,
})
