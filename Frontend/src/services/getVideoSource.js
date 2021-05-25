import { API_URL_PREFIX } from '../constants';

const getVideoSource = (title, contentType) => `${API_URL_PREFIX}player/playback?id=${title}.${contentType.split('/')[1]}&mime=${contentType}`;

export default getVideoSource;
