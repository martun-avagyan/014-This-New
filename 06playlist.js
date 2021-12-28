"use strict";

class Playlist {
  constructor() {
    this.currentSong = 0;
    this.thePlaylist = [];
  }
  add(song) {
    this.thePlaylist.push(song);
  }
  play() {
    this.thePlaylist[this.currentSong].isPlaying = true;
  }
  stop() {
    this.thePlaylist[this.currentSong].isPlaying = false;
  }
  next() {
    if (this.currentSong === this.thePlaylist.length) {
      this.thePlaylist[this.currentSong].isPlaying = false;
      this.currentSong = 0;
      this.thePlaylist[this.currentSong].isPlaying = true;
    } else {
      this.thePlaylist[this.currentSong].isPlaying = false;
      this.thePlaylist[++this.currentSong].isPlaying = true;
    }
  }
}
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;
  }
}

const playList = new Playlist();
const yesterday = new Song("Yesterday", "The Beatles");
const relax = new Song("Relax (Take It Easy)", "Mika");
const noWomanNoCry = new Song("No Woman No Cry", "Bob Marley");

playList.add(yesterday);

playList.add(relax);

playList.add(noWomanNoCry);

console.log(playList);

playList.play(); // Set isPLaying for Yesterday to true

console.log(playList.thePlaylist); // Yesterday by Beatles is playing.

playList.next(); // set the isPlaying for Beatles to false, for Mika to true and updated the current song

console.log(playList.thePlaylist);

playList.stop();

console.log(playList.thePlaylist); // isPlaying for Relax by Mika set to false current song value kept
