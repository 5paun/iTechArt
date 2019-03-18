const users = [
    {
        "id": 1,
        "firstName": "Name1",
        "lastName": "Surname1",
        "email": "mail1@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='1'>Large button</button>"
    },
    {
        "id": 2,
        "firstName": "Name2",
        "lastName": "Surname2",
        "email": "mail2@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='2'>Large button</button>"
    },
    {
        "id": 3,
        "firstName": "Name3",
        "lastName": "Surname3",
        "email": "mail3@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='3'>Large button</button>"
    },
    {
        "id": 4,
        "firstName": "Name4",
        "lastName": "Surname4",
        "email": "mail4@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='4'>Large button</button>"
    },
    {
        "id": 5,
        "firstName": "Name5",
        "lastName": "Surname5",
        "email": "mail5@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='5'>Large button</button>"
    },
    {
        "id": 6,
        "firstName": "Name6",
        "lastName": "Surname6",
        "email": "mail6@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='6'>Large button</button>"
    },
    {
        "id": 7,
        "firstName": "Name7",
        "lastName": "Surname7",
        "email": "mail7@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='7'>Large button</button>"
    },
    {
        "id": 8,
        "firstName": "Name8",
        "lastName": "Surname8",
        "email": "mail8@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='8'>Large button</button>"
    },
    {
        "id": 9,
        "firstName": "Name8",
        "lastName": "Surname8",
        "email": "mail8@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='9'>Large button</button>"
    },
    {
        "id": 10,
        "firstName": "Name9",
        "lastName": "Surname9",
        "email": "mail9@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='10'>Large button</button>"
    },
    {
        "id": 11,
        "firstName": "Name10",
        "lastName": "Surname10",
        "email": "mail10@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='11'>Large button</button>"
    },
    {
        "id": 12,
        "firstName": "Name11",
        "lastName": "Surname11",
        "email": "mail11@mail.ru",
        "remove": "<button type='button' class='btn btn-secondary btn-lg' data-id='12'>Large button</button>"
    }
]

localStorage.setItem("users", JSON.stringify(users));
function addUsers(table) { 
  const tableUsers = document.getElementById(table);
  let addRow;
  let users = JSON.parse(localStorage.getItem("users"));
  if (tableUsers) {
    for (let i = 0; i < users.length; i++) {        
        addRow = tableUsers.insertRow();
        addRow.innerHTML = "<th>" + users[i].id + "</th>" +
        "<td>" + users[i].firstName + "</td>" +
        "<td>" + users[i].lastName + "</td>" +
        "<td>" + users[i].email + "</td>" +        
        "<td>" + users[i].remove + "</td>";
    }
  }
}
addUsers("addUser");



$("#addUser").on("click", "button[type='button']", function() {
    //let btnData = $(this).attr("data-id");     
    $(this).parent().parent().remove();
    localStorage.removeItem("users");   
    });
    