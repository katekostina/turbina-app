// Заготовка АПИ для формы

class FormApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }
}
export const apiProfile = new Api({
    baseUrl: '',
    headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }

});