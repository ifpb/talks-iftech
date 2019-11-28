import ArtistRepository from "../repositorys/ArtistRepository";

class ArtistController {
  async index(req, res) {
    try {
      const result = await ArtistRepository.findAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistRepository.findOneById(id);
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
    const { name } = req.body;

    try {
      const result = await ArtistRepository.create(name);
      res.status(201).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const result = await ArtistRepository.findOneAndUpdate(id, name);
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await ArtistRepository.findOneAndDelete(id);
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }
}

export default new ArtistController();
