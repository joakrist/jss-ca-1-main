# Meme Central
A web app for Central. Shows 20 random memes in a table with search. Logg-in for details page on each meme.

 🟢 JavaScript Server Assignment 🟠 Jo are Kristoffersen 🔴 okt25pt 

## Technologies
Node.js, Express, EJS, Bootstrap 5.2.3, jQuery, PassportJS (passport-local), express-session and axios. Bootstrap, jQuery and Passport are installed with NPM (no CDN).

## Install and run
1. Install [Node.js]
2. In the project folder, run:
...
npm install
npm start
...
3. Open http://localhost:3000/memes
Sessions are kept in memory, logged out when the server restarts.

## Configuration
The memes API URL is in `config/config.json` (`memesApiUrl`). Change it there to use another Library.

## Users (`config/users.json`)
| Username | Password |
| -------- | -------- |
| Josh     | Josh1    |
| FJ       | FJ1      |
| Student  | Student1 |
Guests can see the meme table but does not see the Details buttons. 