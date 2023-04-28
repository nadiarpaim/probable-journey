// older methods for selecting
// elements from a page

// can only get elements by their id
// const app = document.getElementById('someIdHere')

// can only get elements by their class
// const app = document.getElementsByClassName('someClassHere')

// Can select id's, classes and elements without either
const app = document.querySelector('#app')

const childNodes = app.childNodes
const firstParagraph = app.children[0]

// we can log the text content of an
// element with the textContent property
// on a element we have selected
console.log(childNodes)

// not best practice
firstParagraph.onclick = () => {
    console.log('You clicked my paragraph!')
}

// change the text of an element
firstParagraph.textContent = 'WOW!'

const specialElement = document.querySelector('#specialElement')

// not best practice, don't traverse
// the DOM unless you HAVE to
const app2 = specialElement.parentElement
const nextParagraph = firstParagraph.nextSibling
const lastParagraph = nextParagraph.nextSibling

console.log(nextParagraph)
console.log(lastParagraph)

// Good Practice
// While query selector returns an object or null
// query selector all ALWAYS returns a NodeList
// If the selection is not found the node list is empty
const paragraphs = document.querySelectorAll('#app>p')
const input = document.querySelectorAll('input[type=text]')

paragraphs.forEach((node) => {
    console.log('Node List:', node)
})

console.log(paragraphs.length)

// converting a node list into an array to
// be able access array methods like map, filter
const paragraphArray = [...paragraphs]

paragraphArray.map((node) => {
    console.log('node[]:', node)
})
console.log(paragraphArray)
// paragraphArray.filter()
// paragraphArray.forEach()

// console.log(paragraphs)
// console.log(input)
