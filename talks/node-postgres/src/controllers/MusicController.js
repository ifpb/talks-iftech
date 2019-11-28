import MusicRepository from "../repositorys/MusicRepository";

class MusicController {
  async index(req, res) {
    try {
      const result = await MusicRepository.findAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const result = await MusicRepository.findOneById(id);
      res.status(200).send(result);
    } catch (err) {
      if (err.message != "ID NOT FOUND!") {
        res.status(400).send({ message: err.message });
      } else {
        res.status(404).send({ message: err.message });
      }
    }
  }

  async store(req, res) {
    const { idalb, track, name, time } = req.body;

    try {
      const result = await MusicRepository.create(idalb, track, name, time);
      res.status(201).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { idalb, track, name, time } = req.body;

    try {
      const result = await MusicRepository.findOneAndUpdate(
        id,
        idalb,
        track,
        name,
        time
      );
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const result = await MusicRepository.findOneAndDelete(id);
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }
}

export default new MusicController();
