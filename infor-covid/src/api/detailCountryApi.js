import { httpTwo } from 'src/utils/http'

const URL = 'name'
const countryDetailApi = {
    getCountryDetail(country) {
        return httpTwo.get(`${URL}/${country}`)
    }
}

export default countryDetailApi
