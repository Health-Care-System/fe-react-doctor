/* eslint-disable no-useless-catch */
import axios from "axios";

export const getDoctorProfile = async () => {
  const res = await axios.get('http://localhost:3000/profile');
      
  return res.data;
};
