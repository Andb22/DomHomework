document.addEventListener('DOMContentLoaded', () => {
  console.log('app loaded', window);
    console.log("This is working");
    console.dir('');


  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmission);

  const deleteButton = document.querySelector('#deleteList');
  deleteButton.addEventListener('click', handleDeleteAllClick);
});


const handleNewItemFormSubmission = function() {
event.preventDefault();

  const animalListItem = createAnimalListItem(event.target);
    const animalList = document.querySelector('.animal-list');
    animalList.appendChild(animalListItem);

    event.target.reset();
};

const createAnimalListItem = function(form) {
    const animalListItem = document.createElement('li');
    //animalListItem.animalList.add('.animal-list');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    animalListItem.appendChild(name);

    const species = document.createElement('h2');
    species.textContent = form.species.value;
    animalListItem.appendChild(species);

    const location = document.createElement('h3');
    location.textContent = form.location.value;
    animalListItem.appendChild(location);

    return animalListItem;
};
// Access the data from the form in an event
// Create new list item with the data input in the form

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('.animal-list');
  animalList.innerHTML = '';

};
