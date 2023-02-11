import {
  img01, img02, img03, img04, img05, img06,
  imgBig01, imgBig02, imgBig03, imgBig04, imgBig05, imgBig06
} from "../img/projects"

const projectsList = [
  {
    id: '1',
    title: 'Gaming streaming portal',
    skills: 'React, Node.js, MongoDB',
    gitHubLink: 'https://github.com',
    img: {
      small: img01,
      big: imgBig01
    }
  },
  {
    id: '2',
    title: 'Video service',
    skills: 'React, PHP, MySql',
    gitHubLink: 'https://github.com',
    img: {
      small: img02,
      big: imgBig02
    }
  },
  {
    id: '3',
    title: 'Video portal',
    skills: 'Vue JS, Node.js, MongoDB',
    gitHubLink: 'https://github.com',
    img: {
      small: img03,
      big: imgBig03
    }
  },
  {
    id: '4',
    title: 'Dating app',
    skills: 'React Native',
    gitHubLink: null,
    img: {
      small: img04,
      big: imgBig04
    }
  },
  {
    id: '5',
    title: 'Landing',
    skills: 'HTML, SCSS, JS',
    gitHubLink: null,
    img: {
      small: img05,
      big: imgBig05
    }
  },
  {
    id: '6',
    title: 'Gaming community',
    skills: 'React, PHP, MySql',
    gitHubLink: null,
    img: {
      small: img06,
      big: imgBig06
    }
  }
]

export { projectsList }