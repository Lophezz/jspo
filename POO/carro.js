import { automovel } from "./auto.js"

class car extends automovel{

 car2
 
 constructor(marca,modelo,ano,car2){
    super(marca,modelo,ano,car2)
    this.car2 = car2;   
 }
 

comprar(marca,ano,modelo){

this.setMarca(marca)
this.setAno(ano)
this.setModelo(modelo)

return "Esse é a marca: " + this.getMarca() + "\n" + "Esse é o modelo: " + this.getModelo() + "\n" + "Esse é o ano: " + this.getAno()
}


}





const xiu = new car("Sla","??","???","????");


console.log(xiu.comprar("Porshe","2022","Porshe sla oq"))