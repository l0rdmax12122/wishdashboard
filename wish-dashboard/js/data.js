const user = {
  name: "Максим",
  surname: "Ільчишин",
  userPhoto: "my-photo.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Авто моєї мрії" },
    { src: "home.jpg", alt: "Домівка на місяці" },
    { src: "voyage.jpg", alt: "Побувати на ЧС 2026" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  15000,
  700,
  800,
  1000,
  1200,
  1500,
  19901,
  2100,
  1,
  15000,
  3000,
  20000,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "???" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "HTML" },
  { month: "Вересень", skill: "щось зробити" },
  { month: "Жовтень", skill: "зустріти Ілона Маска" },
  { month: "Листопад", skill: "привітатися з другом" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "щось зробити2" },
  { month: "Лютий", skill: "командна робота" },
  { month: "Березень", skill: "створити машину часу" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "набрати 1 лям фоловерів в твітері" },
];

export { user, arr, necessaryExpenses, todo };
