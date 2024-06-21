import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  url_getData,
  url_nullAdj,
  url_triggerStart,
  url_recordSample,
} from '../endpoint';

const GetData = async () => {
  // const { paramAction, updateParamAction } = useAppContext();

  try {
    const response = await fetch(url_getData, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'KEY': '0101',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    // setDataResult(result);
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
    throw new Error('Something wrong!');
  }
};

const NullAdj = async () => {
  try {
    const response = await axios.get(url_nullAdj);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const TriggerStart = async () => {
  try {
    const response = await axios.get(url_triggerStart);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

const RecordSample = async () => {
  try {
    const response = await axios.get(url_recordSample);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export {GetData, NullAdj, TriggerStart, RecordSample};
