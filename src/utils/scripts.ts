import { MONTHS } from '@/utils/constants'

/**
 * get array of days in current month
 */
export const getDaysArray = () => {
    const index = new Date().getMonth()
    const currentMonth = MONTHS[index]
    const days = []

    for (let x = 1; x <= currentMonth.days; x++) {
        days.push({ id: 'asdas', number: x })
    }

    return days
}
