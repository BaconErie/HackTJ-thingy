const openaiLib = require("openai");
const { Configuration, OpenAIApi } = openaiLib;

/*
import {Configuration, OpenAIApi} from 'openai';
*/

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY
});

const openai = new OpenAIApi(configuration);

async function isABlockedCategory(categories, url) {
  let response = await fetch(url);
  const content = await response.text();

  let regex = /(?<=<title>)(.*)(?=<\/title>)/g;

  let title = content.match(regex)[0];

  for (let category of categories) {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Is ${title} related to ${category}? Yes or No?`,
      temperature: 0.0
    });

    let output = completion.data.choices[0].text;

    if (output.includes("Yes")) {
      return true;
    }
  }

  return false;
}

const UserModel = require("../model/User");

const handleBlockWebsite = async (req, res) => {
  /**
   * 1. get user id (req.body.userID)
   * 2. given user id exists, get userData
   * 3. loop through the categories and url, and see if url is disadvantageous
   */

  const { userID, url } = req.body;

  const userData = await UserModel.findOne({ userID: userID });

  const { urls, categories, isBreak } = userData;

  if (isBreak) {
    res.json({ block: true });
  } else {
    if (isABlockedCategory(categories, url)) {
    }

    for (matchUrl of urls) {
      let matchDomain = new URL(matchUrl).hostName;
      let inputDomain = new URL(url).hostName;

      if (matchDomain == inputDomain) {
        res.json({ block: true });
      }
    }

    // If we reach here, then we know that it must not be blocked
    // it is 2:07 am
    res.json({ block: false });
  }
};

module.exports = handleBlockWebsite;
