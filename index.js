let pink = document.querySelector('.pink')
let gray = document.querySelector('.gray')
let turquoise = document.querySelector('.turquoise')
let body = document.querySelector('BODY') 
let yellow = document.querySelector('.yellow')
let purple = document.querySelector('.purple')
gray.checked = true

pink.addEventListener('click', (event)=> {
    setTheme(event)
})
gray.addEventListener('click', (event)=> {
    setTheme(event)
})
turquoise.addEventListener('click', (event)=> {
    setTheme(event)
})
yellow.addEventListener('click', (event) => {
    setTheme(event)
})
purple.addEventListener('click', (event)=> {
    setTheme(event)
})

function setTheme (event) {
    if (pink.checked) {
        body.style.background = 'pink'
    }
    if (gray.checked) {
        body.style.background = "gray";
    }
    if (turquoise.checked) {
        body.style.background = "#0cd8ebaa";
    }
    if (yellow.checked) {
        body.style.background = '#f5ff2db3';
    }
    if(purple.checked) {
        body.style.background = '#a619e7b3'
    }
}