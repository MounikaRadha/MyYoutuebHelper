chrome.action.onClicked.addListener(async (tab) => {
        await chrome.scripting.executeScript({
          files: ['songsFinder.js'],
          target: { tabId: tab.id }
        });
  });
  