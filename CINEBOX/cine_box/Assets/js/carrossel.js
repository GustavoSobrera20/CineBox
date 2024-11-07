let indexSlide = 0;
 
function showSlide(index)
{
    const carrossel = document.querySelector('.carrossel-1')
    const totalSlide = document.querySelectorAll(".carrossel-1 img").length
 
    if(index >= totalSlide){
        indexSlide = 0
    }else if(index < 0 ){
        indexSlide = totalSlide -1
    }else{
        indexSlide = index
    }
 
    const offset = -indexSlide*100
    carrossel.style.transform = `translateX(${offset}%)`
}
 
function proximoSlide(){
    indexSlide = indexSlide +1
    showSlide(indexSlide)
}
 
function voltarSlide(){
    indexSlide = indexSlide - 1
    showSlide(indexSlide)
}
 
setInterval(() =>{
    proximoSlide()
},2000)