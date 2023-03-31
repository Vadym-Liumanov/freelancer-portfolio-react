import { img01, img09, img08, imgBig01, imgBig09, imgBig08 } from "../img/projects"

const projectsList = [
  {
    id: '1',
    title: 'Freelancer portfolio',
    skills: 'ReactJS, HTML, CSS',
    gitHubLink: 'https://github.com/Vadym-Liumanov/freelancer-portfolio-react',
    img: {
      small: img01,
      big: imgBig01
    }
  },
  {
    id: '8',
    title: 'Resume',
    skills: 'JavaScript, HTML, CSS',
    gitHubLink: 'https://github.com/Vadym-Liumanov/resume-liumanov',
    img: {
      small: img08,
      big: imgBig08
    }
  },
  {
    id: '9',
    title: 'Social network',
    skills: 'Typescript, HTML, CSS',
    gitHubLink: 'https://github.com/Vadym-Liumanov/social-network',
    img: {
      small: img09,
      big: imgBig09
    }
  }

]

export { projectsList }