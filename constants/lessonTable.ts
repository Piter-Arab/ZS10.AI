type LessonTable = {
  [key: string]: ClassDetails[]
}

type ClassDetails = {
  plan: LessonDetails[];
  name: string;
}

type LessonDetails = {
  room: string;
  name: string;
}

export const lessonTable: LessonTable = {
  ap1: [
    {
      name: 'Poniedziałek',
      plan: [
        {
          room: '124',
          name: 'J. polski',
        },
        {
          room: '112',
          name: 'J. polski',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        // Additional lessons for Monday
        {
          room: '101',
          name: 'Historia',
        },
        {
          room: '202',
          name: 'Biologia',
        },
      ],
    },
    {
      name: 'Wtorek',
      plan: [
        // Additional lessons for Tuesday
        {
          room: '301',
          name: 'Geografia',
        },
        {
          room: '402',
          name: 'Chemia',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '501',
          name: 'Matematyka',
        },
        {
          room: '602',
          name: 'Język angielski',
        },
      ],
    },
    {
      name: 'Środa',
      plan: [
        {
          room: '12',
          name: 'Fizyka I',
        },
        {
          room: '12',
          name: 'Fizyka II',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '776',
          name: 'Programowanie',
        },
        // Additional lessons for Wednesday
        {
          room: '303',
          name: 'Informatyka',
        },
      ],
    },
    {
      name: 'Czwartek',
      plan: [
        {
          room: '701',
          name: 'Wiedza o społeczeństwie',
        },
        {
          room: '702',
          name: 'J. polski',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '803',
          name: 'Chemia',
        },
        {
          room: '804',
          name: 'Fizyka',
        },
      ],
    },
    {
      name: 'Piątek',
      plan: [
        // Additional lessons for Friday
        {
          room: '905',
          name: 'Język niemiecki',
        },
        {
          room: '906',
          name: 'Matematyka',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '1007',
          name: 'Historia sztuki',
        },
        {
          room: '1008',
          name: 'Religia',
        },
      ],
    },
  ],
  bp1: [
    {
      name: 'Poniedziałek',
      plan: [
        {
          room: '124',
          name: 'Chemia',
        },
        {
          room: '112',
          name: 'J. polski',
        },
        // Additional lessons for Monday
        {
          room: '101',
          name: 'Matematyka',
        },
        {
          room: '202',
          name: 'Biologia',
        },
        {
          room: '303',
          name: 'Wiedza o społeczeństwie',
        },
      ],
    },
    {
      name: 'Wtorek',
      plan: [
        // Additional lessons for Tuesday
        {
          room: '401',
          name: 'Fizyka',
        },
        {
          room: '502',
          name: 'J. Polski',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '603',
          name: 'Informatyka',
        },
        {
          room: '704',
          name: 'Język angielski',
        },
      ],
    },
    {
      name: 'Środa',
      plan: [
        {
          room: '12',
          name: 'Fizyka I',
        },
        {
          room: '12',
          name: 'Fizyka II',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '776',
          name: 'Programowanie',
        },
        // Additional lessons for Wednesday
        {
          room: '805',
          name: 'Język niemiecki',
        },
      ],
    },
    {
      name: 'Czwartek',
      plan: [
        {
          room: '701',
          name: 'Wiedza o społeczeństwie',
        },
        {
          room: '702',
          name: 'J. polski',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '803',
          name: 'Chemia',
        },
        {
          room: '804',
          name: 'Historia',
        },
      ],
    },
    {
      name: 'Piątek',
      plan: [
        // Additional lessons for Friday
        {
          room: '905',
          name: 'Język angielski',
        },
        {
          room: '906',
          name: 'Matematyka',
        },
        {
          room: 'Sala gimnastyczna',
          name: 'W-F',
        },
        {
          room: '1007',
          name: 'Historia sztuki',
        },
        {
          room: '1008',
          name: 'Religia',
        },
      ],
    },
  ],
};

