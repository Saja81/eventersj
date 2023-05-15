interface Event {
  name: string;
  description: string;
  time: string;
  price: number;
}

const events: Event[] = [
  {
    name: "Music Concert",
    description: "Enjoy an evening of live music performances by top artists.",
    time: "2023-06-10 19:00",
    price: 649,
  },
  {
    name: "Art Exhibition",
    description: "Discover a collection of contemporary art installations.",
    time: "2023-06-15 10:00",
    price: 349,
  },
  {
    name: "Fitness Workshop",
    description: "Learn various fitness techniques and workout routines.",
    time: "2023-06-20 14:30",
    price: 500,
  },
  // lägg till mera här i framtiden
];
export default events;
