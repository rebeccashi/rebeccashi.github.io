const jobTypes = {
    Work: 'Work Experience',
    Project: 'Project',   
};

const nyu = {
    index: 1,
    type: jobTypes.Work,
    date: '2019',
    summary: {
        name: 'Software Developer',
        company: 'NYU IT',
        location: 'New York, NY',
    },
    details: [
        'Developed an internal NYU website providing services to all NYU students and staff members, powered by React, Javascript and Typescript.',
        'Collaborated with other developers, software architects, and designers to discuss design and implementation solutions and adapted UI designs to programming needs when necessary.',
        'Implemented API calls to mock API’s and designed data storage for the application',
    ],
};

const calendar = {
    index: 2,
    type: jobTypes.Project,
    date: '2019',
    summary: {
        name: 'Calendar',
    },
    details: [
        'Created a task management website that enables the user to create new events and updates based on user input.',
        'Powered by React, Redux, and Typescript.'
    ],
    img: {
        alt: "calendar snapshot",
        link: 'https://rebeccashi.github.io/calendar/'
    }
};

const cssa = {
    index: 3,
    type: jobTypes.Project,
    date: '2018-2019',
    summary: {
        name: 'CSSA Website',
    },
    details: [
        'Created and developed the club website using Bootstrap, React, and Firebase.',
        'Designed the website with engaging content to attract new members and to raise awareness of the club at campus.',
        'Updated the website regularly with new features and information', 
    ],
    img: {
        alt: "cssa snapshot",
        link: 'https://www.cssanyu.org/www5/',
    }
}

export { jobTypes, nyu, calendar, cssa };