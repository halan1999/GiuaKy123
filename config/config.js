const aws = require("aws-sdk");

const dynamoDB = new aws.DynamoDB.DocumentClient({
  region: "ap-southeast-1",
  accessKeyId: "AKIAQ3QLWOE2QGA4MY7Z",
  secretAccessKey: "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",
});

module.exports = dynamoDB;
