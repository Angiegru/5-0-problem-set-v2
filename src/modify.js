const getMainHeadingText = () => {
  let mainHeading = document.querySelector(`#main-heading`);
  console.log(mainHeading.textContent);
};

const getAllMainText = () => {
  let str = '';
  let mainText = document.querySelectorAll(`.main-text`);
  const MainText = [...mainText];
  for(let i = 0; i < MainText.length -1; i++){
    str += `${MainText[i].textContent},`;
}
str += `${MainText[2].textContent}`;
  console.log(str)
};

const setSubtitleText = () => {
const h2 = document.getElementById('subtitle');
h2.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const list = document.querySelector(`#modify-classes`).classList;
  list.remove("bad-class");
  list.add("new-class");
};

const addH2 = () => {
  const newElement = document.createElement("h2");
  newElement.setAttribute('id', 'h2-test')
  newElement.textContent = 'Another one!';
  const bodyEl = document.body;
  bodyEl.append(newElement)
};

const removeOldInfo = () => {
  const list = document.querySelector(`#old-info`);
  list.remove(`#old-info`);
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
