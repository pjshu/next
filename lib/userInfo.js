import axios from 'axios';

export async function getUserInfoData(page) {
  console.log('page')
  const res = await axios.get(`http://localhost:3000/api/userinfo.json`);
  return res.data.data;
}