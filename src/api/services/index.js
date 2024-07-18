import axios from 'axios';
import {url_getData, url_postData} from '../endpoint';

const postData = async time => {
  const payload = {
    command: true,
    time: time,
  };

  try {
    const post = await axios.post(url_postData, payload, {
      headers: {'Content-Type': 'application/json'},
    });

    console.log('response: ', post);
  } catch (error) {
    console.log('error: ', error);
  }
};

const getData = async () => {
  try {
    const response = await axios.get(url_getData, {
      headers: {'Content-Type': 'application/json'},
    });

    console.log('response: ', response);
  } catch (error) {
    console.log('error: ', error);
  }
};

export {postData, getData};
