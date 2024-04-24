module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.handlerPost = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is POST function!",
        input: event,
      },
      null,
      2
    ),
  };
};