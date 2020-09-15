import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

  color: boolean=false;

  constructor() { }

  name = 'Another';

  detalles = {
    nombre: 'mesa',
    estilo: 'madera',
    cantidad: 3
  };

  ngOnInit(): void {
  }

  open(){
    this.color=true;
  }

}
