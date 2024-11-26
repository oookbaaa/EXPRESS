const yup = require("yup");

async function validate(req, res, next) {
  try {
    const schema = yup.object().shape({
      username: yup
        .string()
        .matches(/^[A-Z][a-z]/)
        .required(),
      email: yup
        .string()
        .email()
        .matches(/^@esprit\.tn$/, "Email must be a valid @esprit.tn email")
        .required(),
      cin: yup.number().required(),
    });
    await schema.validate(req.body);
    next();
    //return res.status(200).send('valid');
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function product(req, res, next) {
  try {
    const schema = yup.object().shape({
      name: yup.string().required(),
      desc: yup.string().required(),
      prix: yup.number().required(),
      status: yup.boolean().required(),
    });
    await schema.validate(req.body);
    next();
  } catch (err) {
    return res.status(400).json(err);
  }
}

module.exports = {validate, product};
