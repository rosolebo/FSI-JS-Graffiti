
// Select some elements...
let header = document.querySelector('#page-header')
header.style.color = 'blue'

let dogimages = document.querySelectorAll('.dog-image')
for(let i =0; i < dogimages.length; i++){
    dogimages[i].style.borderRadius = '50px'
}

let dogname = document.querySelectorAll('.dog-name')
for(let i =0; i < dogname.length; i++){
    dogname[i].style.textAlign = 'left'
}

let footer = document.querySelector('.footer')
footer.style.color = 'blue'