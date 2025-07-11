//----------------------------------------------------------------
//    AddonUEC
//    Copyright (C) 2021 medit
//    This program is distributed under GPLv3. See LICENSE.
//----------------------------------------------------------------

// 学務情報システムのシラバスの開講所属を変える
// manifest.jsonのbackground.scriptをbackground.service_workerに変更しました

// 学期を変えたい方は
//   https://github.com/Yuki-Yui/GakumuJouhouSystem-DefaultSelect

chrome.storage.local.get(item => {
	if(!item.shozoku) chrome.storage.local.set({"shozoku": 2});
//	if(!item.autologin) chrome.storage.local.set({"autologin": "on"});
//	if(item.autologined) browser.storage.local.remove("autologined");
});
