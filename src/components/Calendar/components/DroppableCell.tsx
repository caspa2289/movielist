import { FC } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styles from '../styles/DroppableCell.module.scss'

interface ICalendarCellProps {
    id: string
    number: number
}

const DroppableCell: FC<ICalendarCellProps> = ({ id, number }) => {
    return (
        <Droppable droppableId={id}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} className={styles.wrapper}>
                    <h4>{number}</h4>
                </div>
            )}
        </Droppable>
    )
}

export default DroppableCell
