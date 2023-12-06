let map1 = new Map();
console.log("map1");
console.log(map1);

let map2 = new Map([
  ["Key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
console.log("map2");
console.log(map2);

let map3 = new Map([
  ["list1", [1, 2, 3, 4, 5]],
  ["list2", [6, 7, 8, 9, 0]],
]);
console.log("map3");
console.log(map3);

let map4 = new Map([
  [
    ["rollno", "name"],
    [50, "simran"],
  ],
  [
    ["subject", "marks"],
    ["c++", 80],
  ],
]);
console.log("map4");
console.log(map4);
console.log(map4.keys());
console.log(map4.values());
