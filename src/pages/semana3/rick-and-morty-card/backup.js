<h6>Informe Generado</h6>
                    <table id="metadataTable" class="table table-striped">
                        <thead>
                            <tr id="tableHeaders">
                                <th>Documento</th> <!-- Columna para los nombres de documentos -->
                                <!-- Los encabezados de las columnas de metadatos se añadirán aquí -->
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Las filas de la tabla se añadirán aquí -->
                        </tbody>
                    </table>


// Limpiar la tabla antes de añadir nuevos datos
tableBody.innerHTML = '';
documentDetailsSection.innerHTML = '';


const title = document.createElement('h1');
                        const tr = document.createElement('tr');

                        // Añadir nombre del documento en la primera columna
                        const idCell = document.createElement('td');
                        idCell.textContent = doc.documento_nombre; // Nombre del documento
                        tr.appendChild(idCell);

                        // Añadir datos de metadatas en las columnas restantes
                        metadataIds.forEach(id => {
                            const td = document.createElement('td');
                            const metadata = doc.metadatas.find(meta => meta.nombre === id);
                            td.textContent = metadata ? metadata.data : '---'; // Mostrar '---' si no hay datos
                            tr.appendChild(td);
                        });

                        tableBody.appendChild(tr);

                        // Añadir detalles de metadatas debajo de cada documento
                        const documentDiv = document.createElement('div');
                        const documentTitle = document.createElement('h5');
                        documentTitle.textContent = `Documento: ${doc.documento_nombre}`;
                        documentDiv.appendChild(documentTitle);

                        const sectionsDiv = document.createElement('div');
                        sectionsDiv.className = 'section-list';

                        doc.secciones.forEach(seccion => {
                            const sectionItem = document.createElement('div');
                            const sectionTitle = document.createElement('h6');
                            sectionTitle.textContent = `Sección: ${seccion.nombre}`;
                            sectionItem.appendChild(sectionTitle);

                            const metadataList = document.createElement('ul');
                            seccion.metadatas.forEach(metadata => {
                                const metadataItem = document.createElement('li');
                                metadataItem.textContent = `${metadata.nombre}: ${metadata.data || 'nada'}`;
                                metadataList.appendChild(metadataItem);
                            });
                            
                            if (seccion.metadatas.length === 0) {
                                const metadataItem = document.createElement('li');
                                metadataItem.textContent = 'nada';
                                metadataList.appendChild(metadataItem);
                            }

                            sectionItem.appendChild(metadataList);
                            sectionsDiv.appendChild(sectionItem);
                        });

                        documentDiv.appendChild(sectionsDiv);
                        documentDetailsSection.appendChild(documentDiv);


                        let tableBody = "";
                            let tableHeader = "";
                            doc.metadatas.forEach((item) => {
                            tableHeader += `
                                <thead>
                                    <tr>
                                        <th>${item.nombre}</th>        
                                    </tr>
                                </thead>
                            `;

                            tableBody += `
                                <tbody>
                                    <tr>
                                        <td>${item.data}</td>
                                    </tr>
                                </tbody>
                            `;
                            });
                            const tableHtml = `
                                <h4>Documento: ${doc.documento_nombre}</h4>
                                <table>
                                <thead>
                                ${tableHeader}  
                                </thead>
                                <tbody>                   
                                ${tableBody}
                                </tbody>
                                </table>
                        `;






                        [
                            {
                                "documento_id": "038c22c2-1f18-441a-a74a-da4278108501",
                                "documento_nombre": "INFORME SOBRE REQUERIMIENTO SGD LOTERÍA",
                                "metadatas": [
                                    {"nombre": "fecha_de_nacimiento", "data": "2024-07-24"},
                                    {"nombre": "año", "data": "2024"},
                                ],
                            },
                            {
                                "documento_id": "239aa3b5-09c3-4627-bf6d-3bb1b0d94b52",
                                "documento_nombre": "INFORME REQUERIMIENTO SGD LOTERIA",
                                "metadatas": [
                                    {"nombre": "fecha_de_nacimiento", "data": "2024-07-24"},
                                    {"nombre": "año", "data": "23"},
                                ],
                            },
                            {
                                "documento_id": "5a8d5f73-9acc-4b33-88d5-54c8a946ed93",
                                "documento_nombre": "INFORME REQUERIMIENTO SGD LOTERIA",
                                "metadatas": [
                                    {"nombre": "fecha_de_nacimiento", "data": "2024-07-23"},
                                    {"nombre": "año", "data": "2024"},
                                ],
                            },
                            ]
                            
                             Sample array of objects
                            const data = [
                                { name: 'John Doe', age: 30, city: 'New York' },
                                { name: 'Jane Smith', age: 25, city: 'London' },
                                { name: 'Bob Johnson', age: 35, city: 'Paris' }
                            ];
                            
                            // Function to generate the HTML table
                            function generateTable(data) {
                                // Create the table element
                                const table = document.createElement('table');
                            
                                // Create the table header row
                                const headerRow = document.createElement('tr');
                                Object.keys(data[0]).forEach(key => {
                                    const th = document.createElement('th');
                                    th.textContent = key;
                                    headerRow.appendChild(th);
                                });
                                table.appendChild(headerRow);
                            
                                // Create the table body rows
                                data.forEach(item => {
                                    const row = document.createElement('tr');
                                    Object.values(item).forEach(value => {
                                        const td = document.createElement('td');
                                        td.textContent = value;
                                        row.appendChild(td);
                                    });
                                    table.appendChild(row);
                                });
                            
                                // Return the generated table
                                return table;
                            }
                            
                            // Get the container element where the table will be rendered
                            const container = document.querySelector('#tableContainer');
                            
                            // Render the table
                            const table = generateTable(data);
                            container.appendChild(table);