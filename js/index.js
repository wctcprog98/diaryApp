// let submitBtn = document.getElementById('submit')
// submitBtn.addEventListener('click', function () {

// })

const entryForm = document.getElementById('entry-form')

function addEntryToDom(event) {
    event.preventDefault();
}

entryForm.addEventListener('submit', addEntryToDom)