/**
 * 外部ファイルをインクルード
 * 
 * @param {string} path - インクルードしたいファイルのパス
 * 
 * @return {string} - ファイルの内容を格納した文字列
 */
function include(path) {
  return HtmlService.createHtmlOutputFromFile(path).getContent();
}

/**
 * h3タグの内容を設定する
 * 
 * @param {string} title - h3タグに入れる文章
 * 
 * @return {string} - 文章を格納した文字列
 */
function setH3Tag(title) {
  let html = `<h3>${title}</h3>`;
  return HtmlService.createHtmlOutput(html).getContent();
}

/**
 * アラート文を設定する
 * 
 * @param {string} alertText - pタグ（"class=alert"）に入れる文章
 * 
 * @return {string} - 文章を格納した文字列
 */
function setAlert(alertText) {
  let html = `<p class="alert">${alertText}</p>`;
  return HtmlService.createHtmlOutput(html).getContent();
}

/**
 * 本文を設定する
 * 
 * @param {string} bodyText - pタグに入れる文章
 * 
 * @return {string} - 文章を格納した文字列
 */
function setBody(bodyText) {
  let html = `<p>${bodyText}</p>`;
  return HtmlService.createHtmlOutput(html).getContent();
}