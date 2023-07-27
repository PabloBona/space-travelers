const dragonsData = [
  {
    id: 'dragon1',
    name: 'Dragon 1',
    description: 'Dragon 1 description',
    flickr_images: ['image1.jpg'],
  },
  {
    id: 'dragon2',
    name: 'Dragon 2',
    description: 'Dragon 2 description',
    flickr_images: ['image2.jpg'],
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

  return Promise.resolve({
    data: {},
  });
};

export default { get };
