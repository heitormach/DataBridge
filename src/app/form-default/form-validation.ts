import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class FormValidation {

    static cpfLength = 11;
    static cnpjLength = 14;

    /**
     * Calcula o dígito verificador do CPF ou CNPJ.
     */
    static buildDigit(arr: number[]): number {

        const isCpf = arr.length < FormValidation.cpfLength;
        const digit = arr
            .map((val, idx) => val * ((!isCpf ? idx % 8 : idx) + 2))
            .reduce((total, current) => total + current) % FormValidation.cpfLength;

        return digit < 2 ? 0 : FormValidation.cpfLength - digit;
    }

    static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
            required: `Campo obrigatório`,
            minlength: `Campo precisar ter no mínimo ${validatorValue.requiredLength} caracteres`,
            maxlength: `Campo precisar ter no máximo ${validatorValue.requiredLength} caracteres`,
            email: `E-mail inválido.`,
            notSame: `A senha deve ser igual à primeira`,
            cnpjValidador: `CNPJ Inválido`,
            equalDigits: `CNPJ Inválido`,
            digit: `CNPJ Inválido`
        };

        return config[validatorName];
    }


    /**
     * Valida um CPF ou CNPJ de acordo com seu dígito verificador.
     */
    static validarCPFCNPJ(c: AbstractControl): ValidationErrors | null {

        if (c.value !== null) {
            const cpfCnpj = c.value.replace(/\D/g, '');

            // Verifica o tamanho da string.
            if ([FormValidation.cpfLength, FormValidation.cnpjLength].indexOf(cpfCnpj.length) < 0) {
                return { length: true } ? null : { cnpjValidador: true };
            }

            // Verifica se todos os dígitos são iguais.
            if (/^([0-9])\1*$/.test(cpfCnpj)) {
                return { equalDigits: true };
            }

            // A seguir é realizado o cálculo verificador.
            const cpfCnpjArr: number[] = cpfCnpj.split('').reverse().slice(2);

            cpfCnpjArr.unshift(FormValidation.buildDigit(cpfCnpjArr));
            cpfCnpjArr.unshift(FormValidation.buildDigit(cpfCnpjArr));

            if (cpfCnpj !== cpfCnpjArr.reverse().join('')) {
                // Dígito verificador não é válido, resultando em falha.
                return { digit: true };
            }
        }

        return null;
    }

    /**
     * Implementa a interface de um validator.
     */
    validarCPFCNPJ(c: AbstractControl): ValidationErrors | null {
        return FormValidation.validarCPFCNPJ(c);
    }
}
