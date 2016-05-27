(function navInteraction() {
  var navIcon = document.querySelector('#nav-icon')
  var nav = document.querySelector('.site__nav')
  var illustrations = document.querySelector('#illustrations')
  var subNav = document.querySelector('.site__nav--sub')
  var subNavItems = document.querySelectorAll('.site__nav--sub-item')

  navIcon.onclick = function() {
    this.classList.toggle('active')
    nav.classList.toggle('visible')
  }

  // illustrations subnav transitions called on click or hover
  var itemTransition = function(e){
    e.preventDefault()
    subNav.classList.toggle('show')
    for (var i = 0; i < subNavItems.length; i++) {
      subNavItems[i].style.opacity = 1
      subNavItems[i].style.transitionDelay = i/(i+2) + 's'
      console.log(subNavItems[i])
    }
  }

  illustrations.addEventListener('mouseover', itemTransition)
  illustrations.addEventListener('click', itemTransition)
})();

//
//   //Current Tab
//   var illustrations = document.querySelector('#illustrations')
//   var thoughts = document.querySelector('#thoughts')
//   var about = document.querySelector('#about')
//   var current = document.querySelector('.current')
//
//   if (window.location.pathname.indexOf('/thoughts') === 0){
//     current.innerHTML = "thoughts"
//     thoughts.style.display = "none"
//   } else if (window.location.pathname.indexOf('/about') === 0){
//     current.innerHTML = "about"
//     about.style.display = "none"
//   }
//   else {
//     current.innerHTML = "illustrations"
//     illustrations.style.display = "none"
//   }
//
// })();
