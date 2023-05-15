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
  cost TEXT,
  link TEXT,
  first TEXT NOT NULL,
  last TEXT);

  INSERT INTO events (name, id_name, description, category, location, city, first, last) VALUES ('Laleh', 'laleh', 'Världsartisen Laleh är tillbaka, bla bla', 'Konsert', 'Ullevi', 'Göteborg', '2023-06-05', '2023-06-07');

  INSERT INTO events (name, id_name, description, category, location, city, cost, first) VALUES ('Music Concert', 'musicconcert', 'Enjoy an evening of live music performances by top artists.', 'Konsert', 'Stora Teatern', 'Göteborg', 'från 649:-', '2023-06-10');

  INSERT INTO events (name, id_name, description, category, location, city, cost, first, last) VALUES ('Art Exhibition', 'artexhibition', 'Discover a collection of contemporary art installations.', 'Museum', 'Konstmuseet', 'Göteborg', 'från 120:-', '2023-06-15', '2023-09-20');

  -- INSERT INTO accounts (email, password) VALUES ('klara@hotmail.com', 'secret');

 CREATE TABLE museums (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  adress TEXT NOT NULL,
  city TEXT NOT NULL,
  cost TEXT,
  );

  INSERT INTO museums (name, adress, city)
  VALUES ("Göteborgs Stadsmuseum", "En adress", "Göteborg");

CREATE TABLE openhours (
  museum_id INTEGER,
  monday TEXT NOT NULL,
  tuesday TEXT NOT NULL,
  wednesday TEXT NOT NULL,
  thursday TEXT NOT NULL,
  friday TEXT NOT NULL,
  saturday TEXT NOT NULL,
  sunday TEXT NOT NULL,
  FOREIGN KEY (museum_id) REFERENCES museums(id)
);

CREATE TABLE activities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  adress TEXT NOT NULL,
  city TEXT NOT NULL,
  cost TEXT,
);

  INSERT INTO activities (name, adress, city)
  VALUES ("Bouldering", "En adress", "Hönö");
