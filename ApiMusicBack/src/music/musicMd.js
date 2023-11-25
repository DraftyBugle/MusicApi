import { connection } from "../../db_config.js";


export class MusicMd{

static async getAll(artist){
    if(!artist){
    const[musics,_info] = await connection.query (`
    

    SELECT  BIN_TO_UUID(m.id) as id, m.artist, m.start ,m.poster,m.origin,m.songs, m.members ,g.name as genres
    FROM musics m
    JOIN music_genres mg ON mg.music_id = m.id
    JOIN genres g ON mg.genre_id = g.id;    
      `)
      return musics.length? musics : null ;
    }
    
    const [musics,_info] = await connection.query
    (` SELECT m.artist, m.start ,m.poster,m.origin,m.songs, m.members ,g.name as genres
    FROM musics m
    JOIN music_genres mg ON mg.music_id = m.id
    JOIN genres g ON mg.genre_id = g.id   
     where artist  LIKE  ?
   `,
    [`%${artist}%`]
    );

   
    return musics.length? musics : null ;
}

static async getById (id){
  const[musics,_info] = await connection.query (`
 SELECT BIN_TO_UUID(m.id) as id ,  m.artist, m.start ,m.poster,
 m.origin,m.songs, m.members ,g.name as genres
  FROM musics m
  JOIN music_genres mg ON mg.music_id = m.id
  JOIN genres g ON mg.genre_id = g.id   
   WHERE m.id = UUID_TO_BIN(?)
 `,
  [id]
  );
 
    return musics;
  }
  

}