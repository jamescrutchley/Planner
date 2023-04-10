import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'



dayjs.extend(utc)
dayjs.extend(tz)
dayjs.extend(relativeTime)
dayjs.extend(calendar)
dayjs.extend(updateLocale)



const timeZone = dayjs.tz.guess()

dayjs.updateLocale('en', {
    calendar: {
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      lastWeek: '[last] dddd',
      nextWeek: 'dddd',
    }
  })


const getTime = (datestring) => {
    const input = datestring;
    const modified = dayjs(input);
    console.log(modified);
    
    return modified.calendar();
}

export default getTime;