const DRIVE_OPTIONS = {
  "500": {label:"500GB", usable:460},
  "1000": {label:"1TB", usable:920},
  "2000": {label:"2TB", usable:1800}
};
let driveKey = "2000";
let DRIVE_CAPACITY = DRIVE_OPTIONS[driveKey].usable;
const MESSENGER_URL = "https://m.me/YOUR_GAMEPRIX_PAGE";


const allGames = [
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

{ name: "ASSASSINS CREED - REVELATIONS", genre: ["Action", "Adventure"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" },

{ name: "ASSASSIN'S CREED - SYNDICATE", genre: ["Action", "Adventure"], size: 63, img: "https://upload.wikimedia.org/wikipedia/en/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg" },

{ name: "ASSASSIN'S CREED - UNITY", genre: ["Action", "Adventure"], size: 50, img: "https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" },

{ name: "ASSASSINS CREED MIRAGE V1.0.6", genre: ["Action", "Adventure"], size: 42, img: "https://cdn2.penguin.com.au/covers/400/9781506741291.jpg" },

{ name: "ASSETTO CORSA COMPETIZIONE", genre: ["Racing", "Simulation"], size: 18, img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Assetto_Corsa_Competizione_cover_art_full.jpg" },

{ name: "ATTACK ON TITAN 2", genre: ["Action", "Adventure"], size: 25, img: "https://www.mmoga.com/images/games/_ext/1288947/attack-on-titan-2_large.png" },

{ name: "AVATAR FRONTIERS OF PANDORA ", genre: ["Action", "Open World"], size: 125, img: "https://upload.wikimedia.org/wikipedia/en/5/53/Avatar_Frontiers_of_Pandora_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled" },

{ name: "AVOWED", genre: ["Action", "RPG"], size: 74, img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avowed_key_art.jpeg" },

{ name: "BACK FOR BLOOD", genre: ["Action", "Horror"], size: 47, img: "https://upload.wikimedia.org/wikipedia/en/6/60/Back_4_Blood_cover_art.jpg" },

{ name: "BALDUR'S GATE 2 - ENHANCED EDITION", genre: ["RPG"], size: 4, img: "https://upload.wikimedia.org/wikipedia/en/b/b4/BGIIEE_cover_art.jpg" },

{ name: "BALDUR'S GATE 3", genre: ["RPG"], size: 147, img: "https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg" },

{ name: "BANISHERS GHOSTS OF NEW EDEN WANDERER SET DLC", genre: ["Action", "RPG"], size: 52, img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Banishers_Ghosts_of_New_Eden_cover_art.jpg" },

{ name: "BATTLEFIELD BAD COMPANY 2", genre: ["Action", "FPS"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/b/b3/Battlefield_Bad_Company_2_cover.jpg" },

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

{ name: "BEAST OF REINCARNATION ", genre: ["Action RPG", "Open World"], size: 32, img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Beast_of_Reincarnation_cover_artwork.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "BIG RUMBLE BOXING CREED CHAMPIONS", genre: ["Sports"], size: 8, img: "https://cdn.cdkeys.com/496x700/media/catalog/product/b/i/big_rumble_boxing__creed_champions_pc.jpg" },

{ name: "BIOSHOCK 2 REMASTERED", genre: ["Action", "FPS"], size: 17.4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdVu1QrRWNd6uFGPhlR7PLK03g5pbZyTzTQ&s" },

{ name: "BIOSHOCK INFINITE", genre: ["Action", "FPS"], size: 38, img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg" },

{ name: "BIOSHOCK REMASTERED", genre: ["Action", "FPS"], size: 17.3, img: "https://s.pacn.ws/1/p/ym/bioshock-remastered-623353.9.jpg?v=ry4wtu" },

{ name: "BLACK MYTH WUKONG", genre: ["Action", "RPG"], size: 140, img: "https://upload.wikimedia.org/wikipedia/en/a/a6/Black_Myth_Wukong_cover_art.jpg" },

{ name: "BORDERLANDS 3", genre: ["Action", "FPS", "RPG"], size: 101, img: "https://upload.wikimedia.org/wikipedia/en/2/21/Borderlands_3_cover_art.jpg" },

{ name: "BROKEN ARROW", size: 88.7, genre: ["Strategy","Military"], img: "https://cdn.cdkeys.com/496x700/media/catalog/product/b/r/broken_arrow_cdkeys.png" },

{ name: "BULLY SCHOLARSHIP EDITION", size: 4.83, genre: ["Action","Adventure"], img: "https://gamegator.net/_next/image?url=https%3A%2F%2Fimages.gamegator.net%2Fco2gvl&w=384&q=75" },

{ name: "BUS SIMULATOR 21 NEXT STOP", size: 22.8, genre: ["Simulation","Driving"], img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlk0HEbhA3HRlAn-8lQRQbsG1GYqyy1WnYg&s" },

{ name: "CAFE OWNER SIMULATOR", size: 10.3, genre: ["Simulation","Management"], img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeae7Dm2DaMu4gaXr79SMTgPHE_o3BbpkRZQ&s" },

{ name: "CALL OF DUTY - BLACK OPS COLD WAR", size: 208, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/BOCW_Cover_Art.jpg/250px-BOCW_Cover_Art.jpg" },

{ name: "CALL OF DUTY - MODERN WARFARE (2019) CAMPAIGN", size: 109, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Call_of_Duty_Modern_Warfare_%282019%29_cover.jpg" },

{ name: "CALL OF DUTY - MODERN WARFARE II (2022) CAMPAIGN ONLY", size: 33.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Call_of_Duty_Modern_Warfare_II_Key_Art.jpg" },

{ name: "CALL OF DUTY MODERN WARFARE III (2023)", size: 53, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/f/f6/MWIII_Cover_Art.png" },

{ name: "CALL OF DUTY 2", size: 4, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Call_of_Duty_2_Box.jpg/250px-Call_of_Duty_2_Box.jpg" },

{ name: "CALL OF DUTY 5 WORLD AT WAR", size: 7, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/6/69/WAW_Cover_Art.jpg" },

{ name: "CALL OF DUTY ADVANCED WARFARE", size: 43.8, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Advanced_Warfare.jpg" },

{ name: "CALL OF DUTY BLACK OPS", size: 11.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/250px-CoD_Black_Ops_cover.png" },

{ name: "CALL OF DUTY BLACK OPS 6 CAMPAIGN ONLY", size: 49, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/c/c9/Call_of_Duty_Black_Ops_6_Key_Art.png" },

{ name: "CALL OF DUTY - BLACK OPS 2", size: 22.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png/250px-Call_of_Duty_Black_Ops_II_box_artwork.png" },

{ name: "CALL OF DUTY BLACK OPS III", size: 55.4, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Black_Ops_3.jpg" },

{ name: "CALL OF DUTY GHOSTS", size: 29.6, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/9/9c/Call_of_duty_ghosts_box_art.jpg" },

{ name: "CALL OF DUTY INFINITE WARFARE", size: 54.1, genre: ["FPS","Sci-Fi"], img: "https://upload.wikimedia.org/wikipedia/en/8/87/Call_of_Duty_Infinite_Warfare_cover.jpg" },

{ name: "CALL OF DUTY MODERN WARFARE 2", size: 12, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

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

{ name: "CRASH BANDICOOT 4", genre: ["Platformer", "Adventure"], size: 23.3, img: "https://upload.wikimedia.org/wikipedia/en/3/39/Crash_Bandicoot_4_Box_Art.jpeg" },

{ name: "CRIMSON DESERT DELUXE EDITION ", genre: ["Action", "RPG", "Open World"], size: 131, img: "https://upload.wikimedia.org/wikipedia/en/7/73/Crimson_Desert_Steam_Cover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled" },

{ name: "CRYSIS 3 REMASTERED", genre: ["FPS", "Action"], size: 18.0, img: "https://store-images.s-microsoft.com/image/apps.47687.14224226440896945.9b286b99-0293-4c31-9568-1be6d21203a4.337618c2-8e74-4e4f-9881-87bf6a2d2067" },

{ name: "CYBERPUNK 2077", genre: ["RPG", "Action"], size: 72.4, img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/250px-Cyberpunk_2077_box_art.jpg" },

{ name: "CUPHEAD", genre: ["Platformer", "Action"], size: 5.44, img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Cuphead_%28artwork%29.png" },

{ name: "DARK SOULS REMASTERED", genre: ["RPG", "Action"], size: 6.92, img: "https://www.allkeyshop.com/blog/wp-content/uploads/Dark-Souls-Remasteredn.jpg" },

{ name: "DARKSIDERS II", genre: ["Action", "RPG"], size: 5.45, img: "https://upload.wikimedia.org/wikipedia/en/5/5c/DarksidersII.jpg" },

{ name: "DAYS GONE REMASTERED", genre: ["Action", "Horror"], size: 45.6, img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/e87d432c-0c31-4673-912d-407d8ee09362/dj7kx5i-7d2dd83a-f807-4bb8-bcda-779c6a5eb255.png" },

{ name: "DEAD ISLAND - DEFINITIVE COLLECTION", genre: ["Action", "Horror"], size: 17.9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrlLM50k2e8WMPdaP0MGB1U--Z98o1EyLSiJ6wGOJJXrSc8NTCedD3TP8XKvyK9XG8xA&usqp=CAU" },

{ name: "DEAD RISING 4", genre: ["Action", "Horror"], size: 69.2, img: "https://upload.wikimedia.org/wikipedia/en/7/76/Dead_rising_4_cover_art.jpg" },

{ name: "DEAD SPACE REMAKE 2023", genre: ["Horror", "Sci-Fi"], size: 38, img: "https://upload.wikimedia.org/wikipedia/en/3/36/Dead_Space_2022_Teaser_Art.jpg" },

{ name: "DEATH STRANDING", genre: ["Adventure", "Action"], size: 56.8, img: "https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S4_1200x1600-5f99e16507795f9b497716b470cfd876" },

{ name: "DEATH STRANDING 2 ON THE BEACH", genre: ["Adventure", "Action"], size: 113, img: "https://upload.wikimedia.org/wikipedia/en/e/e0/Death_Stranding_2_Icon.jpg" },

{ name: "DEMON SLAYER KIMETSU NO YAIBA – THE HINOKAMI CHRONICLES", genre: ["Action", "Anime"], size: 9.98, img: "https://upload.wikimedia.org/wikipedia/en/4/40/Demon_Slayer_Kimetsu_no_Yaiba_%E2%80%93_The_Hinokami_Chronicles_box_art.jpg" },

{ name: "DETROIT BECOME HUMAN", genre: ["Adventure", "Story"], size: 59, img: "https://upload.wikimedia.org/wikipedia/en/e/ee/Detroit_Become_Human.jpg" },

{ name: "DEVIL MAY CRY 4", genre: ["Action", "Hack & Slash"], size: 24.7, img: "https://upload.wikimedia.org/wikipedia/en/b/bb/DMC4COVER.jpg" },

{ name: "DEVIL MAY CRY 5", genre: ["Action", "Hack & Slash"], size: 33.9, img: "https://upload.wikimedia.org/wikipedia/en/c/cb/Devil_May_Cry_5.jpg" },

{ name: "DEVIL MAY CRY HD COLLECTION", genre: ["Action", "Hack & Slash"], size: 12, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsqQLDTBaYRTkguloC2NrW7lTe9hd-6H7BUXmo944Uc4YXIwhu" },

{ name: "DIABLO 2 EXPANSION SET LORD OF DESTRUCTION", genre: ["RPG", "Hack & Slash"], size: 1.91, img: "https://upload.wikimedia.org/wikipedia/en/3/31/Diablo_II_-_Lord_of_Destruction_Coverart.png" },

{ name: "DIABLO 2 RESURRECTED", genre: ["RPG", "Hack & Slash"], size: 37.7, img: "https://upload.wikimedia.org/wikipedia/en/8/88/Diablo_2_Resurrected_cover_art.jpg" },

{ name: "DISHONORED DEATH OF THE OUTSIDER", genre: ["Stealth", "Action"], size: 23.8, img: "https://upload.wikimedia.org/wikipedia/en/0/01/Death_of_the_Outsider_cover.jpg" },

{ name: "DRAGON AGE THE VEILGUARD (2024)", genre: ["RPG", "Fantasy"], size: 90.1, img: "https://upload.wikimedia.org/wikipedia/en/4/4b/Dragon_Age_The_Veilguard_key_art.png" },

{ name: "DRAGON BALL FIGHTER Z ULTIMATE EDITION", genre: ["Fighting", "Anime"], size: 6.41, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LppVvYFD03fbYIjcUgdC3LzqRJBASRzjO_BdsPezxPD40EsVECX9RD9HqK3AwAyDUOw&usqp=CAU" },

{ name: "DRAGON BALL SPARKING", genre: ["Fighting", "Anime"], size: 27.6, img: "https://upload.wikimedia.org/wikipedia/en/7/7f/DBZ_Sparking_Zero_Cover_Art.jpg" },

{ name: "DRAGON BALL XENOVERSE", genre: ["Action", "Anime"], size: 9.79, img: "https://upload.wikimedia.org/wikipedia/en/0/0a/DB_Xenoverse.jpg" },

{ name: "DRAGON BALL XENOVERSE 2", genre: ["Action", "Anime"], size: 12.6, img: "https://upload.wikimedia.org/wikipedia/en/f/fe/Dragon_Ball_Xenoverse_2_Cover.jpeg" },

{ name: "DRAGON BALL Z KAKAROT", genre: ["RPG", "Anime"], size: 51.1, img: "https://upload.wikimedia.org/wikipedia/en/e/e4/Dragon_Ball_Z_Kakarot_logo.png" },

{ name: "DRAGON'S DOGMA 2", genre: ["RPG", "Fantasy"], size: 67.1, img: "https://upload.wikimedia.org/wikipedia/en/c/c7/Dragon%27s_Dogma_2_cover_art.jpg" },

{ name: "DYING LIGHT 2 STAY HUMAN", genre: ["Action", "Horror"], size: 56.3, img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Dying_Light_2_cover_art.jpg" },

{ name: "DYING LIGHT THE BEAST", genre: ["Action", "Horror"], size: 59, img: "https://upload.wikimedia.org/wikipedia/en/d/db/Dying_Light_The_Beast_cover_art.jpg" },

{ name: "DYING LIGHT PLATINUM EDITION", genre: ["Action", "Horror"], size: 32, img: "https://howlongtobeat.com/games/97895_Dying_Light_Platinum_Edition.jpg?width=250" },

{ name: "DYNASTY WARRIORS ORIGINS", genre: ["Action", "Hack & Slash"], size: 45.1, img: "https://upload.wikimedia.org/wikipedia/en/5/55/Dynasty_Warriors_Origins_Cover_1.jpg" },

{ name: "ELDEN RING NIGHTREIGN", genre: ["RPG", "Fantasy"], size: 20.6, img: "https://upload.wikimedia.org/wikipedia/en/f/f0/Elden_Ring_Nightreign_cover_art.png" },

{ name: "ELDEN RING SHADOW OF THE ERDTREE", genre: ["RPG", "Fantasy"], size: 67.5, img: "https://e.snmc.io/lk/g/x/49c95fd9b3bd6c15b02dd7220adab755/11828234" },

{ name: "EMPIRE OF THE ANTS", genre: ["Strategy", "Simulation"], size: 37.0, img: "https://image.api.playstation.com/vulcan/ap/rnd/202310/1213/458817cb71ab6532df2fea1508d825838c1780d333caaebf.jpg" },

{ name: "EMPIRE TOTAL WAR", genre: ["Strategy"], size: 16.0, img: "https://upload.wikimedia.org/wikipedia/en/0/08/Empire_Total_War_cover_art.jpg" },

{ name: "EURO TRUCK SIMULATOR 2", genre: ["Simulation"], size: 33, img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Euro_Truck_Simulator_2_cover.jpg/250px-Euro_Truck_Simulator_2_cover.jpg" },

{ name: "FALLOUT 4 ALL DLCS", genre: ["RPG", "Action"], size: 35.5, img: "https://upload.wikimedia.org/wikipedia/en/7/70/Fallout_4_cover_art.jpg" },

{ name: "FANTASY LIFE I THE GIRL WHO STEALS TIME", genre: ["RPG", "Adventure"], size: 12.4, img: "https://sm.ign.com/ign_gr/cover/f/fantasy-li/fantasy-life-i-the-girl-who-steals-time_ctk3.jpg" },

{ name: "FAR CRY 2", genre: ["FPS", "Action"], size: 3.29, img: "https://upload.wikimedia.org/wikipedia/en/9/97/Far_Cry_2_cover_art.jpg" },

{ name: "FAR CRY 3", genre: ["FPS", "Action"], size: 9.73, img: "https://upload.wikimedia.org/wikipedia/en/c/c6/Far_Cry_3_PAL_box_art.jpg" },

{ name: "FAR CRY 4", genre: ["FPS", "Action"], size: 38.4, img: "https://upload.wikimedia.org/wikipedia/en/6/63/Far_Cry_4_box_art.jpg" },

{ name: "FAR CRY 5", genre: ["FPS", "Action"], size: 44.2, img: "https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg" },

{ name: "FAR CRY 6", genre: ["FPS", "Action"], size: 93.5, img: "https://m.media-amazon.com/images/M/MV5BOGJiOWRjNGEtMmIxOC00OWY2LWI4ODYtZTMzNTljYTFkYjEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

{ name: "FAR CRY PRIMAL", genre: ["FPS", "Adventure"], size: 20, img: "https://upload.wikimedia.org/wikipedia/en/1/18/Far_Cry_Primal_cover_art.jpg" },

{ name: "FATAL FRAME II CRIMSON BUTTERFLY REMAKE", genre: ["Horror"], size: 35, img: "https://upload.wikimedia.org/wikipedia/en/c/cf/FatalFrameIIRemakeArtwork.png" },

{ name: "FIFA 16", genre: ["Sports"], size: 19.4, img: "https://upload.wikimedia.org/wikipedia/en/2/27/FIFA_16_cover.jpg" },

{ name: "FIFA 23", genre: ["Sports"], size: 46.4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BM66WP5WMzTLWD8MYj6afkn2hTiNmkd3tA&s" },

{ name: "FIGHT NIGHT FOREVER", genre: ["Sports", "Fighting"], size: 7, img: "https://cdn2.steamgriddb.com/thumb/61972e693fd7f112e9bbf1223850f953.jpg" },

{ name: "FINAL FANTASY REMAKE INTERGRADE", genre: ["RPG", "Fantasy"], size: 87.7, img: "https://m.media-amazon.com/images/M/MV5BMGYwOTFiYWEtNmY4Yy00NmUwLWJiN2ItZjNkMTk5NDg2MTc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

{ name: "FINAL FANTASY VII REBIRTH", genre: ["RPG", "Fantasy"], size: 153, img: "https://upload.wikimedia.org/wikipedia/en/7/75/Boxart_for_Final_Fantasy_VII_Rebirth.png" },

{ name: "FINAL FANTASY XIII", genre: ["RPG", "Fantasy"], size: 58, img: "https://upload.wikimedia.org/wikipedia/en/4/47/Final_Fantasy_XIII_EU_box_art.jpg" },

{ name: "FINAL FANTASY XV WINDOWS EDITION", genre: ["RPG", "Fantasy"], size: 84, img: "https://static.driffle.com/fit-in/720x512/media-gallery/prod/166937787623599000_final-fantasy-xv-we.webp" },

{ name: "FINAL FANTASY XVI", genre: ["RPG", "Fantasy"], size: 156.0, img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Final_Fantasy_XVI_cover_art.png/250px-Final_Fantasy_XVI_cover_art.png" },

{ name: "FIVE NIGHTS AT FREDDY'S 4", genre: ["Horror"], size: 1.04, img: "https://newzoo.com/wp-content/uploads/api/games/artworks/game--five-nights-at-freddys-4.jpg" },

{ name: "FORZA HORIZON 5", genre: ["Racing"], size: 133.0, img: "https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg" },

{ name: "FORZA HORIZON 6", genre: ["Racing"], size: 145, img: "https://upload.wikimedia.org/wikipedia/en/d/dd/Forza_Horizon_6_key_art.jpeg" },

{ name: "GEARS OF WAR RELOADED", genre: ["TPS", "Action"], size: 72, img: "https://cdn.cdkeys.com/496x700/media/catalog/product/g/e/gears_of_war-_reloaded_cdkeys_1.png" },

{ name: "GHOST OF TSUSHIMA DIRECTOR'S CUT", genre: ["Action", "Adventure"], size: 53.6, img: "https://cdn1.epicgames.com/offer/6e6aa039c73347b885803de65ac5d3db/EGS_GhostofTsushima_SuckerPunchProductions_S2_1200x1600-e23e02c1d70be7b528dba50860f87d39" },

{ name: "GOD OF WAR 4", genre: ["Action", "Adventure"], size: 61.8, img: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg" },

{ name: "GOD OF WAR RAGNAROK", genre: ["Action", "Adventure"], size: 175.0, img: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg" },

{ name: "GOTHAM KNIGHTS", genre: ["Action", "RPG"], size: 41.0, img: "https://upload.wikimedia.org/wikipedia/en/a/a1/Gotham_Knights_Cover.jpg" },

{ name: "GTA III DEFINITIVE EDITION", genre: ["Action", "Open World"], size: 4.27, img: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYSF9ZfYHRPq_UA-VHc_H7x0pU6L5FcrBGcfyUGen4EKn0wfKQ7do_A39IUs44swOQpUdrnjYE0TTi2xacCOI5JUJOGr1I3mit-K55LMYT20_YO6UlQTVFchH4jdm43wpcDqIA.jpg" },

{ name: "GTA IV COMPLETE", genre: ["Action", "Open World"], size: 21.6, img: "https://img.lazcdn.com/g/p/1923a6aef70480e80898c3bf6ccc89bb.jpg_720x720q80.jpg" },

{ name: "GTA SAN ANDREAS - ORIGINAL VERSION", genre: ["Action", "Open World"], size: 5, img: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg" },

{ name: "GTA SAN ANDREAS - THE DEFINITIVE EDITION", genre: ["Action", "Open World"], size: 18.8, img: "https://images.sftcdn.net/images/t_app-icon-m/p/ead93d3c-a2bc-45a9-a217-e0d891ee0fe0/181365800/grand-theft-auto-san-andreas-the-definitive-edition-Grand%20Theft%20Auto%20San%20Andreas%20%E2%80%93%20The%20Definitive%20Edition.png" },

{ name: "GTA V", genre: ["Action", "Open World"], size: 106.0, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png" },

{ name: "GTA VICE CITY NEXTGEN EDITION", genre: ["Action", "Open World"], size: 8.44, img: "https://cdn2.steamgriddb.com/icon_thumb/ab897398ce31791fffec3877ed647387.png" },

{ name: "GTA VICE CITY ORIGINAL VERSION", genre: ["Action", "Open World"], size: 2, img: "https://upload.wikimedia.org/wikipedia/en/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg" },

{ name: "HADES II", genre: ["Roguelike", "Action"], size: 4.10, img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Hades_2_cover_art.jpeg" },

{ name: "HELL IS US", genre: ["Action", "Adventure"], size: 24.7, img: "https://upload.wikimedia.org/wikipedia/en/6/6c/Hell_is_Us_cover_art.jpg" },

{ name: "HITMAN 2 GOLD EDITION", genre: ["Stealth","Action"], size: 103.0, img: "https://imgproxy.eneba.games/0Yok3o2iffDRIK5ccXKlH_KkHbFdDmiW9xp1ZKvt_7s/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy8x/YW5PZVZWbHZZOUwz/TEJVQV9jUE85TFFr/SzRYWVY4cm5qcjJQ/V0dGQ2VrLmpwZWc" },

{ name: "HITMAN ABSOLUTION PROFESSIONAL EDITION", genre: ["Stealth","Action"], size: 23.6, img: "https://imgproxy.eneba.games/R3tAMsm5MdVub-hFkZfsKIE1U8GRWogJgfatEmvm5fQ/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9T/Ul9FQkJBajk5clY2/RXNuMmJia05GdDdy/Q1pROWNxTlBSLTVM/YS0zOHQwLmpwZWc" },

{ name: "HITMAN BLOOD MONEY", genre: ["Stealth","Action"], size: 4.16, img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Hitman_4_artwork.jpg" },

{ name: "HITMAN CODENAME 47", genre: ["Stealth","Action"], size: 0.246, img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitman_artwork.jpg" },

{ name: "HITMAN CONTRACTS", genre: ["Stealth","Action"], size: 0.865, img: "https://upload.wikimedia.org/wikipedia/en/e/ef/Hitman_3_artwork.jpg" },

{ name: "HITMAN WORLD OF ASSASSINATION", genre: ["Stealth","Action"], size: 72.4, img: "https://cms.ioi.dk/media/amadochm/02_woa_square.jpg?width=1200" },

{ name: "HOGWARTS LEGACY", genre: ["RPG","Fantasy"], size: 71.4, img: "https://m.media-amazon.com/images/M/MV5BYjJiYjI4YTYtOTU5OC00YjgxLWJmMzYtMTg0ZTY4NzI5YmExXkEyXkFqcGc@._V1_.jpg" },

{ name: "HOLLOW KNIGHT SILKSONG", genre: ["Metroidvania","Platformer"], size: 7.56, img: "https://upload.wikimedia.org/wikipedia/en/0/05/Silksong.jpg" },

{ name: "HORIZON FORBIDDEN WEST", genre: ["Action","Adventure"], size: 124.0, img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Horizon_Forbidden_West_cover_art.jpg/250px-Horizon_Forbidden_West_cover_art.jpg" },

{ name: "HORIZON ZERO DAWN", genre: ["Action","Adventure"], size: 63, img: "https://upload.wikimedia.org/wikipedia/en/3/3e/Horizon_Zero_Dawn_cover_art.jpg" },

{ name: "HUMANITZ", genre: ["Survival","Open World"], size: 23, img: "https://assets-prd.ignimgs.com/2022/12/10/humanitz-1670703347562.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80" },

{ name: "HUNTER x HUNTER NEN x IMPACT", genre: ["Fighting","Anime"], size: 2.11, img: "https://www.arcsystemworks.fr/wp-content/uploads/2024/10/portrait_standard_hp.jpg.webp" },

{ name: "INJUSTICE 2 LEGENDARY EDITION", genre: ["Fighting","Superhero"], size: 50, img: "https://static.wikia.nocookie.net/injusticegodsamongus/images/a/a2/Injustice_2_Legendary_Edition_cover.jpeg/revision/latest?cb=20200110102931" },

{ name: "INSIDE", genre: ["Puzzle","Adventure"], size: 2.19, img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/INSIDE_Xbox_One_cover_art.png/250px-INSIDE_Xbox_One_cover_art.png" },

{ name: "INTERNET CAFE SIMULATOR 2", genre: ["Simulation"], size: 6.68, img: "https://www.apklinker.com/wp-content/uploads/2022/01/InternetCafeSimulator-320x320.png" },

{ name: "IT TAKES TWO", genre: ["Co-op","Adventure"], size: 43.5, img: "https://upload.wikimedia.org/wikipedia/en/a/aa/It_Takes_Two_cover_art.png" },

{ name: "JAMES BOND 007 QUANTUM OF SOLACE", genre: ["FPS","Action"], size: 7.87, img: "https://upload.wikimedia.org/wikipedia/en/a/ab/Quantum_of_Solace_Cover_Art.PNG" },

{ name: "JUJUTSU KAISEN - CURSED CLASH", genre: ["Fighting","Anime"], size: 18.1, img: "https://upload.wikimedia.org/wikipedia/en/0/00/Jujutsu_Kaisen_Cursed_Clash_Boxart.png" },

{ name: "JUMP FORCE", genre: ["Fighting","Anime"], size: 22.4, img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Jumpforcegame.jpg" },

{ name: "JUST CAUSE 4", genre: ["Action","Open World"], size: 48.4, img: "https://upload.wikimedia.org/wikipedia/en/0/0f/Just_Cause_4_cover.jpg" },

{ name: "KINGDOM COME DELIVERANCE II", genre: ["RPG","Open World"], size: 89.4, img: "https://upload.wikimedia.org/wikipedia/en/3/32/Kingdom_Come_Deliverance_II.jpg" },

{ name: "LEFT 4 DEAD", genre: ["FPS","Horror"], size: 9.85, img: "https://upload.wikimedia.org/wikipedia/en/5/5b/Left4Dead_Windows_cover.jpg" },

{ name: "LEFT 4 DEAD 2", genre: ["FPS","Horror"], size: 14.1, img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Left4Dead2.jpg/250px-Left4Dead2.jpg" },

{ name: "LEGO BATMAN 2", genre: ["Action","Family"], size: 3.76, img: "https://upload.wikimedia.org/wikipedia/en/4/43/Legobatman2.jpg" },

{ name: "LEGO BATMAN LEGACY OF THE DARK KNIGHT", genre: ["Action","Family"], size: 40, img: "https://upload.wikimedia.org/wikipedia/en/8/83/Lego_Batman_Legacy_of_the_Dark_Knight_cover_art.jpg" },

{ name: "LEGO INDIANA JONES", genre: ["Adventure","Family"], size: 5.67, img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Lego_Indiana_Jones_cover.jpg" },

{ name: "LIES OF P", genre: ["Soulslike","RPG"], size: 40, img: "https://upload.wikimedia.org/wikipedia/en/d/de/Lies_of_p_cover_art.jpg" },

{ name: "LITTLE NIGHTMARES", genre: ["Horror","Puzzle"], size: 9.10, img: "https://upload.wikimedia.org/wikipedia/en/d/d8/Little_Nightmares_Box_Art.png" },

{ name: "LITTLE NIGHTMARES II", genre: ["Horror","Puzzle"], size: 10.0, img: "https://upload.wikimedia.org/wikipedia/en/8/84/Little_Nightmares_II_cover.jpg" },

{ name: "LITTLE NIGHTMARES III", genre: ["Horror","Puzzle"], size: 13.2, img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Little_Nightmares_III_cover_art.jpg" },

{ name: "LOST SOUL ASIDE", genre: ["Action","RPG"], size: 64.3, img: "https://upload.wikimedia.org/wikipedia/en/f/fa/Lost_Soul_Aside_cover_art.jpg" },

{ name: "MADDEN NFL 20", genre: ["Sports"], size: 37.9, img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Madden_20_decalless_cover_art.jpg" },

{ name: "MAFIA II DEFINITIVE EDITION", genre: ["Action","Open World"], size: 44.9, img: "https://gamecastlebd.com/wp-content/uploads/2025/03/Mafia-2-definitive.png" },

{ name: "MAFIA III", genre: ["Action","Open World"], size: 37.3, img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Mafia_III_cover_art.jpg" },

{ name: "MAFIA THE OLD COUNTRY", genre: ["Action","Open World"], size: 46, img: "https://upload.wikimedia.org/wikipedia/en/a/af/Mafia_The_Old_Country_cover_art.jpg" },

{ name: "MARVEL VS CAPCOM INFINITE", genre: ["Fighting","Superhero"], size: 59, img: "https://upload.wikimedia.org/wikipedia/en/6/62/MvCI_Cover.png" },

{ name: "MARVELS SPIDERMAN 2", genre: ["Action","Superhero"], size: 107.0, img: "https://i.ebayimg.com/images/g/7GsAAOSwGrdlFPbn/s-l1200.jpg" },

{ name: "MARVELS SPIDER MAN MILES MORALES", genre: ["Action","Superhero"], size: 56.9, img: "https://digital.datablitz.com.ph/cdn/shop/products/SpederMan_Miles-Morales.png?v=1669021597" },

{ name: "MARVELS SPIDER-MAN REMASTERED", genre: ["Action","Superhero"], size: 65.9, img: "https://digital.datablitz.com.ph/cdn/shop/products/spiderman_remastered.png?v=1660296077" },

{ name: "MAX PAYNE 3", genre: ["TPS","Action"], size: 32.8, img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Max_Payne_3_Cover.jpg/250px-Max_Payne_3_Cover.jpg" },

{ name: "MEDAL OF HONOR", genre: ["FPS","War"], size: 4.84, img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Medal_of_Honor_2010_Box_art.jpg" },

{ name: "MEDAL OF HONOR AIRBORNE", genre: ["FPS","War"], size: 11, img: "https://upload.wikimedia.org/wikipedia/en/f/fa/MoH_Airborne_cover_PC_DVD.jpg" },

{ name: "MEDAL OF HONOR ALLIED ASSAULT WAR CHEST", genre: ["FPS","War"], size: 2.52, img: "https://media.s-bol.com/BRXgyk44ABko/N91wNL2/550x783.jpg" },

{ name: "MEDAL OF HONOR PACIFIC ASSAULT", genre: ["FPS","War"], size: 3.54, img: "https://upload.wikimedia.org/wikipedia/en/5/5a/PacificAssaultBox.jpg" },

{ name: "MEDAL OF HONOR WARFIGHTER", genre: ["FPS","War"], size: 15.8, img: "https://upload.wikimedia.org/wikipedia/en/e/e2/Warfighter.jpg" },

{ name: "METAL GEAR SOLID DELTA SNAKE EATER", genre: ["Stealth","Action"], size: 93.9, img: "https://upload.wikimedia.org/wikipedia/en/0/08/MetalGearSolidDelta.jpg" },

{ name: "METAL GEAR SOLID V THE PHANTOM PAIN", genre: ["Stealth","Action"], size: 22.9, img: "https://upload.wikimedia.org/wikipedia/en/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png" },

{ name: "METAL SLUG COLLECTION", genre: ["Run & Gun","Arcade"], size: 5.88, img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6po4.webp" },

{ name: "METRO REDUX", genre: ["FPS","Horror"], size: 17, img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73206bd9-257c-4f50-b1f3-59a306e24084/dfl2ndi-b5988e89-909a-4876-a13e-4d0ef59f3969.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczMjA2YmQ5LTI1N2MtNGY1MC1iMWYzLTU5YTMwNmUyNDA4NFwvZGZsMm5kaS1iNTk4OGU4OS05MDlhLTQ4NzYtYTEzZS00ZDBlZjU5ZjM5NjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.POT4ILgpwZ6yEQxUb-atHrVqyY7GjcOIGj18f2e70BY" },

{ name: "MICROSOFT FLIGHT SIMULATOR", genre: ["Simulation"], size: 95.3, img: "https://assets.xboxservices.com/assets/8e/48/8e4805cd-f0b1-422d-88e8-73ce2d0c4368.jpg?n=Microsoft-Flight-Simulator_GLP-Page-Hero-0_1083x1222_06.jpg" },

{ name: "MIDDLE EARTH SHADOW OF WAR DEFINITIVE EDITION", genre: ["Action","RPG"], size: 109, img: "https://cdn.cdkeys.com/media/catalog/product/n/e/new_project_12_.jpg" },

{ name: "MINDSEYE", genre: ["Action","Adventure"], size: 49.5, img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/MindsEye_cover_art.png/250px-MindsEye_cover_art.png" },

{ name: "MINECRAFT BEDROCK EDITION", genre: ["Sandbox","Survival"], size: 3, img: "https://cdn2.steamgriddb.com/thumb/779fa7c32fcfbcc6162e4bc111c62b43.jpg" },

{ name: "MINECRAFT DUNGEONS", genre: ["Dungeon Crawler","Action"], size: 5.08, img: "https://upload.wikimedia.org/wikipedia/en/7/73/Minecraft_Dungeons_cover_art.jpg" },

{ name: "MONSTER HUNTER WORLD ICEBORNE", genre: ["Action","RPG"], size: 51.2, img: "https://upload.wikimedia.org/wikipedia/en/b/be/Monster_Hunter_World_Iceborne_cover_art.png" },

{ name: "MORTAL KOMBAT KOMPLETE EDITION", genre: ["Fighting"], size: 9.24, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalNKwVPGUDPPaUjoKP0eYJSx2XCooEWoHHA&s" },

{ name: "MORTAL KOMBAT XI", genre: ["Fighting"], size: 133, img: "https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png" },

{ name: "MOTOGP 24", genre: ["Racing","Sports"], size: 24.4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAQtnf8IL9VHUUWuqbi-spTAlVHJ818K4Ng&s" },

{ name: "MOUNT AND BLADE II BANNERLORD", genre: ["RPG","Strategy"], size: 50, img: "https://upload.wikimedia.org/wikipedia/en/4/45/Mount_%26_Blade_II_-_Bannerlord_cover.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "MY HERO ACADEMIA ALL JUSTICE", genre: ["Fighting","Anime"], size: 14, img: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2025/07/my-hero-academia-all-s-justice-tag-image.jpg?q=50&fit=contain&w=480&dpr=1.5" },

{ name: "NARUTO SHIPUUDEN ULTIMATE NINJA STORM 4", genre: ["Fighting","Anime"], size: 38.9, img: "https://upload.wikimedia.org/wikipedia/en/5/54/NSUNS4_game_cover.png" },

{ name: "NARUTO X BORUTO ULTIMATE NINJA STORM CONNECTIONS", genre: ["Fighting","Anime"], size: 29.7, img: "https://us-east-1-bandai.graphassets.com/AXzioIclSWilEjFtsMJPwz/zmWeTkFXR7iWwLlNv45o" },

{ name: "NBA 2K14", genre: ["Sports"], size: 7.21, img: "https://upload.wikimedia.org/wikipedia/en/8/87/NBA_2K14_cover.jpg" },

{ name: "NBA 2K16", genre: ["Sports"], size: 43, img: "https://www.cheatcc.com/wp-content/uploads/2023/05/nba2k16review_boxart.jpg" },

{ name: "NBA 2K26 (MODDED FROM 2K23)", genre: ["Sports"], size: 168, img: "https://assets.2k.com/1a6ngf98576c/2QH1PlkhFZ9SQnAhJeAcCr/8c30228f14eceaf5566109d0406d59d8/NBA26_Standard_FOB_425x535.png" },

{ name: "NEED FOR SPEED CARBON", genre: ["Racing"], size: 5.11, img: "https://w0.peakpx.com/wallpaper/801/770/HD-wallpaper-need-4-speed-carbon-evo-mitsubishi-mitsubishi-evo-ix-need4speed-need4speedcarbon-needforspeed-nfs-nfscarbon-ubc.jpg" },

{ name: "NEED FOR SPEED HEAT DELUXE EDITION", genre: ["Racing"], size: 30.2, img: "https://s.pacn.ws/1/p/10n/need-for-speed-heat-deluxe-edition-659881.12.jpg?v=sl4ufg" },

{ name: "NEED FOR SPEED MOST WANTED (2005)", genre: ["Racing"], size: 2.78, img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg/250px-Need_for_Speed_Most_Wanted_Box_Art.jpg" },

{ name: "NEED FOR SPEED MOST WANTED (2012)", genre: ["Racing"], size: 6.32, img: "https://upload.wikimedia.org/wikipedia/en/b/b0/Nfs-most-wanted-2012-gen-packart.jpg" },

{ name: "NEED FOR SPEED PAYBACK", genre: ["Racing"], size: 27, img: "https://upload.wikimedia.org/wikipedia/en/6/64/Need_for_Speed_Payback_standard_edition_cover_art.jpg" },

{ name: "NEED FOR SPEED PRO STREET", genre: ["Racing"], size: 9.57, img: "https://upload.wikimedia.org/wikipedia/en/1/16/NFS_ProStreet_cover.png" },

{ name: "NEED FOR SPEED UNDERGROUND 2", genre: ["Racing"], size: 2.91, img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Nfsu2-win-cover.jpg/250px-Nfsu2-win-cover.jpg" },

{ name: "NICKELODEON ALL-STAR BRAWL 2", genre: ["Fighting","Family"], size: 13, img: "https://upload.wikimedia.org/wikipedia/en/2/2a/Nickelodeon_All-Star_Brawl_2_cover.jpg" },

{ name: "NINJA GAIDEN 2 BLACK", genre: ["Action","Hack & Slash"], size: 81.1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCuYBmuFuri3mwtFTdFqTP7ThZYTPZmnopw&s" },

{ name: "NINJA GAIDEN 4", genre: ["Action","Hack & Slash"], size: 54.6, img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Ninja_Gaiden_4_cover_art.jpg" },

{ name: "NIOH 3", genre: ["RPG","Soulslike"], size: 113, img: "https://upload.wikimedia.org/wikipedia/en/d/db/Nioh_3_cover_art_2026.jpg" },

{ name: "NO MANS SKY", genre: ["Survival","Open World"], size: 18.9, img: "https://upload.wikimedia.org/wikipedia/en/6/67/No_Man%27s_Sky.jpg" },

{ name: "ONE PIECE PIRATE WARRIORS 3 GOLD EDITION", genre: ["Action","Anime"], size: 11.4, img: "https://cdn11.bigcommerce.com/s-k0hjo2yyrq/images/stencil/1280x1280/products/1226/1283/One_Piece_Pirate_Warriors_3_Gold_Edition_Packshot__58977.1726658252.jpg?c=1" },

{ name: "ONE PIECE PIRATE WARRIORS 4 ULTIMATE EDITION", genre: ["Action","Anime"], size: 26.6, img: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co73ta.jpg" },

{ name: "ONE PIECE UNLIMITED WORLD RED - DELUXE EDITION", genre: ["Action","Anime"], size: 11.7, img: "https://upload.wikimedia.org/wikipedia/en/0/0f/One_Piece_Unlimited_World_RED_cover_art.jpeg" },

{ name: "OPERATION FLASHPOINT RED RIVER", genre: ["FPS","Military"], size: 4.56, img: "https://upload.wikimedia.org/wikipedia/en/5/52/Operation_Flashpoint_Red_River_Game_Cover.jpg" },

{ name: "OUTLAST", genre: ["Horror"], size: 7, img: "https://upload.wikimedia.org/wikipedia/en/a/aa/Outlast_cover.jpg" },

{ name: "OUTLAST 2", genre: ["Horror"], size: 25.0, img: "https://www.gamezawy.com/wp-content/uploads/2022/07/outlast2-jpg.webp" },

{ name: "OVERCOOKED ALL YOU CAN EAT", genre: ["Co-op","Simulation"], size: 7.8, img: "https://m.media-amazon.com/images/M/MV5BMDJlY2M0Y2ItZTNjOC00MTczLTk1NmMtMGM0MTc2ZGM2NGM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

{ name: "PALWORLD", genre: ["Survival","Open World"], size: 39, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Palworld_Steam_artwork.jpg" },

{ name: "PAYDAY 2", genre: ["FPS","Co-op"], size: 88, img: "https://upload.wikimedia.org/wikipedia/en/7/7b/Payday2cover.jpg" },

{ name: "PERSONA 5 STRIKERS", genre: ["RPG","Action"], size: 23.8, img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Persona_5_Scramble.jpg" },

{ name: "PET SHOP SIMULATOR", genre: ["Simulation"], size: 4.88, img: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co82bw.jpg" },

{ name: "POLICE SIMULATOR PATROL OFFICERS", genre: ["Simulation"], size: 12.4, img: "https://cdn.technobezz.com/games/games/cover/police-simulator-patrol-officers/police-simulator-patrol-officers-cover-gamebezz-com.jpg" },

{ name: "PRAGMATA", genre: ["Sci-Fi","Adventure"], size: 35, img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Pragmata_cover.jpg" },

{ name: "PROJECT ZOMBOID", genre: ["Survival","Zombie"], size: 6.91, img: "https://m.media-amazon.com/images/M/MV5BNTA5ZDJkMzAtZGZkZC00MDk3LTkyZTktZTBjZjZiZDZmZjAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

{ name: "PLANTS VS ZOMBIES", genre: ["Strategy","Tower Defense"], size: 0.0831, img: "https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "POKEMON SCARLET-VIOLET", genre: ["RPG","Adventure"], size: 13, img: "https://upload.wikimedia.org/wikipedia/en/0/00/Pok%C3%A9mon_Scarlet_and_Violet_banner.png" },

{ name: "PROTOTYPE", genre: ["Action","Open World"], size: 7.85, img: "https://upload.wikimedia.org/wikipedia/en/b/b2/PROTOTYPE.png" },

{ name: "PROTOTYPE 2", genre: ["Action","Open World"], size: 9.79, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Prototype_2_game.jpg" },

{ name: "READY OR NOT", genre: ["FPS","Tactical"], size: 58.7, img: "https://image.api.playstation.com/vulcan/ap/rnd/202504/0914/da9f50007c771345aba1636b0e3aa47e3210fa36991b36f7.jpg" },

{ name: "REAL BOXING", genre: ["Sports","Fighting"], size: 1.53, img: "https://store-images.s-microsoft.com/image/apps.49258.13510798886623386.c7ed3c21-fa92-4f38-acee-aed027575fe6.5ee74f43-6a26-4741-8298-8cc2e75bbcf4" },

{ name: "REANIMAL", genre: ["Horror","Adventure"], size: 15, img: "https://upload.wikimedia.org/wikipedia/en/9/9c/Reanimal_cover_art.jpg" },

{ name: "RED ALERT 3", genre: ["Strategy","RTS"], size: 14.2, img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Command_%26_Conquer_Red_Alert_3_Game_Cover.jpg" },

{ name: "RED DEAD REDEMPTION + UNDEAD NIGHTMARE", genre: ["Action","Open World"], size: 9.73, img: "https://media.rockstargames.com/rockstargames/img/global/news/upload/reddeadredemption_undeadnightmare_art.png" },

{ name: "RED DEAD REDEMPTION 2", genre: ["Action","Open World"], size: 119.0, img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" },

{ name: "RESIDENT EVIL 2 REMAKE", genre: ["Horror","Survival"], size: 24, img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_2_Remake.jpg/250px-Resident_Evil_2_Remake.jpg" },

{ name: "RESIDENT EVIL 3 REMAKE", genre: ["Horror","Survival"], size: 23.8, img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Resident_Evil_3.jpg" },

{ name: "RESIDENT EVIL 4", genre: ["Horror","Action"], size: 11.7, img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Resi4-gc-cover.jpg" },

{ name: "RESIDENT EVIL 4 REMAKE+ALL DLC", genre: ["Horror","Action"], size: 70, img: "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg" },

{ name: "RESIDENT EVIL 5 GOLD EDITION", genre: ["Horror","Action"], size: 8.45, img: "https://cdn.mobygames.com/covers/2256913-resident-evil-5-gold-edition-xbox-one-front-cover.png" },

{ name: "RESIDENT EVIL 6", genre: ["Horror","Action"], size: 12.5, img: "https://preview.redd.it/epzoksw9hmu61.jpg?width=640&crop=smart&auto=webp&s=b365452e4a8ab9f75cdf0bab3f60542d1983119d" },

{ name: "RESIDENT EVIL 7 BIOHAZARD", genre: ["Horror","Survival"], size: 22.9, img: "https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_7_cover_art.jpg" },

{ name: "RESIDENT EVIL HD", genre: ["Horror","Survival"], size: 11.8, img: "https://m.media-amazon.com/images/M/MV5BNTEzMjY4OTAtMDI2Yy00NjFmLTg5NTQtZmQxODYxMTA4ODY2XkEyXkFqcGc@._V1_.jpg" },

{ name: "RESIDENT EVIL OPERATION RACOON CITY", genre: ["Horror","TPS"], size: 9.82, img: "https://upload.wikimedia.org/wikipedia/en/5/52/OperationRaccoonCity.jpg" },

{ name: "RESIDENT EVIL REQUIEM", genre: ["Horror","Survival"], size: 76, img: "https://upload.wikimedia.org/wikipedia/en/1/15/Resident_Evil_Requiem_Cover_Art.jpg" },

{ name: "RESIDENT EVIL VILLAGE", genre: ["Horror","Survival"], size: 37, img: "https://upload.wikimedia.org/wikipedia/en/2/2c/Resident_Evil_Village.png" },

{ name: "REVENGE OF THE SAVAGE PLANET", genre: ["Adventure","Sci-Fi"], size: 12.6, img: "https://upload.wikimedia.org/wikipedia/en/4/44/Revenge_of_the_Savage_Planet_cover_art.png" },

{ name: "RIDE 5", genre: ["Racing","Sports"], size: 43.4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpa4tLgNYBOgYiRaxsR5jJWP5Sek_O4ibRaQ&s" },

{ name: "RISE OF THE RONIN", genre: ["Action","RPG"], size: 149, img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Rise_of_the_Ronin_Key_Art.jpg" },

{ name: "RISE OF THE TOMB RAIDER", genre: ["Action","Adventure"], size: 35.9, img: "https://upload.wikimedia.org/wikipedia/en/2/29/Rise_of_the_Tomb_Raider.jpg" },

{ name: "ROADCRAFT", genre: ["Simulation","Driving"], size: 48.4, img: "https://upload.wikimedia.org/wikipedia/en/3/3e/Roadcraft_cover_art.jpeg" },

{ name: "RUNE FACTORY GUARDIANS OF AZUMA", genre: ["RPG","Simulation"], size: 13.0, img: "https://upload.wikimedia.org/wikipedia/en/a/ad/Rune_Factory_-_Guardians_of_Azuma_Steam_artwork.jpg" },

{ name: "RYSE SON OF ROME", genre: ["Action","Hack & Slash"], size: 25.8, img: "https://upload.wikimedia.org/wikipedia/en/c/c5/Ryse_box_art.jpg" },

{ name: "SAINTS ROW 2022", genre: ["Action","Open World"], size: 49, img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Saints_Row_2022_Cover_Art.jpeg" },

{ name: "SAMSON", genre: ["Action","Adventure"], size: 13, img: "https://upload.wikimedia.org/wikipedia/en/1/14/Samson_cover_art.png" },

{ name: "SCHEDULE I", genre: ["Simulation","Strategy"], size: 6.82, img: "https://assets-prd.ignimgs.com/2025/03/25/schedulei-1742876870079.jpg" },

{ name: "SEKIRO SHADOWS DIE TWICE", genre: ["Action","Soulslike"], size: 13.9, img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/250px-Sekiro_art.jpg" },

{ name: "SHADOW OF THE TOMB RAIDER CROFT EDITION", genre: ["Action","Adventure"], size: 35.4, img: "https://cdn.gameboost.com/igdb/covers/99122/co3he9.jpg" },

{ name: "SIFU", genre: ["Action","Martial Arts"], size: 31, img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg?t=1754555101" },

{ name: "SILENT HILL 2 REMAKE", genre: ["Horror","Survival"], size: 35, img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Silent_Hill_2_remake_cover.jpg/250px-Silent_Hill_2_remake_cover.jpg" },

{ name: "SILENT HILL 3", genre: ["Horror","Survival"], size: 5.07, img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Sh3_boxart.jpg/250px-Sh3_boxart.jpg" },

{ name: "SILENT HILL 4 NEW EDITION", genre: ["Horror","Survival"], size: 3.63, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Silent2002.jpg/250px-Silent2002.jpg" },

{ name: "SILENT HILL F", genre: ["Horror","Survival"], size: 47.9, img: "https://img.game8.co/4130881/2b19ba68655d60ad2879409fdc168678.png/show" },

{ name: "SILENT HILL HOMECOMING", genre: ["Horror","Survival"], size: 8.18, img: "https://upload.wikimedia.org/wikipedia/en/f/f1/Silent_Hill_Homecoming.jpg" },

{ name: "SIX DAYS IN FALLUJAH", genre: ["FPS","Military"], size: 33.3, img: "https://www.wog.ch/nas/cover_xl/pcd/pcd_sixdaysinfallujah.jpg" },

{ name: "SLEEPING DOGS DEFINITIVE EDITION", genre: ["Action","Open World"], size: 16.5, img: "https://store-images.s-microsoft.com/image/apps.27657.69516029925336975.e3cb0155-71cd-4799-bed4-63da86cce109.61267421-c294-418d-98ad-81f696989b4f" },

{ name: "SNIPER ELITE 2 V2 REMASTERED", genre: ["TPS","Stealth"], size: 13.0, img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Sniper_Elite_V2_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "SNIPER ELITE 3", genre: ["TPS","Stealth"], size: 18.6, img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Sniper_Elite_III_cover_art.jpg" },

{ name: "SNIPER GHOST WARRIOR CONTRACTS", genre: ["FPS","Tactical"], size: 12.6, img: "https://upload.wikimedia.org/wikipedia/en/7/75/SGWC_cover_art.jpg" },

{ name: "SNIPER GHOST WARRIOR CONTRACTS 2", genre: ["FPS","Tactical"], size: 15, img: "https://images.igdb.com/igdb/image/upload/t_1080p/co2nuh.jpg" },

{ name: "SONIC & SEGA ALL STARS RACING", genre: ["Racing","Arcade"], size: 6, img: "https://upload.wikimedia.org/wikipedia/en/1/17/SEGA_Racing.jpg" },

{ name: "SPIDER-MAN SHATTERED DIMENSION", genre: ["Action","Superhero"], size: 14, img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Spider-Man_Shattered_Dimensions_cover.jpg" },

{ name: "SPLIT FICTION", genre: ["Co-op","Adventure"], size: 88, img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Split_Fiction_cover_art.jpg/250px-Split_Fiction_cover_art.jpg" },

{ name: "SPONGEBOB SQUAREPANTS TITANS OF THE TIDE", genre: ["Adventure","Family"], size: 10, img: "https://upload.wikimedia.org/wikipedia/en/a/a4/SpongeBob_SquarePants_Titans_of_the_Tide_cover_art.jpg" },

{ name: "STAR WARS JEDI SURVIVOR", genre: ["Action","Adventure"], size: 129, img: "https://upload.wikimedia.org/wikipedia/en/4/43/Star_Wars_Jedi_Survivor.jpg" },

{ name: "STARCRAFT REMASTERED", genre: ["Strategy","RTS"], size: 5.60, img: "https://gamegator.net/_next/image?url=https%3A%2F%2Fimages.gamegator.net%2Fco3wal&w=640&q=75" },

{ name: "STARFIELD", genre: ["RPG","Sci-Fi"], size: 116, img: "https://upload.wikimedia.org/wikipedia/en/6/6d/Bethesda_Starfield.jpg" },

{ name: "STATE OF DECAY - YEAR-ONE SURVIVAL EDITION", genre: ["Survival","Zombie"], size: 2.95, img: "https://m.media-amazon.com/images/I/71lcjHH7aiL._UF1000,1000_QL80_.jpg" },

{ name: "STATE OF DECAY 2 JUGGERNAUT EDITION HOMECOMING", genre: ["Survival","Zombie"], size: 19.5, img: "https://zamve.com/wp-content/uploads/2022/06/State-of-Decay-Juggernaut-Edition-pc-game-steam-key-from-zamve.com_.jpg" },

{ name: "STELLAR BLADE", genre: ["Action","RPG"], size: 61, img: "https://upload.wikimedia.org/wikipedia/en/6/63/Stellar_Blade_Pre_Order_Box.png" },

{ name: "STORY OF SEASONS GRAND BAZAAR", genre: ["Simulation","Farming"], size: 7.67, img: "https://cdn.dekudeals.com/images/e686894cb7a726dacc9ddcbef0b1ec1c33d80f47/w500.jpg" },

{ name: "STRAY", genre: ["Adventure","Puzzle"], size: 7, img: "https://upload.wikimedia.org/wikipedia/en/f/f1/Stray_cover_art.jpg" },

{ name: "STREET FIGHTER V", genre: ["Fighting"], size: 54.1, img: "https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png" },

{ name: "STREET FIGHTER X TEKKEN", genre: ["Fighting"], size: 6.71, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/SF-X-Tekken_box_art.jpg" },

{ name: "SUPER MARIO 3D WORLD + BROWSER’S FURY", genre: ["Platformer","Adventure"], size: 4, img: "https://mario.wiki.gallery/images/3/30/SM3DWBF_Box_NA_Final.png" },

{ name: "SUPERMARKET SIMULATOR", genre: ["Simulation"], size: 4.26, img: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5opi.jpg" },

{ name: "SWORD ART ONLINE FRACTURED DAYDREAM", genre: ["RPG","Anime"], size: 42.1, img: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1105/e87038b4709a4cf6407aad1c23d57663a1d13c5fecffcfed.png" },

{ name: "TEKKEN 8", genre: ["Fighting"], size: 126, img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tekken_8_cover_art.jpg" },

{ name: "TEKKEN 7 V5.10 INCL ALL DLC", genre: ["Fighting"], size: 81, img: "https://upload.wikimedia.org/wikipedia/en/1/17/Official_Tekken_7_Logo.jpg" },

{ name: "THE CALLISTO PROTOCOL", genre: ["Horror","Sci-Fi"], size: 95, img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1544020/header.jpg?t=1760331403" },

{ name: "THE CREW 2", genre: ["Racing","Open World"], size: 35.3, img: "https://upload.wikimedia.org/wikipedia/en/2/2b/The_Crew_2_box_art.jpg" },

{ name: "THE ELDER SCROLLS V SKYRIM SPECIAL EDITION", genre: ["RPG","Open World"], size: 11.8, img: "https://i0.wp.com/techubiz.com/wp-content/uploads/2023/03/skyrim.jpg?fit=1000%2C1000&ssl=1" },

{ name: "THE ELDER SCROLLS IV OBLIVION REMASTERED", genre: ["RPG","Open World"], size: 124, img: "https://upload.wikimedia.org/wikipedia/en/6/66/The_Elder_Scrolls_IV_Oblivion_Remastered_cover_art.webp" },

{ name: "THE HOUSE OF THE DEAD REMAKE", genre: ["Horror","Shooter"], size: 8, img: "https://f.rpp-noticias.io/2022/05/03/thotd_1253887.jpg" },

{ name: "THE KING OF FIGHTERS XV", genre: ["Fighting"], size: 43.3, img: "https://upload.wikimedia.org/wikipedia/en/d/df/KOF_XV.png" },

{ name: "THE LAST OF US 1", genre: ["Action","Survival"], size: 77.6, img: "https://m.media-amazon.com/images/M/MV5BMTE2MmQ3OTctZmExNi00ZTYxLTgzMGYtOTdlYjFjNzIxNWMxXkEyXkFqcGc@._V1_.jpg" },

{ name: "THE LAST OF US PART II REMASTERED", genre: ["Action","Survival"], size: 115, img: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c" },

{ name: "THE LEGEND OF ZELDA TEARS OF THE KINGDOM", genre: ["Adventure","Open World"], size: 17, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg" },

{ name: "THE LORD OF THE RINGS WAR IN THE NORTH", genre: ["Action","RPG"], size: 7.08, img: "https://upload.wikimedia.org/wikipedia/en/c/c2/LOTR_War_in_the_North.png" },

{ name: "THE SIMS 4", genre: ["Simulation","Life"], size: 67, img: "https://static.electronicfirst.com/products/thumbnail_1748502161_683806915ce7a.webp" },

{ name: "THE WITCHER 2: ASSASIN OF KINGS ENHANCED EDITION", genre: ["RPG","Fantasy"], size: 19.7, img: "https://upload.wikimedia.org/wikipedia/en/4/40/Witcher_2_cover.jpg" },

{ name: "THE WITCHER 3 WILD HUNT", genre: ["RPG","Fantasy"], size: 89, img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg" },

{ name: "TITANFALL 2", genre: ["FPS","Sci-Fi"], size: 67, img: "https://upload.wikimedia.org/wikipedia/en/1/13/Titanfall_2.jpg" },

{ name: "TOM CLANCY’S SPLINTER CELL BLACKLIST", genre: ["Stealth","Action"], size: 18.1, img: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Splinter_Cell_Blacklist_box_art.png" },

{ name: "TOM CLANCY’S SPLINTER CELL DOUBLE AGENT", genre: ["Stealth","Action"], size: 9.86, img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Scda_boxart.jpg" },

{ name: "TOM CLANCY'S GHOST RECON WILDLANDS WITH DLC", genre: ["TPS","Open World"], size: 87, img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Ghost_Recon_Wildlands_cover_art.jpg" },

{ name: "TOM CLANCYS GHOST RECON FUTURE SOLDIER", genre: ["TPS","Tactical"], size: 14.1, img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Tom_Clancy_Ghost_Recon_Future_Soldier_Game_Cover.jpg" },

{ name: "TOM CLANCYS SPLINTER CELL CONVICTION", genre: ["Stealth","Action"], size: 6.91, img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Tom_Clancy%27s_Splinter_Cell_Conviction.jpg" },

{ name: "TOMB RAIDER DEFINITIVE EDITION", genre: ["Action","Adventure"], size: 24.1, img: "https://store-images.s-microsoft.com/image/apps.35283.68847167288522183.9fdea778-258f-40d6-9f9e-fab92915bc6d.98c2dd25-9180-49e5-bdd3-6bdb1d857889" },

{ name: "TONY HAWKS PRO SKATER 3+4", genre: ["Sports","Skateboarding"], size: 51.4, img: "https://upload.wikimedia.org/wikipedia/en/8/82/Tony_Hawk%27s_Pro_Skater_3_%2B_4_cover_art.png" },

{ name: "TOTAL WAR ROME II EMPEROR EDITION", genre: ["Strategy","RTS"], size: 33.4, img: "https://i.ebayimg.com/images/g/KGEAAOSwFnJgT5-7/s-l1200.jpg" },

{ name: "TOTAL WAR ROME II RISE OF THE REPUBLIC", genre: ["Strategy","RTS"], size: 33.3, img: "https://www.mmoga.com/images/games/_ext/1102937/total-war-rome-2-rise-of-the-republic-dlc_large.png" },

{ name: "TRANSFORMERS - WAR FOR CYBERTRON", genre: ["Action","TPS"], size: 8.27, img: "https://upload.wikimedia.org/wikipedia/en/6/63/War_for_Cybertron.jpg" },

{ name: "TRANSFORMERS RISE OF THE DARK SPARK", genre: ["Action","TPS"], size: 9, img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Transfromersgame.png" },

{ name: "ULTIMATE MARVEL VS. CAPCOM 3", genre: ["Fighting","Superhero"], size: 4, img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/UMvC3_Cover.jpg/250px-UMvC3_Cover.jpg" },

{ name: "UNCHARTED LEGACY OF THIEVES COLLECTION", genre: ["Action","Adventure"], size: 124, img: "https://owp.klarna.com/product/640x640/3007557856/Uncharted-Legacy-Of-Thieves-Collection-(PC).jpg?ph=true" },

{ name: "UNDISPUTED", genre: ["Sports","Fighting"], size: 18, img: "https://cdn.loaded.com/500x706/media/catalog/product/n/e/new_project_-_2023-02-01t163153.562.jpg" },

{ name: "UNRAVEL TWO", genre: ["Puzzle","Co-op"], size: 6.76, img: "https://m.media-amazon.com/images/M/MV5BYzZmYzBhMjYtZjcyZC00NmJjLThlZmItMjM0NjU0NTk1YmMxXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg" },

{ name: "UNTIL DAWN", genre: ["Horror","Adventure"], size: 60, img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Until_Dawn_cover_art.jpg" },

{ name: "VAMPIRE THE MASQUERADE BLOODLINES 2", genre: ["RPG","Vampire"], size: 24, img: "https://upload.wikimedia.org/wikipedia/en/d/de/Vampire_The_Masquerade_%E2%80%93_Bloodlines_2_%282024%29_cover_art.jpg" },

{ name: "VICTORIA 3", genre: ["Strategy","Simulation"], size: 17, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Victoria_3_cover_art.jpg" },

{ name: "VIRTUA.FIGHTER.5.R.E.V.O", genre: ["Fighting"], size: 21.5, img: "https://cdn.sega.co.uk/mhc-sega/public/styles/1280/public/content/media/images/raster/vf5revo_vertical_cover.jpg.webp?itok=2mZE2zf7" },

{ name: "WARCRAFT III", genre: ["Strategy","RTS"], size: 2, img: "https://upload.wikimedia.org/wikipedia/en/8/87/Warcraftiii-frozen-throne-boxcover.jpg" },

{ name: "WARHAMMER 40,000: MECHANICUS II", genre: ["Strategy","Turn-Based"], size: 19, img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Warhammer_40%2C000_Mechanicus_II.png" },

{ name: "WARHAMMER 40000 SPACE MARINE 2", genre: ["Action","TPS"], size: 64.7, img: "https://upload.wikimedia.org/wikipedia/en/4/42/Warhammer_40%2C000_Space_Marine_2_cover_art.jpg" },

{ name: "WATCH DOGS", genre: ["Action","Open World"], size: 16.4, img: "https://www.allkeyshop.com/blog/wp-content/uploads/Watch-Dogsn-1.jpg" },

{ name: "WATCH DOGS 2", genre: ["Action","Open World"], size: 47.3, img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Watch_Dogs_2.jpg/250px-Watch_Dogs_2.jpg" },

{ name: "WATCH DOGS LEGION", genre: ["Action","Open World"], size: 110.0, img: "https://upload.wikimedia.org/wikipedia/en/d/dc/Watch_Dogs_Legion_cover_art.webp" },

{ name: "WO LONG FALLEN DYNASTY", genre: ["Action","Soulslike"], size: 60, img: "https://upload.wikimedia.org/wikipedia/en/c/c6/Wo_Long_Fallen_Dynasty_cover.jpeg" },

{ name: "WOLFENSTEIN THE NEW ORDER", genre: ["FPS","Action"], size: 43.4, img: "https://upload.wikimedia.org/wikipedia/en/9/95/Wolfenstein_The_New_Order_cover.jpg" },

{ name: "WORLD WAR Z AFTERMATH", genre: ["TPS","Zombie"], size: 61.0, img: "https://cdn.technobezz.com/games/games/cover/world-war-z-aftermath/world-war-z-aftermath-cover-gamebezz-com.jpg" },

{ name: "WUCHANG FALLEN FEATHERS", genre: ["Action","Soulslike"], size: 45.7, img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Wuchang_Fallen_Feathers_cover_art.jpg" },

{ name: "WWE 2K24", genre: ["Sports","Wrestling"], size: 85.4, img: "https://upload.wikimedia.org/wikipedia/en/c/c5/WWE_2K24_Standard_Cover.png" },

{ name: "WWE 2K25", genre: ["Sports","Wrestling"], size: 90.5, img: "https://upload.wikimedia.org/wikipedia/en/5/53/WWE_2k25_cover.jpg" },

{ name: "YU-GI-OH LEGACY OF THE DUELIST LINK EVOLUTION", genre: ["Card Game","Strategy"], size: 1.52, img: "https://m.media-amazon.com/images/M/MV5BMDM5MTAyNDAtMThhOS00ZDhjLWEzN2MtOTY0ODI2NmZlM2YxXkEyXkFqcGc@._V1_.jpg" },

];

const lowEndGames = [
  { name: "AGE OF EMPIRES 2 AGE OF KINGS", genre: ["Strategy"], size: 0.334, img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png/250px-Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png" },

{ name: "AGE OF EMPIRES II DEFINITIVE EDITION", genre: ["Strategy"], size: 15, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuEJAORLYWCvt9bBKyI4AuEKGFTluZU-0I3SfaSUh1jZExuRDh" },

{ name: "ASSASIN’S CREED 4 BLACK FLAG", genre: ["Action", "Adventure"], size: 27, img: "https://m.media-amazon.com/images/M/MV5BOTAzZWQwNjMtMjNmZi00NjJkLWI5MjQtNjA3NDI1NjExMTA4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },

{ name: "ASSASIN’S CREED LIBERATION HD", genre: ["Action", "Adventure"], size: 3, img: "https://upload.wikimedia.org/wikipedia/en/e/e1/Assassin%27s_Creed_III_Liberation_Cover_Art.jpg" },

{ name: "ASSASSIN'S CREED - 1", genre: ["Action", "Adventure"], size: 7, img: "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" },

{ name: "ASSASSIN'S CREED - 2", genre: ["Action", "Adventure"], size: 6, img: "https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" },

{ name: "ASSASSIN'S CREED - BROTHERHOOD", genre: ["Action", "Adventure"], size: 9, img: "https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" },

{ name: "ASSASSINS CREED - REVELATIONS", genre: ["Action", "Adventure"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" },

{ name: "BALDUR'S GATE 2 - ENHANCED EDITION", genre: ["RPG"], size: 4, img: "https://upload.wikimedia.org/wikipedia/en/b/b4/BGIIEE_cover_art.jpg" },

{ name: "BATTLEFIELD BAD COMPANY 2", genre: ["Action", "FPS"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/b/b3/Battlefield_Bad_Company_2_cover.jpg" },

{ name: "BATMAN - ARKHAM ASYLUM", genre: ["Action", "Adventure"], size: 8, img: "https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg" },

{ name: "BATMAN - ARKHAM CITY", genre: ["Action", "Adventure"], size: 17, img: "https://upload.wikimedia.org/wikipedia/en/0/00/Batman_Arkham_City_Game_Cover.jpg" },

{ name: "BATTLE REALMS ZEN EDITION", genre: ["Strategy"], size: 2, img: "https://cdn.gracza.pl/galeria/gry13/1126645062.jpg" },

{ name: "BATTLEFIELD 3", genre: ["Action", "FPS"], size: 16, img: "https://upload.wikimedia.org/wikipedia/en/6/69/Battlefield_3_Game_Cover.jpg" },

{ name: "BATTLEFIELD 4", genre: ["Action", "FPS"], size: 27, img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Battlefield_4_cover_art.jpg/250px-Battlefield_4_cover_art.jpg" },

{ name: "BATTLEFIELD HARDLINE", genre: ["Action", "FPS"], size: 39, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Battlefield_Hardline.jpg/250px-Battlefield_Hardline.jpg" },

{ name: "BULLY SCHOLARSHIP EDITION", size: 4.83, genre: ["Action","Adventure"], img: "https://gamegator.net/_next/image?url=https%3A%2F%2Fimages.gamegator.net%2Fco2gvl&w=384&q=75" },

{ name: "CALL OF DUTY 2", size: 4, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Call_of_Duty_2_Box.jpg/250px-Call_of_Duty_2_Box.jpg" },

{ name: "CALL OF DUTY 5 WORLD AT WAR", size: 7, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/6/69/WAW_Cover_Art.jpg" },

{ name: "CALL OF DUTY BLACK OPS", size: 11.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/250px-CoD_Black_Ops_cover.png" },

{ name: "CALL OF DUTY - BLACK OPS 2", size: 22.2, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png/250px-Call_of_Duty_Black_Ops_II_box_artwork.png" },

{ name: "CALL OF DUTY MODERN WARFARE 2", size: 12, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "CALL OF DUTY MODERN WARFARE 3", size: 17.1, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png" },

{ name: "CALL OF DUTY MODERN WARFARE 4", size: 5.56, genre: ["FPS","Action"], img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg" },

{ name: "COMMAND & CONQUER - RED ALERT 3", size: 14.2, genre: ["Strategy","RTS"], img: "https://e.snmc.io/lk/l/x/9130a35a3187d78e3690e70f29e0f76b/10137338" },

{ name: "COMMAND & CONQUER RED ALERT 2 (V20221102 + YURIS REVENGE)", size: 1.23, genre: ["Strategy","RTS"], img: "https://images.gamegator.net/co88lz" },

{ name: "COMMAND AND CONQUER 3 TIBERIUM WARS", size: 5.80, genre: ["Strategy","RTS"], img: "https://alchetron.com/cdn/command-and-conquer-3-tiberium-wars-0b6cc4ff-46cf-4fd0-a26a-1549c4cc8d1-resize-750.jpeg" },

{ name: "COMMAND AND CONQUER 4 - TIBERIAN TWILIGHT", size: 5.41, genre: ["Strategy","RTS"], img: "https://upload.wikimedia.org/wikipedia/en/8/83/Cc4tt-cover.jpg" },

{ name: "COMPANY OF HEROES - COMPLETE EDITION", size: 8.91, genre: ["Strategy","RTS"], img: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98z-lwc4e3wxcqqp47" },

{ name: "COMPANY OF HEROES 2 - MASTER COLLECTION", size: 31.0, genre: ["Strategy","RTS"], img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ74WuxispkEmiS_k395Zm6ENUhXJnVKgxdWlRkm2qdxwD_Vbr8nqg2oABpF8tWNUmQ8&usqp=CAU" },

{ name: "COUNTER STRIKE XTREME", size: 2.12, genre: ["FPS","Multiplayer"], img: "https://2img.net/h/www.fullprogramlarindir.com/wp-content/uploads/2014/05/Counter-Strike-Xtreme-V6-2011-Cover.jpg" },

{ name: "CUPHEAD", genre: ["Platformer", "Action"], size: 5.44, img: "https://upload.wikimedia.org/wikipedia/en/e/eb/Cuphead_%28artwork%29.png" },

{ name: "DARKSIDERS II", genre: ["Action", "RPG"], size: 5.45, img: "https://upload.wikimedia.org/wikipedia/en/5/5c/DarksidersII.jpg" },

{ name: "DEVIL MAY CRY 4", genre: ["Action", "Hack & Slash"], size: 24.7, img: "https://upload.wikimedia.org/wikipedia/en/b/bb/DMC4COVER.jpg" },

{ name: "DIABLO 2 EXPANSION SET LORD OF DESTRUCTION", genre: ["RPG", "Hack & Slash"], size: 1.91, img: "https://upload.wikimedia.org/wikipedia/en/3/31/Diablo_II_-_Lord_of_Destruction_Coverart.png" },

{ name: "DRAGON BALL XENOVERSE", genre: ["Action", "Anime"], size: 9.79, img: "https://upload.wikimedia.org/wikipedia/en/0/0a/DB_Xenoverse.jpg" },

{ name: "EMPIRE TOTAL WAR", genre: ["Strategy"], size: 16.0, img: "https://upload.wikimedia.org/wikipedia/en/0/08/Empire_Total_War_cover_art.jpg" },

{ name: "FAR CRY 2", genre: ["FPS", "Action"], size: 3.29, img: "https://upload.wikimedia.org/wikipedia/en/9/97/Far_Cry_2_cover_art.jpg" },

{ name: "FAR CRY 3", genre: ["FPS", "Action"], size: 9.73, img: "https://upload.wikimedia.org/wikipedia/en/c/c6/Far_Cry_3_PAL_box_art.jpg" },

{ name: "GTA IV COMPLETE", genre: ["Action", "Open World"], size: 21.6, img: "https://img.lazcdn.com/g/p/1923a6aef70480e80898c3bf6ccc89bb.jpg_720x720q80.jpg" },

{ name: "GTA SAN ANDREAS - ORIGINAL VERSION", genre: ["Action", "Open World"], size: 5, img: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg" },

{ name: "GTA V", genre: ["Action", "Open World"], size: 106.0, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png" },

{ name: "GTA VICE CITY ORIGINAL VERSION", genre: ["Action", "Open World"], size: 2, img: "https://upload.wikimedia.org/wikipedia/en/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg" },

{ name: "HITMAN ABSOLUTION PROFESSIONAL EDITION", genre: ["Stealth","Action"], size: 23.6, img: "https://imgproxy.eneba.games/R3tAMsm5MdVub-hFkZfsKIE1U8GRWogJgfatEmvm5fQ/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9T/Ul9FQkJBajk5clY2/RXNuMmJia05GdDdy/Q1pROWNxTlBSLTVM/YS0zOHQwLmpwZWc" },

{ name: "HITMAN BLOOD MONEY", genre: ["Stealth","Action"], size: 4.16, img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Hitman_4_artwork.jpg" },

{ name: "HITMAN CODENAME 47", genre: ["Stealth","Action"], size: 0.246, img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Hitman_artwork.jpg" },

{ name: "HITMAN CONTRACTS", genre: ["Stealth","Action"], size: 0.865, img: "https://upload.wikimedia.org/wikipedia/en/e/ef/Hitman_3_artwork.jpg" },

{ name: "JAMES BOND 007 QUANTUM OF SOLACE", genre: ["FPS","Action"], size: 7.87, img: "https://upload.wikimedia.org/wikipedia/en/a/ab/Quantum_of_Solace_Cover_Art.PNG" },

{ name: "LEFT 4 DEAD", genre: ["FPS","Horror"], size: 9.85, img: "https://upload.wikimedia.org/wikipedia/en/5/5b/Left4Dead_Windows_cover.jpg" },

{ name: "LEFT 4 DEAD 2", genre: ["FPS","Horror"], size: 14.1, img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Left4Dead2.jpg/250px-Left4Dead2.jpg" },

{ name: "LEGO BATMAN 2", genre: ["Action","Family"], size: 3.76, img: "https://upload.wikimedia.org/wikipedia/en/4/43/Legobatman2.jpg" },

{ name: "LEGO INDIANA JONES", genre: ["Adventure","Family"], size: 5.67, img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Lego_Indiana_Jones_cover.jpg" },

{ name: "MAX PAYNE 3", genre: ["TPS","Action"], size: 32.8, img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Max_Payne_3_Cover.jpg/250px-Max_Payne_3_Cover.jpg" },

{ name: "MEDAL OF HONOR", genre: ["FPS","War"], size: 4.84, img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Medal_of_Honor_2010_Box_art.jpg" },

{ name: "MEDAL OF HONOR AIRBORNE", genre: ["FPS","War"], size: 11, img: "https://upload.wikimedia.org/wikipedia/en/f/fa/MoH_Airborne_cover_PC_DVD.jpg" },

{ name: "MEDAL OF HONOR ALLIED ASSAULT WAR CHEST", genre: ["FPS","War"], size: 2.52, img: "https://media.s-bol.com/BRXgyk44ABko/N91wNL2/550x783.jpg" },

{ name: "MEDAL OF HONOR PACIFIC ASSAULT", genre: ["FPS","War"], size: 3.54, img: "https://upload.wikimedia.org/wikipedia/en/5/5a/PacificAssaultBox.jpg" },

{ name: "MEDAL OF HONOR WARFIGHTER", genre: ["FPS","War"], size: 15.8, img: "https://upload.wikimedia.org/wikipedia/en/e/e2/Warfighter.jpg" },

{ name: "METAL SLUG COLLECTION", genre: ["Run & Gun","Arcade"], size: 5.88, img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6po4.webp" },

{ name: "MINECRAFT BEDROCK EDITION", genre: ["Sandbox","Survival"], size: 3, img: "https://cdn2.steamgriddb.com/thumb/779fa7c32fcfbcc6162e4bc111c62b43.jpg" },

{ name: "NARUTO SHIPUUDEN ULTIMATE NINJA STORM 4", genre: ["Fighting","Anime"], size: 38.9, img: "https://upload.wikimedia.org/wikipedia/en/5/54/NSUNS4_game_cover.png" },

{ name: "NBA 2K14", genre: ["Sports"], size: 7.21, img: "https://upload.wikimedia.org/wikipedia/en/8/87/NBA_2K14_cover.jpg" },

{ name: "NBA 2K16", genre: ["Sports"], size: 42.4, img: "https://www.cheatcc.com/wp-content/uploads/2023/05/nba2k16review_boxart.jpg" },

{ name: "NEED FOR SPEED CARBON", genre: ["Racing"], size: 5.11, img: "https://w0.peakpx.com/wallpaper/801/770/HD-wallpaper-need-4-speed-carbon-evo-mitsubishi-mitsubishi-evo-ix-need4speed-need4speedcarbon-needforspeed-nfs-nfscarbon-ubc.jpg" },

{ name: "NEED FOR SPEED MOST WANTED (2005)", genre: ["Racing"], size: 2.78, img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg/250px-Need_for_Speed_Most_Wanted_Box_Art.jpg" },

{ name: "NEED FOR SPEED MOST WANTED (2012)", genre: ["Racing"], size: 6.32, img: "https://upload.wikimedia.org/wikipedia/en/b/b0/Nfs-most-wanted-2012-gen-packart.jpg" },

{ name: "NEED FOR SPEED PRO STREET", genre: ["Racing"], size: 9.57, img: "https://upload.wikimedia.org/wikipedia/en/1/16/NFS_ProStreet_cover.png" },

{ name: "NEED FOR SPEED UNDERGROUND 2", genre: ["Racing"], size: 2.91, img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Nfsu2-win-cover.jpg/250px-Nfsu2-win-cover.jpg" },

{ name: "ONE PIECE PIRATE WARRIORS 3 GOLD EDITION", genre: ["Action","Anime"], size: 11.4, img: "https://cdn11.bigcommerce.com/s-k0hjo2yyrq/images/stencil/1280x1280/products/1226/1283/One_Piece_Pirate_Warriors_3_Gold_Edition_Packshot__58977.1726658252.jpg?c=1" },

{ name: "OPERATION FLASHPOINT RED RIVER", genre: ["FPS","Military"], size: 4.56, img: "https://upload.wikimedia.org/wikipedia/en/5/52/Operation_Flashpoint_Red_River_Game_Cover.jpg" },

{ name: "PAYDAY 2", genre: ["FPS","Co-op"], size: 88, img: "https://upload.wikimedia.org/wikipedia/en/7/7b/Payday2cover.jpg" },

{ name: "PLANTS VS ZOMBIES", genre: ["Strategy","Tower Defense"], size: 0.0831, img: "https://upload.wikimedia.org/wikipedia/en/9/9c/PlantsvsZombiesCoverArt.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "PROTOTYPE", genre: ["Action","Open World"], size: 7.85, img: "https://upload.wikimedia.org/wikipedia/en/b/b2/PROTOTYPE.png" },

{ name: "PROTOTYPE 2", genre: ["Action","Open World"], size: 9.79, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/Prototype_2_game.jpg" },

{ name: "REAL BOXING", genre: ["Sports","Fighting"], size: 1.53, img: "https://store-images.s-microsoft.com/image/apps.49258.13510798886623386.c7ed3c21-fa92-4f38-acee-aed027575fe6.5ee74f43-6a26-4741-8298-8cc2e75bbcf4" },

{ name: "RESIDENT EVIL 4", genre: ["Horror","Action"], size: 11.7, img: "https://upload.wikimedia.org/wikipedia/en/d/d9/Resi4-gc-cover.jpg" },

{ name: "RESIDENT EVIL 5 GOLD EDITION", genre: ["Horror","Action"], size: 8.45, img: "https://cdn.mobygames.com/covers/2256913-resident-evil-5-gold-edition-xbox-one-front-cover.png" },

{ name: "RESIDENT EVIL 6", genre: ["Horror","Action"], size: 12.5, img: "https://preview.redd.it/epzoksw9hmu61.jpg?width=640&crop=smart&auto=webp&s=b365452e4a8ab9f75cdf0bab3f60542d1983119d" },

{ name: "RESIDENT EVIL OPERATION RACOON CITY", genre: ["Horror","TPS"], size: 9.82, img: "https://upload.wikimedia.org/wikipedia/en/5/52/OperationRaccoonCity.jpg" },

{ name: "RYSE SON OF ROME", genre: ["Action","Hack & Slash"], size: 25.8, img: "https://upload.wikimedia.org/wikipedia/en/c/c5/Ryse_box_art.jpg" },

{ name: "SILENT HILL 3", genre: ["Horror","Survival"], size: 5.07, img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Sh3_boxart.jpg/250px-Sh3_boxart.jpg" },

{ name: "SILENT HILL 4 NEW EDITION", genre: ["Horror","Survival"], size: 3.63, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Silent2002.jpg/250px-Silent2002.jpg" },

{ name: "SILENT HILL HOMECOMING", genre: ["Horror","Survival"], size: 8.18, img: "https://upload.wikimedia.org/wikipedia/en/f/f1/Silent_Hill_Homecoming.jpg" },

{ name: "SLEEPING DOGS DEFINITIVE EDITION", genre: ["Action","Open World"], size: 16.5, img: "https://store-images.s-microsoft.com/image/apps.27657.69516029925336975.e3cb0155-71cd-4799-bed4-63da86cce109.61267421-c294-418d-98ad-81f696989b4f" },

{ name: "SNIPER ELITE 2 V2 REMASTERED", genre: ["TPS","Stealth"], size: 13.0, img: "https://upload.wikimedia.org/wikipedia/en/b/b2/Sniper_Elite_V2_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original" },

{ name: "SNIPER ELITE 3", genre: ["TPS","Stealth"], size: 18.6, img: "https://upload.wikimedia.org/wikipedia/en/a/a2/Sniper_Elite_III_cover_art.jpg" },

{ name: "SONIC & SEGA ALL STARS RACING", genre: ["Racing","Arcade"], size: 6, img: "https://upload.wikimedia.org/wikipedia/en/1/17/SEGA_Racing.jpg" },

{ name: "SPIDER-MAN SHATTERED DIMENSION", genre: ["Action","Superhero"], size: 14, img: "https://upload.wikimedia.org/wikipedia/en/b/b1/Spider-Man_Shattered_Dimensions_cover.jpg" },

{ name: "STARCRAFT REMASTERED", genre: ["Strategy","RTS"], size: 5.60, img: "https://gamegator.net/_next/image?url=https%3A%2F%2Fimages.gamegator.net%2Fco3wal&w=640&q=75" },

{ name: "STREET FIGHTER X TEKKEN", genre: ["Fighting"], size: 6.71, img: "https://upload.wikimedia.org/wikipedia/en/f/fb/SF-X-Tekken_box_art.jpg" },

{ name: "THE LORD OF THE RINGS WAR IN THE NORTH", genre: ["Action","RPG"], size: 7.08, img: "https://upload.wikimedia.org/wikipedia/en/c/c2/LOTR_War_in_the_North.png" },

{ name: "THE SIMS 4", genre: ["Simulation","Life"], size: 67, img: "https://static.electronicfirst.com/products/thumbnail_1748502161_683806915ce7a.webp" },

{ name: "THE WITCHER 2: ASSASIN OF KINGS ENHANCED EDITION", genre: ["RPG","Fantasy"], size: 19.7, img: "https://upload.wikimedia.org/wikipedia/en/4/40/Witcher_2_cover.jpg" },

{ name: "TOM CLANCY’S SPLINTER CELL BLACKLIST", genre: ["Stealth","Action"], size: 18.1, img: "https://upload.wikimedia.org/wikipedia/en/4/47/Tom_Clancy%27s_Splinter_Cell_Blacklist_box_art.png" },

{ name: "TOM CLANCY’S SPLINTER CELL DOUBLE AGENT", genre: ["Stealth","Action"], size: 9.86, img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Scda_boxart.jpg" },

{ name: "TOM CLANCYS GHOST RECON FUTURE SOLDIER", genre: ["TPS","Tactical"], size: 14.1, img: "https://upload.wikimedia.org/wikipedia/en/c/c4/Tom_Clancy_Ghost_Recon_Future_Soldier_Game_Cover.jpg" },

{ name: "TOM CLANCYS SPLINTER CELL CONVICTION", genre: ["Stealth","Action"], size: 6.91, img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Tom_Clancy%27s_Splinter_Cell_Conviction.jpg" },

{ name: "TOTAL WAR ROME II EMPEROR EDITION", genre: ["Strategy","RTS"], size: 33.4, img: "https://i.ebayimg.com/images/g/KGEAAOSwFnJgT5-7/s-l1200.jpg" },

{ name: "TOTAL WAR ROME II RISE OF THE REPUBLIC", genre: ["Strategy","RTS"], size: 33.3, img: "https://www.mmoga.com/images/games/_ext/1102937/total-war-rome-2-rise-of-the-republic-dlc_large.png" },

{ name: "TRANSFORMERS - WAR FOR CYBERTRON", genre: ["Action","TPS"], size: 8.27, img: "https://upload.wikimedia.org/wikipedia/en/6/63/War_for_Cybertron.jpg" },

{ name: "TRANSFORMERS RISE OF THE DARK SPARK", genre: ["Action","TPS"], size: 9, img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Transfromersgame.png" },

{ name: "ULTIMATE MARVEL VS. CAPCOM 3", genre: ["Fighting","Superhero"], size: 4, img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/UMvC3_Cover.jpg/250px-UMvC3_Cover.jpg" },

{ name: "WARCRAFT III", genre: ["Strategy","RTS"], size: 2, img: "https://upload.wikimedia.org/wikipedia/en/8/87/Warcraftiii-frozen-throne-boxcover.jpg" },

{ name: "YU-GI-OH LEGACY OF THE DUELIST LINK EVOLUTION", genre: ["Card Game","Strategy"], size: 1.52, img: "https://m.media-amazon.com/images/M/MV5BMDM5MTAyNDAtMThhOS00ZDhjLWEzN2MtOTY0ODI2NmZlM2YxXkEyXkFqcGc@._V1_.jpg" },


];

const games = [...allGames.map((g,i)=>({
  id:"all-"+i,
  name:g.name,
  size:g.size,
  tags:g.genre,
  low:false,
  img:g.img
})), ...lowEndGames.map((g,i)=>({
  id:"low-"+i,
  name:g.name,
  size:g.size,
  tags:g.genre,
  low:true,
  img:g.img
}))];

// Remove duplicate entries from the All Games tab while keeping the first occurrence.
const uniqueAllGames = [];
const seenNames = new Set();
for (const g of games.filter(g=>!g.low)) {
  const key = g.name.trim().toLowerCase();
  if (!seenNames.has(key)) {
    seenNames.add(key);
    uniqueAllGames.push(g);
  }
}
const uniqueLowEndGames = games.filter(g=>g.low);

let mode="all";
let selected=[];

const $=id=>document.getElementById(id);

function render(){
  const q=$("searchInput").value.trim().toLowerCase();
  const source = mode==="all" ? uniqueAllGames : uniqueLowEndGames;
  const list=source.filter(g=>{
    const searchOK=!q || g.name.toLowerCase().includes(q) || g.tags.some(t=>t.toLowerCase().includes(q));
    return searchOK;
  });

  $("gameGrid").innerHTML=list.length?list.map(g=>{
    const added=selected.includes(g.id);
    return `<article class="card">
      <div class="card-media" style="--cover:url("${g.img.replace(/"/g, '%22')}")">
        ${g.new ? '<span class="new-badge">🔥 NEW</span>' : ''}
        <img class="card-img" src="${g.img}" alt="${escapeHtml(g.name)}" onerror="this.style.opacity='0'">
      </div>
      <div class="card-body">
        <div class="card-title">${escapeHtml(g.name)}</div>
        <div class="tags">${g.tags.map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
        <div class="size"><span class="size-icon">▰</span>${g.size} GB</div>
        <button class="add-btn ${added?"selected":""}" onclick="toggleGame('${g.id}')">${added?"✓ ADDED":"+ ADD"}</button>
      </div>
    </article>`;
  }).join(""):`<div class="empty" style="grid-column:1/-1">No games found.</div>`;

  updateDrive();
}

function totalUsed(){
  return selected.reduce((n,id)=>n+(games.find(g=>g.id===id)?.size||0),0);
}

function toggleGame(id){
  if(selected.includes(id)){
    selected=selected.filter(x=>x!==id);
    toast("Game removed");
  }else{
    const game=games.find(g=>g.id===id);
    if(totalUsed()+game.size>DRIVE_CAPACITY){
      toast(`Not enough space on the ${DRIVE_OPTIONS[driveKey].label} drive`);
      return;
    }
    selected.push(id);
    toast(`${game.name} added`);
  }
  render();
}

function updateDrive(){
  const used=totalUsed();
  const remaining=DRIVE_CAPACITY-used;
  const pct=(used/DRIVE_CAPACITY)*100;
  $("used").textContent=`${used.toFixed(1)} GB`;
  $("remaining").textContent=`${remaining.toFixed(1)} GB`;
  $("gamesAdded").textContent=selected.length;
  $("selectedCount").textContent=selected.length;
  $("progress").style.width=`${pct}%`;
  $("percent").textContent=`${pct.toFixed(1).replace(".0","")}%`;

  if($("stickyDriveLabel")) $("stickyDriveLabel").textContent=DRIVE_OPTIONS[driveKey].label;
  if($("stickyGames")) $("stickyGames").textContent=`${selected.length} GAME${selected.length===1?"":"S"}`;
  if($("stickyUsed")) $("stickyUsed").textContent=`${used.toFixed(1)} GB`;
  if($("stickyProgress")) $("stickyProgress").style.width=`${pct}%`;
}

function openSelected(){
  const used=totalUsed();
  $("sheetSummary").textContent=`${selected.length} GAMES • ${used} GB / ${DRIVE_OPTIONS[driveKey].label}`;
  $("sheetUsed").textContent=`${used} GB`;
  $("sheetRemaining").textContent=`${DRIVE_CAPACITY-used} GB`;
  if($("sheetDrive")) $("sheetDrive").textContent=DRIVE_OPTIONS[driveKey].label;

  if(!selected.length){
    $("selectedList").innerHTML=`<div class="empty"><div style="font-size:30px">🎮</div><br><b style="color:#fff">No games selected yet.</b><br>Add games from All Games or Low End PC Games.</div>`;
  }else{
    $("selectedList").innerHTML=selected.map(id=>{
      const g=games.find(x=>x.id===id);
      return `<div class="selected-item">
        <img src="${g.img}" alt="">
        <div><strong>${escapeHtml(g.name)}</strong><small>${g.tags.join(" • ")}</small></div>
        <span class="selected-size">${g.size} GB</span>
        <button class="remove" onclick="removeSelected('${g.id}')">✕</button>
      </div>`;
    }).join("");
  }
  $("selectedModal").classList.add("open");
}

function removeSelected(id){
  selected=selected.filter(x=>x!==id);
  render();
  openSelected();
}

function buildOrder(){
  const used=totalUsed();
  const remaining=DRIVE_CAPACITY-used;
  const lines=selected.map((id,i)=>{
    const g=games.find(x=>x.id===id);
    return `${i+1}. ${g.name} — ${g.size} GB`;
  });
  return [
    "🎮 GAMEPRIX GAME ORDER",
    "━━━━━━━━━━━━━━━━━━━━",
    "",
    `💽 DRIVE: ${DRIVE_OPTIONS[driveKey].label}`,
    "",
    "🎮 SELECTED GAMES",
    ...lines,
    "",
    "━━━━━━━━━━━━━━━━━━━━",
    `💾 TOTAL: ${used} GB`,
    `📦 REMAINING: ${remaining} GB`,
    "",
    "Please confirm my order. Thank you!"
  ].join("\n");
}

async function copyOrder(){
  if(!selected.length){toast("Please add at least one game");return;}
  const text=buildOrder();
  try{
    await navigator.clipboard.writeText(text);
  }catch{
    const ta=document.createElement("textarea");
    ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();
  }
  toast("Order copied! Opening Messenger...");
  setTimeout(()=>window.open(MESSENGER_URL,"_blank","noopener,noreferrer"),450);
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function toast(message){
  $("toast").textContent=message;
  $("toast").classList.add("show");
  clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>$("toast").classList.remove("show"),2200);
}

document.querySelectorAll(".drive-option").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const next=btn.dataset.drive;
    const newCapacity=DRIVE_OPTIONS[next].usable;
    if(totalUsed()>newCapacity){
      toast("This drive is too small for your selected games");
      return;
    }
    document.querySelectorAll(".drive-option").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    driveKey=next;
    DRIVE_CAPACITY=newCapacity;
    document.querySelector(".drive-badge").textContent=DRIVE_OPTIONS[next].label;
    render();
  });
});

document.querySelectorAll(".mode").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".mode").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    mode=btn.dataset.mode;
    render();
  });
});
$("searchInput").addEventListener("input",render);
$("viewSelected").addEventListener("click",openSelected);
if($("stickyView")) $("stickyView").addEventListener("click",openSelected);
$("closeModal").addEventListener("click",()=>$("selectedModal").classList.remove("open"));
$("selectedModal").addEventListener("click",e=>{if(e.target.id==="selectedModal")$("selectedModal").classList.remove("open")});
$("addMore").addEventListener("click",()=>$("selectedModal").classList.remove("open"));
$("copyOrder").addEventListener("click",copyOrder);

render();
