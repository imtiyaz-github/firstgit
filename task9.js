

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

filter.addEventListener('keyup', onFilter);
form.addEventListener('submit', onSubmit);
itemList.addEventListener('click', onDelete);

function onFilter(e) {
  //filter
  //Code to filter list of items goes here
}

function onSubmit(e) {
e.preventDefault();

const inputValue = document.getElementById('item').value;
const description = document.getElementById('description').value;

if (!inputValue || !description) {
alert("Please enter both item and description!");
return;
}

const li = document.createElement('li');
li.className = 'list-group-item';
li.appendChild(document.createTextNode(inputValue + " "));
li.appendChild(document.createTextNode(description));

const deleteBtn = document.createElement('button');
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));
li.appendChild(deleteBtn);
itemList.appendChild(li);

document.getElementById('item').value = "";
document.getElementById('description').value = "";
}

function onDelete(e) {
if (e.target.classList.contains('delete')) {
if (confirm("Are you sure you want to delete this item?")) {
const li = e.target.parentElement;
itemList.removeChild(li);
}
}
}
function onFilter(e) {
// Get filter keyword
const keyword = e.target.value.toLowerCase();

// Get all items
const items = document.querySelectorAll('.list-group-item');

// Loop through items
items.forEach(function(item) {
    // Get item text
    const itemText = item.textContent.toLowerCase();

    // Check if item text contains the keyword
    if(itemText.indexOf(keyword) != -1) {
        // Show item if it contains the keyword
        item.style.display = 'block';
    } else {
        // Hide item if it doesn't contain the keyword
        item.style.display = 'none';
    }
});
}


