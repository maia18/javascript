// fetch('pessoas.json')
// .then(answer => answer.json())
// .then(json => loadElementsPage(json));

axios('pessoas.json')
.then(answer => loadElementsPage(answer.data))

function loadElementsPage(json) {
  const table = document.createElement('table');
  for (let people of json) {
    const tr = document.createElement('tr');

    let td_1 = document.createElement('td');
    td_1.innerHTML = people.nome;
    tr.appendChild(td_1);

    let td_2 = document.createElement('td');
    td_2.innerHTML = people.idade;
    tr.appendChild(td_2);

    let td_3 = document.createElement('td');
    td_3.innerHTML = people.salario;
    tr.appendChild(td_3);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}