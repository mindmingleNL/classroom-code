type DoubleFn = (num: number) => number;
const double: DoubleFn = (num) => num * 2;

type OnClickFn = (action: "save" | "cancel") => void;
const onClick: OnClickFn = (action) => alert(action);

type MakeAStringCapitalizedFn = (text: string) => string;
const makeAStringCapitalized: MakeAStringCapitalizedFn = (text) =>
  text.toUpperCase();
