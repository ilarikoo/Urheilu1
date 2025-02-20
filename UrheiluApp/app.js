//Web-ohjelmointi 1, kevät 2025, JavaScript-tehtävä 3
//Ilari Kujala

const Henkilo = require("./Henkilo");
const Urheilija = require("./Urheilija");

//luodaan esimerkkiurheilijoita
let markkanen = new Urheilija(
  ["Lauri", "Elias"],
  "Markkanen",
  "Lauri",
  1997,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lauri_Markkanen%2C_Cavaliers_vs_Rockets_on_December_15%2C_2021_%28cropped%29.jpg/250px-Lauri_Markkanen%2C_Cavaliers_vs_Rockets_on_December_15%2C_2021_%28cropped%29.jpg",
  105,
  "koripallo",
  [
    "Tulokkaiden ykköstähdistöjoukkuessa 2018",
    "NBA:n kehittynein pelaaja 2023",
    "Chicago Bullsin historian kuudenneksi eniten kolmen pisteen koreja heittänyt pelaaja",
  ]
);

let makarainen = new Urheilija(
  ["Kaisa", "Leena"],
  "Makarainen",
  "Kaisa",
  1983,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kaisa_M%C3%A4k%C3%A4r%C3%A4inen_%28FIN%29_with_Crystal_Globe_IBU_2018_%28cropped%29.jpg/250px-Kaisa_M%C3%A4k%C3%A4r%C3%A4inen_%28FIN%29_with_Crystal_Globe_IBU_2018_%28cropped%29.jpg",
  80,
  "ampumahiihto",
  [
    "MM-kultaa takaa-ajossa 2011",
    "MM-hopeaa pikakilpailussa 2011",
    "MM-pronssia yhteislähdössä 2017",
  ]
);

//kokeillaan tulostaa syötettyjä tietoja
console.log(makarainen.Kutsumanimi + " " + makarainen.Sukunimi);
console.log(makarainen.Kuva);
console.log("Laji: " + makarainen.Laji);
let makarainenSaavutukset = "";
makarainen.Saavutukset.forEach((saavutus) => {
  makarainenSaavutukset = makarainenSaavutukset + saavutus + "\n";
});
console.log("Saavutukset:");
console.log(makarainenSaavutukset);

console.log(markkanen.Kutsumanimi + " " + markkanen.Sukunimi);
console.log(markkanen.Kuva);
console.log("Laji: " + markkanen.Laji);
let markkanenSaavutukset = "";
markkanen.Saavutukset.forEach((saavutus) => {
  markkanenSaavutukset = markkanenSaavutukset + saavutus + "\n";
});
console.log("Saavutukset:");
console.log(markkanenSaavutukset);
