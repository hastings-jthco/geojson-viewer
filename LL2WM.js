const PI_2 = Math.PI/2, Rad_Deg = PI_2/90
const REarth = 6731e3 //, m_Deg = Rad_Deg*REarth  // average authalic redius 
const hcEarth = 20037508, m_Deg = hcEarth/180  // auravant.com spec; confirmed via https://tool-online.com/en/coordinate-converter.php

function toWM(LL) {
// LonLat[] to WebMercator EingNing[]  
  var Eing = LL[0]*m_Deg
  var Ning = Math.log(Math.tan(0.5*(PI_2+LL[1]*Rad_Deg)))/Rad_Deg*m_Deg  // generic
  return [Eing, Ning]
}
function toLL(EN) {
// WebMercator EingNing[] to LonLat[]
  var Lon = EN[0]/m_Deg
  var Lat = (2*Math.atan(Math.exp(EN[1]/m_Deg*Rad_Deg)) -PI_2)/Rad_Deg  // generic; see Wikipedia
//var Lat = (Math.atan(Math.pow(Math.E, EN[1]/m_Deg*Rad_Deg))*360)/Math.PI -90  // more accurate; see: https://developers.auravant.com/en/blog/2022/09/09/post-3/
  return [Lon, Lat]
}

const Orig = [0,0]
const LTahoe = [-120, 39]
var EN = toWM(LTahoe); console.log(EN[0], EN[1])
var LL = toLL(EN); console.log(LL[0], LL[1])
