import { DISTRICT_LAYERS } from './civic';

export type BallotDoor = 'washington' | 'hawaii' | 'community' | 'questions';
export type DistrictKey = 'congressional' | 'stateSenate' | 'stateHouse' | 'cityCouncil';
export type DistrictContext = { mode: 'demo'; districts: Record<DistrictKey, string> };
export type Office = {
  id: string;
  level: 'federal' | 'state' | 'local' | 'oha';
  title: string;
  description: string;
  examples: string[];
  term?: string;
  districtDependent: boolean;
  districtKey?: DistrictKey;
};
export type Candidate = { id: string; name: string; party?: string; officeId: string; image?: string };
export type BallotQuestion = { id: string; level: 'state' | 'county'; title: string; explanation: string };
export type DoorDefinition = { id: BallotDoor; title: string; subtitle: string; intro: string; officeIds: string[]; color: string };

// No raw address enters this context. These labels match the Phase 1 district stack.
export const DEMO_DISTRICTS: DistrictContext = {
  mode: 'demo',
  districts: {
    congressional: DISTRICT_LAYERS[0].demo,
    stateSenate: DISTRICT_LAYERS[1].demo,
    stateHouse: DISTRICT_LAYERS[2].demo,
    cityCouncil: DISTRICT_LAYERS[3].demo,
  },
};
export const DOORS: DoorDefinition[] = [
  { id: 'washington', title: 'WASHINGTON', subtitle: 'Your voice in D.C.', intro: 'Your voice in the federal government.', officeIds: ['us-house'], color: '#8c2725' },
  { id: 'hawaii', title: 'HAWAIʻI', subtitle: 'The state of things.', intro: 'The people shaping state laws and running state government.', officeIds: ['governor-lt', 'state-senate', 'state-house'], color: '#626b38' },
  { id: 'community', title: 'YOUR COMMUNITY', subtitle: 'Closer than you think.', intro: 'Some of the decisions you feel most directly happen right here.', officeIds: ['council', 'oha'], color: '#426765' },
  { id: 'questions', title: 'THE QUESTIONS', subtitle: 'No portrait required.', intro: 'This is where voters sometimes decide rules directly.', officeIds: [], color: '#9c572c' },
];
export const OFFICES: Office[] = [
  {id:'us-house',level:'federal',title:'U.S. REPRESENTATIVE',description:'Represents your congressional district in Washington, D.C. Votes on federal laws and helps oversee the federal government.',examples:['Nationwide laws','Federal spending','Government oversight'],term:'2 years',districtDependent:true,districtKey:'congressional'},
  {id:'governor-lt',level:'state',title:'GOVERNOR + LIEUTENANT GOVERNOR',description:'Lead the executive branch of Hawaiʻi state government.',examples:['State agencies','State budget implementation','Emergency response'],districtDependent:false},
  {id:'state-senate',level:'state',title:'STATE SENATOR',description:'Represents a larger state legislative district and votes on state laws.',examples:['Housing','Education','Taxes'],districtDependent:true,districtKey:'stateSenate'},
  {id:'state-house',level:'state',title:'STATE REPRESENTATIVE',description:'Represents a smaller state House district and votes on state laws.',examples:['Housing','Education','Transportation'],districtDependent:true,districtKey:'stateHouse'},
  {id:'council',level:'local',title:'HONOLULU CITY COUNCIL',description:'Makes local laws and decisions that shape everyday life on Oʻahu.',examples:['Zoning','Roads','Parks'],districtDependent:true,districtKey:'cityCouncil'},
  {id:'oha',level:'oha',title:'OFFICE OF HAWAIIAN AFFAIRS TRUSTEES',description:'OHA trustees govern the policies, priorities, and budget of the Office of Hawaiian Affairs.',examples:['OHA programs','Land and resource priorities','Organizational budget'],districtDependent:false},
];
// Equal presentation for every fictional candidate. No real names, rankings, or positions.
export const CANDIDATES: Candidate[] = OFFICES.flatMap(office => ['A','B'].map(letter => ({
  id:`${office.id}-${letter.toLowerCase()}`,name:`Candidate ${letter}`,officeId:office.id,
})));
export const QUESTIONS: BallotQuestion[] = [
  {id:'01',level:'state',title:'A different reporting schedule',explanation:'This fictional amendment would change how often a state report is required, from once a year to twice a year.'},
  {id:'02',level:'county',title:'A new review interval',explanation:'This fictional charter change would change the interval for a county policy review from ten years to eight years.'},
  {id:'03',level:'county',title:'A different board size',explanation:'This fictional charter change would increase an example county advisory board from five members to seven.'},
];
export const TOUR_SOURCES = {
  electionSchedule: 'https://elections.hawaii.gov/voting/contest-schedule/',
  oha: 'https://www.oha.org/about/',
};
