// Функція пошуку елемента querySelector.
export const myGetElement = (select) => {
    return document.querySelector(select)
}

// Функція створення HTML елемента.
export const createElement = (tag='div', className=false, text ='') =>{
    const el = document.createElement(tag);
    if(className){el.classList = className;}
    el.innerHTML = text;
    return el;
};

// Функція гортає сторінку на початок.
export function scrollTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Функція створення об'екта з потрібними параметрами.
export function createValidObj(obj){
    const {id, url, image, category} = searchImg(obj.url)
    return {
        title: obj.name || obj.title,
        gender: obj.gender ? obj.gender : false,
        birth: obj.birth_year ? obj.birth_year : false,
        height: obj.height ? obj.height : false,
        mass: obj.mass ? obj.mass : false,
        hair_color: obj.hair_color ? obj.hair_color : false,
        skin_color: obj.skin_color ? obj.skin_color : false,
        eye_color: obj.eye_color ? obj.eye_color : false,

        director:obj.director ? obj.director : false,
        producer:obj.producer ? obj.producer : false,
       
        description: obj.opening_crawl ? obj.opening_crawl : false,
        release: obj.release_date ? obj.release_date : false,

        diameter: obj.diameter ? obj.diameter : false,
        climate: obj.climate ? obj.climate : false,
        gravity: obj.gravity ? obj.gravity : false,
        terrain: obj.terrain ? obj.terrain : false,
        population: obj.population ? obj.population : false,

        classification: obj.classification ? obj.classification : false,
        designation: obj.designation ? obj.designation : false,
        language: obj.language ? obj.language : false,


        model: obj.model ? obj.model : false,
        manufacturer: obj.manufacturer ? obj.manufacturer : false, 
        cost: obj.cost_in_credits ? obj.cost_in_credits : false,
        max_speed: obj.max_atmosphering_speed ? obj.max_atmosphering_speed : false,
        crew: obj.crew ? obj.crew : false,
        passengers: obj.passengers ? obj.passengers : false,
        cargo_capacity: obj.cargo_capacity ? obj.cargo_capacity : false,
        starship_class: obj.starship_class ? obj.starship_class : false,

        id, url, image, category
    }
};


// Функція створення масиву об'ектів з потрібними параметрами.
export function createValidArray(oldArr) {
    if (!Array.isArray(oldArr)) return null;
    let [...arr] = oldArr;
    arr = arr.map((obj) => {
        return createValidObj(obj)
    })
    return arr;
};

// Функція створення посилання на фото.
export function searchImg(url) {
    let id = "";
    const urls = {
        people: "https://starwars-visualguide.com/assets/img/characters/",
        films: "https://starwars-visualguide.com/assets/img/films/",
        planets: "https://starwars-visualguide.com/assets/img/planets/",
        species: "https://starwars-visualguide.com/assets/img/species/",
        starships: "https://starwars-visualguide.com/assets/img/starships/",
        vehicles: "https://starwars-visualguide.com/assets/img/vehicles/",
    }
    if (typeof url === "string") {
        id = url.match(/\d+/).join();
    } else {
        throw new Error("url is not string")
    }
    if (url.includes("people")) {
        return {
            image: urls.people + id + ".jpg",
            id,
            url,
            category : "people"
        }
    } else if (url.includes("films")) {
        return {
            image: urls.films + id + ".jpg",
            id,
            url,
            category: "films"
        }
    } else if (url.includes("planets")) {
        return {
            image: urls.planets + id + ".jpg",
            id,
            url,
            category : "planets"
        }
    } else if (url.includes("species")) {
        return {
            image: urls.species + id + ".jpg",
            id,
            url,
            category : "species"
        }
    } else if (url.includes("starships")) {
        return {
            image: urls.starships + id + ".jpg",
            id,
            url,
            category : "starships"
        }
    } else if (url.includes("vehicles")) {
        return {
            image: urls.vehicles + id + ".jpg",
            id,
            url,
            category : "vehicles"
        }
    }
};
