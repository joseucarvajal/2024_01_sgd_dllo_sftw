import express from 'express';

const { Router } = express;

export default class CiudadesController {

  #router = Router();

  constructor() {
    this.registerRoutes();
  }

  getRouter(){
    return this.#router;
  }


  registerRoutes() {
    const routerV1 = Router();
    routerV1.get(`/ciudades`, (req, res) => this.getAllCiudades(req, res));

    this.#router.use(`/v1`, routerV1);
  }

  async getAllCiudades(req, res) {
    const ciudades = [
      {
        codigo: `BOG`,
        nombre: `Bogota, Colombia`,
      },
      {
        codigo: `ORY`,
        nombre: `Paris, Francia controller`,
      },
    ];
    res.json(ciudades);
  }
}