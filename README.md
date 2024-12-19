# my chrome extension

## 功能描述

获取当前页面所有scripts的一个chrome插件

使用了插件的消息传递，页面打开发送消息到插件后端，然后点击按钮，获取插件后端存储的数据，展示在页面上

## 待解决问题

chrome.action.onClicked.addListener监听失败，chrome.scripting.executeScript未正确执行

```js
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
```