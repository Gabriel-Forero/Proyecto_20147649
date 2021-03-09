import { UserModel } from "./user.model";

export class CustomerModel{
    id?:string;
    documento: string;
    nombre: String;
    apellido: String;
    celular: String;
    email: String;
    ciudad: String;
    pais: String;
    user?: UserModel;

    constructor() {
        this.documento = '';
        this.nombre='';
        this.apellido='';
        this.celular='';
        this.email='';
        this.ciudad='';
        this.pais='';
    }
}