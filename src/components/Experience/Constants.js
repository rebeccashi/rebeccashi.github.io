const jobTypes = {
    Work: 'Work Experience',
    Project: 'Project',   
};

const nyu = {
    index: 1,
    type: jobTypes.Work,
    summary: {
        name: 'Software Developer',
        company: 'NYU IT',
        location: 'New York, NY',
    },
    details: [
        'Developed an internal NYU website providing services to all NYU students and staff members, powered by React, Javascript and Typescript.',
        'Collaborated with other developers, software architects, and designers to discuss design and implementation solutions and adapted UI designs to programming needs when necessary.',
        'Implemented API calls to mock API’s and designed data storage for the application',
    ]
};

const calendar = {
    index: 2,
    type: jobTypes.Project,
    summary: {
        name: 'Calendar',
    },
    details: [
        'A task management website powered by React, Redux, and Typescript that enables the user to create new events and updates based on user input.'
    ]
};

export { jobTypes, nyu, calendar };