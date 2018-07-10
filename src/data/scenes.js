const images = require.context('./images', true, /\.jpg$/);

const scenes = {
  all: [{
    id: 0,
    text: 'You see a monk and he asks you if you like to see something new or see the world as it always is',
    src: images('./monk.jpg'),
    options: [{ optionText: 'new', optionIndex: 1 }, { optionText: 'same', optionIndex: 0 }],
  },
  {
    id: 1,
    text: 'The monk takes you to a cave and says you will meditate all day and will take your mind into an amazing place.  You begin to meditate and begin to drift and hallucinate. ',
    src: images('./meditate.jpg'),
    options: [{ optionText: 'continue', optionIndex: 2 }],
  },
  {
    id: 2,
    text: 'The being asks this is your trip what would you like in your life?',
    src: images('./journey.jpg'),
    options: [{ optionText: 'Love', optionIndex: 3 }, { optionText: 'Power', optionIndex: 4 }],
  },
  {
    id: 3,
    text: 'You are in a place with your true lover.  However, you notice that even true love is a wave and has phases of good and bad.  You then realize you have to choose good or bad.',
    src: images('./yingyang.jpg'),
    options: [{ optionText: 'Good', optionIndex: 5 }, { optionText: 'Bad', optionIndex: 6 }],
  },
  {
    id: 4,
    text: 'You become a King.  Every King must make wise decisions.',
    src: images('./king.jpg'),
    options: [{ optionText: 'Bring your country to War', optionIndex: 7 }, { optionText: 'Bring Your Country To Peace', optionIndex: 8 }],
  },
  {
    id: 5,
    text: 'You choose good which takes you to a place of kindness',
    src: images('./kind.jpg'),
  },
  {
    id: 6,
    text: 'You choose bad which takes you to a place of sexual fantasy.',
    src: images('./loveMaking.jpg'),
  },
  {
    id: 7,
    text: 'Bring your country to war.  You loose the war and are captured and killed.',
    src: images('./death.jpg'),
  },
  {
    id: 8,
    text: 'The world becomes peaceful and you are transported to a world of green with leaves',
    src: images('./naturePeace.jpg'),
  },
  ],
};


export default scenes;
