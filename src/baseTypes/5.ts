/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

type strOrNum = string | number;
type enOrDis = "enable" | "disable";

let union: strOrNum;
let literal: enOrDis;
