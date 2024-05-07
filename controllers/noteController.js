import { getNotes, getNote, createNote } from '../models/noteModel.js';

export const getAllNotes = async (req, res) => {
  try {
    const notes = await getNotes();
    res.status(200).json(notes);
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