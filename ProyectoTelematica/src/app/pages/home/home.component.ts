import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray } from '@angular/forms'
import {NgForm} from '@angular/forms'
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { MensajeService } from '../../services/mensaje.service';
import {MensajeModule} from '../../modules/mensaje/mensaje.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorpuntaje=false;
  errormensaje=false;
  errorCheck=false;
 ErroEnvio=false;
 enviado = false;

checkoutForm:FormGroup;

  objects = [{
    codigo:1,
    name:"Base",
    price:"2000",
    image:"/assets/img/base.jpg"
  },
  {
    codigo:2,
    name:"Polvo multipiel",
    price:"2000",
    image:"/assets/img/polvomultipiel.jpg"
  },
  {
    codigo:3,
    name:"Labial Natural",
    price:"2000",
    image:"/assets/img/labialnatural.jpg"
  },
  {
    codigo:4,
    name:"Lapiz natural",
    price:"2000",
    image:"/assets/img/lapiznatural.jpg"
  },
  {
    codigo:5,
    name:"Polvo organico",
    price:"2000",
    image:"/assets/img/polvoorganico.jpg"
  },
  {
    codigo:6,
    name:"sombra natural",
    price:"2000",
    image:"/assets/img/sombranatural.jpg"
  },
  {
    codigo:7,
    name:"Base humectante",
    price:"2000",
    image:"/assets/img/polvonatural.jpg"
  },
  {
    codigo:8,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
   {
    codigo:9,
    name:"Kit de brochas",
    price:"2000",
    image:"/assets/img/kitbrochas.jpg"
  },
   {
    codigo:10,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillorosado.jpg"
  },
  {
    codigo:11,
    name:"brillo magico",
    price:"2000",
    image:"/assets/img/brillomagico.jpg"
  },
 {
    codigo:12,
    name:"delineador en gel",
    price:"2000",
    image:"/assets/img/delineadorgel.jpg"
  },
 {
    codigo:13,
    name:"delineadornegro",
    price:"2000",
    image:"/assets/img/delineadornegro.jpg"
  },
 {
    codigo:14,
    name:"Brochas",
    price:"2000",
    image:"/assets/img/brochas.jpg"
  },
 {
    codigo:15,
    name:"Bases",
    price:"2000",
    image:"/assets/img/bases.jpg"
  },
 {
    codigo:16,
    name:"Delineador",
    price:"2000",
    image:"/assets/img/delineador.jpg"
  },
   {
    codigo:17,
    name:"labial cafe",
    price:"2000",
    image:"/assets/img/labialcafe.jpg"
  },
 {
    codigo:18,
    name:"polvo",
    price:"2000",
    image:"/assets/img/polvo.jpg"
  },
 {
    codigo:19,
    name:"perfume",
    price:"2000",
    image:"/assets/img/perfume.jpg"
  },
 {
    codigo:20,
    name:"brillo rosado",
    price:"2000",
    image:"/assets/img/brillo.jpg"
  },
 {
    codigo:21,
    name:"Esmalte",
    price:"2000",
    image:"/assets/img/esmalte.jpg"
  },
 {
    codigo:22,
    name:"Espuma",
    price:"2000",
    image:"/assets/img/espuma.jpg"
  },
 {
    codigo:23,
    name:"rubor",
    price:"2000",
    image:"/assets/img/rubor.jpg"
  },
 {
    codigo:24,
    name:"pestanina negra",
    price:"2000",
    image:"/assets/img/pestanina.jpg"
  },
 {
    codigo:25,
    name:"labial rojo",
    price:"2000",
    image:"/assets/img/labialrojo.jpg"
  },
 {
    codigo:26,
    name:"sombras",
    price:"2000",
    image:"/assets/img/sombrasb.jpg"
  },
 {
    codigo:27,
    name:"crema humectante",
    price:"2000",
    image:"/assets/img/crema.jpg"
  },
 {
    codigo:28,
    name:"peinilla",
    price:"2000",
    image:"/assets/img/peinilla.jpg"
  },
 {
    codigo:29,
    name:"Antienvejecimiento",
    price:"2000",
    image:"/assets/img/antienvejecimiento.jpg"
  },
 {
    codigo:30,
    name:"Maquillaje ecologico",
    price:"2000",
    image:"/assets/img/maquillajeecologico.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },
 {
    codigo:16,
    name:"brillo Labial",
    price:"2000",
    image:"/assets/img/brillolabial.jpg"
  },

  


];

objectsCheck = [];

mensaje={
  emailCliente:null,
  calificacion:null,
  mensaje:null,
  productosSeleccionados:null,
}


  constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute,
              private mensajeService: MensajeService) {
  }

  ngOnInit() {
    this.mensaje.emailCliente = this.rutaActiva.snapshot.params.email;
  }

  enviar() {
    let puntaje = $("#puntaje option:selected").val();
    let mensaje = $("#mensaje").val();
    let productosselect = this.objectsCheck.toString();
   if(puntaje=="Open this select menu"){
  this.errorpuntaje=true;}
  else if(mensaje==""){console.log("vacio",mensaje);this.errormensaje=true;}
  else if(productosselect==""){this.errorCheck = true}
     else{
       this.errorpuntaje=false;
       this.errormensaje=false;
       this.errorCheck=false;
console.log(mensaje);
this.mensaje.productosSeleccionados = productosselect;
this.mensaje.mensaje=mensaje;
this.mensaje.calificacion=puntaje;
console.log("this ",this.mensaje);
this.mensajeService.postMensaje(this.mensaje).subscribe(resp =>{
  console.log(resp);
  if(resp){
    console.log("Enviado")
    this.enviado = true;
    //document.getElementById("mensaje").value = "";
  }
}, (err) =>{
  console.log("El error es: ",err);
  console.log("El error es: ",err.error.err.message);
});
    }
    }

  onCheckChange(event) {

  /* Selected */
  if(event.target.checked){
    // Add a new control in the arrayForm
    this.objectsCheck.push(event.target.value);
    console.log(this.objectsCheck);
  }
  /* unselected */
  else{
    // find the unselected element
    let i: number = 0;

    for(i;i<this.objectsCheck.length;i++){
      if(this.objectsCheck[i]==event.target.value){this.objectsCheck.splice(i,1);}
    }

//    this.objectsCheck.forEach((ctrl: FormControl) => {
  //    if(ctrl.value == event.target.value) {
        // Remove the unselected element from the arrayForm
      //  this.objectsCheck.removeAt(i);
    //  delete this.objectsCheck[i];
    //    return;
  //    }
      console.log(this.objectsCheck);
      i++;
  //  });
  }
//
//  check(i) {
  //  if (this.objects) {
    //  this.objects[i].check = !this.objects[i].check;
    //  console.log(this.objects[i]);
    //  console.log("Estado actual: ", this.objects)
    //}
  //}

}}
