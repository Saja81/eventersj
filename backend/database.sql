
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS museums;
DROP TABLE IF EXISTS activities;

 CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  id_name TEXT UNIQUE NOT NULL,
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  city TEXT NOT NULL,
  adress TEXT,
  cost TEXT,
  link TEXT,
  date TEXT,
  image TEXT,
  location_image TEXT,
  openhours TEXT);

  -- ----KONSERTER-------

  INSERT INTO events (name, id_name, description, category, location, city, adress, cost, link, date, image,
  location_image, openhours) VALUES ('Laleh', 'laleh', 'Laleh ger sig ut på en sommarturné som tar avstamp i Helsingborg 28 juli och avslutas i barndomsstaden Göteborg på anrika Ullevi där hon i somras gjorde en exklusiv hyllad spelning. Det blir den perfekta finalen på sommaren innan det är dags att gå tillbaka till jobbet, skolan eller studierna. Sittande publik, ingen åldersgräns – det blir en fantastisk upplevelse för såväl unga som gamla fans.', 'Konsert', 'Ullevi', 'Göteborg', 'Ullevigatan 411 40, Göteborg', '325-600kr ', 'https://www.ticketmaster.se/event/laleh-biljetter/627929', 'Lördag 26 Augusti 2023, 19.30', '/images/laleh.jpg', '/images/ullevi.jpg', 'false');

   INSERT INTO events (name, id_name, description, category, location, city, adress, cost, link, date, image,
  location_image, openhours) VALUES ('Test', 'test', 'Laleh ger sig ut på en sommarturné som tar avstamp i Helsingborg 28 juli och avslutas i barndomsstaden Göteborg på anrika Ullevi där hon i somras gjorde en exklusiv hyllad spelning. Det blir den perfekta finalen på sommaren innan det är dags att gå tillbaka till jobbet, skolan eller studierna. Sittande publik, ingen åldersgräns – det blir en fantastisk upplevelse för såväl unga som gamla fans.', 'Konsert', 'Ullevi', 'Stockholm', 'Ullevigatan 411 40, Göteborg', '325-600kr ', 'https://www.ticketmaster.se/event/laleh-biljetter/627929', 'Lördag 26 Augusti 2023, 19.30', '/images/laleh.jpg', '/images/ullevi.jpg', 'false');

  INSERT INTO events (name, id_name, description, category, location, city, adress, cost, link, date, image,
  location_image, openhours) VALUES ('Hans Zimmer', 'hanszimmer', 'Kraftfullt. Vackert. Dramatiskt. Starkt. Berörande. Allt det och mycket mer är den tvåfaldiga Oscarsvinnaren Hans Zimmers musik. 2024 får hans succéshow The World of Hans Zimmer nytt liv. Den nya föreställningen heter The World of Hans Zimmer – A New Dimension. Med över 30 konserter i 13 olika länder kommer turnén att kunna upplevas över hela Europa. Den enda chansen att se The World of Hans Zimmer – A New Dimension i Sverige blir på Scandinavium i Göteborg 9 maj 2024.', 'Konsert', 'Scandinavium', 'Göteborg', 'Valhallagatan 1, 41 251 Göteborg ', '755 - 1075kr', 'https://www.ticketmaster.se/event/the-world-of-hans-zimmer-a-new-dimension-biljetter/638225', 'Torsdag 9 maj, 2024, 20.00', '/images/hanszimmer.jpg', '/images/scandinavium.jpg', 'false');

  INSERT INTO events (name, id_name, description, category, location, city, adress, cost, link, date, image,
  location_image, openhours) VALUES ('Gyllene Tider', 'gyllenetider', 'Vissa förhållanden är för dyrbara att ge upp. Som den till synes rostfria kärleksrelationen mellan Gyllene Tider och deras hängivna publik. Under mer än 40 år har Halmstad-gruppen fortsatt att locka lyssnare – nya som gamla – med sin stora låtskatt och sina omtalade konserter. En bedrift som saknar motstycke i svensk pophistoria. Nästa år återvänder Gyllene Tider för att ännu en gång sätta guldkant på den svenska sommaren. Den omfattande sommarturnén heter ”Hux Flux”.', 'Konsert', 'Ullevi', 'Göteborg', 'Ullevigatan 411 40, Göteborg', '795-1095kr', 'https://www.ticketmaster.se/event/gyllene-tider-hux-flux-sommarturne-2023-biljetter/627189', 'Lördag 5 Augusti 2023, 20.00', '/images/gyllenetider.jpg', '/images/ullevi.jpg', 'false');

 -- ----MUSEUM-------

  INSERT INTO events (name, id_name, description, category, location, city, adress, image,
  location_image, openhours) VALUES ('Naturhistoriska', 'naturhistoriska', 'Göteborgs Naturhistoriska museum är ett naturhistoriskt museum, beläget på en höjd i Slottsskogen alldeles ovanför Linnéplatsen, en höjd som tidigare kallats Olivedalshöjden eller Ekebacken.', 'Museum', 'Göteborgs Naturhistoriska museum', 'Göteborg', 'Museivägen 10, Göteborg', '/images/naturhistoriska.jpg', '/images/naturhistoriskalocation.jpg', 'true');

  INSERT INTO events (name, id_name, description, category, location, city, adress, image,
  location_image, openhours) VALUES ('Konstmuseet', 'konstmuseet', 'Göteborgs Konstmuseum är en framstående konstinstitution belägen i Göteborgs centrum. Museet är känt för sin imponerande samling av modern och samtida konst, som sträcker sig från 1800-talets mästerverk till nutida verk.', 'Museum', 'Göteborgs Konstmuseum', 'Göteborg', 'Götaplatsen 412 56, Göteborg', '/images/konstmuseet.jpg', '/images/gbgkonsthalllocation.jpg', 'true');

  INSERT INTO events (name, id_name, description, category, location, city, adress, image,
  location_image, openhours) VALUES ('Göteborgs Konsthall', 'göteborgskonsthall', 'Göteborgs konsthall är inrymd i en klassicistisk byggnad från 1923 som ligger vid Götaplatsen i centrala Göteborg. På Göteborgs konsthall står samtidskonsten i centrum. Här visas grupp- och soloutställningar med svenska och internationella konstnärer som visar på mångfalden inom den samtida konsten.', 'Museum', 'Göteborgs Konsthall', 'Göteborg', 'Götaplatsen 10, 412 56, Göteborg', '/images/gbgkonsthall.jpg', '/images/gbgkonsthalllocation.jpg', 'true');

    INSERT INTO events (name, id_name, description, category, location, city, adress, image,
  location_image, openhours) VALUES ('Röhsska museet', 'rohsskamuseet', 'Hur förändrar design samhället, miljön och våra liv? Röhsska museet öppnade 1916 och är ett museum för design och konsthantverk. Med museets samlingar, utställningar och program undersöker vi hur form, mode och design påverkat oss genom historien och på väg mot framtiden. ', 'Museum', 'Röhsska', 'Göteborg', 'Vasagatan 37-39, 412 56, Göteborg', '/images/rohsska.jpg', '/images/rohsskalocation.jpg', 'true');

 -- ----FRILUFTSLIV-------

  INSERT INTO events (name, id_name, description, category, location, city, image,
  location_image, openhours) VALUES ('Bouldering', 'bouldering', 'Hönö, beläget i Göteborgs norra skärgård, är en populär destination för klättringsentusiaster och erbjuder utmärkta möjligheter för bouldering. Hönö har flera fantastiska boulderingområden som lockar klättrare från när och fjärran. Ett av de mest kända områdena är Källviken, som har ett varierat utbud av klätterproblem för alla nivåer, från nybörjare till mer erfarna klättrare', 'Friluftsliv', 'Hönö', 'Göteborg', '/images/bouldering.jpg', '/images/boulderinglocation.jpg', 'false');

  INSERT INTO events (name, id_name, description, category, location, city, image,
  location_image, openhours) VALUES ('Paddla kanot', 'paddla', 'Önnered är ett vackert område beläget i Göteborgs södra delar, vid kusten mot västerhavet. Med sin pittoreska skärgårdsatmosfär och omgivande natur är det en populär destination för paddling och andra vattensportaktiviteter.', 'Friluftsliv', 'Önnered', 'Göteborg', '/images/paddla.jpg', '/images/paddlalocation.jpg', 'false');

  INSERT INTO events (name, id_name, description, category, location, city, image,
  location_image, openhours) VALUES ('Höghöjdsbana', 'höghöjdsbana', 'Få lite äventyr i vardagen! Äventyr uppe bland trädtopparna på banor och ziplinor med olika svårighetsgrad. De stora höghöjdsbanorna har åldersgränser runt 12 år men det brukar även finnas mindre banor i anslutning för barn från ca 7-8 år.', 'Friluftsliv', 'Mölndal', 'Göteborg', '/images/hoghojdsbana.jpg', '/images/hoghojdslocation.jpg', 'false');

    INSERT INTO events (name, id_name, description, category, location, city, image,
  location_image, openhours) VALUES ('Klättring', 'klättring', 'För den som letar efter ett smultronställe med ankare och bultade leder så är den 13 meter höga Gunnilseklippan ett riktigt bra alternativ. Här är det sällan många klättrare och klippan ligger varmt vänd mot sydväst. Säkringsmarken är platt och snäll, perfekt för familjen som vill ta med de små barnen som hellre leker längs marken än klättrar uppåt på stenen. Gunnilseklippan med sina bultar och ankare är som inomhusklättring fast utomhus – bland lövträd, fågelkvitter och solsken.', 'Friluftsliv', 'Gunnilse', 'Göteborg', '/images/klättring.jpg', '/images/klättringlocation.jpg', 'false');


  -- INSERT INTO events (name, id_name, description, category, location, city, cost, first, last) VALUES ('Art Exhibition', 'artexhibition', 'Discover a collection of contemporary art installations.', 'Museum', 'Konstmuseet', 'Göteborg', 'från 120:-', '2023-06-15', '2023-09-20');

  -- INSERT INTO accounts (email, password) VALUES ('klara@hotmail.com', 'secret');


CREATE TABLE openhours (
  event_id INTEGER,
  monday TEXT NOT NULL,
  tuesday TEXT NOT NULL,
  wednesday TEXT NOT NULL,
  thursday TEXT NOT NULL,
  friday TEXT NOT NULL,
  saturday TEXT NOT NULL,
  sunday TEXT NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id)
);

INSERT INTO openhours (event_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (4, 'Stängt', '11.00-17.00', '11.00-17.00', '11.00-20.00', '11.00-17.00', '11.00-17.00', '11.00-17.00');

INSERT INTO openhours (event_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (5, 'Stängt', '11.00-18.00', '11.00-20.00', '11.00-18.00', '11.00-17.00', '11.00-17.00', '11.00-17.00');

INSERT INTO openhours (event_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (6, 'Stängt', '11.00-18.00', '11.00-20.00', '11.00-18.00', '11.00-17.00', '11.00-17.00', '11.00-17.00');

INSERT INTO openhours (event_id, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (11, 'Stängt', '11.00-18.00', '11.00-18.00', '11.00-20.00', '11.00-17.00', '11.00-17.00', '11.00-17.00');


 CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL);

CREATE TABLE favorites (
  user_id INTEGER,
  event_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (event_id) REFERENCES events(id));
