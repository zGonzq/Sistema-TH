import { IHistorico } from "../interface/iHistorico";

export class Historico implements IHistorico {
    id: number = 0;
    fecha: string = '';
    humedad: number = 0;
    temperatura: number = 0;
    orquidea: number = 0;
    configuracion_id: number = 0;
}