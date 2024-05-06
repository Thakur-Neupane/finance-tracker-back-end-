import TransactionSchema from "./TransactionSchema.js";

export const insertNewTrans = (transObj) => {
  return TransactionSchema(transObj).save();
};

export const getTransactionsByUserId = (userId) => {
  return !userId ? null : TransactionSchema.find({ userId });
};
