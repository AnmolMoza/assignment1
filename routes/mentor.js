const express = require('express');
const router = express.Router();

const { mentorDelete, mentorCreate, mentorRead, mentorUpdate, mentorReadAll } = require('../controller/mentor');
const { validateMentor } = require('../validator/validateMentor')

/*ROUTE TO READ A SINGLE MENTOR DATA USING THE ID*/
router.get('/mentorread/:id', mentorRead);


/*ROUTE TO READ A ALL MENTOR DATA*/
router.get('/mentorreadall', mentorReadAll);


/*ROUTE TO DELETE THE MENTOR DATA*/
router.delete('/mentordelete/:id', mentorDelete);


/*ROUTE TO UPDATE A SINGLE MENTOR DATA USING THE ID*/
router.patch('/mentorupdate/:id',validateMentor, mentorUpdate);


/*ROUTE TO CREATE THE USER MENTOR DATA IN THE DATABASE*/
router.post('/mentorcreate',validateMentor, mentorCreate);

module.exports = router;
