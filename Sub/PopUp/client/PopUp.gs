(function(global) {
  /**
   * 処理中～処理完了のメッセージを設定するクラス
   *
   * 【参考】
   * Google Apps Scriptで差し込み印刷的な何か | officeの杜
   * https://officeforest.org/wp/2019/02/07/google-apps-script%E3%81%A7%E5%B7%AE%E3%81%97%E8%BE%BC%E3%81%BF%E5%8D%B0%E5%88%B7%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B/
   *
   * @param {Ui} ui 操作対象ドキュメントのUIオブジェクト
   */
  class PopUp {
    /**
     * PopUpオブジェクトを生成する
     * 
     * @param {Ui} ui - Uiオブジェクト
     */  
    constructor(ui) {
      this.ui     = ui;
      this.width  = 360;
      this.height = 240;

      this.src = new HtmlSrc();
    }

    /**
     * メッセージを表示する
     * 
     * @param {string} pageTitle - モーダルのタイトル
     */
    printFree(pageTitle) {
      this._print(pageTitle, this.src.path.free);
    }

    /**
     * 「処理中」のメッセージを表示する
     */
    printProcessing() {
      this._print('処理中', this.src.path.onOutput);
    }

    /**
     * 「処理完了」のメッセージを表示する
     */
    printFinished() {
      this._print('処理完了', this.src.path.finished);
     }

    /**
     * メッセージを表示する
     * 
     * @param {string} title    - モーダルのタイトル
     * @param {string} htmlPath - ポップアップに使用するHTMLのソース
     */
    _print(title, htmlPath) {
      this.ui.showModalDialog(this._runScriptlet(htmlPath), title);
    }

    /**
     * スクリプトレットを実行した上でHtmlOutputオブジェクトを取得する
     * 
     * @param {string} htmlPath - ポップアップに使用するHTMLのソース
     * 
     * @return {HtmlService.HtmlOutput} - 生成したHtmlOutputオブジェクト
     */
    _runScriptlet(htmlPath) {
      return HtmlService.createTemplateFromFile(htmlPath)
                        .evaluate()
                        .setWidth( this.width)
                        .setHeight(this.height);
    }
  }

  global.PopUp = PopUp;
})(this);