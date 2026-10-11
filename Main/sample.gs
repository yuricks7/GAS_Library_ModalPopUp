function test() {
  const ui    = SpreadsheetApp.getUi();
  const popUp = new PopUp(ui);

  popUp.printProcessing();
  popUp.printFinished();
}