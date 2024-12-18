// 获取所有 <script> 标签的内容
const scripts = document.querySelectorAll('script');
let scriptContents = [];

scripts.forEach(async (script)=> {
  if (script.src) {
    // 如果是外部脚本链接，则仅存储其 URL
    scriptContents.push(`External script: ${script.src}`);
  } else {
    console.log(`push script contents. ${script.innerText || script.textContent}`);
    // 如果是内联脚本，则存储其内容
    scriptContents.push(script.innerText || script.textContent);
  }
});


// 将获取的脚本内容发送到背景脚本
chrome.runtime.sendMessage({ action: 'sendScriptContents', scripts: scriptContents }, (response) => {
  console.log('Response from background:', response);
});
