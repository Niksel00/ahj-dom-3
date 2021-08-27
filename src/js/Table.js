export default class Table {
  constructor() {
    this.table = document.querySelector('table.movies');
    this.data = '';
  }

  JSONtoTable(json) {
    this.data = JSON.parse(json);
    this.arrayToTable(this.data);
  }

  sort(by, order = 1) {
    this.data.sort((a, b) => {
      if (a[by] > b[by]) {
        return 1 * order;
      }
      if (a[by] < b[by]) {
        return -1 * order;
      }
      return 0;
    });
    this.arrayToTable(this.data);

    const arrow = this.table.querySelector(`.${by}`);
    if (order === 1) {
      arrow.classList.add('order_asc');
    } else {
      arrow.classList.add('order_desc');
    }
  }

  arrayToTable(array) {
    this.table.innerHTML = '';

    const firstRow = document.createElement('tr');
    ['id', 'title', 'year', 'imdb'].forEach((element) => {
      const td = document.createElement('td');
      td.classList.add(element);
      td.innerText = element;
      firstRow.append(td);
    });
    this.table.append(firstRow);

    array.forEach((element) => {
      const id = document.createElement('td');
      id.innerText = element.id;
      const title = document.createElement('td');
      title.innerText = element.title;
      const year = document.createElement('td');
      year.innerText = `(${element.year})`;
      const imdb = document.createElement('td');
      imdb.innerText = `imdb: ${Number(element.imdb).toFixed(2)}`;
      const tr = document.createElement('tr');
      tr.append(id, title, year, imdb);
      this.table.append(tr);
    });
  }
}
