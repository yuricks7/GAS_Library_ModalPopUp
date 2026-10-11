/**
 * モーダルのHTMLファイルを管理する
 */
class HtmlSrc {
  constructor() {
    // ソースの保存場所
    this.dir = 'Sub/PopUp/html/';
    const sourceDir = this.dir;

    this.path = {
      onOutput: sourceDir + 'spinner',
      free    : sourceDir + 'free',
      finished: sourceDir + 'finishMessage',
    }
  }
}