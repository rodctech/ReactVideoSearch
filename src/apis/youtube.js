import axios from 'axios';


const KEY = 'AIzaSyCD7CpWihAB_jW-xTrI41H6lLhukh2lX4A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    //no ending forwardslash /
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});