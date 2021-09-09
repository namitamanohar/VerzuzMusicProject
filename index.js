const songs = [
  {
    songName: "Halo",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 8607832,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=bnVUHWCynig"
  },
  {
    songName: "Irreplaceable",
    albumTitle: "B'Day",
    playCount: 4914414,
    releaseYear: 2006,
    youTubeLink: "https://www.youtube.com/watch?v=2EwViQxSJJQ"
  },
  {
    songName: "Single Ladies (Put a Ring on It)",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 5203841,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=4m1EFMoRFvY"
  },
  {
    songName: "Crazy In Love",
    albumTitle: "Dangerously In Love",
    playCount: 3752084,
    releaseYear: 2003,
    youTubeLink: "https://www.youtube.com/watch?v=ViwtNLUqkMY"
  },
  {
    songName: "If I Were A Boy",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4562013,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=AWpsOqh8q0M"
  },
  {
    songName: "Sweet Dreams",
    albumTitle: "I Am... Sasha Fierce",
    playCount: 4940104,
    releaseYear: 2008,
    youTubeLink: "https://www.youtube.com/watch?v=JlxByc0-V40"
  }
];
const mainDiv = document.querySelector(".flex-container");
const songNameInput = document.getElementById("songNameInput");
const albumTitleInput = document.getElementById("albumTitleInput");
const releaseYearInput = document.getElementById("releaseYearInput");
const youTubeLinkInput = document.getElementById("youTubeLinkInput");
const playCountInput = document.getElementById("playCountInput");
const createButton = document.getElementById("addSong");
function renderData() {
  mainDiv.innerHTML = "";
  for (let songIndex = 0; songIndex < songs.length; songIndex++) {
    const songListItem = document.createElement("div");
    songListItem.className = "song-card";
    songListItem.innerHTML = `
    <h2>${songs[songIndex].songName}</h2>
    <p>${songs[songIndex].albumTitle}</p>
    <p>Release Year: ${songs[songIndex].releaseYear}</p>
    <p>Playcount: ${songs[songIndex].playCount}</p>
    <a href=${songs[songIndex].youTubeLink}>YouTube Link</a>
    <br>
    <button class="deleteButton--${songIndex}">Delete</button>
    <button class="updateButton--${songIndex}">Update</button>  
    `;
    mainDiv.append(songListItem);
  }
  //delete logic
  const deleteButtons = document.querySelectorAll('[class^="deleteButton--"]');
  //console.log(deleteButtons);
  for (let btn of deleteButtons) {
    btn.addEventListener("click", function () {
      var buttonIndexArray = btn.className.split("deleteButton--");
      console.log(buttonIndexArray);
      songs.splice(buttonIndexArray[1], 1);
      renderData();
    });
  }
  //create logic
  function createData() {
    const songName = songNameInput.value;
    console.log("songName", songName);
    const albumTitle = albumTitleInput.value;
    console.log("albumTitle", albumTitle);
    const releaseYear = releaseYearInput.value;
    console.log("releaseYear", releaseYear);
    const youTubeLink = youTubeLinkInput.value;
    console.log("youTubeLink: ", youTubeLink);
    const playCount = playCountInput.value;
    console.log("playCount", playCount);
    const newSong = {
      songName,
      albumTitle,
      releaseYear,
      youTubeLink,
      playCount
    };
    console.log("new song", newSong);
    songs.push(newSong);
    songNameInput.value = "";
    albumTitleInput.value = "";
    releaseYearInput.value = "";
    youTubeLinkInput.value = "";
    playCountInput.value = "";
    renderData();
    createButton.removeEventListener("click", createData);
  }
  createButton.addEventListener("click", createData);
}
renderData();
