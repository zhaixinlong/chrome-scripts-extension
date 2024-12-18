console.log('popup.js loaded');  // 确保 popup.js 被加载

document.getElementById('getScriptsBtn').addEventListener('click', () => {
  console.log('Button clicked');  // 如果事件绑定成功，应该看到这个日志

  chrome.runtime.sendMessage({ action: "getScriptContents" }, (response) => {
    if (chrome.runtime.lastError) {
        console.error('Error in sendMessage:', chrome.runtime.lastError);
    } else {
        console.log('Response received:', response);
    }

    console.log('Response received:', response);
    const scriptContentElement = document.getElementById('scriptContent');
    const variablesContentElement = document.getElementById('variablesContent');

    if (!response) {
      scriptContentElement.textContent = "No script contents found!";
      variablesContentElement.textContent = "No variables extracted!";
      return;
    }

    if (response.scripts && response.scripts.length !== 0) {
        scriptContentElement.textContent = response.scripts.join('\n\n');
    } else {
        scriptContentElement.textContent = "No script contents found!";
    }

    if (response.variables && response.variables.length !== 0) {
        variablesContentElement.textContent = JSON.stringify(response.variables, null, 2);
    } else {
        variablesContentElement.textContent = "No variables extracted!";
    }
  });
});
