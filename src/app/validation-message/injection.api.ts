import { InjectionToken } from '@angular/core';



export const defaultErrors = {
    required: (error) => `This Field is Required`,
    pattern: (error) => {
        return `This field is pattern matched`
    },
    email: (error) => {
        return `email is invalid`
    }
}

export const FORM_ERROS = new InjectionToken('Validation Message Errors', {
    providedIn: 'root',
    factory: () => defaultErrors
});