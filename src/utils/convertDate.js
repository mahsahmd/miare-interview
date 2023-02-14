import { format as jalaliFormat } from "date-fns-jalali"

export const convertToJalali = (date) => {
    const newDate = new Date(date);
    return jalaliFormat(newDate, 'dd MMMM yyyy')
}
export const convertToJalaliDate = (date) => {
    const newDate = new Date(date);
    return jalaliFormat(newDate, ' yyyy/MM/dd')
}
export const getDayFromDate = (date) => {
    const newDate = new Date(date);
    return jalaliFormat(newDate, 'dd')
}
export const getHourFromDate = (date) => {
    const newDate = new Date(date);
    return jalaliFormat(newDate, 'HH:mm')
}
