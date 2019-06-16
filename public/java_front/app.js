//this is client side javascript
fetch("http://puzzle.mead.io/puzzle").then((response)=>{
      response.json().then((data)=>{
          console.log(data);
      })
})

const weatherform=document.querySelector('form')
const searchElement=document.querySelector('input')
const para1=document.querySelector("#ans-1")
const para2=document.querySelector("#ans-2")
const para3=document.querySelector("#ans-3")
para1.textContent="put in an address to get forecast!!"
para2.textContent=''
para3.textContent=''

weatherform.addEventListener('submit',( e)=>{
  para1.textContent="loading............"
  para2.textContent=''
  para3.textContent=''
e.preventDefault()
fetch("http://localhost:3000/weather?address="+searchElement.value).then((response)=>{
  response.json().then((data)=>{
    if(data.error){
      para1.textContent=data.error
      para2.textContent=''
      para3.textContent=''
    }
    else{


      para1.textContent=data.location
      para2.textContent='temperature is:    '+data.forecast.temperature
      para3.textContent='dewpoint is :      '+data.forecast.dewpoint
    }
  })
})
})
