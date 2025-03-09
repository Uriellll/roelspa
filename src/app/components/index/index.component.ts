import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  imgSlider(value:string){
    let image:HTMLImageElement = <HTMLImageElement>document.querySelector('.roelImage');
    image.src = value;
    
  }
  changeBgColor(color:string){
    const bg = <HTMLElement>document.querySelector('.bg');
    bg.style.background = color;
  }
  changeBgProducts(image:string){
    let bg = <HTMLElement>document.querySelector('.products');
    let title =<HTMLElement>document.querySelector('.products h2');
    let boxProduct = <HTMLElement>document.querySelector('.products .text');
    let titleText = <HTMLElement>document.querySelector('.products .text h3');
    let text = <HTMLElement>document.querySelector('.products .text p')
    let valueTitle = '';
    let color = '';
    if(image === './assets/img/office.jpg'){
      valueTitle= 'Artículos de Oficina y papeleria';
      text.innerHTML = "<li>Papel</li><li>Artí­culos de papelería</li><li>Accesorios de escritorio</li><li>Almacenamiento</li><li>Tecnología</li><li>Arte y dibujo</li><li>Muebles de oficina</li>";
    }else if(image === './assets/img/consumibles.jpg'){
      valueTitle = 'Consumibles originales y genéricos';
      text.innerHTML = "<li>Tintas</li><li>Toner original y genérico</li>Manejamos todas las marcas del mercado";
      color = '#f74fae';
    }else if(image === './assets/img/limpieza.jpg'){
      valueTitle = 'Artículos de limpieza';
      text.innerHTML = "<li>Jarciería</li><li>Higiénicos</li><li>Químicos</li>De marca y/o industriales<li>Despachadores</li><li>Mops, jergas, franelas, y más</li>";
      color = '#4faef7';
      
    }else{
      valueTitle = 'Cafetería';
      text.innerHTML = "<li>Café</li><li>Bebidas y tés</li><li>Botanas</li><li>Azúcar y suplementos</li><li>Desechables</li>";
      color= '#f7984f';

    }
    boxProduct.style.background = color;
    title.style.background = color;
   
    bg.style.background = 'url('+image+')';
   
    bg.style.backgroundRepeat = 'no-repeat';
    bg.style.backgroundSize = 'cover';
    bg.style.backgroundPosition = 'center';
    
    titleText.innerHTML=valueTitle;
    
   
  }

}
