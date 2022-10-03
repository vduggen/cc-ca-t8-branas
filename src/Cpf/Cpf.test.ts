import Cpf from "./Cpf";

const makeSut = (cpf: string) => new Cpf(cpf);

describe('Cpf', function() {
    test('Deve validar um cpf com números repetidos', function() {
        const cpf = () => makeSut('111.111.111-11');
        expect(cpf).toThrow('Document is invalid');
    })

    test('Deve validar um cpf válido', function() {
        const cpf = makeSut('092.216.699-47');
        const result = cpf.validate();
        expect(result).toBeTruthy();
    })

    test('Deve validar um cpf com primeiro dígito zero', function() {
        const cpf = makeSut('136.729.298-08');
        const result = cpf.validate();
        expect(result).toBeTruthy();
    })

    test('Deve validar um cpf com segundo dígito zero', function() {
        const cpf = makeSut('211.246.041-20');
        const result = cpf.validate();
        expect(result).toBeTruthy();
    })

    test('Deve validar um cpf com 15 caracteres', function() {
        const cpf = () => makeSut('211.246.041-200000');
        expect(cpf).toThrow('Document is invalid');
    })
})