 import axios from 'axios'    
import {baseUrl} from './constants/constants' //base url config chaithu
const instance = axios.create({                // oru instances indaki
    baseURL: baseUrl,
  });
  export default instance
