import axios form 'axios';

const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/';
const apiKey = 'b942af147413bbb29e2d5afead57b45e9b177eff';

export default {
	getAllComics:(limit, callback) => {
		const urlComics = urlBaseMarvel + 'comics?apikey' + apiKey + '&limit=' + limit;
		axios.get(urlComics).then((comics) => {
			if(callback){
				callback(comics);
			}
		})
	}
}