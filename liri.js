const request = require("request");
const Spotify = require("node-spotify-api");
const moment = require("moment");

require("dotenv").config();

const spotifyKeys = require("./keys.js");

const spotify = new Spotify(spotifyKeys.spotify);

let nodeArgs = process.argv;

let searchTerm = "";

// let searchTerm = "All the small things";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    searchTerm = searchTerm + "+" + nodeArgs[i];

  }

  else {

    searchTerm += nodeArgs[i];

  }
}

if (process.argv[2] === "spotify-this-song") {

  spotify.search({ type: 'track', query: searchTerm, limit: 1 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    // console.log("This: " + JSON.stringify(data));
    // console.log("Then this: " + JSON.stringify(data.tracks));
    // console.log("Last this: " + JSON.stringify(data.tracks.href));
    console.log("Album title: " + data.tracks.items[0].album.name);
    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);

  });

}