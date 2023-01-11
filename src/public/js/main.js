

const url = window.location.pathname
console.log(url)
if(url == '/list'){
     const list = document.querySelector('.listClient')
     list.classList.toggle('none')
}
