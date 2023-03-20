// intakes a datestring (i think theres a standard format)
export const fromToday = (d: string): string => {
    // const test = "3-4-2023"
    // const test = "Thu Mar 16 09:19:41 UTC 2023"

    const day = 24 * 60 * 60 * 1000;  // number of miliseconds in a day
    const now: any = new Date();    // current date
    const date: any = new Date(d);  // converted date-string
    const timeDiff = now - date;    // treated as an number
    const dayDiff = Math.round(timeDiff / day)

    if (dayDiff === 1) {
        return `${dayDiff} day ago`
    } else if (dayDiff > 0) {
        return `${dayDiff} days ago`
    }
    return "Today"
}