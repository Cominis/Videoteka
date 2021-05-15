import { makeRequest, makeApiRequest } from "./baseClient";
import {
  BASE_PATH,
  EP_DELETE_USER_VIDEO,
  EP_GET_TRASHED_USER_VIDEOS,
  EP_GET_UNTRASHED_USER_VIDEOS,
  EP_PUT_TRASH_USER_VIDEO,
} from "../api/api.constants";

const getUntrashedUserVideos = async (userId) => {
  const response = makeApiRequest(
    BASE_PATH,
    EP_GET_UNTRASHED_USER_VIDEOS(userId),
    "GET"
  );
  return response;
};

const getTrashedUserVideos = async (userId) => {
  const response = makeApiRequest(
    BASE_PATH,
    EP_GET_TRASHED_USER_VIDEOS(userId),
    "GET"
  );
  return response;
};

const trashUserVideo = async (userId, videoId) => {
  const response = makeApiRequest(
    BASE_PATH,
    EP_PUT_TRASH_USER_VIDEO(userId, videoId),
    "PUT"
  );
  return response;
};

const deleteUserVideo = async (userId, videoId) => {
  const response = makeApiRequest(
    BASE_PATH,
    EP_DELETE_USER_VIDEO(videoId),
    "DELETE"
  );
  return response;
};

const uploadVideo = async (video) => {
  const formData = new FormData();
  formData.append("formFile", video);

  return makeRequest("video", "POST", { body: formData });
};

export { uploadVideo };
