const Henkilo = require("./Henkilo");

class Urheilija extends Henkilo {
  #kuva;
  #omapaino;
  #laji;
  #saavutukset;

  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuva,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this._etunimet = etunimet;
    this._sukunimi = sukunimi;
    this._kutsumanimi = kutsumanimi;
    this._syntymavuosi = syntymavuosi;
    this.#kuva = kuva;
    this.#omapaino = omapaino;
    this.#laji = laji;
    this.#saavutukset = saavutukset;
  }

  get Kutsumanimi() {
    return this._kutsumanimi;
  }

  set Kutsumanimi(kutsumanimi) {
    this._kutsumanimi = kutsumanimi;
  }

  get Sukunimi() {
    return this._sukunimi;
  }

  set Sukunimi(sukunimi) {
    this._sukunimi = sukunimi;
  }

  get Kuva() {
    return this.#kuva;
  }

  set Kuva(kuva) {
    this.#kuva = kuva;
  }

  get Laji() {
    return this.#laji;
  }

  set Laji(laji) {
    this.#laji = laji;
  }

  get Saavutukset() {
    return this.#saavutukset;
  }

  set Saavutukset(saavutukset) {
    this.#saavutukset = saavutukset;
  }
}
module.exports = Urheilija;
