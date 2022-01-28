const matrix1 = {
	id: '#matrix1',
	data: [['','','',''], ['','','',''], ['','','','']]
}
renderMatrix(matrix1);

const matrix2 = {
	id: '#matrix2',
	data: [
		[3, 0, 0, 0, 0],
		[0, 7, 0, 0, 0],
		[0, 0, 4, 0, 0],
		[0, 0, 0, 9, 0],
		[0, 0, 0, 0, 6],
	]
}
renderMatrix(matrix2);

const array1 = {
	id: '#matrix2Array',
	data: [3, 7, 4, 9, 6]
};

renderArray(array1);


function renderArray(arrayObject) { 
	const arrayContainer = document.querySelector(arrayObject.id)
	const arrayOL = document.createElement('ol');
	arrayOL.classList.toggle('array');
	for (let i = 0; i < arrayObject.data.length; i++) { 
		const dataValContainer = document.createElement('li')
		const dataValULContainer = document.createElement('ul')
		const dataVal = document.createElement('li')
		dataVal.innerText = `${arrayObject.data[i]}`
		dataValULContainer.append(dataVal);
		const index = document.createElement('li')
		index.innerText = `${i}`
		dataValULContainer.append(index);
		dataValContainer.append(dataValULContainer);
		arrayOL.append(dataValContainer);
	}
	arrayContainer.append(arrayOL);
}

function renderMatrix(matrixObject) { 
	const matrixContainer = document.querySelector(matrixObject.id);
	const table = document.createElement('table')
	table.classList.toggle('matrix');
	const tableHead = document.createElement('thead');
	table.append(tableHead);
	for (let i = 0; i < matrixObject.data[0].length; i++) { 
		const header = document.createElement('th');
		header.innerText = `${i}`
		tableHead.append(header);
	}
	const tableBody = document.createElement('tbody');
	for (let i = 0; i < matrixObject.data.length; i++) { 
		const row = document.createElement('tr');
		tableBody.append(row);
		for (let j = 0; j < matrixObject.data[i].length; j++) { 
			const cell = document.createElement('td');
			cell.innerText = `${matrixObject.data[i][j]}`;
			row.append(cell);
		}
	}
	const blankHead = document.createElement('th');
	tableHead.prepend(blankHead)
	table.append(tableBody);
	matrixContainer.append(table);
	const rows = matrixContainer.querySelectorAll('tr');
	for (let i = 0; i < rows.length; i++) { 
		const indexCell = document.createElement('td');
		indexCell.innerText = `${i}`;
		rows[i].prepend(indexCell);
	}
}