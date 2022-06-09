import { FC } from 'react'
import AppHeader from '@/components/AppHeader/AppHeader'
import styles from './Index.module.scss'
import { DragDropContext } from 'react-beautiful-dnd'

const Home: FC = () => {
    const handleDragEnd = (values: any) => {
        console.log(values)
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <AppHeader title="Main" description="Main page" />
            <main className={styles.wrapper}></main>
        </DragDropContext>
    )
}

export default Home
