import { showMessage, calc } from "./6";
import { isWeekend, day } from "./7";

// ================ 6 ===========
showMessage("Hello Vlad!");

console.log(calc(4, 5));
console.log(calc(1, 10));

// ================ 7 ===========

console.log(isWeekend(day.mon));
console.log(isWeekend(day.sat));
