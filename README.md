# このフォークについて
meditさんのAddonUECをフォークしたものです。
拡張機能がmanifest v2のためGoogle Chromeで使えなくなったので、manifest v3に対応させました。
Chrome用フォルダしかいじっていません。

## 【注意】
当方jsの基礎すらわからない人間です。拡張機能をいじるのも初めてです。
**バグがあっても直せません。**
あなたが直してね！

## 変更点
### campusweb.js
- （機能追加）開講所属を0番目にした場合、シラバス検索の開講所属をデフォルトのままにするよう機能追加。
### init.js
- （変更）コメントを追加。動作に変更なし。
### manifest.json
- （変更）manifest_versionを2から3に。
- （変更）backgroundをscriptsからservice_workerに。
- （追加）web_accessible_resourcesを追加。
### options.html
- （変更）開講所属の初期値のminを1から0に。
- （変更）0番目について書き足し。
### webclass.js, webclass_script.js
- （変更）web_accessible_resourcesでスクリプトを追加するように変更。
  - scriptタグをappendChildするのはCSPでエラーになる。
- （追加）webclass_script.jsを作成し、injectCordをwebclass_script.jsに移設。
### options.js, otp.js
- 変更なし

**=====以下AddonUECのれあどめ=====**

# AddonUEC
学務情報システムなどの不便を解消する電通大生専用拡張機能

Firefox・Chromeに対応しています。

## 機能
このアドオンは以下のことをします。

### 学務情報システム
* シラバス検索画面で、開講所属の初期値が各類になっている問題を解消します。設定画面で任意の項目を初期値にすることができます。
* シラバス検索画面で、入力後Enterキーを押すと検索が実行できるようになります。
* タイムアウトまでの時間を自動的に延長します。残り30分を切ってから5分以内に延長動作が行われます。
* 画面左上に表示されている氏名や単位修得状況照会ページの氏名・学籍番号・GPA等をクリックすると非表示にできます。もう一度クリックすると元に戻ります。
* トップページのURLリンクが単にクリックするだけで開くようになります。
* トップページのお知らせが中華フォントで表示される問題を解消します。

### WebClass
* トップページから開いたとき、新しいウィンドウではなく同じタブで開くようになります。

### 自動ログイン
* (**Firefox版のみ**)統合認証システムのログイン画面で、ID・パスワードが自動入力されている場合にログインボタンを自動で押します。
* 下記の自動2要素認証と組み合わせるとゼロクリックログインが実現できます。

### 自動2要素認証
* 文字通りの機能
* 設定画面に詳しい説明が書いてあります。

このアドオンは通信を行いませんので、外部に閲覧データや設定情報等を送信することはありません。

## インストール方法
### Firefox
最新版(v1.3.0)は以下のリンクをクリックするとインストールできます。

https://github.com/meditq/addonuec/releases/download/v1.3.0/addonuec-1.3.0-fx.xpi

インストールが完了したらアドオンマネージャーを開き(Ctrl+Shift+A)、設定を行ってください。

このアドオンは自動更新に対応しています。

### Chrome
Chrome ウェブストアの以下のリンクよりインストールできます。

https://chrome.google.com/webstore/detail/addonuec/mckbbmpkeolpgdbbgajafjbdkncjfegh/

インストール後は拡張機能の設定からAddonUECの[詳細]を開き、[拡張機能のオプション]から設定を行ってください。

## 権利表記
Copyright (C) 2021 medit

This program is distributed under GPLv3. See [LICENSE](./LICENSE).
