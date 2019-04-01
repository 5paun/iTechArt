const users = [
  {
    id: 1,
    firstName: 'Name1',
    lastName: 'Surname1',
    email: 'mail1@mail.ru',
    removeRequest: '',
  },
  {
    id: 2,
    firstName: 'Name2',
    lastName: 'Surname2',
    email: 'mail2@mail.ru',
    removeRequest: '',
  },
  {
    id: 3,
    firstName: 'Name3',
    lastName: 'Surname3',
    email: 'mail3@mail.ru',
    removeRequest: '',
  },
  {
    id: 4,
    firstName: 'Name4',
    lastName: 'Surname4',
    email: 'mail4@mail.ru',
    removeRequest: '',
  },
  {
    id: 5,
    firstName: 'Name5',
    lastName: 'Surname5',
    email: 'mail5@mail.ru',
    removeRequest: '',
  },
  {
    id: 6,
    firstName: 'Name6',
    lastName: 'Surname6',
    email: 'mail6@mail.ru',
    removeRequest: '',
  },
  {
    id: 7,
    firstName: 'Name7',
    lastName: 'Surname7',
    email: 'mail7@mail.ru',
    removeRequest: '',
  },
  {
    id: 8,
    firstName: 'Name8',
    lastName: 'Surname8',
    email: 'mail8@mail.ru',
    removeRequest: '',
  },
  {
    id: 9,
    firstName: 'Name8',
    lastName: 'Surname8',
    email: 'mail8@mail.ru',
    removeRequest: '',
  },
  {
    id: 10,
    firstName: 'Name9',
    lastName: 'Surname9',
    email: 'mail9@mail.ru',
    removeRequest: '',
  },
  {
    id: 11,
    firstName: 'Name10',
    lastName: 'Surname10',
    email: 'mail10@mail.ru',
    removeRequest: '',
  },
  {
    id: 12,
    firstName: 'Name11',
    lastName: 'Surname11',
    email: 'mail11@mail.ru',
    removeRequest: '',
  },
];

const products = [
  {
    id: 1,
    title: 'Product1',
    description: "It's very good thing!-1",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 2,
    title: 'Product2',
    description: "It's very good thing!-2",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 3,
    title: 'Product3',
    description: "It's very good thing!-3",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 4,
    title: 'Product4',
    description: "It's very good thing!-4",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 5,
    title: 'Product5',
    description: "It's very good thing!-5",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 6,
    title: 'Product6',
    description: "It's very good thing!-6",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 7,
    title: 'Product7',
    description: "It's very good thing!-7",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 8,
    title: 'Product8',
    description: "It's very good thing!-8",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 9,
    title: 'Product9',
    description: "It's very good thing!-9",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 10,
    title: 'Product10',
    description: "It's very good thing!-10",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 11,
    title: 'Product11',
    description: "It's very good thing!-11",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
  {
    id: 12,
    title: 'Product12',
    description: "It's very good thing!-12",
    price: '450$',
    picture:
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA' alt='laptop'>",
    tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
  },
];

// Add users in table from localStorage
localStorage.setItem('users', JSON.stringify(users));
function addUsers(table) {
  const tableUsers = document.getElementById(table);
  const users = JSON.parse(localStorage.getItem('users'));
  if (tableUsers) {
    users.map((user) => {
      const addRow = tableUsers.insertRow();
      return addRow.insertAdjacentHTML(
        'afterbegin',
        `<th>${user.id}</th>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.email}</td>
          <td>${user.removeRequest}</td>
          <td><button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='${
  user.id
}'>Remove</button></td>`,
      );
    });
  }
}
addUsers('addUser');

// Remove users from table and from localStorage
function removeUser(e) {
  if (e.target.classList.contains('btn-remove')) {
    const tr = e.target.parentElement.parentElement;
    const dataId = Number(e.target.getAttribute('data-id'));
    let users = localStorage.getItem('users');
    users = JSON.parse(users);
    users = users.filter(user => user.id !== dataId);
    tr.remove();
    localStorage.setItem('users', JSON.stringify(users));
  }
}

document.getElementById('addUser').addEventListener('click', (e) => {
  removeUser(e);
});

// Remove users from table and from localStorage by means jQuery
// $('#addUser').on('click', "button[type='button']", function () {
//   // let btnData = $(this).attr("data-id");
//   $(this)
//     .parent()
//     .parent()
//     .remove();
//   localStorage.removeItem('users');
// });

// Add products in table from localStorage
localStorage.setItem('products', JSON.stringify(products));
function addProducts(table) {
  const tableProducts = document.getElementById(table);
  let addRow;
  const products = JSON.parse(localStorage.getItem('products'));
  if (tableProducts) {
    products.map((product) => {
      addRow = tableProducts.insertRow();
      return addRow.insertAdjacentHTML(
        'afterbegin',
        `<th>${product.id}</th>
          <td>${product.title}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td>${product.picture}</td>
          <td>${product.tags}</td>
          <td><button type='button' class='btn btn-secondary btn-lg btn-remove' data-id='${
  product.id
}'>Remove</button></td>`,
      );
    });
  }
}
addProducts('addProduct');

// Remove products from table and from localStorage
function removeProducts(e) {
  if (e.target.classList.contains('btn-remove')) {
    const tr = e.target.parentElement.parentElement;
    const dataId = Number(e.target.getAttribute('data-id'));
    let products = localStorage.getItem('products');
    products = JSON.parse(products);
    products = products.filter(product => product.id !== dataId);
    tr.remove();
    localStorage.setItem('products', JSON.stringify(products));
  }
}

document.getElementById('addProduct').addEventListener('click', (e) => {
  removeProducts(e);
});

// Remove products from table and from localStorage by means jQuery
// $('#addProduct').on('click', "button[type='button']", function () {
//   // let btnData = $(this).attr("data-id");
//   $(this)
//     .parent()
//     .parent()
//     .remove();
//   localStorage.removeItem('products');
// });
