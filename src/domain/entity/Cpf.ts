export default class Cpf {
    cpf: string = '';
    CPF_LENGTH = 11;
    EXCEPTION_MESSAGE = 'Document is invalid';

    constructor(readonly rawCpf: string) {
        this.validateParameter(rawCpf);
    }

    private isInvalidLength(cpf: string) {
        return cpf.length !== this.CPF_LENGTH;
    }
    
    private allCharactersIsEqual(cpf: string) {
        const firstCharacter = cpf[0];
        const splitCharacters = [...cpf];
        return splitCharacters.every(currentValue => currentValue === firstCharacter);
    }

    private isValidCpf(cpf: string) {
        const isNotValidCpf = this.isInvalidLength(cpf) || this.allCharactersIsEqual(cpf);
        if (isNotValidCpf) this.invalidCpfException();
    }

    private cleanCpf(rawCpf: string) {
        return rawCpf.replace(/\D/g, '');
    }
    
    private isFalsy(cpf: string) {
        if (!cpf) this.invalidCpfException();
    }

    private validateParameter(rawCpf: string) {
        this.isFalsy(rawCpf);
        const cpfCleaned = this.cleanCpf(rawCpf);
	    this.isValidCpf(cpfCleaned);
        this.cpf = cpfCleaned;
    }

    private invalidCpfException() {
        throw new Error(this.EXCEPTION_MESSAGE);
    }

    private calculateCheckDigit(factor: number) {
        let total = 0;
        for (const character of this.cpf) {
            if (factor > 1) {
                const convertCharacterToNumber = parseInt(character);
                total += convertCharacterToNumber * factor--;
            }
        }
        const rest = total % this.CPF_LENGTH;
        const checkDigit = rest < 2 ? 0 : this.CPF_LENGTH - rest;
        return checkDigit;
    }

    validate() {
        const digit1 = this.calculateCheckDigit(10);
        const digit2 = this.calculateCheckDigit(this.CPF_LENGTH);
        const cpfCheckDigit = this.cpf.slice(9);
        const correctCheckDigit = `${digit1}${digit2}`;  
        return cpfCheckDigit === correctCheckDigit;
    }
}