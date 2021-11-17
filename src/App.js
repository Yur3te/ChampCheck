import React, { useState } from "react";
import { key } from "./js/config.json";
import wrapper from "./js/requests.js";

import SummonerRank from "./components/SummonerRank";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("")

  const createdWrapper = new wrapper(key);

  const findid = (event) => {
    event.preventDefault();
    createdWrapper.getIdByUsername(name).then((response) => {

      //todo zrobić tego usestate na useeffect by się odświerzało, ale to potem jakby było w dalszym rozwoju potrzebne
      setId(response.data.id)
      // console.log(id);
      console.log(response.data.id);

      createdWrapper.leagueTest(response.data.id).then((response)=> {
        console.log(response.data)
        // console.log(response.data[0])
        // trzeba się z keys pobawić...
        //https://stackoverflow.com/questions/42666157/get-data-from-javascript-object
      })


    }).catch((error) => {
      console.log(error)
      console.log("smth is wrong with summoner name")
    })
  };

  return (
    <div className="body">
      <form onSubmit={findid}>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder={"SummonerName"}
        ></input>
      </form>


      {/* <SummonerRank id={id} wrapper={createdWrapper}/> */}


    </div>
  );
}

export default App;

//https://developer.riotgames.com/docs/lol
