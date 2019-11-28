import AlbumRepository from "../repositorys/AlbumRepository";

class AlbumController {
  async index(req, res) {
    try {
      const result = await AlbumRepository.findAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await AlbumRepository.findOneById(id);
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
    const { idart, idgd, name, year } = req.body;

    try {
      const result = await AlbumRepository.create(idart, idgd, name, year);
      res.status(201).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { idart, idgd, name, year } = req.body;

    try {
      const result = await AlbumRepository.findOneAndUpdate(
        id,
        idart,
        idgd,
        name,
        year
      );
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await AlbumRepository.findOneAndDelete(id);
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }
}

export default new AlbumController();
