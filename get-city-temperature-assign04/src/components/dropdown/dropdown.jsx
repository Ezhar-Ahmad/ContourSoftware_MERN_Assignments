import React from "react";
import { useState, useEffect } from "react";
import "./dropdown.css";
import Axios from "axios";

function Dropdown(props) {
  const [countryCities, setCountryCities] = useState("");
  const country_list = [
    {
      name: "Afghanistan",
      cities: ["Herat", "Kabul", "Kandahar", "Molah", "Rana", "Shar"],
    },
    { name: "Aland Islands", cities: ["Mariehamn"] },
    {
      name: "Albania",
      cities: [
        "Elbasan",
        "Petran",
        "Pogradec",
        "Shkoder",
        "Tirana",
        "Ura Vajgurore",
      ],
    },
    {
      name: "Algeria",
      cities: [
        "Algiers",
        "Annaba",
        "Azazga",
        "Batna City",
        "Blida",
        "Bordj",
        "Bordj Bou Arreridj",
      ],
    },
    { name: "American Samoa", cities: ["Pago Pago"] },
    {
      name: "Andorra",
      cities: [
        "Andorra la Vella",
        "Canillo",
        "Encamp",
        "Engordany",
        "Escaldes-Engordany",
        "La Massana",
      ],
    },
    {
      name: "Angola",
      cities: [
        "Ambriz",
        "Benguela",
        "Cabinda",
        "Cacole",
        "Camabatela",
        "Cazeta",
        "Huambo",
        "Kuito",
      ],
    },
    { name: "Anguilla", cities: ["The Valley"] },
    { name: "Antarctica", cities: ["Antarctica"] },
    {
      name: "Antigua and Barbuda",
      cities: [
        "All Saints",
        "Cassada Gardens",
        "Codrington",
        "Old Road",
        "Parham",
        "Woods",
      ],
    },
    {
      name: "Argentina",
      cities: [
        "28 de Noviembre",
        "Abasto",
        "Acassuso",
        "Acebal",
        "Acevedo",
        "Adelia Maria",
      ],
    },
    {
      name: "Armenia",
      cities: [
        "Abovyan",
        "Agarak",
        "Apaga",
        "Aparan",
        "Arabkir",
        "Ashtarak",
        "Erebuni Fortress",
        "Hrazdan",
        "Ijevan",
        "Jermuk",
        "Kapan",
      ],
    },
    {
      name: "Aruba",
      cities: [
        "Noord",
        "Oranjestad",
        "Palm Beach",
        "Paradera",
        "Ponton",
        "Sabaneta",
        "San Barbola",
        "Santa Cruz",
        "Sero Blanco",
        "Sint Nicolaas",
      ],
    },
    {
      name: "Australia",
      cities: [
        "Abbotsford",
        "Abbotsham",
        "Aberdeen",
        "Aberfoyle",
        "Aberglasslyn",
        "Abermain",
      ],
    },
    {
      name: "Austria",
      cities: ["Absam", "Absdorf", "Abtenau", "Abtsdorf", "Ach", "Achenkirch"],
    },
    {
      name: "Azerbaijan",
      cities: ["Baku", "Nakhchivan", "Quba", "Qusar", "Sulutapa"],
    },
    {
      name: "Bahamas",
      cities: [
        "Andros Town",
        "Dunmore Town",
        "Freeport",
        "Marsh Harbour",
        "Nassau",
      ],
    },
    {
      name: "Bahrain",
      cities: [
        "Al Budayyi`",
        "Al Hadd",
        "Al Hamalah",
        "Al Janabiyah",
        "Al Markh",
        "Al Muharraq",
      ],
    },
    {
      name: "Bangladesh",
      cities: [
        "Agrabad",
        "Bangla",
        "Barisal",
        "Bazar",
        "Chittagong",
        "Comilla",
      ],
    },
    {
      name: "Barbados",
      cities: [
        "Atlantic Shores",
        "Bagatelle",
        "Bloomsbury",
        "Bridgetown",
        "Bruce Vale",
      ],
    },
    { name: "Belarus", cities: ["Minsk"] },
    { name: "Belgium", cities: ["Brussels"] },
    { name: "Belize", cities: ["Belmopan"] },
    { name: "Benin", cities: ["Porto-Novo"] },
    { name: "Bermuda", cities: ["Hamilton"] },
    { name: "Bhutan", cities: ["Thimphu"] },
    { name: "Bolivia", cities: ["Sucre"] },
    { name: "Bonaire, Sint Eustatius and Saba", cities: ["Kralendijk"] },
    { name: "Bosnia and Herzegovina", cities: ["Sarajevo"] },
    { name: "Botswana", cities: ["Gaborone"] },
    { name: "Bouvet Island", cities: [""] },
    { name: "Brazil", cities: ["Brasilia"] },
    { name: "British Indian Ocean Territory", cities: ["Diego Garcia"] },
    { name: "Brunei Darussalam", cities: ["Bandar Seri Begawan"] },
    { name: "Bulgaria", cities: ["Sofia"] },
    { name: "Burkina Faso", cities: ["Ouagadougou"] },
    { name: "Burundi", cities: ["Bujumbura"] },
    { name: "Cambodia", cities: ["Phnom Penh"] },
    { name: "Cameroon", cities: ["Yaounde"] },
    { name: "Canada", cities: ["Ottawa"] },
    { name: "Cape Verde", cities: ["Praia"] },
    { name: "Cayman Islands", cities: ["George Town"] },
    { name: "Central African Republic", cities: ["Bangui"] },
    { name: "Chad", cities: ["N'Djamena"] },
    { name: "Chile", cities: ["Santiago"] },
    { name: "China", cities: ["Beijing"] },
    { name: "Christmas Island", cities: ["Flying Fish Cove"] },
    { name: "Cocos (Keeling) Islands", cities: ["West Island"] },
    { name: "Colombia", cities: ["Bogota"] },
    { name: "Comoros", cities: ["Moroni"] },
    { name: "Congo", cities: ["Brazzaville"] },
    { name: "Congo, Democratic Republic of the Congo", cities: ["Kinshasa"] },
    { name: "Cook Islands", cities: ["Avarua"] },
    { name: "Costa Rica", cities: ["San Jose"] },
    { name: "Cote D'Ivoire", cities: ["Yamoussoukro"] },
    { name: "Croatia", cities: ["Zagreb"] },
    { name: "Cuba", cities: ["Havana"] },
    { name: "Curacao", cities: ["Willemstad"] },
    { name: "Cyprus", cities: ["Nicosia"] },
    { name: "Czech Republic", cities: ["Prague"] },
    { name: "Denmark", cities: ["Copenhagen"] },
    { name: "Djibouti", cities: ["Djibouti"] },
    { name: "Dominica", cities: ["Roseau"] },
    { name: "Dominican Republic", cities: ["Santo Domingo"] },
    { name: "Ecuador", cities: ["Quito"] },
    { name: "Egypt", cities: ["Cairo"] },
    { name: "El Salvador", cities: ["San Salvador"] },
    { name: "Equatorial Guinea", cities: ["Malabo"] },
    { name: "Eritrea", cities: ["Asmara"] },
    { name: "Estonia", cities: ["Tallinn"] },
    { name: "Ethiopia", cities: ["Addis Ababa"] },
    { name: "Falkland Islands (Malvinas)", cities: ["Stanley"] },
    { name: "Faroe Islands", cities: ["Torshavn"] },
    { name: "Fiji", cities: ["Suva"] },
    { name: "Finland", cities: ["Helsinki"] },
    { name: "France", cities: ["Paris"] },
    { name: "French Guiana", cities: ["Cayenne"] },
    { name: "French Polynesia", cities: ["Papeete"] },
    { name: "French Southern Territories", cities: ["Port-aux-Francais"] },
    { name: "Gabon", cities: ["Libreville"] },
    { name: "Gambia", cities: ["Banjul"] },
    { name: "Georgia", cities: ["Tbilisi"] },
    { name: "Germany", cities: ["Berlin"] },
    { name: "Ghana", cities: ["Accra"] },
    { name: "Gibraltar", cities: ["Gibraltar"] },
    { name: "Greece", cities: ["Athens"] },
    { name: "Greenland", cities: ["Nuuk"] },
    { name: "Grenada", cities: ["St. George's"] },
    { name: "Guadeloupe", cities: ["Basse-Terre"] },
    { name: "Guam", cities: ["Hagatna"] },
    { name: "Guatemala", cities: ["Guatemala City"] },
    { name: "Guernsey", cities: ["St Peter Port"] },
    { name: "Guinea", cities: ["Conakry"] },
    { name: "Guinea-Bissau", cities: ["Bissau"] },
    { name: "Guyana", cities: ["Georgetown"] },
    { name: "Haiti", cities: ["Port-au-Prince"] },
    { name: "Heard Island and McDonald Islands", cities: [""] },
    { name: "Holy See (Vatican City State)", cities: ["Vatican City"] },
    { name: "Honduras", cities: ["Tegucigalpa"] },
    { name: "Hong Kong", cities: ["Hong Kong"] },
    { name: "Hungary", cities: ["Budapest"] },
    { name: "Iceland", cities: ["Reykjavik"] },
    { name: "India", cities: ["New Delhi"] },
    { name: "Indonesia", cities: ["Jakarta"] },
    { name: "Iran, Islamic Republic of", cities: ["Tehran"] },
    { name: "Iraq", cities: ["Baghdad"] },
    { name: "Ireland", cities: ["Dublin"] },
    { name: "Isle of Man", cities: ["Douglas, Isle of Man"] },
    { name: "Israel", cities: ["Jerusalem"] },
    { name: "Italy", cities: ["Rome"] },
    { name: "Jamaica", cities: ["Kingston"] },
    { name: "Japan", cities: ["Tokyo"] },
    { name: "Jersey", cities: ["Saint Helier"] },
    { name: "Jordan", cities: "Amman" },
    { name: "Kazakhstan", cities: "Astana" },
    { name: "Kenya", cities: "Nairobi" },
    { name: "Kiribati", cities: "Tarawa" },
    { name: "Korea, Democratic People's Republic of", cities: "Pyongyang" },
    { name: "Korea, Republic of", cities: "Seoul" },
    { name: "Kosovo", cities: "Pristina" },
    { name: "Kuwait", cities: "Kuwait City" },
    { name: "Kyrgyzstan", cities: "Bishkek" },
    { name: "Lao People's Democratic Republic", cities: "Vientiane" },
    { name: "Latvia", cities: "Riga" },
    { name: "Lebanon", cities: "Beirut" },
    { name: "Lesotho", cities: "Maseru" },
    { name: "Liberia", cities: "Monrovia" },
    { name: "Libyan Arab Jamahiriya", cities: "Tripolis" },
    { name: "Liechtenstein", cities: "Vaduz" },
    { name: "Lithuania", cities: "Vilnius" },
    { name: "Luxembourg", cities: "Luxembourg" },
    { name: "Macao", cities: "Macao" },
    { name: "Macedonia, the Former Yugoslav Republic of", cities: "Skopje" },
    { name: "Madagascar", cities: "Antananarivo" },
    { name: "Malawi", cities: "Lilongwe" },
    { name: "Malaysia", cities: "Kuala Lumpur" },
    { name: "Maldives", cities: "Male" },
    { name: "Mali", cities: "Bamako" },
    { name: "Malta", cities: "Valletta" },
    { name: "Marshall Islands", cities: "Majuro" },
    { name: "Martinique", cities: "Fort-de-France" },
    { name: "Mauritania", cities: "Nouakchott" },
    { name: "Mauritius", cities: "Port Louis" },
    { name: "Mayotte", cities: "Mamoudzou" },
    { name: "Mexico", cities: "Mexico City" },
    { name: "Micronesia, Federated States of", cities: "Palikir" },
    { name: "Moldova, Republic of", cities: "Chisinau" },
    { name: "Monaco", cities: "Monaco" },
    { name: "Mongolia", cities: "Ulan Bator" },
    { name: "Montenegro", cities: "Podgorica" },
    { name: "Montserrat", cities: "Plymouth" },
    { name: "Morocco", cities: "Rabat" },
    { name: "Mozambique", cities: "Maputo" },
    { name: "Myanmar", cities: "Nay Pyi Taw" },
    { name: "Namibia", cities: "Windhoek" },
    { name: "Nauru", cities: "Yaren" },
    { name: "Nepal", cities: "Kathmandu" },
    { name: "Netherlands", cities: "Amsterdam" },
    { name: "Netherlands Antilles", cities: "Willemstad" },
    { name: "New Caledonia", cities: "Noumea" },
    { name: "New Zealand", cities: "Wellington" },
    { name: "Nicaragua", cities: "Managua" },
    { name: "Niger", cities: "Niamey" },
    { name: "Nigeria", cities: "Abuja" },
    { name: "Niue", cities: "Alofi" },
    { name: "Norfolk Island", cities: "Kingston" },
    { name: "Northern Mariana Islands", cities: "Saipan" },
    { name: "Norway", cities: "Oslo" },
    { name: "Oman", cities: "Muscat" },
    { name: "Pakistan", cities: "Islamabad" },
    { name: "Palau", cities: "Melekeok" },
    { name: "Palestinian Territory, Occupied", cities: "East Jerusalem" },
    { name: "Panama", cities: "Panama City" },
    { name: "Papua New Guinea", cities: "Port Moresby" },
    { name: "Paraguay", cities: "Asuncion" },
    { name: "Peru", cities: "Lima" },
    { name: "Philippines", cities: "Manila" },
    { name: "Pitcairn", cities: "Adamstown" },
    { name: "Poland", cities: "Warsaw" },
    { name: "Portugal", cities: "Lisbon" },
    { name: "Puerto Rico", cities: "San Juan" },
    { name: "Qatar", cities: "Doha" },
    { name: "Reunion", cities: "Saint-Denis" },
    { name: "Romania", cities: "Bucharest" },
    { name: "Russian Federation", cities: "Moscow" },
    { name: "Rwanda", cities: "Kigali" },
    { name: "Saint Barthelemy", cities: "Gustavia" },
    { name: "Saint Helena", cities: "Jamestown" },
    { name: "Saint Kitts and Nevis", cities: "Basseterre" },
    { name: "Saint Lucia", cities: "Castries" },
    { name: "Saint Martin", cities: "Marigot" },
    { name: "Saint Pierre and Miquelon", cities: "Saint-Pierre" },
    { name: "Saint Vincent and the Grenadines", cities: "Kingstown" },
    { name: "Samoa", cities: "Apia" },
    { name: "San Marino", cities: "San Marino" },
    { name: "Sao Tome and Principe", cities: "Sao Tome" },
    { name: "Saudi Arabia", cities: "Riyadh" },
    { name: "Senegal", cities: "Dakar" },
    { name: "Serbia", cities: "Belgrade" },
    { name: "Serbia and Montenegro", cities: "Belgrade" },
    { name: "Seychelles", cities: "Victoria" },
    { name: "Sierra Leone", cities: "Freetown" },
    { name: "Singapore", cities: "Singapur" },
    { name: "St Martin", cities: "Philipsburg" },
    { name: "Slovakia", cities: "Bratislava" },
    { name: "Slovenia", cities: "Ljubljana" },
    { name: "Solomon Islands", cities: "Honiara" },
    { name: "Somalia", cities: "Mogadishu" },
    { name: "South Africa", cities: "Pretoria" },
    {
      name: "South Georgia and the South Sandwich Islands",
      cities: "Grytviken",
    },
    { name: "South Sudan", cities: "Juba" },
    { name: "Spain", cities: "Madrid" },
    { name: "Sri Lanka", cities: "Colombo" },
    { name: "Sudan", cities: "Khartoum" },
    { name: "Suriname", cities: "Paramaribo" },
    { name: "Svalbard and Jan Mayen", cities: "Longyearbyen" },
    { name: "Swaziland", cities: "Mbabane" },
    { name: "Sweden", cities: "Stockholm" },
    { name: "Switzerland", cities: "Berne" },
    { name: "Syrian Arab Republic", cities: "Damascus" },
    { name: "Taiwan, Province of China", cities: "Taipei" },
    { name: "Tajikistan", cities: "Dushanbe" },
    { name: "Tanzania, United Republic of", cities: "Dodoma" },
    { name: "Thailand", cities: "Bangkok" },
    { name: "Timor-Leste", cities: "Dili" },
    { name: "Togo", cities: "Lome" },
    { name: "Tokelau", cities: "" },
    { name: "Tonga", cities: "Nuku'alofa" },
    { name: "Trinidad and Tobago", cities: "Port of Spain" },
    { name: "Tunisia", cities: "Tunis" },
    { name: "Turkey", cities: "Ankara" },
    { name: "Turkmenistan", cities: "Ashgabat" },
    { name: "Turks and Caicos Islands", cities: "Cockburn Town" },
    { name: "Tuvalu", cities: "Funafuti" },
    { name: "Uganda", cities: "Kampala" },
    { name: "Ukraine", cities: "Kiev" },
    { name: "United Arab Emirates", cities: "Abu Dhabi" },
    { name: "United Kingdom", cities: "London" },
    { name: "United States", cities: "Washington" },
    { name: "United States Minor Outlying Islands", cities: "" },
    { name: "Uruguay", cities: "Montevideo" },
    { name: "Uzbekistan", cities: "Tashkent" },
    { name: "Vanuatu", cities: "Port Vila" },
    { name: "Venezuela", cities: "Caracas" },
    { name: "Viet Nam", cities: "Hanoi" },
    { name: "Virgin Islands, British", cities: "Road Town" },
    { name: "Virgin Islands, U.s.", cities: "Charlotte Amalie" },
    { name: "Wallis and Futuna", cities: "Mata Utu" },
    { name: "Western Sahara", cities: "El-Aaiun" },
    { name: "Yemen", cities: "Sanaa" },
    { name: "Zambia", cities: "Lusaka" },
    { name: "Zimbabwe", cities: "Harare" },
  ];

  useEffect(() => {
    getCities(props.selectedCountry);
  }, [props.selectedCountry]);

  let citiesArray = [];
  let index;
  function getCities(choosenCountry) {
    //index = country_list.findIndex((item) => item.name === choosenCountry);
    index = country_list.findIndex((item) => item.name === choosenCountry);
    if (country_list[index]) {
      citiesArray = country_list[index].cities;
    }

    setCountryCities(citiesArray);
  }

  useEffect(() => {}, [citiesArray]);

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>
        {Object.keys(props.cityTemperature).length != 0
          ? (props.cityTemperature.main.temp - 273.15).toFixed(1)
          : ""}
        °C
      </h1>
      <div className="main-div">
        <div className="select-list">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => props.onChangeCountry(e)}
          >
            <option>{props.defaultCountry}</option>
            {country_list.map((x) => (
              <option>{x.name}</option>
            ))}
          </select>
        </div>

        <div className="select-list">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => props.onChangeCity(e)}
          >
            <option>{props.defaultCity}</option>
            {countryCities && countryCities.map((x) => <option>{x}</option>)}
          </select>
        </div>
      </div>
    </>
  );
}
export default Dropdown;
