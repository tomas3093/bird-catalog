// XENO-CANTO API https://xeno-canto.org/explore/api

export interface RecordingSearchResult {
  numRecordings: number;
  numSpecies: number;
  page: number;
  numPages: number;
  recordings: Recording[];
}

export interface Recording {
  id: string;
  gen: string;
  sp: string;
  ssp: string;
  group: string;
  en: string;
  rec: string;
  cnt: string;
  loc: string;
  lat: string;
  lng: string;
  alt: string;
  type: string;
  sex: string;
  stage: string;
  method: string;
  url: string;
  file: string;
  'file-name': string;
  sono: {
    small: string;
    med: string;
    large: string;
    full: string;
  };
  osci: {
    small: string;
    med: string;
    large: string;
  };
  lic: string;
  q: string;
  length: string;
  time: string;
  date: string;
  uploaded: string;
  also: string[];
  rmk: string;
  'bird-seen': string;
  'animal-seen': string;
  'playback-used': string;
  temp: string;
  regnr: string;
  auto: string;
  dvc: string;
  mic: string;
  smp: string;
}
