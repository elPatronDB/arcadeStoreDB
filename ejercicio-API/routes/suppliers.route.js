import { Router } from 'express';
import { 
  getSuppliersHandler, 
  getSupplierHandlerByParam, 
  postSupplierHandler, 
  putSupplierHandler
} from '../controllers/Suppliers.controller.js';

const router = Router();

router.get('/', getSuppliersHandler);
router.get('/:id', getSupplierHandlerByParam);
router.post('/', postSupplierHandler);
router.put('/', putSupplierHandler);

export default router;
