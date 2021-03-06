import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'baser amer',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'woker',
      email: 'wokersagedli@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Coach Red Bag',
      slug: 'coach-red-bag',
      catergory: 'Bag',
      image: '/images/p1.jpg', //650 x 570
      price: 100,
      countInStock: 0,
      brand: 'Coach',
      rating: 2.5,
      numReviews: 10,
      Description: 'Authentic Bag',
    },
    {
      //_id: '2',
      name: 'Coach Blue Bag',
      slug: 'coach-Blue-bag',
      catergory: 'Bag',
      image: '/images/p2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Coach',
      rating: 4.5,
      numReviews: 10,
      Description: 'Authentic Bag',
    },
    {
      // _id: '3',
      name: 'Coach White Bag',
      slug: 'coach-White-bag',
      catergory: 'Bag',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Coach',
      rating: 5,
      numReviews: 10,
      Description: 'Authentic Bag',
    },
    {
      // _id: '4',
      name: 'Coach Black Bag',
      slug: 'coach-Black-bag',
      catergory: 'Bag',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Coach',
      rating: 3.5,
      numReviews: 10,
      Description: 'Authentic Bag',
    },
  ],
};

export default data;
