const mobileMenu = document.querySelector('.mobileMenuButton')

mobileMenu.addEventListener("click", (ev) => {
  const pageLinks = document.querySelector('.pageLinks')
  pageLinks.classList.toggle("menuActive")
  const links = document.querySelectorAll(".pageLinks li a")

  links.forEach((link) => {
    link.addEventListener("click", (ev) => {
      pageLinks.classList.remove("menuActive")
    })
  })
})