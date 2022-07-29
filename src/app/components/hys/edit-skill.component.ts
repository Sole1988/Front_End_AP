import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skillss: Skills = null;

  constructor(private sSkills: SSkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.detail(id).subscribe(
      data =>{
        this.skillss = data;
      }, err =>{
        alert("Error al modificar la Skills");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkills.update(id, this.skillss).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar al Skills");
         this.router.navigate(['']);
      }
    )
  }

}
  
  
  



