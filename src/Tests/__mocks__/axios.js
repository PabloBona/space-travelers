const dragonsData = [
  {
    id: 'dragon1',
    name: 'Dragon 1',
    description: 'Dragon 1 description',
    flickr_images: ['image1.jpg'],
    type: 'Dragon 1 type',
  },
  {
    id: 'dragon2',
    name: 'Dragon 2',
    description: 'Dragon 2 description',
    flickr_images: ['image2.jpg'],
    type: 'Dragon 2 type',
  },
];

const rocketsData = [
  {
    id: 'rocket1',
    rocketName: 'Rocket 1',
    description: 'Rocket 1 description',
    imageRocket: 'rocket1.jpg',
  },
  {
    id: 'rocket2',
    rocketName: 'Rocket 2',
    description: 'Rocket 2 description',
    imageRocket: 'rocket2.jpg',
  },
];

const missionsData = [
  {
    id: 'mission1',
    missionName: 'Mission 1',
    description: 'Mission 1 description',
    imageMission: 'mission1.jpg',
  },
  {
    id: 'mission2',
    missionName: 'Mission 2',
    description: 'Mission 2 description',
    imageMission: 'mission2.jpg',
  },
];

const get = (url) => {
  if (url === 'https://api.spacexdata.com/v3/dragons') {
    return Promise.resolve({
      data: dragonsData,
    });
  }

  if (url === 'https://api.spacexdata.com/v4/rockets') {
    return Promise.resolve({
      data: rocketsData,
    });
  }

  if (url === 'https://api.spacexdata.com/v3/missions') {
    return Promise.resolve({
      data: missionsData,
    });
  }

  return Promise.resolve({
    data: {},
  });
};

export default { get };
