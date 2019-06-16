const request=require("request")
const forecast=(latitude,longitude,callback)=>{
      const url="https://api.darksky.net/forecast/c7d848b0ac872dc8f751e0e35f7be46e/"+latitude+","+longitude+"?units=si"
      request({url,json:true},(error,response)=>{
        if(error)
        {
          callback("hey man, I cant reach the server please try again later",undefined)
        }
        else if(response.body.error)
        {
          callback("location not found",undefined)
        }
        else
          {
            callback(0,{
               temperature:response.body.currently.temperature,
               dewpoint:response.body.currently.dewPoint
            })
          }
      })

}
module.exports=forecast
