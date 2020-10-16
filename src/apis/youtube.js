import axios from 'axios';
const KEY = 'AIzaSyDrdCa-AZNbVws0P4C0VMD9D35ca504ZPQ';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY,
   },
});
