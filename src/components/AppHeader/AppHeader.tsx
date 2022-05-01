import { FC } from 'react'
import { IAppHeaderProps } from '@/interfaces'
import { Header } from 'rsuite'
import CustomNextHead from '@/components/CustomNextHead/CustomNextHead'

//TODO: think of a better way to implement dynamic page naming

const AppHeader: FC<IAppHeaderProps> = ({ title, description, url }) => {
    return (
        <>
            <CustomNextHead title={title} description={description} url={url} />
            <Header>
                <div>Header</div>
            </Header>
        </>
    )
}

export default AppHeader
