let recipes = document.querySelectorAll('a');

recipes.forEach((recipe) => recipe.addEventListener('click', ordenar));

function ordenar(e) {
  e.preventDefault();

  let opcionCliente = e.currentTarget;
  let ordenGenerada = opcionCliente.dataset.choice;
  let preparar = '';

  preparar += `Cliente ordeno, ${ordenGenerada}`;

  console.log(preparar);
}
