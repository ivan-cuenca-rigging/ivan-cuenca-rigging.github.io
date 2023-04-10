const imgContainer = document.querySelector('.img-container')
const dot = document.querySelectorAll('.dot')

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

dot.forEach( (eachDot, i)=>{
    dot[i].addEventListener('click', ()=>{
        let position = i
        let remValue = position * convertRemToPixels(2)
        let containerWidth = imgContainer.offsetWidth
        let percentageValue = (remValue / containerWidth) * 100
        let operation = (position * - 100) - percentageValue
        imgContainer.style.transform = `translateX(${operation}%)`

        dot.forEach( (eachDot, i)=>{
            dot[i].classList.remove('active')
        })
        dot[i].classList.add('active')
    })
})