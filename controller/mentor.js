const Mentor = require('../models/mentor');
const { errorHandler } = require('../helpers/dbErrorHandler');
const router = require('../routes/mentor');


/*CONTROLLER METHOD FOR ROUTE TO READ A SINGLE MENTOR DATA*/
exports.mentorRead = (req, res) => {
    const _id = req.params.id
    Mentor.findById(_id).then((mentor)=>{
        if(!mentor) {
            return res.send(404).json({
                message: 'Mentor not found!'
            })
        }
        res.send(mentor)
    }).catch((error) => {
        res.status(400).json({
            error: errorHandler(error)
        })
    })
};


/*CONTROLLER METHOD FOR ROUTE TO READ ALL MENTOR DATA*/
exports.mentorReadAll = (req, res) => {
    Mentor.find({}).then((mentors) => {
        res.send(mentors)
    })
    .catch((error) => {
        res.status(400).json({
            error:errorHandler(error)
        })
    })
};


/*CONTROLLER METHOD FOR ROUTE TO CREATE A MENTOR IN THE DATABASE*/
exports.mentorCreate = (req, res) => {
    const mentor = new Mentor(req.body);
    mentor.save((error, mentor) => {
        if(error) {
            res.status(400).json({
                error: errorHandler(error)
            })
        }
        res.json({
            mentor
        })
    })
};


/*CONTROLLER METHOD FOR ROUTE TO DELETE A MENTOR FROM THE DATABASE*/
exports.mentorDelete = (req, res) => {
    const id = req.params.id;
    Mentor.findByIdAndRemove(id)
    .exec()
    .then(() => res.status(204).json({
      Message: 'Mentor Removed',
    }))
    .catch((error) => res.status(500).json({
      error: errorHandler(error),
    }));
};


/*CONTROLLER METHOD FOR ROUTE TO UPDATE A MENTOR DATA FIELD FROM THE DATABASE*/
exports.mentorUpdate = (req, res) => {
    const id = req.params.id;
    const updateMentor = req.body;
    Mentor.findByIdAndUpdate({ _id:id }, { $set:updateMentor })
    .exec()
    .then(() => {
      res.status(200).json({
        message: 'Mentor is updated'
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: errorHandler(error)
      });
    });
};

