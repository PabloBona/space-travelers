import axios from 'axios';
import { setDragonsData, setDragonsError } from './dragonsSlice';

const fetchDragonsData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/dragons');
    const dragonsData = response.data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      flickr_images: dragon.flickr_images,
      description: dragon.description,
      first_flight: dragon.first_flight,
    }));
    dispatch(setDragonsData(dragonsData));
  } catch (error) {
    dispatch(setDragonsError('Failed to fetch dragons data. Please try again later.'));
  }
};

export default fetchDragonsData;
