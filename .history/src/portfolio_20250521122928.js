const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/FaheemAshraf123',
  title: 'Faheem Ashraf',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Faheem Ashraf',
  role: 'Front End Developer',
  description:
    `I build modern, responsive, and user-focused web interfaces with clean code and creative design. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue, I turn ideas into seamless digital experiences. I'm passionate about performance, accessibility, and creating intuitive UIs that work across all devices.

Whether it's building SPAs, optimizing UX, or collaborating with teams to bring designs to life, I strive to create efficient and maintainable code using best practices. My portfolio showcases real-world projects, challenges, and creative solutions.

Let’s build something great together.`,
  resume: '/public/FaheemAshrafResume.pdf',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/FaheemAshraf123',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Material UI',
  'Git',
  'Angular Matrial',
  'Figma to HTML',
  'Debbugging',
  'Responsive UI',
  'SQA',
]

const contactMe = {
  // email is optional - if left empty Contact section won't show up
  email: 'faheemashraf5180@gmail.com',
  // number: 'https://wa.me/923366545180?text=Hi%20Faheem%2C%20I%20would%20like%20to%20connect!',
   social: {
   number: 'https://wa.me/923366545180?text=Hi%20Faheem%2C%20I%20would%20like%20to%20connect!',
     linkedin: 'https://linkedin.com',
    github: 'https://github.com/FaheemAshraf123',
  },
}

export { header, about, projects, skills, contactMe }
