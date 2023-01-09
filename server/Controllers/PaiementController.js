const Paiement = require("../Models/paiement");
const Appartement = require("../Models/Appartement");

// const InputValidation = require('../utils/inputValidation');

/**
 * URL: api/paiement/
 * METHOD: POST
 * ACCESS: private
 */
const addPaiement = async (req, res, next) => {
  try {
    const { Date } = req.body;

    console.log(req.body);

    // const existed = await Paiement.findOne({ cin });
    // if (existed) {
    //   throw new Error("client already exist");
    // }

    const paiement = await Paiement.create({
      Date,
    });

    res.status(200).json({
      success: true,
      paiement,
    });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

/**
 * URL: api/paiement/
 * METHOD: GET
 * ACCESS: private
 */
const getAllPaiement = async (req, res, next) => {
  try {
    const paiement = await await Paiement.find().populate({path:"appartementid",model:Appartement});
    res.status(200).json({
      success: true,
      paiement: paiement,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * URL: api/paiement/:id
 * METHOD: GET
 * ACCESS: private
 */
const getPaiementById = async (req, res, next) => {};

/**
 * URL: api/paiement/:id
 * METHOD: PUT
 * ACCESS: private
 */

const updatePaiement = async (req, res, next) => {
  let idPaiement = req.params.id;
  const { body } = req;
  try {
    if (await Paiement.updateOne({ _id: idPaiement }, { ...body }))
      res.status(200).send("updated successfully");
    else res.status(400).send("paiement dont  existe");
  } catch (error) {
    next(error);
  }
};

/**
 * URL: api/paiement/:id
 * METHOD: DELETE
 * ACCESS: private
 */
const deletePaiement = async (req, res, next) => {
  let idPaiement = req.params.id;
  try {
    if (await Paiement.deleteOne({ _id: idPaiement }))
      res.status(200).send("Paiement deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addPaiement,
  getAllPaiement,
  getPaiementById,
  updatePaiement,
  deletePaiement,
};
