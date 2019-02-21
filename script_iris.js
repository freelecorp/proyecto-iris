// JavaScript Document

fetch("mongodb://<dbuser>:<dbpassword>@ds111063.mlab.com:11063/iris2")
.then ((respuesta)=>{
  return respuesta.json();
}).then((respuesta)=>{
 document.getElementBy("SL")value=respuesta.sl;
 document.getElementBy("SW")value=respuesta.sw;
 document.getElementBy("PL")value=respuesta.pl;
 document.getElementBy("PW")value=respuesta.pw;
})                                              
