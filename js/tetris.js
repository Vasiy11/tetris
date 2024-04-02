// Отслеживаем элемент с классом main и помещаем содержимое в let main
let main = document.querySelector(".main");
// Отслеживаем элемент с айди score и помещаем в константу scoreElement
const scroeElement = document.getElementById("score");
// Отслеживаем элемент с айди level и помещаем в константу levelElement
const levelElement = document.getElementById("level");
// Отслеживаем элемент с айди start и помещаем в константу startBth
const startBtn = document.getElementById("start");
//Отслеживаем элемент с айди knopka_top и помещаем в константу startBth
const topBtn = document.getElementById("knopka_top");
//Отслеживаем элемент с айди knopka_left и помещаем в константу knopka_left
const knopka_left = document.getElementById("knopka_left");
//Отслеживаем элемент с айди knopka_right и помещаем в константу knopka_right
const knopka_right = document.getElementById("knopka_right");
//Отслеживаем элемент с айди knopka_down и помещаем в константу knopka_down
const knopka_down = document.getElementById("knopka_down");
//Отслеживаем элемент с айди nextTetro и помещаем в константу nextTetroElem
const nextTetroElem = document.getElementById("next-tetro");
//Отслеживаем элемент с айди gameOver и помещаем в константу gameOver
const gameOver = document.getElementById("gameOver");
//Отслеживаем элемент с айди paus и помещаем в константу pauseBtn
const pauseBtn = document.getElementById("pause");




function clearSelection() {
  console.log('Отчистка проходит');
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else {
    document.selection.empty();
  }
}

document.getElementsByTagName('div').onCwlick = clearSelection;

let score = 0;
let possibleLevels = {
  //образовываем новую переменную possibleLevels
  1: {
    //будет несколько уровней в игре, это 1 уровень
    scorePerLine: 10, //
    speed: 400, //скорость
    nextLevelScore: 20, //следующий уровень будет быстрее
  },
  2: {
    //будет несколько уровней в игре, это 1 уровень
    scorePerLine: 10, //
    speed: 600, //скорость
    nextLevelScore: 40, //следующий уровень будет быстрее
  },
  3: {
    //будет несколько уровней в игре, это 1 уровень
    scorePerLine: 10, //
    speed: 800, //скорость
    nextLevelScore: 60, //следующий уровень будет быстрее
  },
};

let currentLevel = 1; //текущий уроыень 1
let gameTimerID; //образовывается новая переменная gameTimerID, она пустая

// Создаем масив в масиве
// Получается 20 масивов по 10 ячеек и все помещается в переменную let playField
let playField = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
function reset() {
  isPaused = true;
  clearTimeout(gameTimerID);
  playField = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  draw();
  gameOver.style.display = "flex";
}

// Создается новый масив и помещается все в переменную let figures
let figures = {
  // Создаем масив для фигуры кубик и помещается все в масив с ключевой буквой O
  O: [
    [1, 1],
    [1, 1],
  ],
  // Создаем масив для фигуры горизантальной палкой и помещается все в масив с ключевой буквой I
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // Создаем масив для фигуры перевернутая Z и помещается все в масив с ключевой буквой S
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  // Создаем масив для фигуры Z  и помещается все в масив с ключевой буквой Z
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  // Создаем масив для фигуры клюшка  и помещается все в масив с ключевой буквой L
  L: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // Создаем масив для фигуры перевернутая клюшка  и помещается все в масив с ключевой буквой J
  J: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // Создаем масив для фигуры T и помещается все в масив с ключевой буквой T
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
};
let activeTetro = getNewTetro(); //образовадась новая функция getNewTetro, она пустая.Тоесть в функции нет аргументов
//все это передается в новообразованную переменную let activeTetro

//новая переменая nextTetro которая отрисовывает следующую фигуру
let nextTetro = getNewTetro();

// Создаем новую функцию draw, которая отрисовывает всю игру
function draw() {
  // Создаем переменную let mainInnerHTML, помещаем пустое значение, пустые ковычки
  let mainInnerHTML = "";

  // Запускаем цикл for с начальной переменной let y = 0 и со следующией итерацией y прибовляется 1, тоесть y++
  // Интерация происходит до тех пор пока y не будет меньше длинны масива playField
  console.log(playField.length);
  for (let y = 0; y < playField.length; y++) {
    // Запускаем цикл с начальной переменной let x = 0 и распечатываем строки каждого масива
    for (let x = 0; x < playField[y].length; x++) {
      // если ячейка ровна 1
      if (playField[y][x] === 1) {
        // То тогда добавляем эту ячейку div class="cell movingCell" к переменной mainInnerHTML
        mainInnerHTML += '<div class="cell movingCell"> </div>';
      } else if (playField[y][x] === 2) {
        mainInnerHTML += '<div class="cell fixedCell"> </div>';
      } else {
        mainInnerHTML += '<div class="cell"> </div>';
      }
    }
  }
  main.innerHTML = mainInnerHTML; //все что отресовал цикл фор помещается в переменную main тоесть в div с классом main
}

