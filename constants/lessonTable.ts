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
  bp2: [
    {
      name: 'Poniedziałek',
      plan: [
        {
          room: '',
          name: '',
        },
        {
          room: '40/19',
          name: 'inf1/nie2',
        },
        {
          room: '18',
          name: 'Matematyka',
        },
        {
          room: '21',
          name: 'Historia',
        },
        {
          room: '23/G',
          name: 'nie1/WF',
        },
        {
          room: '18',
          name: 'Matematyka',
        },
        {
          room: '21',
          name: 'HIT',
        },
        {
          room: '17',
          name: 'Historia',
        },
        {
          room: '17',
          name: 'APL',
        },
      ],
    },
    {
      name: 'Wtorek',
      plan: [
        {
          room: '',
          name: '',
        },
        {
          room: '19/',
          name: 'joz1/',
        },
        {
          room: '37/19',
          name: 'apl2/fiz1',
        },
        {
          room: '37/40',
          name: 'apl2/projop1',
        },
        {
          room: '37/40',
          name: 'apl1/projop2',
        },
        {
          room: '37/44',
          name: 'apl1/ang2',
        },
        {
          room: '35',
          name: 'podst. przed',
        },
        {
          room: '603',
          name: 'Informatyka',
        },
        {
          room: 'G/',
          name: 'WF1/',
        },
        {
          room: 'G/',
          name: 'WF1/',
        },
      ],
    },
    {
      name: 'Środa',
      plan: [
        {
          room: '',
          name: '',
        },
        {
          room: '38/',
          name: 'nie1/',
        },
        {
          room: '38/23',
          name: 'ang2/nie1',
        },
        {
          room: '38/39',
          name: 'joz1/bio2',
        },
        {
          room: '18',
          name: 'Matematyka',
        },
        {
          room: 'G/18',
          name: 'WF2/ang1',
        },
        {
          room: 'G/19',
          name: 'WF1/fiz2',
        },
        {
          room: '15',
          name: 'religia',
        },
        {
          room: '15',
          name: 'religia',
        },
      ],
    },
    {
      name: 'Czwartek',
      plan: [
        {
          room: '',
          name: '',
        },
        {
          room: '40/',
          name: 'inf2',
        },
        {
          room: '21',
          name: 'j. polski',
        },
        {
          room: '37/41',
          name: 'pdprlb1/bd2',
        },
        {
          room: '37/41',
          name: 'OBIEKT1/bd2',
        },
        {
          room: '25',
          name: 'PDPR',
        },
        {
          room: 'G/25',
          name: 'WF2/bio1',
        },
        {
          room: '25',
          name: 'BD',
        },
        {
          room: '25',
          name: 'chem1/chem2',
        },
      ],
    },
    {
      name: 'Piątek',
      plan: [
        
        {
          room: '28',
          name: 'OBIEKT',
        },
        {
          room: '37/41',
          name: 'obiekt2/bd1',
        },
        {
          room: '37/41',
          name: 'pdprlb2/bd1',
        },
        {
          room: '35',
          name: 'geografia',
        },
        {
          room: '35',
          name: 'j. polski',
        },
        {
          room: '35',
          name: 'j. polski',
        },
        {
          room: '35',
          name: 'PROJOP',
        },
        {
          room: '35',
          name: 'GDW',
        },
      ],
    },
  ],
};

