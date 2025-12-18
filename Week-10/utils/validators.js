// utils/validators.js
const Joi = require('joi');
const { BadRequestError } = require('./errors'); 

const registerSchema = Joi.object({
    username: Joi.string().trim().min(3).max(30).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(8).required() 
});

const loginSchema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().required()
});

const validate = (data, schema) => {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const message = error.details.map(detail => detail.message.replace(/"/g, '')).join(', ');
        throw new BadRequestError(message);
    }

    return value;
};

exports.validateRegistration = (data) => validate(data, registerSchema);
exports.validateLogin = (data) => validate(data, loginSchema);