module.exports = app => {
  const coquital = require("../controllers/coquital.controller");

  let router = require("express").Router();

  // Create a new Coquital
  router.post("/", coquital.create);

  // Retrieve a single Coquital by id
  router.get("/:id", coquital.findOne);

  // Update a Coquital with id
  router.put("/:id", coquital.update);

  // Delete a Coquital with id
  router.delete("/:id", coquital.delete);

  // Create a new Coquital
  router.delete("/", coquital.deleteAll);

  app.use('/api/coquital', router);
};