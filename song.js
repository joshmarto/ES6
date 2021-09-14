// Create a constructor for the object Song
function Song(title, album, artist, year, genre, lyrics, platforms, author, prizes, track){
  this.title = title;
  this.album = album;
  this.artist = artist;
  this.year = year;
  this.genre = genre;
  this.lyrics = lyrics;
  this.platforms = platforms;
  this.author = author;
  this.prizes = prizes;
  this.track = track;
}

//Setting up the object favoriteSong which is a Song type
var favoriteSong = new Song("Back in the Day & So Good", "Live from the Inside", "Brian Culbertson", 2009, "Jazz", true,
                            ["Spotify", "iCloud", "Youtube Music", "Deezer", "Play Music"], "Brian Culbertson", 4, 10);

//Display the content of the object sorted alphabetically
console.log(favoriteSong);