let list = document.querySelectorAll('li')

list.forEach(elemen => {
  elemen.addEventListener('click',() => {
    let answer = elemen.querySelector('.answer')
    answer.classList.toggle('show')

    let arrow = elemen.querySelector('.arrow')
    arrow.classList.toggle('transform')
    
    let question = elemen.querySelector('.question')
    question.classList.toggle('bold')
  })
})
