

const url = window.location.pathname
console.log(url)
if(url == '/list'){
     const list = document.querySelector('.listClientB')
     list.classList.toggle('none')
}
if(url == '/register'){
     const list = document.querySelector('.listClientA')
     list.classList.toggle('none')
}
