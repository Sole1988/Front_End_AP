export class Skills {
    id?: number;
    nombreSkill: string;
    porcentajeSkill: string;
    imagenSkill: string;

    constructor(nombreSkill: string, porcentajeSkill: string, imagenSkill: string){
        this.nombreSkill= nombreSkill;
        this.porcentajeSkill= porcentajeSkill;
        this.imagenSkill= imagenSkill;
    }
}
