import { v4 as uuidv4Plugin } from 'uuid';

// Si el dia de maniana cambia el paquete solo cambio este archivo
export const getUuid = () => {
    return uuidv4Plugin();
}
