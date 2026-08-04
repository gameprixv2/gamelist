// =========================
// GAMEPRIX V2
// =========================

const games = [

{ name: "007 FIRST LIGHT", genre: ["Action"], size: 54, img: "https://upload.wikimedia.org/wikipedia/en/2/2b/007_First_Light_%282026%29_cover.jpg" },

{ name: "A PLAGUE TALE REQUIEM", genre: ["Action", "Adventure"], size: 48, img: "https://next-media.elkjop.com/image/dv_web_D1800010021388637/597467/a-plague-tale-requiem-pc-windows.jpg?w=640&q=75" },

{ name: "A QUIET PLACE", genre: ["Horror"], size: 38, img: "https://upload.wikimedia.org/wikipedia/en/0/07/A_Quiet_Place_The_Road_Ahead_%282024%29_cover_art.jpg" },

{ name: "A WAY OUT", genre: ["Action", "Adventure"], size: 21, img: "https://www.mmoga.co.uk/images/games/_ext/1058304/a-way-out_large;width=360,height=340,64b8835581a3fa8fcdbb67b07d81cd2ac1ed28c9.png" },

{ name: "ACE COMBAT 7 SKIES UNKNOWN DELUXE EDITION", genre: ["Simulation", "Action"], size: 62, img: "https://upload.wikimedia.org/wikipedia/en/2/22/Ace_Combat_7_Skies_Unknown_game_cover.jpg" },

{ name: "AGE OF EMPIRES 2 AGE OF KINGS", genre: ["Strategy"], size: 0.334, img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png/250px-Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png" },

{ name: "AGE OF EMPIRES 4", genre: ["Strategy"], size: 77, img: "https://upload.wikimedia.org/wikipedia/en/0/08/Age_of_Empires_IV_Cover_Art.png" },

{ name: "AGE OF EMPIRES II DEFINITIVE EDITION", genre: ["Strategy"], size: 15, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuEJAORLYWCvt9bBKyI4AuEKGFTluZU-0I3SfaSUh1jZExuRDh" },

{ name: "AGE OF MYTHOLOGY RETOLD", genre: ["Strategy"], size: 25, img: "https://upload.wikimedia.org/wikipedia/en/c/cc/Age_of_Mythology_Retold_cover_art.jpg" },

{ name: "ALAN WAKE REMASTERED", genre: ["Action", "Horror"], size: 38, img: "https://buycheapplaycheap.com/wp-content/uploads/2021/10/Alan-Wake-Remastered.jpg" },

{ name: "ALOFT", genre: ["Adventure", "Simulation"], size: 12, img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9c4c.webp" },

{ name: "ALONE IN THE DARK", genre: ["Horror"], size: 29, img: "https://upload.wikimedia.org/wikipedia/en/0/05/Alone_in_the_dark_2022.jpg" },

{ name: "ANNO 1800 COMPLETE EDITION ALL DLC", genre: ["Strategy", "Simulation"], size: 95, img: "https://upload.wikimedia.org/wikipedia/en/7/79/Anno_1800_cover.png" },

{ name: "ASSASIN’S CREED 4 BLACK FLAG", genre: ["Action", "Adventure"], size: 27, img: "https://m.media-amazon.com/images/M/MV5BOTAzZWQwNjMtMjNmZi00NjJkLWI5MjQtNjA3NDI1NjExMTA4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

{ name: "ASSASIN’S CREED LIBERATION HD", genre: ["Action", "Adventure"], size: 3, img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Assassin%27s_Creed_III_Liberation_Cover_Art.jpg" },

{ name: "ASSASIN’S CREED ODYSSEY", genre: ["Action", "RPG"], size: 89, img: "https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png" },

{ name: "ASSASIN’S CREED ORIGINS", genre: ["Action", "RPG"], size: 55, img: "https://howlongtobeat.com/games/46402_Assassins_Creed_Origins.jpg?width=250" },

{ name: "ASSASIN’S CREED VALHALLA COMPLETE EDITION", genre: ["Action", "RPG"], size: 158, img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg" },

{ name: "ASSASIN’S CREED SHADOWS", genre: ["Action", "RPG"], size: 176, img: "https://upload.wikimedia.org/wikipedia/en/5/54/Assassin%27s_Creed_Shadows_cover.png" },

{ name: "ASSASSIN'S CREED - 1", genre: ["Action", "Adventure"], size: 7, img: "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" },

{ name: "ASSASSIN'S CREED - 2", genre: ["Action", "Adventure"], size: 6, img: "https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" },

{ name: "ASSASSIN'S CREED - 3 REMASTERED", genre: ["Action", "Adventure"], size: 40, img: "https://store-images.s-microsoft.com/image/apps.29997.68640107179785665.3ff3e830-efb8-42c5-aa55-9b33b3a8192c.df05cf19-98e0-4230-a9e3-2192f0f65e32" },

{ name: "ASSASSIN'S CREED - BROTHERHOOD", genre: ["Action", "Adventure"], size: 9, img: "https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" },

{ name: "ASSASSINS CREED - REVELATIONS", genre: ["Action", "Adventure"], size: 6, img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" },

{ name: "ASSASSIN'S CREED - SYNDICATE", genre: ["Action", "Adventure"], size: 63, img: "https://upload.wikimedia.org/wikipedia/en/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg" },

{ name: "ASSASSIN'S CREED - UNITY", genre: ["Action", "Adventure"], size: 50, img: "https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" },

{ name: "ASSASSINS CREED MIRAGE V1.0.6", genre: ["Action", "Adventure"], size: 42, img: "https://cdn2.penguin.com.au/covers/400/9781506741291.jpg" },

{ name: "ASSETTO CORSA COMPETIZIONE", genre: ["Racing", "Simulation"], size: 18, img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Assetto_Corsa_Competizione_cover_art_full.jpg" },

{ name: "ATTACK ON TITAN 2", genre: ["Action", "Adventure"], size: 25, img: "https://www.mmoga.com/images/games/_ext/1288947/attack-on-titan-2_large.png" },

{ name: "AVOWED", genre: ["Action", "RPG"], size: 74, img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avowed_key_art.jpeg" },

{ name: "BACK FOR BLOOD", genre: ["Action", "Horror"], size: 47, img: "https://upload.wikimedia.org/wikipedia/en/6/60/Back_4_Blood_cover_art.jpg" },

{ name: "BALDUR'S GATE 2 - ENHANCED EDITION", genre: ["RPG"], size: 4, img: "https://upload.wikimedia.org/wikipedia/en/b/b4/BGIIEE_cover_art.jpg" },

{ name: "BALDUR'S GATE 3", genre: ["RPG"], size: 147, img: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" },

{ name: "BANISHERS GHOSTS OF NEW EDEN V1.3.1.0 + WANDERER SET DLC", genre: ["Action", "RPG"], size: 52, img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Banishers_Ghosts_of_New_Eden_cover_art.jpg" },

{ name: "BATLLEFIELD BAD COMPANY 2", genre: ["Action", "FPS"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/b/b3/Battlefield_Bad_Company_2_cover.jpg" },

{ name: "BATMAN - ARKHAM ASYLUM", genre: ["Action", "Adventure"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg" },

{ name: "BATMAN - ARKHAM CITY", genre: ["Action", "Adventure"], size: 17, img: "https://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpg" },

{ name: "BATMAN - ARKHAM KNIGHT", genre: ["Action", "Adventure"], size: 52, img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Batman_Arkham_Knight_Cover_Art.jpg" },

{ name: "BATMAN - ARKHAM ORIGINS - THE COMPLETE EDITION", genre: ["Action", "Adventure"], size: 18, img: "https://cdn.cdkeys.com/496x700/media/catalog/product/3/0/308072-batman-arkham-origins-playstation-3-front-cover.jpg" },

{ name: "BATTLE REALMS ZEN EDITION", genre: ["Strategy"], size: 2, img: "https://cdn.gracza.pl/galeria/gry13/1126645062.jpg" },

{ name: "BATTLEFIELD 1", genre: ["Action", "FPS"], size: 31, img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Battlefield_1_cover_art.jpg/250px-Battlefield_1_cover_art.jpg" },

{ name: "BATTLEFIELD 3", genre: ["Action", "FPS"], size: 16, img: "https://upload.wikimedia.org/wikipedia/en/6/69/Battlefield_3_Game_Cover.jpg" },

{ name: "BATTLEFIELD 4", genre: ["Action", "FPS"], size: 27, img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Battlefield_4_cover_art.jpg/250px-Battlefield_4_cover_art.jpg" },

{ name: "BATTLEFIELD 5", genre: ["Action", "FPS"], size: 51, img: "https://upload.wikimedia.org/wikipedia/en/f/f0/Battlefield_V_standard_edition_box_art.jpg" },

{ name: "BATTLEFIELD 6", genre: ["Action", "FPS"], size: 102, img: "https://upload.wikimedia.org/wikipedia/en/8/87/Battlefield_6_cover_art.jpg" },

{ name: "BATTLEFIELD HARDLINE", genre: ["Action", "FPS"], size: 39, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Battlefield_Hardline.jpg/250px-Battlefield_Hardline.jpg" },

{ name: "BIG RUMBLE BOXING CREED CHAMPIONS", genre: ["Sports"], size: 8, img: "https://cdn.cdkeys.com/496x700/media/catalog/product/b/i/big_rumble_boxing__creed_champions_pc.jpg" },

{ name: "BIOSHOCK 2 REMASTERED", genre: ["Action", "FPS"], size: 17.4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdVu1QrRWNd6uFGPhlR7PLK03g5pbZyTzTQ&s" },

{ name: "BIOSHOCK INFINITE", genre: ["Action", "FPS"], size: 38, img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg" },

{ name: "BIOSHOCK REMASTERED", genre: ["Action", "FPS"], size: 17.3, img: "https://s.pacn.ws/1/p/ym/bioshock-remastered-623353.9.jpg?v=ry4wtu" },

{ name: "BLACK MYTH WUKONG", genre: ["Action", "RPG"], size: 140, img: "https://upload.wikimedia.org/wikipedia/en/a/a6/Black_Myth_Wukong_cover_art.jpg" },

{ name: "BORDERLANDS 3", genre: ["Action", "FPS", "RPG"], size: 101, img: "https://upload.wikimedia.org/wikipedia/en/2/21/Borderlands_3_cover_art.jpg" },

{ name: "BROKEN ARROW", size: 88.7, genre: ["Strategy","Military"], img: "https://cdn.cdkeys.com/496x700/media/catalog/product/b/r/broken_arrow_cdkeys.png" },

{ name: "BROTHERS A TALE OF TWO SONS REMAKE", size: 27.5, genre: ["Adventure","Puzzle"], img: "https://images.purexbox.com/252535828c23f/brothers-a-tale-of-two-sons-remake-cover.cover_300x.jpg" },

{ name: "BULLY SCHOLARSHIP EDITION", size: 4.83, genre: ["Action","Adventure"], img: "https://gamegator.net/_next/image?url=https%3A%2F%2Fimages.gamegator.net%2Fco2gvl&w=384&q=75" },

{ name: "BUS SIMULATOR 21 NEXT STOP", size: 22.8, genre: ["Simulation","Driving"], img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlk0HEbhA3HRlAn-8lQRQbsG1GYqyy1WnYg&s" },

{ name: "CAFE OWNER SIMULATOR", size: 10.3, genre: ["Simulation","Management"], img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeae7Dm2DaMu4gaXr79SMTgPHE_o3BbpkRZQ&s" },

{ name: "CALL OF DUTY - BLACK OPS COLD WAR", size: 208, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/BOCW_Cover_Art.jpg/250px-BOCW_Cover_Art.jpg" },

{ name: "CALL OF DUTY - MODERN WARFARE (2019) CAMPAIGN", size: 109, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg" },

{ name: "CALL OF DUTY - MODERN WARFARE II (2022) CAMPAIGN ONLY", size: 33.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg" },

{ name: "CALL OF DUTY MODERN WARFARE III (2023)", size: 53, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/f/f6/MWIII_Cover_Art.png" },

{ name: "CALL OF DUTY 2", size: 3.45, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Call_of_Duty_2_Box.jpg/250px-Call_of_Duty_2_Box.jpg" },

{ name: "CALL OF DUTY 5 WORLD AT WAR", size: 6.73, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/6/69/WAW_Cover_Art.jpg" },

{ name: "CALL OF DUTY ADVANCED WARFARE", size: 43.8, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Advanced_Warfare.jpg" },

{ name: "CALL OF DUTY BLACK OPS", size: 11.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/250px-CoD_Black_Ops_cover.png" },

{ name: "CALL OF DUTY BLACK OPS 6 CAMPAIGN ONLY", size: 48, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/c/c9/Call_of_Duty_Black_Ops_6_Key_Art.png" },

{ name: "CALL OF DUTY - BLACK OPS 2", size: 22.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png/250px-Call_of_Duty_Black_Ops_II_box_artwork.png" },

{ name: "CALL OF DUTY BLACK OPS III", size: 55.4, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg" },

{ name: "CALL OF DUTY GHOSTS", size: 29.6, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/9/9c/Call_of_duty_ghosts_box_art.jpg" },

{ name: "CALL OF DUTY INFINITE WARFARE", size: 54.1, genre: ["FPS","Sci-Fi"], img: "https://upload.wikimedia.org/wikipedia/en/8/87/Call_of_Duty_Infinite_Warfare_cover.jpg" },

{ name: "CALL OF DUTY MODERN WARFARE 2 CAMPAIGN REMASTERED", size: 58.4, genre: ["FPS","Action"], img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4c1bfd6-740f-4577-a3d0-0cb5b71fb2df/dghcrku-9ddee17d-91fc-4ca3-b9a3-adb049ebb96f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M0YzFiZmQ2LTc0MGYtNDU3Ny1hM2QwLTBjYjViNzFmYjJkZlwvZGdoY3JrdS05ZGRlZTE3ZC05MWZjLTRjYTMtYjlhMy1hZGIwNDllYmI5NmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nBKcqrsYvn4BxOhJDWUSLH631O0essCjgyB0bd4vUDw" },

{ name: "CALL OF DUTY MODERN WARFARE 3", size: 17.1, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png" },

{ name: "CALL OF DUTY MODERN WARFARE 4", size: 5.56, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg" },

{ name: "CALL OF DUTY MODERN WARFARE REMASTERED", size: 41.5, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/d/d4/Call_of_Duty_-_Modern_Warfare_Remastered.jpeg" },

{ name: "CALL OF DUTY VANGUARD", size: 83.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/0/06/Call_of_Duty_Vanguard_cover_art.jpg" },

{ name: "CALL OF DUTY WWII", size: 41.8, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/1/18/Call_of_Duty_WWII_Cover_Art.jpg" },

{ name: "CITIES - SKYLINES COMPLETE DLC", size: 16.3, genre: ["Simulation","City Builder"], img: "https://m.media-amazon.com/images/I/61fJdSCC1BL._UF1000,1000_QL80_.jpg" },

{ name: "CITIES SKYLINES 2", size: 59.3, genre: ["Simulation","City Builder"], img: "https://upload.wikimedia.org/wikipedia/en/3/35/Cities_Skylines_II_Cover_Art.png" },

{ name: "CLAIR OBSCUR EXPEDITION-33", size: 42.2, genre: ["RPG","Turn-Based"], img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Clair_Obscur%2C_Expedition_33_Cover_1.webp" },

{ name: "COMMAND & CONQUER - RED ALERT 3", size: 14.2, genre: ["Strategy","RTS"], img: "https://e.snmc.io/lk/l/x/9130a35a3187d78e3690e70f29e0f76b/10137338" },

{ name: "COMMAND & CONQUER RED ALERT 2 (V20221102 + YURIS REVENGE)", size: 1.23, genre: ["Strategy","RTS"], img: "https://images.gamegator.net/co88lz" },

{ name: "COMMAND AND CONQUER 3 TIBERIUM WARS", size: 5.80, genre: ["Strategy","RTS"], img: "https://alchetron.com/cdn/command-and-conquer-3-tiberium-wars-0b6cc4ff-46cf-4fd0-a26a-1549c4cc8d1-resize-750.jpeg" },

{ name: "COMMAND AND CONQUER 4 - TIBERIAN TWILIGHT", size: 5.41, genre: ["Strategy","RTS"], img: "https://upload.wikimedia.org/wikipedia/en/8/83/Cc4tt-cover.jpg" },

{ name: "COMPANY OF HEROES - COMPLETE EDITION", size: 8.91, genre: ["Strategy","RTS"], img: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98z-lwc4e3wxcqqp47" },

{ name: "COMPANY OF HEROES 2 - MASTER COLLECTION", size: 31.0, genre: ["Strategy","RTS"], img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ74WuxispkEmiS_k395Zm6ENUhXJnVKgxdWlRkm2qdxwD_Vbr8nqg2oABpF8tWNUmQ8&usqp=CAU" },

{ name: "CONTRA OPERATION GALUGA", size: 13.5, genre: ["Action","Arcade"], img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000063988/desc/d3f76db9ca59f4d8e0f9856ed53b9df6fc5086323ce717a1c8ffe0e07f5f43b5" },

{ name: "COUNTER STRIKE XTREME", size: 2.12, genre: ["FPS","Multiplayer"], img: "https://2img.net/h/www.fullprogramlarindir.com/wp-content/uploads/2014/05/Counter-Strike-Xtreme-V6-2011-Cover.jpg" },

];

const gameGrid=document.getElementById("gameGrid");

games.forEach(game=>{

const card=document.createElement("div");

card.className="game-card";

card.innerHTML=`

<img src="${game.img}">

<div class="game-info">

<h3>${game.name}</h3>

<div class="genres">

${game.genre.map(g=>`<span>${g}</span>`).join("")}

</div>

<p class="size">${game.size} GB</p>

<button class="add-btn" data-game="${game.name}" data-size="${game.size}">

+ ADD

</button>

</div>

`;

gameGrid.appendChild(card);

});

// ===============================
// STORAGE SYSTEM
// ===============================

let driveSize = 1850;
let usedSpace = 0;
let selectedGames = [];

const usedSpaceText = document.getElementById("usedSpace");
const remainingText = document.getElementById("remainingSpace");
const gameCountText = document.getElementById("gameCount");

function updateStorage(){

const remaining = driveSize - usedSpace;

const usedPercent = driveSize > 0
    ? (usedSpace / driveSize) * 100
    : 0;

const remainingPercent = 100 - usedPercent;

usedSpaceText.textContent = usedSpace.toFixed(1) + " GB";
remainingText.textContent = remaining.toFixed(1) + " GB";
gameCountText.textContent = selectedGames.length;

document.getElementById("usedPercent").textContent =
    usedPercent.toFixed(0) + "%";

document.getElementById("remainingPercent").textContent =
    remainingPercent.toFixed(0) + "%";

    const list = document.getElementById("selectedList");

    list.innerHTML = "";

    let total = 0;

    selectedGames.forEach(name=>{

        const game = games.find(g=>g.name===name);

        if(!game) return;

        total += game.size;

        list.innerHTML += `
<div class="selected-item">

    <span>🎮 ${game.name}</span>

    <strong>${game.size} GB</strong>

    <button class="remove-game"
        data-name="${game.name}"
        data-size="${game.size}">
        ❌
    </button>

</div>
`;

    });

    document.getElementById("popupTotal").textContent = total + "GB";

}

document.querySelectorAll(".add-btn").forEach(button=>{

    button.addEventListener("click",function(){

        const size = Number(this.dataset.size);
        const name = this.dataset.game;

        if(this.classList.contains("added")){

            this.classList.remove("added");
            this.textContent = "+ ADD";

            usedSpace -= size;

            selectedGames = selectedGames.filter(game=>game!==name);

        }else{

            if(usedSpace + size > driveSize){

                alert("Not enough storage!");
                return;

            }

            this.classList.add("added");
            this.textContent = "✔ ADDED";

            usedSpace += size;

            selectedGames.push(name);

        }

        updateStorage();

    });

});

updateStorage();

// ===============================
// SELECTED GAMES POPUP
// ===============================

const popup = document.getElementById("selectedPopup");
const openPopup = document.getElementById("selectedGamesBtn");
const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click",()=>{

    popup.style.display="flex";

});

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

// ===============================
// COPY TO CLIPBOARD
// ===============================

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

    let message = "";
message += "🎮 GAMEPRIX GAME ORDER\n";
message += "━━━━━━━━━━━━━━━━━━━━\n\n";

message += "💽 Drive\n";
message += document.getElementById("selectedDrive").textContent + " (";
message += driveSize + "GB usable)\n\n";

message += "🎮 Selected Games\n\n";

selectedGames.forEach((name,index)=>{

    const game = games.find(g=>g.name===name);

    if(game){
        message += (index+1) + ". " + game.name + " — " + game.size + " GB\n";
    }

});
message += "━━━━━━━━━━━━━━━━━━━━\n";
message += "📦 Total Size: " + usedSpace + " GB\n\n";
message += "Thank you for choosing GamePrix!\n";
message += "Please send this message to our Facebook Page.";

    navigator.clipboard.writeText(message);

    alert("Game list copied to clipboard!");
});

// ===============================
// REMOVE GAME FROM POPUP
// ===============================

document.addEventListener("click", function(e){

    if(!e.target.classList.contains("remove-game")) return;

    const name = e.target.dataset.name;
    const size = Number(e.target.dataset.size);

    // Remove from selected list
    selectedGames = selectedGames.filter(game => game !== name);

    usedSpace -= size;

    // Reset original Add button
    const btn = document.querySelector(
        `.add-btn[data-game="${name}"]`
    );

    if(btn){
        btn.classList.remove("added");
        btn.textContent = "+ ADD";
    }

    // Update everything
    updateStorage();

});

// ===============================
// DRIVE SELECTOR
// ===============================

const driveCards = document.querySelectorAll(".drive-card");

driveCards.forEach(card => {

    card.addEventListener("click", () => {

        const newSize = Number(card.dataset.size);

        // Prevent selecting a drive smaller than current games
        if (usedSpace > newSize) {
            alert("The selected drive is too small for your current games.");
            return;
        }

        // Remove previous selection
        driveCards.forEach(c => c.classList.remove("selected"));

        // Highlight selected drive
        card.classList.add("selected");

        // Update storage size
        driveSize = newSize;

        // Update bottom bar
        document.getElementById("selectedDrive").textContent =
            card.dataset.label;

        updateStorage();

    });

});


// ===============================
// SEARCH GAMES
// ===============================

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    document.querySelectorAll(".game-card").forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});






