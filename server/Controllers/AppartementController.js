const Appartement = require('../Models/Appartement');
const Client = require('../Models/Client');


// const InputValidation = require('../utils/inputValidation');

/**
 * URL: api/appartemet/
 * METHOD: POST
 * ACCESS: private
 */
const addAppartement = async (req, res, next) => {
   try {
    const { body } = req;
    if (!await Appartement.findOne({ id: req.body.id })){
         if (await Appartement.create({ ...body })){
              res.status(201).send("created successfully");
         } else res.status(400).json("some thing worning"); 
    }
    else  res.status(400).send("already existe");
  
  } catch (error) {
    // next(error);
    res.status(400).send(error);
  }
 
};

/**
 * URL: api/appartemet/
 * METHOD: GET
 * ACCESS: private
 */
const getAllAppartement = async (req, res, next) => {
  try {
    const Appartement = await Appartement.find().populate({path:"client_id",model:Client});
    res.status(201).json({
      success: true,
      Appartement: Appartement,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * URL: api/appartemet/:id
 * METHOD: GET
 * ACCESS: private
 */
const getAppartementById = async (req, res, next) => {

};

/**
 * URL: api/appartemet/:id
 * METHOD: PUT
 * ACCESS: private
 */
  
const updateAppartement = async (req, res, next) => {
  

};

/**
 * URL: api/appartemet/:id
 * METHOD: DELETE
 * ACCESS: private
 */
const deleteAppartement = async (req, res, next) => {

};

module.exports = {
    addAppartement,
    getAllAppartement,
    getAppartementById,
    updateAppartement,
    deleteAppartement,
};
