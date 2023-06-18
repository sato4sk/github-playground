# github-playground

# 6/19紹介
## 1. issueテンプレート
### settings general feature issues
#### issue作成時のテンプレをmarkdownで指定して、リポジトリ上で管理できる
- 複数設定可能。issue作成時にテンプレ選べる
- labelやassignnee, タイトルのテンプレも設定できるので、統一感

##### プルリクテンプレートは、選択画面は出ない。クエリパラメータで template=ファイル名.mdとすることで適用できるが、実用性は謎

## 2. ドラフトプルリク

## 3. ショートカットと検索
- ctlr + K でコマンドパレット
- sまたは/で検索バーへ
- shift + ?でショートカット一覧

## 4. github pages
### jekyllベース
#### github actionsでビルド・デプロイを任せられるらしい
#### nextもデブロイ可能とのこと
### https://user名.github.io/repository
- うちのmacでjekyllうまく入らず、スキップ

## 5. github packages
#### パッケージリポジトリのように使える(npm, java... pythonは未対応?)
#### [バブリック無料、プライベート容量制限あり](https://docs.github.com/ja/billing/managing-billing-for-github-packages/about-billing-for-github-packages)
    - とはいえ、ロジックコードのパッケージなら超えるようなレベルじゃない

### 5-1. 手順
#### [参照](https://engineer-first.net/create-github-packages)
1. npm init -> package.jsonの編集
    - nameの形式(username/リポジトリ名)
    - mainでインストール時の参照先
    - publishConfig: registoryでgithubのpackageレジストリ
2. 適当な関数の実装
    - tsコンパイルで上記mainで指定したパスに実装されるように
3. github actionsでパッケージpublishの設定
    - GITHUB_TOKENデフォルトトークンで、リポジトリ内の認証
4. プッシュしてactions起動、リポジトリのpackageに表示されてること