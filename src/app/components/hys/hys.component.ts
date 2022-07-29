
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-hys',
  templateUrl:'./hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent{
  hys: Skills[] = [];
  
  
  constructor(private sSkill: SSkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.sSkill.lista().subscribe(data => { this.hys = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la Skill");
        }
      )
    }
  }
}

  
    
  


  




