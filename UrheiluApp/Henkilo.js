class Henkilo {
  #etunimet;
  #sukunimi;
  #kutsumanimi;
  #syntymavuosi;

  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.#etunimet = etunimet;
    this.#sukunimi = sukunimi;
    this.#kutsumanimi = kutsumanimi;
    this.#syntymavuosi = syntymavuosi;
  }
}
module.exports = Henkilo;
