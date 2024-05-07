const petName: string = "Joey";

const petNames: string[] = ["Joey", "Costa", "Pim"];

interface Owner {
  ownerName: string;
  age: number;
}

interface Pet {
  petName: string;
  age: number;
  isHappy: boolean;
  owner: Owner;
}

const owner: Owner = {
  ownerName: "Piet",
  age: 35,
};

const owner1: Owner = {
  ownerName: "Brandon",
  age: Infinity,
};

const pet: Pet = {
  petName: "Joey",
  age: 5,
  isHappy: true,
  owner: owner,
};

const pet2: Pet = {
  petName: "Joey",
  age: 5,
  isHappy: true,
  owner: owner,
};

console.log(pet.owner.ownerName);
