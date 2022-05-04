import { FC } from 'react'
import AppHeader from '@/components/AppHeader/AppHeader'
import styles from './Index.module.scss'
import Calendar from '@/components/Calendar'
import { DragDropContext } from 'react-beautiful-dnd'

const Home: FC = () => {
    const handleDragEnd = (values: any) => {
        console.log(values)
    }
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <AppHeader
                title="MovieList - Main"
                description="MovieList`s main page"
            />
            <main className={styles.wrapper}>
                <div>asfasfsdf</div>
                <Calendar />
            </main>
        </DragDropContext>
    )
}

export default Home
