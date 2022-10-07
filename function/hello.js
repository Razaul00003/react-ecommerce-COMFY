exports.handler = async function (event, context) {
  console.log("hollo connected");
  return {
    statusCode: 200,
    body: "hello world",
  };
};
