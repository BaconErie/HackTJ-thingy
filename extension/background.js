async function urlChanged(tabId, changeInfo, tab) {
  const url = changeInfo.url;
  const getThing = await chrome.storage.local.get(["userId"]);
  const userId = getThing.key;

  let data = {
    url: url,
    userId: userId
  };

  let response = await fetch("http://localhost:3500/API/Extension", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

  let responseJson = await response.json();

  if (responseJson["block"]) {
    document.open();
    document.write("<!DOCTYPE html><html><body><h1>Blocked</h1></body></html>");
    document.close();
  }
}

chrome.tabs.onUpdated.addListener(urlChanged);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let messageType = message["type"];

  if (messageType == "isBlocked") {
    let urlObject = new URL(message["url"]);
    let domain = urlObject.hostname;

    console.log(domain);

    sendResponse(false);
  }
});

chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    let userId = request.userId;

    chrome.storage.local.set({ userId: userId });
  }
);
