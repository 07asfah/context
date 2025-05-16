class Movie {
    constructor(title, id, poster, genre) {
    this.title = title;
    this.id = id;
    this.poster = poster;
    this.genre = genre;
    }
}


const snowfallObject = new Movie( "Snowfall", "Snowfall", "https://assets.fxnetworks.com/cms-next/production/b9c54fd5-186f-49a3-b14c-208aa0a55b23.jpg?imwidth=400", ["crime fiction", "serial", "mystery"]);
const warriorObject = new Movie("warrior","warrior", "https://fr.web.img2.acsta.net/medias/nmedia/18/83/50/33/19794371.jpg",["mma", "action", "drama", "sports"]);
const southpawObject = new Movie("Southpaw","southpaw","https://m.media-amazon.com/images/I/91mFvaECOVL._AC_UF894,1000_QL80_.jpg",["sport", "action", "thriller"]
);

const movies = [snowfallObject, warriorObject, southpawObject];

export default movies;