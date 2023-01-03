const Client = require('../Models/Client');
// const InputValidation = require('../utils/inputValidation');

/**
 * URL: api/client/
 * METHOD: POST
 * ACCESS: private
 */
const addClient = async (req, res, next) => {
  let name = req.body.name || '';

  try {
    const { body } = req;
    if (!await Client.findOne({ id: req.body.id })){
         if (await Client.create({ ...body })){
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
 * URL: api/client/
 * METHOD: GET
 * ACCESS: private
 */
const getAllClient = async (req, res, next) => {
  try {

    const client = await await Client.find();
    res.status(200).json({
      success: true,
      client: client,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

/**
 * URL: api/client/:id
 * METHOD: GET
 * ACCESS: private
 */
const getClientById = async (req, res, next) => {
  const { id } = req.params;
  const categorie = await CategoryModel.findOne({
    where: {
      id,
    },
  });
  res.status(200).json({
    success: true,
    categorie: categorie,
  });
};

/**
 * URL: api/client/:id
 * METHOD: PUT
 * ACCESS: private
 */
const updateClient = async (req, res, next) => {
  let name = req.body.name || '';
  let id = req.params.id;

  try {
    new InputValidation().categorieValidation(name);

    const categorie = await CategoryModel.update(
      { name },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json({
      success: true,
      categorie: categorie,
      message: 'Category updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * URL: api/client/:id
 * METHOD: DELETE
 * ACCESS: private
 */
const deleteClient = async (req, res, next) => {
  const { id } = req.params;
  const categorie = await CategoryModel.destroy({
    where: {
      id,
    },
  });
  res.status(200).json({
    success: true,
    message: 'Category deleted successfully',
  });
};

module.exports = {
    addClient,
    getAllClient,
    getClientById,
    updateClient,
    deleteClient,
};
