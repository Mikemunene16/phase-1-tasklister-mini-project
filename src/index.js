document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    newTask(document.getElementById('new-task-description').value);

    form.reset();
  })

});

function newTask(task) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)

  li.textContent = `${task} `;
  btn.textContent = 'x';
  console.log(li);

  document.querySelector('#tasks').appendChild(li);
  li.appendChild(btn);
  // document.getElementsByTagName(li).appendChild(btn);
}


function handleDelete(e) {
  e.target.parentNode.remove();
}