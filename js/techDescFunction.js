const techAreas = document.querySelectorAll('.tech')
const techDescs = document.querySelectorAll(".techDesc")
const techDescContent =  {html5: "", css3: "", sass: "", javascript: "", git: "", bootstrap: ""}
const techDescArea = document.querySelector('.techDescArea')
const techDescInital = techDescArea.textContent


techDescs.forEach(techDesc => {
  techDescContent[techDesc.dataset.desc] = techDesc.innerHTML
})

techAreas.forEach(tech => {
  tech.addEventListener("click", (ev) => {
    techAreas.forEach(tech => {
      tech.classList.remove("techActive")
    })

    tech.classList.add('techActive')
    techDescArea.innerHTML = techDescContent[tech.id]

  })
})