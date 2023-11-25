import { MusicMd } from "./musicMd.js";
import { validateId } from "./musicVa.js";

export class MusicCt{

//-----------TODO-----------------------------------------
static async getAll (req,res){
    const{artist} = req.query;
    const musics = await MusicMd.getAll
    (artist);
    musics?
    res.status(200).json(musics)
    : 
    res.status(404).json({message:"Music Not FOUND"})
}
//--------------Busqueda por ID ----------------------------
static async getById (req,res){
    const{id} = req.params
  

    const isValidateID = validateId({id})
   
    if(!isValidateID.success)
   return res.status(404).json({message:"ID no valit"})

   const musics = await MusicMd.getById(id);
    
   if(!musics.length)
    return res.status(404).json({message:"Music Not FOUND"})

    res.status(200).json(musics)
}
//-----------------Subir -----------------------------------

}