-- stored queries

CREATE TABLE flowers (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT
);

INSERT INTO flowers (title, content) VALUES
('Sunflower', 'Sunflowers are heliotropic, meaning they can track the movement of the sun across the sky'),
('Tulip', 'During the 17th century, tulip bulbs were more valuable than gold in Holland'),
('Rose', 'The worlds oldest living rose is thought to be over 1,000 years old'),
('Daisy', 'The name daisy comes from the Old English term daes eage, which means days eye. This name is derived from the flowers habit of closing its petals at night and reopening them in the morning'),
('Carnation', 'Carnations have a fascinating ability to change color based on the water they absorb');