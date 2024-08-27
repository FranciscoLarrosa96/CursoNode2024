
// Si el dia de maniana cambia el paquete solo cambio este archivo
export const getAge = (birthdate: string) => {
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
