let scripts = []

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === "getScriptContents") {
      console.log('Message received:', request);

      sendResponse({ scripts: scripts});
    }

    if (request.action === "sendScriptContents") {
        console.log('Message sendScriptContents:', request);
        // sendResponse({ scripts: request.scripts });
        scripts = request.scripts;
    }
});
  
// 监听消息，从 popup 或其他地方触发脚本执行
chrome.action.onClicked.addListener(async (tab) => {
    // alert("addListener clicked");
    console.log("addListener clicked");

    // try {
    //     const result = await chrome.scripting.executeScript({
    //         target: { tabId: tab.id },
    //         function: extractMyVar
    //     });

    //     console.log('Result from injected script:', result); // 打印执行结果
    // } catch (error) {
    //     console.error('Error injecting script:', error); // 捕获执行错误
    // }
});