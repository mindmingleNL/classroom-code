// .find()
// .map()
// .filter()

const users = [
  { id: 1, username: "johndoe", email: "johndoe@example.com", role: "admin" },
  { id: 2, username: "janedoe", email: "janedoe@example.com", role: "user" },
  { id: 3, username: "bobsmith", email: "bobsmith@example.com", role: "user" },
  {
    id: 4,
    username: "alicewhite",
    email: "alicewhite@example.com",
    role: "user"
  },
  { id: 5, username: "tomclark", email: "tomclark@example.com", role: "user" },
  {
    id: 6,
    username: "emmawatson",
    email: "emmawatson@example.com",
    role: "user"
  },
  {
    id: 7,
    username: "mikebrown",
    email: "mikebrown@example.com",
    role: "admin"
  },
  {
    id: 8,
    username: "lucyblack",
    email: "lucyblack@example.com",
    role: "user"
  },
  {
    id: 9,
    username: "ethangray",
    email: "ethangray@example.com",
    role: "user"
  },
  {
    id: 10,
    username: "sophiagreen",
    email: "sophiagreen@example.com",
    role: "user"
  }
];

const logUserIn = () => {
  // Loggen in met het email johndoe@example.com
  const loggedInUser = users.find(
    (user) => user.email === "johndoe@example.com" // boolean -> true | false
  );

  if (!loggedInUser) {
    return;
  }

  //   console.log(loggedInUser.username);
};

logUserIn();

const products = [
  { id: 1, name: "Laptop", price: 1000, stock: 21, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 700, stock: 30, category: "Electronics" },
  { id: 3, name: "Desk", price: 150, stock: 15, category: "Furniture" },
  { id: 4, name: "Chair", price: 100, stock: 10, category: "Furniture" },
  { id: 5, name: "Headphones", price: 150, stock: 45, category: "Electronics" },
  { id: 6, name: "Mouse", price: 50, stock: 25, category: "Electronics" },
  {
    id: 7,
    name: "Rizen Keyboard",
    price: 75,
    stock: 35,
    category: "Electronics"
  },
  { id: 8, name: "Monitor", price: 300, stock: 20, category: "Electronics" },
  { id: 9, name: "Desk Lamp", price: 30, stock: 50, category: "Furniture" },
  { id: 10, name: "Webcam", price: 80, stock: 40, category: "Electronics" }
];

const cheapProducts = products.filter((product) => {
  return product.price < 500;
});
// console.log(cheapProducts);

const searchQuery = "Keyb";
const filterOnPage = products.filter((product) =>
  product.name.includes(searchQuery)
);

const filterOnPageBetter = products.filter((product) => {
  const lowerCaseProductName = product.name.toLowerCase();
  const lowerCaseSearchQuery = searchQuery.toLowerCase();
  return lowerCaseProductName.includes(lowerCaseSearchQuery);
});

// The .map() functie

const appointments = [
  { id: 1, type: "Dentist", date: new Date(2023, 4, 15) },
  { id: 2, type: "Therapy", date: new Date(2023, 4, 17) },
  { id: 3, type: "Meeting", date: new Date(2023, 4, 20) },
  { id: 4, type: "Doctor", date: new Date(2023, 4, 22) },
  { id: 5, type: "Haircut", date: new Date(2023, 4, 25) },
  { id: 6, type: "Massage", date: new Date(2023, 4, 27) },
  { id: 7, type: "Dentist", date: new Date(2023, 5, 1) },
  { id: 8, type: "Therapy", date: new Date(2023, 5, 5) },
  { id: 9, type: "Meeting", date: new Date(2023, 5, 7) },
  { id: 10, type: "Doctor", date: new Date(2023, 5, 10) }
];

// Map and Filter Combined
const doctorsDates = appointments
  .filter((appointment) => appointment.type === "Doctor")
  .map((appointment) => appointment.date);

// console.log(doctorsDates);

const typeArray = [];
const forEachTypes = appointments.forEach((appointment) => {
  //   console.log(appointment.type);
});
// console.log(forEachTypes);

const typeOfAppointments = appointments.map((appointment, index) => {
  //   console.log(index);
  return appointment.type;
});

const events = [
  {
    id: 1,
    name: "John's Birthday",
    type: "Birthday",
    date: new Date(2023, 6, 25)
  },
  {
    id: 2,
    name: "Company Meeting",
    type: "Meeting",
    date: new Date(2023, 6, 5)
  },
  {
    id: 3,
    name: "Wedding Anniversary",
    type: "Anniversary",
    date: new Date(2023, 6, 15)
  },
  {
    id: 4,
    name: "Mary's Birthday",
    type: "Birthday",
    date: new Date(2023, 6, 10)
  },
  {
    id: 5,
    name: "Project Deadline",
    type: "Work Event",
    date: new Date(2023, 6, 20)
  },
  {
    id: 6,
    name: "Tech Conference",
    type: "Conference",
    date: new Date(2023, 6, 18)
  },
  { id: 7, name: "Farewell Party", type: "Party", date: new Date(2023, 6, 28) },
  {
    id: 8,
    name: "Gaming Tournament",
    type: "Tournament",
    date: new Date(2023, 6, 22)
  },
  {
    id: 9,
    name: "Book Club Meeting",
    type: "Club",
    date: new Date(2023, 6, 30)
  },
  {
    id: 10,
    name: "Charity Fundraiser",
    type: "Fundraiser",
    date: new Date(2023, 6, 12)
  }
];

// Exercise 1: Find a User
const findUserByUsername = (username: string) => {
  // Implementation
};

// Exercise 2: Format User Emails
const formatUserEmails = () => {
  // Implementation
};

// Exercise 3: Filter Admin Users
const filterAdminUsers = () => {
  // Implementation
};

// Exercise 4: Filter Upcoming Appointments
const filterUpcomingAppointments = (date: Date) => {
  // Implementation
};

// Exercise 5: Find Next Available Appointment
const findNextTherapyAppointment = (date: Date) => {
  // Implementation
};

// Exercise 6 BONUS: Calculate Total Stock Value
// Use the `.map` method to calculate the total value of products in stock (price * stock).
// Then use the `.reduce` method to sum up the total value.
const calculateTotalStockValue = () => {
  // Implement the map and reduce methods here
};

const user1 = {
  name: "Aiden",
  id: 1
};
const user2 = {
  name: "John",
  id: 2
};
const user3 = {
  name: "Jane",
  id: 1
};

const usersArr = [user1, user2, user3];
const usersArrCopy = structuredClone(usersArr);
const usersArrTwo = [{ name: "Karel", id: 2 }, ...usersArrCopy];

usersArrTwo[0].name = "Swen";
console.log(usersArr);
console.log(usersArrTwo);
