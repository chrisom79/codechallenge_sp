window.onload = function() {
  function addBusinessTime(holiday, time, duration) {
    let date = new Date(time.getTime());

    date.setSeconds(date.getSeconds() + duration);

    if(date.getTime() >= holiday.start.getTime() && date.getTime() < holiday.end.getTime()) {
      if(duration >= 0){
        if(time.getTime() <  holiday.start.getTime())
           duration = (date.getTime() - holiday.start.getTime()) / 1000;

        date = new Date(holiday.end.getTime());
      } else {
        date = new Date(holiday.start.getTime());
      }

      date.setSeconds(date.getSeconds() + duration);
    }

    return date;
  }


  // Christmas 2019, 9pm Dec 24th to 9pm Dec 25th
const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};

addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60) // returns 2019-12-25T21:30:00
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59
}
