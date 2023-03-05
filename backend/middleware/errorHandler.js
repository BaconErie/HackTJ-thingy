const errorHandler = (err, req, res, next) => {
  //it automatically only sends an err if the error exists
  console.log(`${err.name}\t${err.message}`);
};

module.exports = { errorHandler };
