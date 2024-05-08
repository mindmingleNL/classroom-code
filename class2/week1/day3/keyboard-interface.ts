interface Keyboard {
  layout: "qwerty" | "azerty" | "dvorak";
  keys: string[];
  backlit: boolean;
  brand: string;
}
