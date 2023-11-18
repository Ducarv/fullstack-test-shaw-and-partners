"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('File interface', () => {
    it('should match the File interface structure', () => {
        const file = {
            fieldname: 'file',
            originalname: 'example.csv',
            encoding: 'utf-8',
            mimetype: 'text/csv',
            buffer: Buffer.from('example csv data'),
            size: 1000,
        };
        expect(file).toHaveProperty('fieldname');
        expect(file).toHaveProperty('originalname');
        expect(file).toHaveProperty('encoding');
        expect(file).toHaveProperty('mimetype');
        expect(file).toHaveProperty('buffer');
        expect(file).toHaveProperty('size');
        expect(typeof file.fieldname).toBe('string');
        expect(typeof file.originalname).toBe('string');
        expect(typeof file.encoding).toBe('string');
        expect(typeof file.mimetype).toBe('string');
        expect(file.buffer).toBeInstanceOf(Buffer);
        expect(typeof file.size).toBe('number');
    });
    it('should throw an error if the file structure is incorrect', () => {
        const invalidFile = {
            originalname: 'example.csv',
            encoding: 'utf-8',
            mimetype: 'text/csv',
            buffer: Buffer.from('example csv data'),
            size: 1000,
        };
        function validateFileStructure() {
            if (!invalidFile.fieldname) {
                throw new Error('File structure is incorrect');
            }
        }
        expect(validateFileStructure).toThrow('File structure is incorrect');
    });
});
