// const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';

// const { defaults } = require("json-server");

// function fetchBooks() {
//     return fetch('http://localhost:3000/books')
//   .then(res => res.json())
//   .then(console.log)
// }
// function fetchBooksById(bookId) {
//   return fetch('http://localhost:3000/books/${bookId})
//   .then(res => res.json())
//   .then(console.log)
// // }
  
// ----------------------------------------------------------------------------------
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       (user) => `<li class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </li>`
//     )
//     .join("");
//   userList.innerHTML = markup;
// }
// --------------------------------конспект--------------------------------------
// import axios from 'axios';
// import Notiflix from 'notiflix';

// const API_KEY = ('38039497-5ee2ddc1c8430029b87bf9d3f');
// const searchForm = document.querySelector('.search-form');
// const addCat = document.querySelector('.loard-more');
// const list = document.querySelector('.gallery');

// addCat.addEventListener('click', handlerAddInput);

// function handlerAddInput () {
//   const markup = '<input type = "text">'
//   searchForm.insertAdjacentHTML('beforeend', markup )
// }
 
// const requestURL = ('https://jsonplaceholder.typicode.com/users');
// document.querySelector('#search-form').oninput = function () {
//   let var = this.value.trim();
//   let galleryItems = document.querySelectorAll('.search-form')
// };