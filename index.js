module.exports.firsthandler = async (event) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is get function!",
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is POST function!",
      },
      null,
      2
    ),
  };
};