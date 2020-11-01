class FormApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }
}
export const apiProfile = new FormApi({
    baseUrl: '',
    headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }

});