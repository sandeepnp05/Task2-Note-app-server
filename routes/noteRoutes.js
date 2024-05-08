import express from 'express';
import { getAllNotes, getOneNote, createNewNote,deleteNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getAllNotes);
router.get('/:id', getOneNote);
router.post('/', createNewNote);
router.delete('/:id', deleteNote);

export default router;