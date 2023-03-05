const isABlockedCategory = require("../ExtensionHelperFunctions/is_blocked");
const 

const handleBlockWebsite = (req, res) => {
  /**
   * 1. get user id (req.body.userID)
   * 2. given user id exists, get userData
   * 3. loop through the categories and url, and see if url is disadvantageous
   */

  const { userID, url } = req.body;

  const userData = null; // DEVIN PLEASE ADD DETAILS

  const { urls, categories } = userData;

  const isBreak = null; // DEVIN JUST PUT WHETHER OR NOT IS BREAK INTO THIS VARIABLE. TYPE BOOl.

  if (isBreak) {
    res.json({ block: true });
  } else {
    if (isABlockedCategory(categories, url)) {
      res.json({ block: true });
    }

    if ()
  }
};

module.exports = handleBlockWebsite;
