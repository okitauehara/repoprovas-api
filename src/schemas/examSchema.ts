import joi from 'joi';

const examSchema = joi.object({
  period: joi.string().length(6).required(),
  category: joi.number().integer().required(),
  subject: joi.number().integer().required(),
  professor: joi.number().integer().required(),
  link: joi.string().required(),
});

export {
  examSchema,
};
