import bcryptjs from "bcryptjs";
const saltRound = 15;

// encrypt
export const hasPassword = (PlainPass) => {
  return bcryptjs.hashSync(PlainPass, saltRound);
};

// compare
export const compairPassword = (PlainPass, hashPass) => {
  return bcryptjs.compareSync(PlainPass, hashPass);
};
