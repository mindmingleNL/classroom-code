const a: any = undefined;

try {
  throw { message: "Because I want to show you", time: new Date().toString() };
} catch (error) {
  console.log(error);
}

// try {
//   a.length();
// } catch (error) {
//   console.log(Object.keys(error as object));
// }

console.log("This is the last line");
