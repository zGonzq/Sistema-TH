import { IConfiguracion } from "../interface/iConfiguracion";

export class Configuracion implements IConfiguracion {
    id: number = 0;
    usuario_id: number = 0;
    frecuencia_registro: number = 0;
}