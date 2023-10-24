module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  randomFortune: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A faithful friend is a strong defense.",
      "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
      "A pleasant surprise is waiting for you.",
      "Adventure can be real happiness.",
    ];
    //choose random fortune
    let fortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortunes = fortunes[fortuneIndex];

    res.status(200).send(randomFortunes);
  },

  inspirationList: (req, res) => {},
};
