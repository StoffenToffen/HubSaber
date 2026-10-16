export interface MapType {
  id: string;
  name: string;
  description: string;
  uploader: {
    id: number;
    name: string;
    avatar: string;
    type: string;
    admin: boolean;
    curator: boolean;
    seniorCurator: boolean;
    playlistUrl: string;
  };
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
    diffs: {
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
      seconds: number;
      paritySummary: {
        errors: number;
        warns: number;
        resets: number;
      };
      maxScore: number;
      label: string;
      environment: string;
    }[];
    downloadURL: string;
    coverURL: string;
    previewURL: string;
  }[];
  createdAt: string;
  updatedAt: string;
  lastPublishedAt: string;
  tags: string[];
  bookmarked: boolean;
  declaredAi: string;
  blRanked: boolean;
  blQualified: boolean;
}