document.onkeydown = function (e) {
  //образуется новая анонимная функция с аргументом e. и все это присваевается в документальную модель
  //в отслеживании клавеатруных кнопок
  if (!isPaused) {
    //спрашивает нет ли пауза
    if (e.keyCode === 37) {
      //отрабатывается кнопка влево номер 37
      activeTetro.x -= 1; //координата фигуры по оси х уменьшается на единицу, тоесть фигура сдвигается влево
      if (hasCollisions()) {
        //спрашивает if, если есть столкновение
        activeTetro.x += 1; //координата фигуры по оси х то колизиа увеличивается на единицу
      }
    } else if (e.keyCode === 39) {
      //отрабатывает кнопка вправо
      activeTetro.x += 1; //фигура сдвигается вправо на единицу
      if (hasCollisions()) {
        //если етсь столкновение тоесть коллизиа
        activeTetro.x -= 1; //то фигура сдвигается влево
      }
    } else if (e.keyCode === 40) {
      //отрабатваетс кнопка вниз на клавиатуре
      moveTetroDown(); //вызов функции moveTetroDown, которая двигает фигурки быстрее вниз
    } else if (e.keyCode === 38) {
      rotateTetro();
    } else if (e.keyCode === 32) {
      dropTetro();
    }
  }
};

