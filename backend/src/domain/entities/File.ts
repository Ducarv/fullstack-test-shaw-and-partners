export interface File {
    id?: number;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer
    size: number;
}