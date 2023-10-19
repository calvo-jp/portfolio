import { IWorkHistory, Month } from './types';

export const workHistory: IWorkHistory[] = [
  {
    position: 'Lead Engineer',
    company: {
      name: 'Upstatement',
      website: '',
    },
    dateOfEmployment: {
      start: new Date(2018, Month.May),
      until: null,
    },
    responsibilities: [
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
      'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
      'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
      'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship',
    ],
  },
  {
    position: 'UI Engineer Co-op',
    company: {
      name: 'Apple',
      website: '',
    },
    dateOfEmployment: {
      start: new Date(2017, Month.Apr),
      until: new Date(2017, Month.Oct),
    },
    responsibilities: [
      'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
      'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
      "Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback",
      'Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications',
    ],
  },
];
