import { Router } from "express";

import ArtistController from "../controllers/ArtistController";
import GenderController from "../controllers/GenderController";
import AlbumController from "../controllers/AlbumController";
import MusicController from "../controllers/MusicController";

const routes = new Router();

//CRUD (Create, Read, Update, Delete)
// main
routes.get("/", (req, res) => {
  return res.json({ info: "RESTful API Node.js + Express + Postgres" });
});

// artist
routes.get("/artist", ArtistController.index);
routes.get("/artist/:id", ArtistController.show);
routes.post("/artist", ArtistController.store);
routes.put("/artist/:id", ArtistController.update);
routes.delete("/artist/:id", ArtistController.destroy);

// gender
routes.get("/gender", GenderController.index);
routes.get("/gender/:id", GenderController.show);
routes.post("/gender", GenderController.store);
routes.put("/gender/:id", GenderController.update);
routes.delete("/gender/:id", GenderController.destroy);

// album
routes.get("/album", AlbumController.index);
routes.get("/album/:id", AlbumController.show);
routes.post("/album", AlbumController.store);
routes.put("/album/:id", AlbumController.update);
routes.delete("/album/:id", AlbumController.destroy);

//music
routes.get("/music", MusicController.index);
routes.get("/music/:id", MusicController.show);
routes.post("/music", MusicController.store);
routes.put("/music/:id", MusicController.update);
routes.delete("/music/:id", MusicController.destroy);

export default routes;
