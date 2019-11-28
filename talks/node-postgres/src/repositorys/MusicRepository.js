import pool from "../config/conn";
import Constants from "../util/Constants";

class MusicRepository {
  async findAll() {
    try {
      const result = await pool.query(`SELECT m.idmusic, al.name "album", m.track,
      m.name, m.time FROM music m, album al WHERE m.idalbum = al.idalbum;`);
      return result.rows;
    } catch (err) {
      throw err;
    }
  }

  async findOneById(id) {
    try {
      const result = await pool.query(`SELECT m.idmusic, al.name "album", m.track,
      m.name, m.time FROM music m, album al
      WHERE m.idalbum = al.idalbum AND idMusic = ${id}`);
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
        `SELECT m.idmusic, al.name "album", m.track,
        m.name, m.time FROM music m, album al
        WHERE m.idalbum = al.idalbum AND m.name = '${name}'`
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

  async create(idalb, track, name, time) {
    const exist = await this.findOneByName(name);
    if (exist.length > 0) {
      throw new Error(Constants.DUPLICATE);
    } else {
      try {
        let result = await pool.query(`INSERT INTO Music VALUES(nextval('Music_idMusic_seq')
      ,${idalb}, ${track},'${name}','${time}')`);
        if (result) {
          result = Constants.CREATED;
        }
        return result;
      } catch (err) {
        throw err;
      }
    }
  }

  async findOneAndUpdate(id, idalb, track, name, time) {
    const exist = await this.findOneById(id);
    if (exist.length > 0) {
      try {
        let result = await pool.query(`UPDATE Music SET idalbum = ${idalb},
        track = ${track},
        name = '${name}',
        time = '${time}' WHERE idMusic = ${id}`);
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
        let result = await pool.query(`DELETE FROM music WHERE idmusic = ${id}`);
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

export default new MusicRepository();
