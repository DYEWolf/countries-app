import axios from 'axios';

const BASE_URL = 'https://restcountries.eu/rest/v2/';

export function getAllCountries() {
    return axios.get(`${BASE_URL}all?fields=name;capital;currencies;flag`);
}