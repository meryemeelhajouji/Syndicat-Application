const Appartement = require('../Models/Appartement');
// const InputValidation = require('../utils/inputValidation');

/**
 * URL: api/Appartement/
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
 * URL: api/Appartement/
 * METHOD: GET
 * ACCESS: private
 */
const getAllAppartement = async (req, res, next) => {
  try {

    const Appartement = await await Appartement.find();
    res.status(200).json({
      success: true,
      Appartement: Appartement,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * URL: api/Appartement/:id
 * METHOD: GET
 * ACCESS: private
 */
const getAppartementById = async (req, res, next) => {

};

/**
 * URL: api/Appartement/:id
 * METHOD: PUT
 * ACCESS: private
 */
  
const updateAppartement = async (req, res, next) => {
  
  let idAppartement = req.params.id;
  const { body } = req;
  try {
   
    if (await Appartement.updateOne({ _id: idAppartement}, { ...body }))
      res.status(201).send("updated successfully");
    
    
     else  res.status(400).send("Appartement dont  existe");
  } catch (error) {
    next(error);
  }
};

/**
 * URL: api/Appartement/:id
 * METHOD: DELETE
 * ACCESS: private
 */
const deleteAppartement = async (req, res, next) => {
  let idAppartement = req.params.id;
  try {
    if(await Appartement.deleteOne({_id:idAppartement})) 
     res.status(201).send("Appartement deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
    addAppartement,
    getAllAppartement,
    getAppartementById,
    updateAppartement,
    deleteAppartement,
};
