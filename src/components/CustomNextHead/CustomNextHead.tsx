import { FC, memo } from 'react'
import Head from 'next/head'
import {
    DEFAULT_HEAD_DESCRIPTION,
    DEFAULT_HEAD_TITLE,
    DEFAULT_HEAD_URL,
} from '@/utils/constants'
import { INextHeadProps } from '@/interfaces'

const CustomNextHead: FC<INextHeadProps> = ({ title, description, url }) => {
    return (
        <Head>
            <title>{title || DEFAULT_HEAD_TITLE}</title>
            <meta
                name="description"
                content={description || DEFAULT_HEAD_DESCRIPTION}
            />
            <meta property="og:url" content={url || DEFAULT_HEAD_URL} />
            <meta property="og:title" content={title || DEFAULT_HEAD_TITLE} />
            <meta
                property="og:description"
                content={description || DEFAULT_HEAD_DESCRIPTION}
            />
            <link rel="icon" href="/icons/favicon.ico" />
        </Head>
    )
}

export default memo(CustomNextHead)
