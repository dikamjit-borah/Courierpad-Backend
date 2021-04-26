const db = "../models/index";
const { AGENTS_TABLE } = require("../models/index");

exports.add_agent = async (data) => {
    let agent;
  try {
     agent = await AGENTS_TABLE.create({
      ...data,
    });
  } catch (err) {
      agent = err;
  }

  return agent;
};
