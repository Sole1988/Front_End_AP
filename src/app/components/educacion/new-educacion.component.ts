import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  tituloEdu: string = '';
  fechaEdu: string = '';
  descripcionEdu: string = '';
  InstitutoEdu: string = '';
  imagenEdu: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.tituloEdu, this.fechaEdu, this.descripcionEdu, this.InstitutoEdu, this.imagenEdu);
    this.sEducacion.save(educ).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}




