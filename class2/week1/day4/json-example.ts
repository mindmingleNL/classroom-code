const aObj = {
  objName: "example",
  fun: true,
  value: 90,
  list: [1, 2, 3, 4, 5],
  nested: {
    bla: "foo",
  },
};

const asString = JSON.stringify(aObj);
console.log(asString.objName);

const asObjs = JSON.parse(asString);

console.log(asObjs.objName);
