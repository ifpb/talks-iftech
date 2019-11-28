import GenderRepository from "../repositorys/GenderRepository";

class GenderController {
  async index(req, res) {
    try {
      const result = await GenderRepository.findAll();
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const result = await GenderRepository.findOneById(id);
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
      const result = await GenderRepository.create(name);
      res.status(201).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const result = await GenderRepository.findOneAndUpdate(id, name);
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await GenderRepository.findOneAndDelete(id);
      res.status(200).send({ message: result });
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  }
}

export default new GenderController();
