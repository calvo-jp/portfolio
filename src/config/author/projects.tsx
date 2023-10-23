import { Month, TProject } from '../../types';

export const projects: TProject[] = [
  {
    title: 'Halcyon Theme',
    description:
      'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    image:
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    repository: 'https://github.com/calvo-jp/project-xxx',
    website: 'https://project-xxx.vercel.app',
    tags: [' VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    featured: true,
    createdAt: new Date(),
  },
  {
    title: 'Spotify Profile',
    description:
      'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    repository: 'https://github.com/calvo-jp/project-xxx',
    website: 'https://project-xxx.vercel.app',
    tags: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
    featured: true,
    createdAt: new Date(),
  },

  //
  // Others

  {
    title: 'Integrating Algolia Search with WordPress Multisite',
    description:
      'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
    repository: 'https://github.com/calvo-jp/project-xxx',
    website: 'https://project-xxx.vercel.app',
    tags: ['Algolia', 'WordPress', 'PHP'],
    createdAt: new Date(2022, Month.Jan, 1),
  },
  {
    title: 'Time to Have More Fun',
    description:
      'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
    repository: 'https://github.com/calvo-jp/project-xxx',
    tags: ['Next.js', 'Tailwind', 'CSS', 'Firebase'],
    createdAt: new Date(2021, Month.Dec, 25),
  },
  {
    title: 'Building a Headless Mobile App CMS From Scratch',
    description:
      'Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement',
    repository: 'https://github.com/calvo-jp/project-xxx',
    tags: ['Node', 'Express', 'Firebase', 'Vue'],
    createdAt: new Date(2022, Month.Nov, 5),
  },
  {
    title: 'OctoProfile',
    description:
      'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
    repository: 'https://github.com/calvo-jp/project-xxx',
    tags: ['Next.js', 'Chart.js', 'GitHub API'],
    createdAt: new Date(2023, Month.Nov, 31),
  },
  {
    title: 'Google Keep Clone',
    description: 'A simple Google Keep clone built with Vue and Firebase.',
    website: 'https://project-xxx.vercel.app',
    repository: 'https://github.com/calvo-jp/project-xxx',
    tags: ['Vue', 'Firebase'],
    createdAt: new Date(2023, Month.Dec, 31),
  },
  {
    title: 'Apple Music Embeddable Web Player Widget',
    description:
      'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js',
    website: 'https://project-xxx.vercel.app',
    repository: 'https://github.com/calvo-jp/project-xxx',
    tags: ['MusicKit.js', 'JS', 'CSS'],
    createdAt: new Date(2022, Month.Feb, 14),
  },
];
