export interface File {
    id?: number;
    filename: string;
    mimetype: string;
    encoding: string;
    content: Buffer;
}