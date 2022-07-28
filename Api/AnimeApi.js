const anime = require('../Model/anime')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "../Frontend/src/module/public/");
    },
    filename: (req, file, cb) => {
      console.log(file.originalname.toString())
      cb(null,file.originalname.toString());
    },
    
  });
 

class AnimeApi {
    constructor() {

    this.getAllAnime = async (req, res) => {
        try {
            const allanime = await anime.model.find({}).sort({title: 1});
            res.status(200).json(allanime);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    this.getRandomAnime = async (req, res) => {
        try {
            const allAnime = await anime.model.aggregate([{ $sample: { size: 12 } }]);
            res.status(200).json(allAnime)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    this.getActionAnime = async (req, res) => {
        try {
            const allAnime = await anime.model.aggregate([{$match:{
                genre: {$in: ["action"]}
            }},{ $sample: { size: 10 } }]);
            res.status(200).json(allAnime)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    this.gethighratingaAnime = async (req, res) => {
        try {
            const allAnime = await anime.model.find({}).sort({rating:-1}).limit(10);
            res.status(200).json(allAnime)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    this.getAnimeById = async (req, res) => {
        try {
            const animeById = await anime.model.findById(req.params.id)
            res.status(200).json(animeById)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    this.createAnime = async (req, res) => {
  
        try {
            const newAnime = await anime.model.create({
                title: req.body.title,
                image: req.body.imagename,
                source: req.body.sourcename,
                folder: req.body.folder,
                trailer: req.body.trailer,
                episodes: req.body.episodes,
                genre: req.body.genre,
                rating: req.body.rating,
                description: req.body.description,
            })
            newAnime.save()
            res.status(201).json(newAnime)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    

    this.updateAnime = async (req, res) => {
        try {
            const updatedAnime = await anime.model.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                image: req.body.imagename,
                source: req.body.sourcename,
                folder: req.body.folder,
                trailer: req.body.trailer,
                episodes: req.body.episodes,
                genre: req.body.genre,
                rating: req.body.rating,
                description: req.body.description,
            }, { new: true })
            res.status(200).json(updatedAnime)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    this.deleteAnime = async (req, res) => {
        try {
            const deletedAnime = await this.anime.findByIdAndDelete(req.params.id)
            res.status(200).json(deletedAnime)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    this.uploadImage = multer({
        storage: storage,
        }).fields([{ name: 'image' },{ name: 'source' }]);
    


   

}

}

module.exports = new AnimeApi()