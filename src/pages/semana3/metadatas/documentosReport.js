import documentos from "../../../data/metadatas.json" assert { type: "json" };

const renderTableReport = (documentos) => {
  documentos.forEach((doc) => {
    const container = document.createElement("div");
    container.style.marginBottom = "20px";

    const title = document.createElement("h6");
    title.textContent = doc.documento_nombre;
    container.appendChild(title);

    const table = document.createElement("table");
    table.border = "1";
    table.style.width = "100%";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Crear las celdas de encabezado con los nombres

    doc.metadatas.forEach((item) => {
      const header = document.createElement("th");
      header.textContent = item.nombre;
      headerRow.appendChild(header);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Crear el cuerpo de la tabla e insertar los datos
    const tbody = document.createElement("tbody");
    const dataRow = document.createElement("tr");

    // Crear las celdas de datos
    doc.metadatas.forEach((item) => {
      const cell = document.createElement("td");
      cell.textContent = item.data;
      dataRow.appendChild(cell);
    });

    tbody.appendChild(dataRow);
    table.appendChild(tbody);

    // Agregar la tabla al documento
    const tableContent = document.querySelector("#docsTable");
    container.appendChild(table);
    tableContent.appendChild(container);
  });
};

const init = () => {
  renderTableReport(documentos);
};

init();
