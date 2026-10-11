/*******************************************
 * ライブラリ（実行可能API）として公開
 *
 * 公開日：2026年01月31日（土）JST
 * スコープ：ドメイン内
 *
 * 作成者：yuricks7
 *******************************************/

/**
 * PopUpをインスタンス化するためのファクトリメソッド
 * 
 * @param {Ui} ui - Uiオブジェクト
 * 
 * @return {PopUp} このライブラリで使用するオブジェクト
 */
// ↑`@return`の{}の中にライブラリのGASプロジェクトと同じ名前を指定する。
function load(ui) {
  return new PopUp(ui);
}

// 補完させたいメソッドのダミーメソッドをグローバルメソッドとして作る。

/**
 * メッセージを表示する
 * 
 * @param {string} pageTitle - モーダルのタイトル
 */
function printFree(pageTitle) {
  throw new Error('loadメソッドを呼び出してから呼び出してください。');
}

/**
 * 「処理中」のメッセージを表示する
 */
function printProcessing() {
  throw new Error('loadメソッドを呼び出してから呼び出してください。');
}

/**
 * 「処理完了」のメッセージを表示する
 */
function printFinished() {
  throw new Error('loadメソッドを呼び出してから呼び出してください。');
}