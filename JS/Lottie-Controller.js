console.log("Lottie js is running");

LottieInteractivity.create({

  //NAV LOTTIES:
  player: '#Logo-Lottie',
  mode:"chain",
  actions: [
      {
        state: "autoplay",
        transition: "onComplete",
        frames: [0,45]
      },
      {
        state: "hold",
        path: "https://assets2.lottiefiles.com/packages/lf20_eysynx9a.json",
        reset: false
      }
  ]

  //HOME LOTTIES:

  //HAVEN LOTTIES:
});
