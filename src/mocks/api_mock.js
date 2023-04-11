import { statsIcons } from "../styles/icons";

export const user = {
  score: [{ score: 0.49 }],
  firstName: 'John',
  lastName: 'Doe',
  age: 34,
};

export const activity = [
  {
    day: '1',
    kilogram: 55,
    calories: 14
  },
  {
    day: '2',
    kilogram: 12,
    calories: 45
  },
  {
    day: '3',
    kilogram: 78,
    calories: 87
  },
  {
    day: '4',
    kilogram: 96,
    calories: 58
  },
  {
    day: '5',
    kilogram: 75,
    calories: 42
  },
  {
    day: '6',
    kilogram: 86,
    calories: 62
  },
  {
    day: '7',
    kilogram: 23,
    calories: 14
  },
];

export const stats = [
  {
    label: 'Calories',
    count: '1,234kCal',
    icon: statsIcons[0],
  },
  {
    label: 'Proteines',
    count: '123g',
    icon: statsIcons[1],
  },
  {
    label: 'Glucides',
    count: '456g',
    icon: statsIcons[2],
  },
  {
    label: 'Lipides',
    count: '789g',
    icon: statsIcons[3],
  },
];

export const averageSessions = [
  {
      day: 'L',
      sessionLength: 55,
  },
  {
      day: 'M',
      sessionLength: 78,
  },
  {
      day: 'M',
      sessionLength: 2,
  },
  {
      day: 'J',
      sessionLength: 12,
  },
  {
      day: 'V',
      sessionLength: 43,
  },
  {
      day: 'S',
      sessionLength: 55,
  },
  {
      day: 'D',
      sessionLength: 45,
  },
];

export const performance = [
  {
      kind: 'Intensité',
      value: 5,
  },
  {
      kind: 'Vitesse',
      value: 16,
  },
  {
      kind: 'Force',
      value: 9,
  },
  {
      kind: 'Endurance',
      value: 15,
  },
  {
      kind: 'Energie',
      value: 15,
  },
  {
      kind: 'Cardio',
      value: 7,
  },
];