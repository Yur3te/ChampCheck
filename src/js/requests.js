const axios = require("axios");

class wrapper {
  constructor(key) {
    this.api_key = key;
    this.client = axios.create({
      baseURL: "https://eun1.api.riotgames.com/",
      responseType: "json",
      params: {
        api_key: key,
      },
    });
  }

  getRequest(path) {
    return this.client.get(path);
  }

  championMaestry(id) {
    return this.getRequest(
      `/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`
    );
  }

  getIdByUsername(summonerName) {
    return this.getRequest(
      `/lol/summoner/v4/summoners/by-name/${summonerName}`
    );
  }

  getMaestryByChampion(SummonerID, champion) {
    return this.getRequest(
      `/lol/champion-mastery/v4/champion-masteries/by-summoner/${SummonerID}/by-champion/${champion}`
    );
  }

  leagueTest(SummonerID) {
    return this.getRequest(`/lol/league/v4/entries/by-summoner/${SummonerID}`
    );
  }

  
}

// const createdWrapper = new wrapper(key);

// createdWrapper
//     .championMaestry(lamanopl)
//     .then((response)=> {
//         console.log(response.data)
//     })

// createdWrapper
// .getMaestryByChampion(dabkuś, 1)
// .then((response)=> {
//     console.log(response.data)
// })

// createdWrapper.getIdByUsername("Yur3te").then((response) => {
//   console.log(response.data.id);
// });

export default wrapper;
