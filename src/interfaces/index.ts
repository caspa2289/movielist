export interface INextHeadProps {
    title?: string
    description?: string
    url?: string
}

export interface IAppHeaderProps extends INextHeadProps {}

export interface IUserData {
    name: string
}

export interface IUserProviderContext {
    userData: IUserData
    isLoading: boolean
}
