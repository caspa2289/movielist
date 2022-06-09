export const getTimeOfDayGreeting = () => {
    const time = new Date().getHours()
    if (time >= 5 && time <= 11) return 'Доброе утро'
    if (time >= 12 && time <= 17) return 'Добрый день'
    if (time >= 18 && time <= 22) return 'Добрый вечер'
    return 'Доброй ночи'
}
