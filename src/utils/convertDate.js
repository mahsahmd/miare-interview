import { format as jalaliFormat, get } from "date-fns-jalali"
import { format } from 'date-fns';


export const convertToJalali = (date) => {
    const newDate = new Date(date);
    return jalaliFormat(newDate, ' yyyy  dd MMMM')
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
