const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
 const Notes = require('../models/Notes');   
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route 2: Add a new note using POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route 3: Update an existing note using PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    // Create a new note object
    const newNote = {};
    if (title) { newNote.title = title };
    if (description) { newNote.description = description };
    if (tag) { newNote.tag = tag };

    // Find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json({ note });
});
// Route 4: Delete an existing note using DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    // Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") }

    // Allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ "Success": "Note has been deleted", note: note });
});
module.exports = router;