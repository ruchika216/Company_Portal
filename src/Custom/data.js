export const data = [
  {
    uuid: '1',
    title: 'My Schedule',
    description: 'January, 2023',
    icon: require('../assets/icons/notes.png'),
    content: [
      {
        date: '04, Jan',
        text: 'Mary Simpson',
        sessions: 'Already has 2 sessions',
        time: '16:00 - 17:00',
      },
      {
        date: '05, Jan',
        text: 'John Doe',
        sessions: 'Already has 1 session',
        time: '16:00 - 17:00',
      },
    ],
  },
  {
    icon: require('../assets/icons/open-book.png'),
    uuid: '2',
    title: 'My Resource',
    description: 'February, 2023',
    content: [
      {
        date: '10, Feb',
        text: 'Jane Smith',
        sessions: 'No previous sessions',
        time: '16:00 - 17:00',
      },
    ],
  },
  {
    icon: require('../assets/icons/user1.png'),
    uuid: '3',
    title: 'My Profile',
    description: 'March, 2023',
    content: [
      {
        date: '15, Mar',
        text: 'Emily Johnson',
        sessions: 'Already has 3 sessions',
        time: '16:00 - 17:00',
      },
    ],
  },
];
