import Table from './Table';

const input = `[
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
]`;

const table = new Table();
table.JSONtoTable(input);

const sortFields = ['id', 'title', 'year', 'imdb'];
let curField = 0;
let order = -1;

setInterval(() => {
  order *= -1;
  table.sort(sortFields[curField], order);
  if (order === -1) {
    curField = curField === sortFields.length - 1 ? 0 : curField + 1;
  }
}, 2000);
