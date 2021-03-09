export class UserModel
{
    id?: String;
    usuario: String;
    contraseña?: String;
    customerId?:String;

    constructor() {
        this.usuario = '';
    }
}