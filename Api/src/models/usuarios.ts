import { IUsuarios } from "../interface/iUsuarios";

export class Usuarios implements IUsuarios {
    id: number = 0;
    nombre: string = '';
    correo: string = '';
    rut: string = '';
    password: string = '';
}