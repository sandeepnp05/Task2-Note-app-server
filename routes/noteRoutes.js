import express from 'express';
import { getAllNotes, getOneNote, createNewNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.post('/', createNewNote);

export default router;