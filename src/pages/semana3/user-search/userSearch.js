import users from "../../../data/users.json" assert { type: "json" };
const inputSearch = document.getElementById("inputSearch");
const searchButton = document.getElementById("searchButton");
let keywords = "";

const getUsername = (e) => (keywords = e.target.value);

const searchUserByName = () => {
  let usersList = users;
  if (keywords) {
    usersList = usersList.filter((item) =>
      item.username.toUpperCase().includes(keywords.toUpperCase())
    );
  }
  renderTableWithUsers(usersList);
};

const renderTableWithUsers = (users) => {
  inputSearch.focus();
  let tableBody = "";
  users.forEach((item) => {
    tableBody += `
      <tbody>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.rating}</td>
        <td>${item.favorites}</td>
        <td>${item.visits}</td>
        <td>${item.difficulty}</td>
        <td>${item.terrain}</td>
        <td>${item.size}</td>
      </tbody>
`;
  });
  const tableHtml = `
      <h5 class="blue-grey-text text-darken-4">Lista de Usuários</h5>
      <table>
        <thead>
        <th>Name</th>
        <th>Username</th>
        <th>Rating</th>
        <th>Favorites</th>
        <th>Visits</th>
        <th>Difficulty</th>
        <th>Terrain</th>
        <th>size</th>
        </thead>
        <tbody>
          ${tableBody}
        </tbody>
      </table>
 `;
  const tableContent = document.querySelector("#userTable");
  tableContent.innerHTML = tableHtml;
};

inputSearch.addEventListener("change", getUsername);
searchButton.addEventListener("click", searchUserByName);
renderTableWithUsers(users);
