export type BlogModel = {
  title: string;
  contents: string;
  description: string;
  deletedAt: null;
  likeCount: number;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export const BlogData: BlogModel[] = [
  {
    title: "test 입니다.",
    contents: `
    content내용입니다.`,
    description: "html",
    deletedAt: null,
    likeCount: 0,
    id: "de992305-c065-4644-804f-2879952e0a54",
    createdAt: "2022-09-03T03:08:48.730Z",
    updatedAt: "2022-09-03T03:08:48.730Z",
  },
  {
    title: "test2 입니다.",
    contents: `
    content2내용입니다.`,
    description: "css",
    deletedAt: null,
    likeCount: 0,
    id: "de992305-c065-4644-804f-2879952e0a54",
    createdAt: "2022-09-03T03:08:48.730Z",
    updatedAt: "2022-09-03T03:08:48.730Z",
  },
  {
    title: "test3 입니다.",
    contents: `
    content3내용입니다.`,
    description: "js",
    deletedAt: null,
    likeCount: 0,
    id: "de992305-c065-4644-804f-2879952e0a54",
    createdAt: "2022-09-03T03:08:48.730Z",
    updatedAt: "2022-09-03T03:08:48.730Z",
  },
];
