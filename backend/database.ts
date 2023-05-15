interface Event {
  name: string;
  description: string;
  time: string;
  price: number;
  location: string;
  link: string;
}

const events: Event[] = [
  {
    name: "Way Out West",
    description: "Way Out West är festivalen som går av stapeln andra helgen i augusti i Slottsskogen och runtom i centrala Göteborg. Sedan 2007 har artister som Prince, Kanye West, Alicia Keys, Solange, Florence + The Machine, Kendrick Lamar, Frank Ocean, The Cure och många fler stått på festivalens stora scen.I sommar mellan den 10–12 augusti återvänder festivalen för ytterligare en stjärnspäckad upplaga. Redan nu är det klart att Blur kommer till Slottsskogen, och mängder av fler artister att presenteras löpande fram till festival. Festivalen har även ett prisvinnande matutbud, ett filmprogram, och mycket mer. Missa inte sommarens bästa fest – säkra din biljett idag!",
    time: "2023-08-10",
    price: 2195,
    location: "Göteborg, Slottskogen",
    link: "https://www.ticketmaster.se/event/way-out-west-10-12-augusti-2023-biljetter/630219",
  },
  {
    name: "Lollapalooza",
    description: "Lollapalooza grundades 1991 som en turnerande festival, fann sitt hem i Chicago 2005 och har sedan dess vuxit och utvecklats till en internationell angelägenhet som expanderat via São Paolo, Buenos Aires och Santiago i Sydamerika till Berlin, Paris och Stockholm i Europa till Mumbai i Indien. Årets upplaga av Lollapalooza Stockholm blir den tredje i ordningen. I somras lockade festivalen Lollapalooza över 70 000 besökare till Gärdet i Stockholm. ",
    time: "2023-06-29",
    price: 2695,
    location: "Stockholm, Gärdet",
    link: "https://www.ticketmaster.se/event/lollapalooza-stockholm-june-29-july-1-2023-biljetter/630807",
  },
  {
    name: "Cirkus Brazil Jack",
    description: "Brazil Jack presenterar sitt nya djurfria program 2023 med en show utöver det vanliga. Glöm allt ni tidigare har skådat på cirkus för nu tar vi föreställningen till en ny nivå! Enastående cirkuskonstnärer från jordens alla hörn tar sig an de fyra elementen: eld, vatten, luft och jord i en show sprängfylld av action, humor, skönhet och festivitas. Cirkussfärens bevingade kungar och drottningar i den flygande trapetsen tävlar i tapperhet endast med akrobaterna på sina motorcyklar i dödsgloben utmanande själva jordens dragningskraft. Tropiska ösregn översköljer ett enastående spektakulärt program. Bara i Brazil Jacks manege. Var annars?",
    time: "2023-06-03",
    price: 285,
    location: "Umeå, Vildamannavallen",
    link: "https://www.ticketmaster.se/event/cirkus-brazil-jack-umea-vildmannavallen-biljetter/639707",
  },
  {
    name: "SKELLEFTEÅ SUMMERTIME MUSIC & LIFE FESTIVAL",
    description: "2022 fick Skellefteå en helt ny festival! Platsen för Skellefteå Summertime är Norrvalla Idrottsplats eller som vi valt att kalla det - Norrvalla Festivalområde, Skellefteås nya stora festivalplats! Skellefteå Summertime är en av Norrlands största festivaler tillsammans med Storsjöyran i Östersund, Brännbollsyran i Umeå och Kirunafestivalen. Med ca. 90.000 – 100.000 besökare under de 4 dagar som arrangemanget pågår blir därigenom Summertimefestivalen Skellefteås största arrangemang! ",
    time: "2023-06-29",
    price: 780,
    location: "SKELLEFTEÅ, Norrvalla IP",
    link: "https://www.ticketmaster.se/event/summertime-music-life-festival-29-juni-2-juli-biljetter/627743",
  },



  // lägg till mera här i framtiden
];
export default events;
