const path=require("path")
const express=require("express")
const hbs=require('hbs');
const getlatlon=require("./utils/geocode.js")
const forecast=require("./utils/forecast.js")
const port=process.env.PORT || 3000

const app=express()

//define path for express
const publicDirectory=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')
//setup static directory to server
app.use(express.static(publicDirectory))
//setup handlenbars location and views location
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialPath)


app.get('',(req,res)=>{
  res.render('index',{
    name:'abhishek jaiswal',
    college:"vnit"
  })

})
app.get('/about',(req,res)=>{
  res.render('about',{
    name:"Abhishek jaiswal"
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
    name:'Abhishek jaiswal',
    title:'help'

  })

})
app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
      error:"hey plese give something to search"
    })
  }
  res.send({
    products:"you a got go"
  })

})
app.get('/weather',(req,res)=>{
  if(!req.query.address){
    return res.send({
      error:"hey you must provide an address"
    })
  }
getlatlon(req.query.address,(error,response)=>{
  if(error){
    return res.send({error:error})
  }

      forecast(response.latitude,response.longitude,(error,data)=>{
        if (error){
          return res.send({error:error})
        }

           res.send({
            forecast:data,

            location:response.location
          })

      })


})

})
app.get('/help/*',(req,res)=>{
  res.render('404',{
    name:"help article not found"
  })
})

app.get('*',(req,res)=>{
  res.render("404",{
    name:"page not found"
  })
})



app.listen(port,()=>{
  console.log("enjoy your server is running ")
})
