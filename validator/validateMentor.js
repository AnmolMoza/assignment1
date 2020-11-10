exports.validateMentor = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty()
    
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must conain @')
        .isLength({
            min: 4, max: 32
        })

    req.check('number', 'Number is required').notEmpty()
    req.check('number')
    .isLength({min:10})
    .withMessage('Number must have atleast 10 digits')
    
    const errors = req.validationErrors()
    
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ error: firstError });
    }
    next();
}