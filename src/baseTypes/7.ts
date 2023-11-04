/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  WEEKEND,
  WORKDAY,
}

const day = {
  mon: Day.WORKDAY,
  tue: Day.WORKDAY,
  wed: Day.WORKDAY,
  thu: Day.WORKDAY,
  fri: Day.WORKDAY,
  sat: Day.WEEKEND,
  sun: Day.WEEKEND,
};

function isWeekend(day) {
  if (day === "WEEKEND") {
    return true;
  } else {
    false;
  }
}

isWeekend(day.mon);
