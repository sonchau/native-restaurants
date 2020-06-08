import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer _wQRmIbq-KtRMTJLBl-Y6nI4_X4NZpi_bWZ5MsjKylWaa6SWJLkO6e7hGmMGDBGo7d4TN9bWhFLg8kU70YHB-2uwwUYEdjK8HD-vJK1y4V_yY2vVO3zLWohJ9K3dXnYx'
  }
});
