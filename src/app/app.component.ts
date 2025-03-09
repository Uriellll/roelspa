import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cmroelSPA';
  ngOnInit() {
    let el: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.thumb li');
    for (let i = 0; i < el.length; i++){
      el[i].onclick = function(){
        let c = 0;
        while (c < el.length){
          el[c++].className = 'check';
        }
        el[i].className = 'check active'
      }
    }
    this.slider();
    this.sliderProducts();
    this.indicatorProducts();
   
  }
  slider(){
    let i = 0;
    let interval = setInterval(function(){
      
      let el: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.thumb li');
      let len = el.length;
      if(i < el.length){
        el[i].click();
        i++;
      }else{
        i = 0;
      }
      


    },5000)
  }
  sliderProducts(){
    let i = 1;
    let interval = setInterval(function(){
      
      let el: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.products-list .list');
      

      
      if(i < el.length){
      
        el[i].click();
        i++;
      }else{
        i = 0;
      }
      


    },10000)
  }
  indicatorProducts(){
    let list :NodeListOf<HTMLButtonElement> = document.querySelectorAll('.products-list ul li');
    for(let i =0; i<list.length; i++){
      list[i].onmouseover = function(){
        let j = 0;
        while(j< list.length){
          list[j++].className = 'list';
        }
        list[i].className = 'list active';
      }
    }
  }
}
