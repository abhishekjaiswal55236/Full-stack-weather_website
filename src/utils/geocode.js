const request=require("request")
const getlatlon=(location,callback)=>{
  const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiYWJoaXNoZWs1NTIzNiIsImEiOiJjandub2tmOGUwZ3o4NGNvZGw1a241NHU5In0.j-AWJYKaX1_ZSwNu92IePw"
  request({url,json:true},(error ,response)=>{
    if(error)
    {
      callback("Cant reach location services",undefined)
    }
    else if(response.body.features.length===0)
    {
      callback("loaction not found",undefined)
    }
    else {
      {
        callback(0,{
          latitude:response.body.features[0].center[1],
          longitude:response.body.features[0].center[0],
          location:response.body.features[0].place_name
        })
      }
    }
  })
}
module.exports=getlatlon
