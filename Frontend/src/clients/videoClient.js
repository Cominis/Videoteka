import makeRequest from "./baseClient";

const uploadVideo = (video) => {
    const formData = new FormData();
    formData.append('formFile', video);

    return makeRequest('video', 'POST', { body: formData });
}

export {
    uploadVideo,
};
