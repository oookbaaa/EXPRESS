const yup = require("yup");

async function validate(req, res, next) {
  try {
    const schema = yup.object().shape({
      username: yup.string().required(),
      email: yup
        .string()
        .email()
        .matches(
          /^[a-zA-Z0-9._%+-]+@esprit\.tn$/,
          "Email must be a valid @esprit.tn email"
        )
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

module.exports = validate;
