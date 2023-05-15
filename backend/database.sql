DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS museums;
DROP TABLE IF EXISTS activities;

 CREATE TABLE events (
  id INTEGER PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  arena TEXT NOT NULL,
  adress TEXT NOT NULL,
  city TEXT NOT NULL,
  cost TEXT,
  link TEXT,
  start TEXT NOT NULL,
  end TEXT);

  INSERT INTO events (name, arena, adress, city, start, end) VALUES ('Laleh', 'Ullevi', 'En adress', 'Göteborg', '2023-06-05', '2023-06-07');

  -- INSERT INTO accounts (email, password) VALUES ('klara@hotmail.com', 'secret');

 CREATE TABLE museums (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
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
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  adress TEXT NOT NULL,
  city TEXT NOT NULL,
  cost TEXT,
);

  INSERT INTO activities (name, adress, city)
  VALUES ("Bouldering", "En adress", "Hönö");
