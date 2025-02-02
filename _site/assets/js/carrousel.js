const imgContainer = document.querySelector('.img-container')
const dot = document.querySelectorAll('.dot')

dot.forEach( (eachDot, i)=>{
    dot[i].addEventListener('click', ()=>{
        let position = i

        let operation = position * - 100
        imgContainer.style.transform = `translateX(${operation}%)`

        dot.forEach( (eachDot, i)=>{
            dot[i].classList.remove('active')
        })
        dot[i].classList.add('active')
    })
})