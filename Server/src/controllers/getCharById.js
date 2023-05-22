const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios');

const getCharById = async(req, res)=> {
    try {
        const { id } = req.params;

        const { name, gender, image, status, origin, species } = (await axios(URL + id)).data
        const character = {
            id,
            name, 
            gender,
            image,
            status,
            origin,
            species
        }

        return character ? res.status(200).json(character)
        : res.status(404).send("Character not found")

    } 
    catch (error) {
        return res.status(500).json({error: error.message})
    }

}


module.exports = {
    getCharById
}

// const axios = require("axios");
// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((result)=>result.data)
//     .then((data)=>{
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status,
//         }
//         res.writeHead(200, {"Content-type": "application/json"})
//         res.end(JSON.stringify(character))
//     })
//     .catch((error)=>{
//         res.writeHead(500, {"Content-type": "text/plain"})
//         res.end(error.message)
//     })
// }
// module.exports = {getCharById}
