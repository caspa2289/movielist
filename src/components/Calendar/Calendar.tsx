import styles from './Calendar.module.scss'
import { FC, useMemo } from 'react'
import { getDaysArray } from '@/utils/scripts'
import DroppableCell from '@/components/Calendar/components/DroppableCell'

const Calendar: FC = () => {
    const days = useMemo(getDaysArray, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.table__wrapper}>
                {days.map((day) => (
                    <DroppableCell
                        number={day.number}
                        id={day.id}
                        key={Math.random()}
                    />
                ))}
            </div>
        </div>
    )
}

export default Calendar
