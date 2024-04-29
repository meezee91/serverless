module.exports.firsthandler = async (event) => {
  console.log(event.body)
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

module.exports.secondhandler = async (event) => {
  console.log(event.body)
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