export interface Ferreteria {
    _id: string;
    cantExistente: number;
    caracteristicas: string[];
    categoria: {
      descCat: string;
      nombCat: string;
    };
    costo: number;
    descuento: number;
    estatus: string;
    fechaAdq: string;
    fechaRegistro: string;
    fotoProducto: string;
    marcaId: string;
    nombProd: string;
    paisOrigen: string;
    precio: number;
    provId: string;
    unidadMedida: string;
  }