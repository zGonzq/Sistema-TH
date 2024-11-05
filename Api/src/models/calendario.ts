import { ICalendario } from "../interface/iCalendario";

export class Calendario implements ICalendario {
    id: number = 0;
    fecha: string = '';
    riego: string = '';
    orquidea: number = 0;
    usuario_id: number = 0;
}