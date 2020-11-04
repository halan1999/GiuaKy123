const aws = require("aws-sdk");

const dynamoDB = new aws.DynamoDB.DocumentClient({
  region: "",
  accessKeyId: "",
  secretAccessKey: "",
});

module.exports = dynamoDB;
