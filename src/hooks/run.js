import { useDate, objToMap } from "./utils.js";

// console.log(useDate());

let newMap = objToMap({ hello: "World", name: "Ben" });
console.log(newMap);
console.log(newMap.size);
newMap.forEach((item) => console.log(item));
