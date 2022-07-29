import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
nombreSkill: string = '';
porcentajeSkill: string = '';
imagenSkill: string = '';

  constructor(private sSkills: SSkillsService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skillnew = new Skills(this.nombreSkill, this.porcentajeSkill, this.imagenSkill);
    this.sSkills.save(skillnew).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}



