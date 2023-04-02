import express from "express";
import Model from "../model/model"

const router = express.Router()

//metoda POST (dodawania)
router.post('/', async (req, res) => {
    var model = new Model({
        name: req.body.name,
        price: req.body.price,
        code: req.body.code
    })
    try{
        const newModel = await model.save()
        res.status(201).json(newModel)
    }catch(err){
        model = new Model({
            code: null
        })
        res.status(400).json(model)
    }
})

//metoda GET ALL (zobacz wszystkie)
router.get('/', (req, res)=> res.send('Get All API'))

//metoda GET BY ID (zobacz po ID)
router.get('/:id', (req, res) => res.send(req.params.id))

//metoda UPDATE BY ID (akutalizacja danych po ID)
router.patch('/:id', (req, res) => res.send('Update by ID API'))

//metoda DELETE BY ID (usuwanie po ID)
router.delete('/:id', (req, res) => res.send('Delete by ID API'))

export = router;