import { Configuration, OpenAIApi } from "openai";
var request = require('sync-request');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function isABlockedCategory(categories, url) {
    let response = await fetch(url);
    const content = await response.text();
    
    let regex = /<title>([\s\S]*?)<\/title>/g;

    title = content.match(regex)[0];

    console.log(title)
}

/* TEST CODE
const isABlockedCategory = require('./is_blocked').isABlockedCategory;
isABlockedCategory('https://www.roblox.com');
*/