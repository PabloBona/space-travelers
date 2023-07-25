// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const fetchDragonsData = createAsyncThunk('dragons/fetchDragonsData', async () => {
//   try {
//     const response = await axios.get('https://api.spacexdata.com/v3/dragons');
//     const dragonsData = response.data.map((dragon) => ({
//       id: dragon.id,
//       name: dragon.name,
//       type: dragon.type,
//       flickr_images: dragon.flickr_images,
//       description: dragon.description,
//       first_flight: dragon.first_flight,
//     }));
//     return dragonsData;
//   } catch (error) {
//     throw new Error('Failed to fetch dragons data. Please try again later.');
//   }
// });

// export default fetchDragonsData;
