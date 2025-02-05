export interface Grammar {
  id: string;
  title: string;
  meaning: {
    jp: string;
    en: string;
    vi: string;
  };
  structure: {
    jp: string;
    en: string;
    vi: string;
  };
  examples: {
    jp: string;
    en: string;
    vi: string;
  }[];
  usage: {
    jp: string;
    en: string;
    vi: string;
  };
}
