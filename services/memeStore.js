// Gets the memes from the Internet

const axios = require('axios');
const config = require('../config/config.json');

let memesPromise = null;
const viewed = {};

// Download memes
function getMemes() {
  if (memesPromise === null) {
    memesPromise = axios
      .get(config.memesApiUrl)
      .then((response) => response.data.data)
      .catch((error) => {
        memesPromise = null; // Failed, try again 
        throw error;
      });
  }
  return memesPromise;
}

// Search memes
async function search(term) {
  const memes = await getMemes();
  if (!term || term.trim() === '') {
    return memes; // tomt søk gir alle 20
  }
  const lowerTerm = term.trim().toLowerCase();
  return memes.filter((meme) => meme.name.toLowerCase().includes(lowerTerm));
}

// Find by id
async function getById(id) {
  const memes = await getMemes();
  return memes.find((meme) => meme.id === Number(id));
}

// Mark as viewed
function markViewed(username, id) {
  if (!viewed[username]) {
    viewed[username] = [];
  }
  if (!viewed[username].includes(Number(id))) {
    viewed[username].push(Number(id));
  }
}

// Viewed memes
function getViewed(username) {
  return viewed[username] || [];
}

module.exports = { getMemes, search, getById, markViewed, getViewed };