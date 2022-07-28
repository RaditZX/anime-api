const { default: mongoose } = require("mongoose")

class Anime{
    constructor(){
        this.animeSchema = new mongoose.Schema({
            title: String,
            description: String,
            image: String,
            episodes: Number,
            score: Number,
            genres: String,
            premiered: String,
            duration: String,
            status: String,
            studio: String,
            source: String,
            rating: Number,
            folder: String,
            scoreCount: Number,
            trailer: String,
            createdAt: {
                type: Date,
                default: Date.now
            },
            updatedAt: {
                type: Date,
                default: Date.now
            }

        })
        this.model = mongoose.model('anime', this.animeSchema)
          
    }
}

module.exports = new Anime()