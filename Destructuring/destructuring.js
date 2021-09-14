/*
    Destructuring
    It is a functionality implemented in ES6 which allows us to extract data contained in arrays or objects.
    Is useful when thinking about separate part of the information contained previously and avoiding the
    tedious task of declar a whole bunch of new variables and asign them pulling the information from the
    object or array manually. The main difference betwen desctructuring objects and arrays is the access which
    needs to be used in order to pull up the information. Since objects required to pull the information to
    variables which match with keys meanwhile with arrays is not necessary.
 */

// Destructuring Objects
const song = {
    title: "Back in the Day & So Good",
    album: "Live from the Inside", 
    artist: "Brian Culbertson",
    year: 2009,
    genre: "Jazz",
    lyrics: true,
    platforms: ["Spotify", "iCloud", "Youtube Music", "Deezer", "Play Music"],
    author: "Brian Culbertson",
    prizes: 4,
    track: 10,
}
let { title: t, album: al, artist: ar, year: y, genre: g, platforms:[s, i, ym, d, pm] } = song;
console.log(`${t} from ${al} is one of the coolest songs of ${ar}. I always listen it in ${s}`);

// Destructuring Arrays
const sports = ["Soccer", "Baseball", "Tennis", "Basketball", "Swimming", "Golf", "Chess"];
let [soc, base, tennis, basket, swim, golf, chess] = sports;
console.log(`Some really cool sports are: ${basket}, ${swim}, ${base}, and ${chess}`);