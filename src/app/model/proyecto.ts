export class Proyecto {
    id?: number;
    tituloProyecto: string;
    fechaProyecto: string;
    descripcionProyecto: string;
    

    constructor(tituloProyecto: string, fechaProyecto: string, descripcionProyecto: string) {
        this.tituloProyecto = tituloProyecto;
        this.fechaProyecto = fechaProyecto;
        this.descripcionProyecto = descripcionProyecto;
    }




}
