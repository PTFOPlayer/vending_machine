import express from "express";

const router = express.Router()

//metoda POST (dodawania)
router.post('/post', (req, res) => res.send('Post API'))

//metoda GET ALL (zobacz wszystkie)
router.get('/getAll', (req, res)=> res.send('Get All API'))

//metoda GET BY ID (zobacz po ID)
router.get('/getOne/:id', (req, res) => res.send(req.params.id))

//metoda UPDATE BY ID (akutalizacja danych po ID)
router.patch('/update/:id', (req, res) => res.send('Update by ID API'))

//metoda DELETE BY ID (usuwanie po ID)
router.delete('/delete/:id', (req, res) => res.send('Delete by ID API'))

export = router;