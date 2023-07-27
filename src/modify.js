const getMainHeadingText = () => {
  let mainHeading = document.querySelector(`#main-heading`);
  console.log(mainHeading.textContent);
};

const getAllMainText = () => {
  let mainText = [...document.querySelectorAll(`.main-text`)];
  // mainText.map(pTag => console.log(pTag.textContent)).join();
};

const setSubtitleText = () => {
};

const modifyDivClassList = () => {
};

const addH2 = () => {
};

const removeOldInfo = () => {
};

const makeAlphabet = () => {
};

const makeBio = () => {
};

const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

main();
