import { getNotes, getNote, createNote, removeNote} from '../models/noteModel.js';
import {formatDateTime} from '../util/dateUtil.js'

export const getAllNotes = async (req, res) => {
    try {
      const notes = await getNotes();
  
      const formattedNotes = notes.map((note) => ({
        ...note,
        created: formatDateTime(note.created),
      }));
  
      res.status(200).json(formattedNotes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch notes' });
    }
  };

export const getOneNote = async (req, res) => {
    try {
      const { id } = req.params;
      const note = await getNote(id);
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ error: 'Note not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch note' });
    }
  };

export const createNewNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await createNote(title, content);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

export const deleteNote = async (req, res) => {
    try {
      const { id } = req.params;
      await removeNote(id);
      res.status(204).send(); 
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete note' });
    }
  };