import joi from 'joi';

const examSchema = joi.object({
  name: joi.string().required(),
  category: joi.number().integer().required(),
  subject: joi.number().integer().required(),
  professor: joi.number().integer().required(),
  url: joi.string().required(),
});

export {
  examSchema,
};
