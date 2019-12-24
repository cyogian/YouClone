import axios from 'axios';

const KEY = 'AIzaSyATRbMp_-Z9_yEarodZC81FBtnXTPBXmaQ';
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});
