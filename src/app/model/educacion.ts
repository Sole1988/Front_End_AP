export class Educacion {
    id?: number;
    tituloEdu: string;
    fechaEdu: string;
    descripcionEdu: string;
    InstitutoEdu: string;
    imagenEdu: string;

    constructor(tituloEdu: string, fechaEdu: string, descripcionEdu: string, InstitutoEdu: string, imagenEdu: string) {
        this.tituloEdu = tituloEdu;
        this.fechaEdu = fechaEdu;
        this.descripcionEdu = descripcionEdu;
        this.InstitutoEdu = InstitutoEdu;
        this.imagenEdu = imagenEdu;
  
    }
}
    

