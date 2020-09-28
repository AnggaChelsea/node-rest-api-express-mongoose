const power = require('../models/Power');

class PowerController{
    static createPower(req, res, next) {
    const {
      townhalname
    } = req.body;
  
    Townhall.create({
        townhalname: townhalname,
      })
      .then((result) => {
        res.status(201).send({
          message: "succes add",
          data: result
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: "error cant create",
          result: err
        });
      });
    }
}

module.exports = PowerController;