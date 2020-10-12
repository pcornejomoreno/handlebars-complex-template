module.exports = (workers, days) => {
    return workers.map((worker)=> {
        let monthAtt = {};
        days.forEach(day => {
            monthAtt[day.num] = worker.attendance[day.num];
        });
        worker.monthAtt = monthAtt;

        return worker;
    })
}