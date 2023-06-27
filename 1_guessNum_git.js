let computerNum = 0;
let First = document.getElementById('일번');
let Second = document.getElementById('이번');
let Third = document.getElementById('검색');
let Fourth = document.getElementById('고버튼');
let Fifth = document.getElementById('리셋버튼');
let chance = 5;
let gameOver = false;
let userArr = [];

Fourth.addEventListener('click', clicker);
Third.addEventListener('focus', function () {
  Third.value = '';
});
Fifth.addEventListener('click', reset);

//숫자가 랜덤으로 나온다
function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log('정답은 ', computerNum);
}
randomNum();

//입력 -> GO버튼 누르기 -> up/down/중복값X/1~100사이 값
function clicker() {
  let userNum = Third.value;
  gameOver = false;

  if (userNum == '') {
    First.textContent = '숫자를 입력하시오.';
    return;
  }

  if (1 > userNum || 100 < userNum) {
    First.textContent = '1~100 사이의 값을 입력하시오.';
    return;
  }

  let history = Third.value;
  if (userArr.includes(history)) {
    First.textContent = '똑같은 값을 전에 입력했습니다. 다른 값 입력하세요.';
    return;
  }

  chance--;
  console.log('남은 횟수는', chance);
  Second.textContent = `남은 기회 : ${chance}번`;

  if (userNum < computerNum) {
    First.textContent = 'UP';
  } else if (userNum > computerNum) {
    First.textContent = 'DOWN';
  } else {
    First.textContent = '☆정답☆ 리셋버튼을 눌러주세요.';
    gameOver = true;
  }

  if (userNum == computerNum) {
    First.textContent = '☆정답☆ 리셋버튼을 눌러주세요.';
  } else if (chance < 1) {
    gameOver = true;
    First.textContent = `끝~ 정답은 ${computerNum}!! 리셋버튼을 눌러주세요.`;
  }
  if (gameOver == true) {
    Fourth.disabled = true;
  } else {
    Fourth.disabled = false;
  }

  userArr.push(history);
  console.log(userArr);
}

function reset() {
  randomNum();
  chance = 5;
  Third.value = '';
  First.textContent = '숫자 맞추기';
  Second.textContent = `남은 기회 : 5번`;
  console.log(`<남은 횟수 : ${chance}>`);

  //이걸 넣어줘야 go 버튼이 다시 살아남
  gameOver = false;
  Fourth.disabled = false;

  /*userArr를 입력해줘야함 
  그래야 첫번째 입력했던 숫자가 2번째 게임때 중복으로 안들어감
  reset -> 2번째 게임 시작
  */
  userArr = [];
}
