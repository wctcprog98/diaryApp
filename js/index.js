
//form
const entryForm = document.getElementById('entry-form')
//entries section
let entriesSection = document.getElementById('entries')
//variable to store entries
let textbox = document.getElementsByClassName('entry-textbox')

function addEntryToDom(event) {
    event.preventDefault();
      //clear form
    //   textbox[0].value = ''
    const entryDiv = document.createElement('div')
    entryDiv.className ='single-entry'
    entryDiv.innerText = textbox[0].value
    entriesSection.appendChild(entryDiv)
    textbox[0].value = ''
}

entryForm.addEventListener('submit', addEntryToDom)
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', function () {
    console.log('clicked')
    entriesSection.style.padding = '2em'
    entriesSection.style.maxWidth = '20em'
    entriesSection.style.marginTop = '1em' 
})

