const holiday = require('./holiday');

const DAYS = require('../constants/days');

const DAYS_INITIALS = DAYS.map((val) => val[0]);

module.exports = (month, year) => {
    if (isNaN(month) || isNaN(year)) {
        throw new Error('Month and year should be numbers');
    }

    console.log(`month: ${month}, year: ${year}`);

    const initDate = new Date(year, month, 1);
    const endDate = new Date(initDate);

    endDate.setUTCMonth(initDate.getUTCMonth() + 1);
    endDate.setUTCDate(endDate.getUTCDate() - 1);

    console.log(`initDate: ${initDate}, endDate: ${endDate}`);

    const days = [];

    for (let date = new Date(initDate); date <= endDate; date.setUTCDate(date.getUTCDate() + 1)) {
        const dayNum = date.getUTCDate();
        const dayIndex = date.getDay();
        days.push({ num: "" + dayNum, name: DAYS_INITIALS[dayIndex], isHoliday: holiday.isHoliday(date), isSaturday: dayIndex === 6, isSunday: dayIndex === 0 });
    }

    return days;
}