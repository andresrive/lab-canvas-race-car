window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");


  let imgRoad

  let imgCar
  let i = 0


  function startGame() {

    imgRoad = document.createElement("img")

    imgRoad.src = "images/road.png"


    imgRoad.addEventListener("load", () => {
      ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height)
    })

    imgCar = document.createElement("img")

    imgCar.src = "images/car.png"


    imgCar.addEventListener("load", () => {
      ctx.drawImage(imgCar, 225, 600, 50, 90)
    })


    setInterval(() => {
      update();
    }, 20)

  }



  class Player {
    constructor(speed) {
      this.x = 225;
      this.y = 600;
      this.speed = speed;

    }
    print() {
      ctx.drawImage(imgCar, 225, 600, 50, 90)

    }

  }

  let car = new Player(10)


  class Obstacle {
    constructor(x, width) {
      this.x = x;
      this.y = -50;
      this.width = width;
      this.height = 30;
      this.color = "yellow";

    }
    createObst() {
      this.y += 5
      ctx.fillRect(this.x, this.y, this.width, this.height)

    }
  }


  let logs = new Obstacle(200, 150)

  let getObstacles = () => {
    logs.createObst()
  }


  class Game {
    constructor() {

    }
  }


  let update = () => {
    //1. limpiar canvas
    ctx.clearRect(0, 0, 500, 700)
    ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height)

    //2. recalcular posiciones (si hace falta)

    //3. repintar
    car.print();
    getObstacles();

    // createObst() {
    //   i++
    //   if (i > 100) {
    //     i = 0
    //     let obts = new Obstacle()
    //     obtsArr.push(obts)
    //   }
    // }


  }


  document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        car.x -= car.speed
        if (car.x < 65) car.x = 65
        break;
      case "ArrowRight":
        car.x += car.speed
        if (car.x > 385) car.x = 385
        break;
    }
  })

}











