import makeRequest from "./baseClient";

const uploadVideo = async (video) => {
  const formData = new FormData();
  formData.append("formFile", video);

  return makeRequest("video", "POST", { body: formData });
};

const getUserVideos = async (userId) =>
  makeRequest(`video/untrashed?userId=${userId}`, "GET");
const getTrashUserVideos = async (userId) =>
  makeRequest(`video/trashed?userId=${userId}`, 'GET');
const deleteVideo = async (videoId) =>
  makeRequest(`video/${videoId}`, "DELETE");
const moveToTrash = async (videoId) =>
  makeRequest(`video/trash?videoId=${videoId}`, "PUT");

export {
  uploadVideo,
  getUserVideos,
  deleteVideo,
  moveToTrash,
  getTrashUserVideos,
};
