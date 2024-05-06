const double1 = (x) => {
  return x * 2;
};
const double2 = (x, y) => {
  return x * 2;
};
const double3 = (x, y) => {
  if (x > y) {
    return x * 2;
  }
  return y * 2;
};

const repeat = (text, times) => {
  let result = "";
  if (times < 0) {
    return result;
  }

  for (let i = 0; i < times; i = i + 1) {
    result = result + text;
  }
  return result;
};

const batman = () => {
  const nas = repeat("na", 10);
  return nas + " batman!";
};

const max = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};

const maxDivide = (x, y) => {
  if (x > y) {
    return y / x;
  }
  return x / y;
};

const maxStr = (first, second) => {
  if (first.length > second.length) {
    return first;
  }
  return second;
};

const even = (num) => {
  return num % 2 === 0;
};

const evenBelow = (num) => {
  let result = [];
  for (let i = 0; i < num; i = i + 1) {
    if (even(i)) {
      result.push(i);
    }
  }
  return result;
};

const evenIn = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i = i + 1) {
    if (even(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
};

const multiplyArray = (nums) => {
  let result = 1;

  for (let i = 0; i < nums.length; i = i + 1) {
    result = result * nums[i];
  }
  return result;
};

const divideArray = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let result = nums[0];

  for (let i = 1; i < nums.length; i = i + 1) {
    result = result / nums[i];
  }
  return result;
};

const splitCombine = (first, second) => {
  const combo_one =
    first.slice(0, first.length / 2) +
    second.slice(second.length / 2, second.length);

  const combo_two =
    second.slice(0, second.length / 2) +
    first.slice(first.length / 2, first.length);

  if (combo_one.length > combo_two.length) {
    return combo_one;
  }
  return combo_two;
};

const getName = (obj) => {
  return obj.name;
};

const getNames = (objs) => {
  let result = [];
  for (let i = 0; i < objs.length; i = i + 1) {
    result.push(objs[i].name);
  }
  return result;
};

const combineName = (objs) => {
  let result = [];
  for (let i = 0; i < objs.length; i = i + 1) {
    result.push(`${objs[i].firstname} ${objs[i].lastname}`);
  }
  return result;
};
// Testing:

console.log(double1(5));
console.log(double2(3, 5));
console.log(double3(10, 88));
console.log(repeat("oi", 4));
console.log(batman());
console.log(max(12, 90));
console.log(maxStr("la", "laa"));
console.log(even(12));
console.log(even(13));
console.log(evenBelow(13));
console.log(evenIn([2, 5, 6, 10, 88, 7, 13]));
console.log(multiplyArray([2, 5, 10]));
console.log(divideArray([500, 2, 50, 2]));
console.log(splitCombine("hahahaaaa", "lolol"));
console.log(getName({ name: "Albert" }));
console.log(
  getNames([{ name: "Albert" }, { name: "Richard" }, { name: "Robbert" }])
);
console.log(
  combineName([
    { firstname: "Albert", lastname: "Einstein" },
    { firstname: "Richard", lastname: "Feynman" },
    { firstname: "Robbert", lastname: "Oppenheimer" },
  ])
);