function moveTetroDown() {
  //функция moveTetroDown опускает фигуру вниз на одну клетку
  activeTetro.y += 1;
  if (hasCollisions()) {
    activeTetro.y -= 1;
    fixTetro();
    removeFullLines();
    activeTetro = nextTetro;
    if (hasCollisions()) {
      reset();
    }
    nextTetro = getNewTetro();
  }
}
function startGame() {
  moveTetroDown();
  updateGameState();
  setTimeout(startGame, 500);
}
function dropTetro() {
  for (let y = activeTetro.y; y < playField.length; y++) {
    activeTetro.y += 1;
  }
}
// Функция удаляет активную фигурку
function removePrevActiveTetro() {
  // Идем циклом по оси y по вертикали
  for (let y = 0; y < playField.length; y++) {
    // Идем циклом по оси x по горизонтали
    for (let x = 0; x < playField[y].length; x++) {
      // Если квадрат закрашен тоесть равен 1
      if (playField[y][x] === 1) {
        // Ей присваевается 0 тоесть квадрат становится невидимым
        playField[y][x] = 0;
      }
    }
  }
}
function updateGameState() {
  if (!isPaused) {
    console.log("update");
    addActiveTetro();
    draw();
  }
}
// При клике на кнопку startBtn запускается игра путем запуска стрелочной функции
startBtn.addEventListener("click", (e) => {
  // На кнопки помещается надпись start
  e.target.innerHTML = "start";
  // В переменную isPaused помещается false
  isPaused = false;
  // Всплывающее окно"alert" с надписью "Игра началась"
  alert("Игра началась");
  // В переменную gameTimerID помещается состояние игры, куда включается текущий уровень, и скорость
  gameTimerID = setTimeout(startGame, possibleLevels[currentLevel].speed);
  // Запуск игры при помощи функции startGame
  startGame();
  // Конец функции startBtn
});
// При клике на кнопку pauseBtn игра станет на паузу
pauseBtn.addEventListener('click',(e) => {
  if(e.target.innerHTML === pause){
    e.target.innerHTML = 'На паузе';
    clearTimeout(gameTimerID);

  }
  else{
    e.target.innerHTML = pause;
    gameTimerID = setTimeout(startGame,possibleLevels[currentLevel].speed);
  }
  isPaused = !isPaused;
})
// Новая функция getNewTetro отвечает за получение новых фигур
function getNewTetro() {
  // Фигурок будет 7 по начальной букве "O,I,S,Z,L,J,T" и все это помещается в константу possibleFigures
  const possibleFigures = "OISZLJT";
  // Случайным образом при помощи функции Math умноженой на 7, получаем случайное число с 1 до 7, и помещаем в константу rand
  const rand = Math.floor(Math.random() * 7);
  // Случайным образом из 7 фигурок будет выбираться 1, и помещаться в константу newTetro
  const newTetro = figures[possibleFigures[rand]];
  // Возврат
  return {
    // В координату x помещается расчет где будет начинаться фигурка по оси x
    x: Math.floor((10 - newTetro[0].length) / 2),
    // По оси y будет 0 начальная координата фигурки
    y: 0,
    // В ячейку shape помещается выбраная фигурка
    shape: newTetro,
  };
}
// Функция hasCollisions отвечает за столкновение фигурки с краями поля: слево, cправо, снизу
function hasCollisions() {
  // Запускается цикл for с начальной точкой y=0 "сверха"
  for (let y = 0; y < activeTetro.shape.length; y++) {
    // Запускаем цикл для распечатки кирпичей по оси x
    for (let x = 0; x < activeTetro.shape[y].length; x++) {
      // если ячейка равна 1
      if (
        activeTetro.shape[y][x] &&
        (playField[activeTetro.y + y] === undefined ||
          playField[activeTetro.y + y][activeTetro.x + x] === undefined ||
          playField[activeTetro.y + y][activeTetro.x + x] === 2)
      ) {
        // Если происходит столкновение с боковыми стенками или низом, то происходит true и функция останавливается
        return true;
      }
    }
  }
  // В другом случае возвращает return false, тоесть функция hasCollisions продолжается
  return false;
}
// Новая функция addActiveTetro уже распечатывает новые фигурки
function addActiveTetro() {
  // Попутно вызываем функцию removePrevActiveTetro которая удаляет предыдущую активную фигурку
  removePrevActiveTetro();
  //
  // Запускаем цикл для распечатки кирпичей по оси y
  for (let y = 0; y < activeTetro.shape.length; y++) {
    // Запускаем цикл для распечатки кирпичей по оси x
    for (let x = 0; x < activeTetro.shape.length; x++) {
      // если ячейка ровна 1
      if (activeTetro.shape[y][x] === 1) {
        // Распечатываем кирпичи
        playField[activeTetro.y + y][activeTetro.x + x] =
          activeTetro.shape[y][x];
      }
    }
  }
}
//Отслеживание кнопки topBtn на клик
topBtn.addEventListener("click", (e) => {
  //alert('кнопка топ работает')
  //Если paused не нажата
  if (!isPaused) {
    //Запускается функция rotateTetro которая переварачивает наши фигуры
    rotateTetro();
  }
});
//Новая функция rotateTetro которая переварачивает фигурки
function rotateTetro() {
  const prevTetroState = activeTetro.shape;
  activeTetro.shape = activeTetro.shape[0].map((val, index) =>
    activeTetro.shape.map((row) => row[index]).reverse()
  );
  if (hasCollisions()) {
    activeTetro.shape = prevTetroState;
  }
}
// Функция нужна при заполнении линий она должна удаляться и нам засчитывают очки
function removeFullLines() {
  let canRemoveLine = true;
  let filledLines = 0;
  for (let y = 0; y < playField.length; y++) {
    for (let x = 0; x < playField[y].length; x++) {
      if (playField[y][x] !== 2) {
        canRemoveLine = false;
        break;
      }
    }
    if (canRemoveLine) {
      playField.splice(y, 1);
      playField.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      filledLines += 1;
    }
    canRemoveLine = true;
  }
  switch (filledLines) {
    case 1:
      score += possibleLevels[currentLevel].scorePerLine;
      console.log("case 1", score);
      break;
    case 2:
      score += possibleLevels[currentLevel].scorePerLine * 3;
      console.log("case 2", score);
      break;
    case 3:
      score += possibleLevels[currentLevel].scorePerLine * 6;
      console.log("case 3", score);
      break;
    case 4:
      score += possibleLevels[currentLevel].scorePerLine * 12;
      console.log("case 4", score);
      break;
  }
  console.log("Счет", score);
  scroeElement.innerHTML = score;
  if (score >= possibleLevels[currentLevel].nextLevelScore) {
    currentLevel++;
    levelElement.innerHTML = currentLevel;
  }
}
// функция которая будет фиксировать фигурки внизу
function fixTetro() {
  for (let y = 0; y < playField.length; y++) {
    for (let x = 0; x < playField[y].length; x++) {
      if (playField[y][x] === 1) {
        playField[y][x] = 2;
      }
    }
  }
}
//новая функция drawNextTetro которая будет отрисовывать следующую фигуру
function drawNextTetro() {
  let nextTetroInnerHtml = "";
  for (let y = 0; y < nextTetro.shape.length; y++) {
    for (let x = 0; x < nextTetro.shape[y].length; x++) {
      if (nextTetro.shape[y][x]) {
        nextTetroInnerHtml += '<div class="cell movingCell"></div>';
      } else {
        nextTetroInnerHtml += '<div class="cell"></div>';
      }
    }
    nextTetroInnerHtml += "<br/>";
  }
  nextTetroElem.innerHTML = nextTetroInnerHtml;
}

//новая функия updateGameState, которая будет обновлять состояние игры
function updateGameState() {
  if (!isPaused) {
    addActiveTetro();
    draw();
    drawNextTetro();
  }
}
scroeElement.innerHTML = score;
// Функция draw запускается в конце документа
draw();
