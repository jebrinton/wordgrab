document.getElementById('exportButton').addEventListener('click', () => {
    chrome.storage.local.get({ words: [] }, (result) => {
      const words = result.words || [];
      if (words.length === 0) {
        document.getElementById('status').innerText = "No words to export.";
        return;
      }
  
      // Create CSV content
      const csvContent = "data:text/csv;charset=utf-8," + words.map(word => `"${word}"`).join("\n");
  
      // Create a link element and trigger download
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "library.csv");
      document.body.appendChild(link); // Required for Firefox
      link.click();
      document.body.removeChild(link);
  
      document.getElementById('status').innerText = "Export successful!";
    });
  });  