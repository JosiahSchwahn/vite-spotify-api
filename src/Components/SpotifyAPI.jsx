import { Component } from "react";
import { useState, useEffect} from "react";

const SpotifyAPI = () => {
  //to do - run api key, and client ID through express server
 
  var client_id = 'd295316602ed49419b7c90bf3ddc8103';
  var client_secret = '12527ce5ce5e4ab8a0797ea5ef063087';

    const spotifyData = async () => {
        const responseObject = await fetch("https://accounts.spotify.com/api/token", {
            body: `grant_type=client_credentials&${client_id}=your-client-id&${client_secret}=your-client-secret`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
          });
    }


    return(
        <div>
            Spotify + Chat GPT Web Application
        </div>
    );


}

export default SpotifyAPI;




