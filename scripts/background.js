// Create context menu item
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "addToLibrary",
        title: "Add to Library",
        contexts: ["selection"]
    });
});

// Listen for the context menu click event
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addToLibrary") {
        const selectedText = info.selectionText;

        // Store the word in local storage
        chrome.storage.local.get({ words: [] }, (result) => {
        const words = result.words;
        words.push(selectedText); // Add the new word to the array
        chrome.storage.local.set({ words: words }, () => {
            console.log("Word added to library:", selectedText);
        });
        });
    }
});  