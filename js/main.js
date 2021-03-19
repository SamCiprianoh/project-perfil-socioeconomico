/*========== MENU DROPDOWN ===========*/
const elementsDoc = document.querySelectorAll('.nav__link-drop')
const elementsDrop = document.getElementsByClassName('nav__dropdown-content')
const dropIcon = document.getElementsByClassName('nav__icon-drop')

elementsDoc.forEach(item =>{
   item.addEventListener('click', function() {
      let j
      for(let i = 0; i <= 5; i++){if(elementsDoc[i] === item){j = i}}
      elementsDrop[j].classList.toggle('nav__dropdown-hide')
      dropIcon[j].classList.toggle('nav__dropdown-rotate')
  });
});



/*========== LINK ACTIVE ===========*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(item => item.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(item => item.addEventListener('click', colorLink))




/*========== SHOW MENU ===========*/
 const btnToggle = document.getElementsByClassName('header__toggle')[0]
 const navBar = document.getElementsByClassName('nav')[0]
 const mainMove = document.getElementsByClassName('main')[0]

 btnToggle.addEventListener('click', function(){
    navBar.classList.toggle('nav--hiden')
    mainMove.classList.toggle('main--move')
 })