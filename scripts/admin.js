const users = {
  1: {
    id: 1,
    firstName: 'Name1',
    lastName: 'Surname1',
    email: 'mail1@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='1'>Remove</button>",
  },
  2: {
    id: 2,
    firstName: 'Name2',
    lastName: 'Surname2',
    email: 'mail2@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='2'>Remove</button>",
  },
  3: {
    id: 3,
    firstName: 'Name3',
    lastName: 'Surname3',
    email: 'mail3@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='3'>Remove</button>",
  },
  4: {
    id: 4,
    firstName: 'Name4',
    lastName: 'Surname4',
    email: 'mail4@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='4'>Remove</button>",
  },
  5: {
    id: 5,
    firstName: 'Name5',
    lastName: 'Surname5',
    email: 'mail5@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='5'>Remove</button>",
  },
  6: {
    id: 6,
    firstName: 'Name6',
    lastName: 'Surname6',
    email: 'mail6@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='6'>Remove</button>",
  },
  7: {
    id: 7,
    firstName: 'Name7',
    lastName: 'Surname7',
    email: 'mail7@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='7'>Remove</button>",
  },
  8: {
    id: 8,
    firstName: 'Name8',
    lastName: 'Surname8',
    email: 'mail8@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='8'>Remove</button>",
  },
  9: {
    id: 9,
    firstName: 'Name8',
    lastName: 'Surname8',
    email: 'mail8@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='9'>Remove</button>",
  },
  10: {
    id: 10,
    firstName: 'Name9',
    lastName: 'Surname9',
    email: 'mail9@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='10'>Remove</button>",
  },
  11: {
    id: 11,
    firstName: 'Name10',
    lastName: 'Surname10',
    email: 'mail10@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='11'>Remove</button>",
  },
  12: {
    id: 12,
    firstName: 'Name11',
    lastName: 'Surname11',
    email: 'mail11@mail.ru',
    removeRequest: '',
    removeUser:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='12'>Remove</button>",
  },
};

const products = {
  1: {
    id: 1,
    title: 'Product1',
    description: "It's very good thing!-1",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='1'>Remove</button>",
  },
  2: {
    id: 2,
    title: 'Product2',
    description: "It's very good thing!-2",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='2'>Remove</button>",
  },
  3: {
    id: 3,
    title: 'Product3',
    description: "It's very good thing!-3",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='3'>Remove</button>",
  },
  4: {
    id: 4,
    title: 'Product4',
    description: "It's very good thing!-4",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='4'>Remove</button>",
  },
  5: {
    id: 5,
    title: 'Product5',
    description: "It's very good thing!-5",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='5'>Remove</button>",
  },
  6: {
    id: 6,
    title: 'Product6',
    description: "It's very good thing!-6",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='6'>Remove</button>",
  },
  7: {
    id: 7,
    title: 'Product7',
    description: "It's very good thing!-7",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='7'>Remove</button>",
  },
  8: {
    id: 8,
    title: 'Product8',
    description: "It's very good thing!-8",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='8'>Remove</button>",
  },
  9: {
    id: 9,
    title: 'Product9',
    description: "It's very good thing!-9",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='9'>Remove</button>",
  },
  10: {
    id: 10,
    title: 'Product10',
    description: "It's very good thing!-10",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='10'>Remove</button>",
  },
  11: {
    id: 11,
    title: 'Product11',
    description: "It's very good thing!-11",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='11'>Remove</button>",
  },
  12: {
    id: 12,
    title: 'Product12',
    description: "It's very good thing!-12",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='Ноутбук'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
    remove:
      "<button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='12'>Remove</button>",
  },
};

/* ====== Добавление пользователей в таблицу из localStorage ============ */
localStorage.setItem('users', JSON.stringify(users));
function addUsers(table) {
  const tableUsers = document.getElementById(table);
  let addRow;
  const users = JSON.parse(localStorage.getItem('users'));
  if (tableUsers) {
    for (const key in users) {
      addRow = tableUsers.insertRow();
      addRow.insertAdjacentHTML(
        'afterbegin',
        `<th>${users[key].id}</th>`
          + `<td>${users[key].firstName}</td>`
          + `<td>${users[key].lastName}</td>`
          + `<td>${users[key].email}</td>`
          + `<td>${users[key].removeRequest}</td>`
          + `<td>${users[key].removeUser}</td>`,
      );
    }
  }
}
addUsers('addUser');

/* ====== Удаление пользователей из таблицы и из localStorage ============ */
function removeUser(e) {
  if (e.target.classList.contains('btn-remove')) {
    const tr = e.target.parentElement.parentElement;
    const dataId = e.target.getAttribute('data-id');
    let users = localStorage.getItem('users');
    users = JSON.parse(users);
    for (const key in users) {
      if (users[key].id == dataId) {
        delete users[key];
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
    tr.remove();
  }
}

document.getElementById('addUser').addEventListener('click', (e) => {
  removeUser(e);
});

/* ====== Удаление пользователей из таблицы на jQuery!!!! ============ */
// $('#addUser').on('click', "button[type='button']", function () {
//   // let btnData = $(this).attr("data-id");
//   $(this)
//     .parent()
//     .parent()
//     .remove();
//   localStorage.removeItem('users');
// });

/* ====== Добавление товара в таблицу из localStorage ============ */
localStorage.setItem('products', JSON.stringify(products));
function addProducts(table) {
  const tableProducts = document.getElementById(table);
  let addRow;
  const products = JSON.parse(localStorage.getItem('products'));
  if (tableProducts) {
    for (const key in products) {
      addRow = tableProducts.insertRow();
      addRow.insertAdjacentHTML(
        'afterbegin',
        `<th>${products[key].id}</th>`
          + `<td>${products[key].title}</td>`
          + `<td>${products[key].description}</td>`
          + `<td>${products[key].price}</td>`
          + `<td>${products[key].picture}</td>`
          + `<td>${products[key].tags}</td>`
          + `<td>${products[key].remove}</td>`,
      );
    }
  }
}
addProducts('addProduct');

/* ====== Удаление товара из таблицы и из localStorage ============ */
function removeProducts(e) {
  if (e.target.classList.contains('btn-remove')) {
    const tr = e.target.parentElement.parentElement;
    const dataId = e.target.getAttribute('data-id');
    let products = localStorage.getItem('products');
    products = JSON.parse(products);
    for (const key in products) {
      if (products[key].id == dataId) {
        delete products[key];
        localStorage.setItem('products', JSON.stringify(products));
      }
    }
    tr.remove();
  }
}

document.getElementById('addProduct').addEventListener('click', (e) => {
  removeProducts(e);
});

/* ====== Удаление товаров из таблицы на jQuery!!!! ============ */
// $('#addProduct').on('click', "button[type='button']", function () {
//   // let btnData = $(this).attr("data-id");
//   $(this)
//     .parent()
//     .parent()
//     .remove();
//   localStorage.removeItem('products');
// });
