// Modelos para la ofuscación de urls

export interface ObjectBase64 {
    id: string;
    codType: string;
    procedimientoId?: string;
    consentimientoId?: string;
}

export interface ObjectUrl {
    descripcion: string;
    url: string;
}