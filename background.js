chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var blockedWebsites = [
        "youtube.com",
        "reddit.com",
        "twitter.com",
        "9gag.com",
        "gulte.com",
        "facebook.com",
        "hotstar.com",
        "aha.video",
        "primevideo.com",
        "netflix.com"
    ]; // Add your list of blocked websites here

    var url = new URL(details.url);
    console.log(url)
    for (var i = 0; i < blockedWebsites.length; i++) {
      if (url.href.includes(blockedWebsites[i])) {
        console.log("Blocked request to:", url.href);
        return { cancel: true };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
