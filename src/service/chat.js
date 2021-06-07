import axios from "axios";

export async function getPersons () {
    return await axios.get( "https://my.api.mockaroo.com/mobiletest.json", {
        headers: {
            'X-API-Key': '82333f10'
        }
    }).then(response => [ ...response.data ] );
}