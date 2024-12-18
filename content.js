// 获取所有 <script> 标签的内容
const scripts = document.querySelectorAll('script');
let scriptContents = [];

scripts.forEach(script => {
  if (script.src) {
    // 如果是外部脚本链接，则仅存储其 URL
    scriptContents.push(`External script: ${script.src}`);
  } else {
    console.log(`push script contents. ${script.innerText || script.textContent}`);
    // 如果是内联脚本，则存储其内容
    scriptContents.push(script.innerText || script.textContent);

    // 执行脚本并获取其中的变量
    // try {
    //     const scriptContent = script.innerText || script.textContent;
    //     const func = new Function(scriptContent);
        
    //     // 执行脚本并捕获变量
    //     func();

    //     // 假设我们知道要提取的变量名，可以手动获取这些变量
    //     // 这里举个例子，我们假设变量名为 `myVar`，并读取它的值
    //     if (typeof LabelsData !== 'undefined') {
    //       variables.push({ name: 'LabelsData', value: LabelsData });
    //     }
  
    //     console.log("variables", variables);
  
    //     // 你可以根据实际情况修改变量提取逻辑
    //   } catch (error) {
    //     console.error("Error executing script:", error);
    //   }
  }
});

// 将获取的脚本内容发送到背景脚本
chrome.runtime.sendMessage({ action: 'sendScriptContents', scripts: scriptContents }, (response) => {
  console.log('Response from background:', response);
});
