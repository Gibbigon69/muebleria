export interface Proveedores{
    _id:{
        $oid: string;
    }
    nombreProveedor: string;
    RFC: string;
    telefono: string;
    direccion: {
        calle: string;
        colonia: string;
        ciudad: string;
        estado: string;
        codigoPostal: string;
        pais: string;
    }
}