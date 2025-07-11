//----------------------------------------------------------------
//    AddonUEC
//    Copyright (C) 2021 medit
//    This program is distributed under GPLv3. See LICENSE.
//----------------------------------------------------------------

for(elem of document.getElementsByClassName("showLoginButton")){
	elem.removeAttribute("href");
}

// 改造：scriptタグのappendChildはCSPでエラーになる
// 　　　web_accessible_resourcesでスクリプトを追加するように変更
// cf. https://qiita.com/urakawa_jinsei/items/1c0684cee0e8db0501d5
const injectScript = (filePath, tag) => {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', filePath);
    node.appendChild(script);
}
injectScript(chrome.runtime.getURL('webclass_script.js'), 'body');

// 旧コード
// const injectCode = `function openWebClassWindow(url){
// 	location.href = url;
// }`;

// var script = document.createElement("script");
// script.textContent = injectCode;
// document.body.appendChild(script);