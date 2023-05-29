const dayInput =  document.getElementById('day')
const monthInput =  document.getElementById('month')
const yearInput =  document.getElementById('year')
const form = document.getElementById('form')
const textElement = document.querySelectorAll('.time');
const fecha = `${yearInput.value}-${monthInput.value}-${dayInput.value}`



const fechaActual = new Date()

const regEx1= /^(?:[1-9]|1\d|2\d|3[01])$/
const regEx2= /^(?:[1-9]|1[0-2])$/
const regEx3= /^(19[0-9]{2}|20[0-1][0-9]|202[0-3])$/



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const removeClases = (elemeto)=>{
     elemeto.nextElementSibling.classList.remove('alert-show')
     elemeto.previousElementSibling.classList.remove('label-error')
     elemeto.classList.remove('input-error')
}
        const addClases = (elemeto)=>{
     elemeto.nextElementSibling.classList.add('alert-show')
     elemeto.previousElementSibling.classList.add('label-error')
     elemeto.classList.add('input-error')
}
    if(regEx3.test(yearInput.value) && regEx2.test(monthInput.value) && regEx1.test(dayInput.value)){
        const fecha = `${yearInput.value}-${monthInput.value}-${dayInput.value}`
        const fechaNacimiento = new Date(fecha.toString())
        const fechaActual = new Date();
        const diferencia = fechaActual - fechaNacimiento;
        const totalDays =  Math.floor(diferencia/(1000*60*60*24))
        const totalYears = Math.floor(totalDays/365)
        const totalMounths = Math.floor((totalDays%365)/30)
        const days = (totalDays%365)%30

        textElement[0].firstElementChild.textContent = `${totalYears}`
        textElement[1].firstElementChild.textContent = `${totalMounths}`
        textElement[2].firstElementChild.textContent = `${days}`
         

            removeClases(yearInput)
            removeClases(monthInput)
            removeClases(dayInput)
        
    }

       

    
    
        else if(regEx1.test(dayInput.value)==false){
            addClases(dayInput)
        }
        else if(regEx1.test(dayInput.value)){
            removeClases(dayInput)
            }
    
    
        if(regEx2.test(monthInput.value)==false){
            addClases(monthInput)
            
        }
        else if(regEx2.test(monthInput.value)){
            removeClases(monthInput)
            
        }
         if(regEx3.test(yearInput.value)==false){
            addClases(yearInput)
        }
        else if(regEx3.test(yearInput.value)){
            removeClases(yearInput)
        }
    if(regEx3.test(yearInput.value)==false || regEx2.test(monthInput.value)==false || regEx1.test(dayInput.value)==false){
        textElement.forEach(element => element.firstElementChild.textContent = '--')
        
    }

    
})


