
class Holidays {
    
    isHoliday(date) {
        const day = date.getUTCDay();
        if (day === 0 || day === 6){
            return true;
        }

        false;
    }
}

module.exports = new Holidays();