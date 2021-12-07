import http from 'src/utils/http'

const URL = 'summary'
const countryApi = {
    getCountry() {
        return http.get(URL)
    }
}

export default countryApi
