export const BASE_PATH = "http://localhost:44366";

export const EP_GET_HEALTH = "/health";
export const EP_GET_TRASHED_USER_VIDEOS = (userId) =>
  `/video/trashed?userId=${userId}`;
export const EP_GET_UNTRASHED_USER_VIDEOS = (userId) =>
  `/video/untrashed?userId=${userId}`;
export const EP_PUT_TRASH_USER_VIDEO = (userId, videoId) =>
  `/video/trash?videoId=${videoId}`;
export const EP_DELETE_USER_VIDEO = (videoId) => `/video?videoId=${videoId}`;
