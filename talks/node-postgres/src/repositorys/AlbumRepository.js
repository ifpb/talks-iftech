import pool from "../config/conn";
import Constants from "../util/Constants";

class AlbumRepository {
  async findAll() {
    try {
      const result = await pool.query(`SELECT al.idalbum "id", a.name "artist",
      g.name "gender", al.name , al.year FROM artist a, gender g, album al
      WHERE a.idartist = al.idartist AND g.idgender = al.idgender;`);
      return result.rows;
    } catch (err) {
      throw err;
    }
  }

  async findOneById(id) {
    try {
      const result = await pool.query(`SELECT al.idalbum "id", a.name "artist",
      g.name "gender", al.name , al.year FROM artist a, gender g, album al
      WHERE a.idartist = al.idartist AND g.idgender = al.idgender AND idalbum = ${id}`);
      if (result.rows.length > 0) {
        return result.rows;
      } else {
        throw new Error(Constants.ID_NOT_FOUND);
      }
    } catch (err) {
      throw err;
    }
  }

  async findOneByName(name) {
    try {
      const result = await pool.query(
        `SELECT al.idalbum "id", a.name "artist", g.name "gender", al.name, 
        al.year FROM artist a, gender g, album al
        WHERE a.idartist = al.idartist AND g.idgender = al.idgender AND al.name = '${name}'`
      );
      if (result.rows.length > 0) {
        return result.rows;
      } else {
        return [];
      }
    } catch (err) {
      throw err;
    }
  }

  async create(idart, idgd, name, year) {
    const exist = await this.findOneByName(name);
    if (exist.length > 0) {
      throw new Error(Constants.DUPLICATE);
    } else {
      try {
        let result = await pool.query(`INSERT INTO Album VALUES(nextval('Album_idAlbum_seq')
        ,${idart}, ${idgd},'${name}',${year})`);
        if (result) {
          result = Constants.CREATED;
        }
        return result;
      } catch (err) {
        throw err;
      }
    }
  }

  async findOneAndUpdate(id, idart, idgd, name, year) {
    const exist = await this.findOneById(id);
    if (exist.length > 0) {
      try {
        let result = await pool.query(`UPDATE Album SET idartist = ${idart},
      idgender = ${idgd},
      name = '${name}',
      year = ${year} WHERE idAlbum = ${id}`);
        if (result) {
          result = Constants.UPDATED;
        }
        return result;
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error(Constants.ID_NOT_FOUND);
    }
  }

  async findOneAndDelete(id) {
    const exist = await this.findOneById(id);
    if (exist.length > 0) {
      try {
        let result = await pool.query(`DELETE FROM Album WHERE idAlbum = ${id}`);
        if (result) {
          result = Constants.REMOVED;
        }
        return result;
      } catch (err) {
        throw err;
      }
    } else {
      throw new Error(Constants.ID_NOT_FOUND);
    }
  }
}

export default new AlbumRepository();
