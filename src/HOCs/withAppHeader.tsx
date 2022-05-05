import { IAppHeaderProps } from '@/interfaces'
import AppHeader from '@/components/AppHeader/AppHeader'
import { NextPage } from 'next'

export const withAppHeader = <T extends IAppHeaderProps>(
    Page: NextPage<T>
): NextPage<T> => {
    const withAppHeaderWrapper: NextPage<T> = ({
        title,
        description,
        url,
        ...props
    }) => {
        return (
            <>
                <AppHeader title={title} description={description} url={url} />
                <Page {...(props as any)} />
            </>
        )
    }

    return withAppHeaderWrapper
}

export default withAppHeader
