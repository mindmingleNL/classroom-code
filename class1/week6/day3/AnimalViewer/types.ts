export interface Animal {
  id: number;
  name: string;
  kind: "pig" | "cow" | "sheep" | "chicken";
  age: number;
  hasBeenFed: boolean;
  imgUrl: string;
}
