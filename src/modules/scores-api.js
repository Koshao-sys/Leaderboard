const gameId = { name: 'Soccer Academy', id: 'ZCjCUXTffzaSkGhoabW0' };
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const scoresEndpoint = `/games/${gameId.id}/scores/`;

const getData = async (url = '', method) => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
  });
  return response.json();
};

const postData = async (url = '', data, method) => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'same-origin',
    body: JSON.stringify(data),
  });
  return response.json();
};

const getScores = async () => {
  try {
    const data = await getData(baseUrl + scoresEndpoint, 'GET');
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

const postScores = async (obj) => {
  try {
    const data = await postData(baseUrl + scoresEndpoint, obj, 'POST');
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

export { getScores, postScores };