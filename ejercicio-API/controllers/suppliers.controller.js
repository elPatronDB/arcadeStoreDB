import { suppliers } from '../mock-data/suppliers.data.js';

//Handler para el metodo get de todos los Supplieres
const getsuppliersHandler = async (req, res) => {
  try{
    let response = {
      message: "success",
      data: {
        suppliers: suppliers,
        count: suppliers.length
      }
    };
    res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const getSupplierHandlerByParam = async (req, res) => {
  try{
    // obtención por param id
    const id = req.params.id;
    // obtención por query id
    // const id = req.query.id;
    const Supplier = suppliers.find(c => c.id == id);
    let response = {};
    if (!Supplier){
      response = {
        message: "Suppliere no encontrado"
      }
      return res.status(404).json(response);
    }

    response = {
      message: "success",
      data: Supplier
    };

    return res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const postSupplierHandler = async (req, res) => {
  try{
    const newSupplier = req.body;
    const Supplier = suppliers.find(c => c.id == newSupplier.id);
    let response = {};
    if (Supplier){
      response = {
        message: "Suppliere ya existe",
      }
      return res.status(409).json(response);
    }

    if (newSupplier.nombre === undefined || newSupplier.nombre === "") {
      response = {
        message: "Se requiere el nombre del Suppliere",
      }
      return res.status(400).json(response);
    }

    suppliers.push(newSupplier);

    response = {
      message: "success",
      data: {
        SupplierId: newSupplier.id,
      }
    }
    return res.status(201).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const putSupplierHandler = async (req, res) => {
  try{
    throw new Error("Error de prueba");
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

export { 
  getsuppliersHandler,
  getSupplierHandlerByParam,
  postSupplierHandler,
  putSupplierHandler
};
