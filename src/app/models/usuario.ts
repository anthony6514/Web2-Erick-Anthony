export interface Usuario {
    id?: string | number;
    name: string;
    email: string;
    phone: string;
    password?: string;
    rol: string;
    username?: string;
    website?: string;
}