// Beat Saver

interface MapperType {
  id: number;
  name: string;
  avatar: string;
  type: string;
  admin: boolean;
  curator: boolean;
  seniorCurator: boolean;
  verifiedMapper?: boolean;
  playlistUrl: string;
}

export interface DiffType {
  njs: number;
  offset: number;
  notes: number;
  bombs: number;
  obstacles: number;
  nps: number;
  length: number;
  characteristic: string;
  difficulty: string;
  events: number;
  chroma: boolean;
  me: boolean;
  ne: boolean;
  cinema: boolean;
  vivify?: boolean;
  seconds: number;
  paritySummary: {
    errors: number;
    warns: number;
    resets: number;
  };
  maxScore: number;
  label: string;
  environment: string;
}

export interface MapType {
  id: string;
  name: string;
  description: string;
  uploader: MapperType;
  metadata: {
    bpm: number;
    duration: number;
    songName: string;
    songSubName: string;
    songAuthorName: string;
    levelAuthorName: string;
  };
  stats: {
    plays: number;
    downloads: number;
    upvotes: number;
    downvotes: number;
    score: number;
  };
  uploaded: string;
  automapper: boolean;
  ranked: boolean;
  qualified: boolean;
  versions: {
    hash: string;
    state: string;
    createdAt: string;
    sageScore: number;
    diffs: DiffType[];
    downloadURL: string;
    coverURL: string;
    previewURL: string;
  }[];
  curatedAt?: string;
  createdAt: string;
  updatedAt: string;
  lastPublishedAt: string;
  tags?: string[];
  bookmarked: boolean;
  collaborators?: MapperType[];
  declaredAi: string;
  blRanked: boolean;
  blQualified: boolean;
}

export interface InfoType {
  total: number;
  pages: number;
  duration: number;
}

export interface FetchType {
  docs: MapType[];
  info: InfoType;
}

// Score Saber

export interface ssDiffInfoType {
  id: number;
  difficulty: number;
  rawDifficulty: string;
  gameMode: string;
}

export interface ssLeaderboardType {
  data: [
    {
      id: number;
      rank: number;
      unmodifiedScore: number;
      modifiedScore: number;
      accuracy: number;
      pp: number;
      weight: number;
      mods: string[];
      badCuts: number;
      missedNotes: number;
      maxCombo: number;
      fullCombo: boolean;
      hasReplay: boolean;
      replayViewCount: number;
      personalBest: boolean;
      legacyHmdId: string | null;
      version: string | null;
      playOutcome: string;
      playOutcomeTime: string | null;
      createdAt: string;
      hasHistory: boolean;
      player: {
        id: string;
        name: string;
        playerNameInGame: string;
        country: string;
        role: string | null;
        avatar: string;
        avatarVersion: number;
        permissions: number;
      };
      device: {
        hmd: string | null;
        controllerLeft: string | null;
        controllerRight: string | null;
      };
    },
  ];
  metadata: {
    page: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  };
}
