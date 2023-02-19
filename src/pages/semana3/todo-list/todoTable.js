const todoTable = (list, handleRowActions) => {
  if (!!list.length) {
    let tableBody = "";
    list.forEach((item) => {
      tableBody += `
        <tbody>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>
          <a class="editButton" href="javascript:;">
          <i data-id=${item.id} class="material-icons left">edit</i>
          </a>
          <a id="deleteButton" href="javascript:;">
          <i data-id=${item.id} class="material-icons left">delete</i>
          </a></td>
        </tbody>
  `;
    });
    const tableHtml = `
        <table>
          <thead>
          <th>#</th>
          <th>Tarefa</th>
          <th>Ações</th>
          </thead>
          <tbody>
            ${tableBody}
          </tbody>
        </table>
   `;
    const tableContent = document.querySelector("#todoTable");
    tableContent.innerHTML = tableHtml;
    tableContent.addEventListener("click", handleRowActions);
  } else {
    const tableContent = document.querySelector("#todoTable");
    tableContent.innerHTML = `<p class="blue-text text-darken-2">Tarefas não encontrados.</p>`;
  }
};

export default todoTable;
