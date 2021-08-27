import Table from '../Table';

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
  ,
  {
    "id": 250,
    "title": "Криминальное чтиво",
    "imdb": 8.91,
    "year": 1995
  }
]`;

test('arrayToTable', () => {
  const HTML = document.createElement('table');
  HTML.classList.add('movies');
  document.body.appendChild(HTML);
  const table = new Table();
  table.arrayToTable(JSON.parse(input));
  const rows = table.table.querySelectorAll('tr');
  expect(rows.length).toBe(7);
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Побег из Шоушенка');
});

test('JSONtoTable', () => {
  const HTML = document.createElement('table');
  HTML.classList.add('movies');
  document.body.appendChild(HTML);
  const table = new Table();
  table.JSONtoTable(input);
  const rows = table.table.querySelectorAll('tr');
  expect(rows.length).toBe(7);
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Побег из Шоушенка');
});

test('sort', () => {
  const HTML = document.createElement('table');
  HTML.classList.add('movies');
  document.body.appendChild(HTML);
  const table = new Table();
  table.JSONtoTable(input);
  let rows = table.table.querySelectorAll('tr');
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Побег из Шоушенка');

  table.sort('id');
  rows = table.table.querySelectorAll('tr');
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Крёстный отец');
});

test('sort by string', () => {
  const HTML = document.createElement('table');
  HTML.classList.add('movies');
  document.body.appendChild(HTML);
  const table = new Table();
  table.JSONtoTable(input);
  let rows = table.table.querySelectorAll('tr');
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Побег из Шоушенка');

  table.sort('title', 1);
  rows = table.table.querySelectorAll('tr');
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Криминальное чтиво');
});

test('sort order desc', () => {
  const HTML = document.createElement('table');
  HTML.classList.add('movies');
  document.body.appendChild(HTML);
  const table = new Table();
  table.JSONtoTable(input);
  let rows = table.table.querySelectorAll('tr');
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Побег из Шоушенка');

  table.sort('id', -1);
  rows = table.table.querySelectorAll('tr');
  expect(rows[0].childNodes[0].innerText).toBe('id');
  expect(rows[1].childNodes[1].innerText).toBe('Тёмный рыцарь');
});
