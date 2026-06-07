export type DateStr = string;

export interface CV {
  basics: Basics;
  work: Work[];
  volunteer?: Volunteer[];
  education: Education[];
  certificates_show?: boolean;
  certificates?: Certificate[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects: string[];
}

export interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  theme?: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  address?: string;
  postalCode?: string;
  city: string;
  countryCode?: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  name: string;
  position: string;
  url?: string;
  location_type?: string;
  location?: string;
  startDate: DateStr;
  endDate?: DateStr;
  summary?: string;
  highlights?: string[];
  responsibilities?: string[];
  achievements?: string[];
  skills?: string[];
}

export interface Volunteer {
  organization: string;
  position: string;
  url?: string;
  startDate: DateStr;
  endDate?: DateStr;
  summary?: string;
  highlights?: string[];
}

export interface Education {
  institution: string;
  url?: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate?: DateStr;
  score?: string;
  courses?: string[];
}

export interface Certificate {
  name: string;
  date: DateStr;
  issuer: string;
  url?: string;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Interest {
  name: string;
  keywords?: string[];
}

export interface Reference {
  name: string;
  reference: string;
}
