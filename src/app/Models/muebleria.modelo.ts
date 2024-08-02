export interface ProductosMuebles {
    _id: {
        $oid: string;
    }
    nombre: string;
    categoria: {
        nombreCat: string;
        zona: string;
        descripcionCat: string;
    };
    marca: {
        nombremarca: string;
        modelo: string;
    };
    costo: number;
    dimensiones: {
        largo: string;
        alto: string;
        ancho: string;
    };
    color: string[];
    foto: string;
    fechaAdquisicion: string; 
    cantidad_existente: number;
    status: string;
    material_de_fabricacion: string[];
    origen: {
        pais: string;
        idioma: string;
    },
    marca_id: number,
    provId: string
}
