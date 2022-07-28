const anime = require('../Model/anime');

module.exports = (app) => {
    const AnimeApi = require('../Api/AnimeApi');
  
    app.get('/anime', AnimeApi.getRandomAnime);
    app.get('/allanime', AnimeApi.getAllAnime);
    app.get('/anime/genre/:genre', AnimeApi.getGenreAnime);
    app.get('/allanime/genre/:genre', AnimeApi.getAllGenreAnime);
    app.get('/animehighrating', AnimeApi.gethighratingaAnime);
    app.get('/anime/:id', AnimeApi.getAnimeById);
    app.post('/anime',AnimeApi.uploadImage, AnimeApi.createAnime);
    app.put('/anime/:id',AnimeApi.uploadImage, AnimeApi.updateAnime);
    app.delete('/anime/:id', AnimeApi.deleteAnime);
}

    