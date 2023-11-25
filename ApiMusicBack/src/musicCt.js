import { MusicMd } from "./musicMd.js";


export class MusicCt{

//-----------TODO-------------------
static async getAll (req,res){
    const{artist} = req.query;
    const musics = await MusicMd.getAll
    (artist);
    musics?
    res.status(200).json(musics)
    : 
    res.status(404).json({message:"Music Not FOUND"})
}
}