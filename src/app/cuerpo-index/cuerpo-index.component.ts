import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuerpo-index',
  templateUrl: './cuerpo-index.component.html',
  styleUrls: ['./cuerpo-index.component.css']
})
export class CuerpoIndexComponent implements OnInit {

  constructor(private router: Router) { }
  //HJM Agregue el router por parametro para poder usarlo en el metodo
  ngOnInit(): void {
  }
  //HJM Metodo que atiende el click dle boton conocenos
  onClickContacto() {
      this.router.navigateByUrl('/nosotros');
    }

}
