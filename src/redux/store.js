import adminReducer from './admin-reducer';

const store = {
  _state: {
    adminPage: {
      users: [
        {
          id: 1,
          firstName: 'Name1',
          lastName: 'Surname1',
          email: 'mail1@mail.ru',
          removeRequest: '',
        },
        {
          id: 2,
          firstName: 'Name2',
          lastName: 'Surname2',
          email: 'mail2@mail.ru',
          removeRequest: '',
        },
        {
          id: 3,
          firstName: 'Name3',
          lastName: 'Surname3',
          email: 'mail3@mail.ru',
          removeRequest: '',
        },
        {
          id: 4,
          firstName: 'Name4',
          lastName: 'Surname4',
          email: 'mail4@mail.ru',
          removeRequest: '',
        },
        {
          id: 5,
          firstName: 'Name5',
          lastName: 'Surname5',
          email: 'mail5@mail.ru',
          removeRequest: '',
        },
        {
          id: 6,
          firstName: 'Name6',
          lastName: 'Surname6',
          email: 'mail6@mail.ru',
          removeRequest: '',
        },
        {
          id: 7,
          firstName: 'Name7',
          lastName: 'Surname7',
          email: 'mail7@mail.ru',
          removeRequest: '',
        },
        {
          id: 8,
          firstName: 'Name8',
          lastName: 'Surname8',
          email: 'mail8@mail.ru',
          removeRequest: '',
        },
        {
          id: 9,
          firstName: 'Name8',
          lastName: 'Surname8',
          email: 'mail8@mail.ru',
          removeRequest: '',
        },
        {
          id: 10,
          firstName: 'Name9',
          lastName: 'Surname9',
          email: 'mail9@mail.ru',
          removeRequest: '',
        },
        {
          id: 11,
          firstName: 'Name10',
          lastName: 'Surname10',
          email: 'mail10@mail.ru',
          removeRequest: '',
        },
        {
          id: 12,
          firstName: 'Name11',
          lastName: 'Surname11',
          email: 'mail11@mail.ru',
          removeRequest: '',
        },
      ],
      products: [
        {
          id: 1,
          title: 'Product1',
          description: "It's very good thing!-1",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 2,
          title: 'Product2',
          description: "It's very good thing!-2",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 3,
          title: 'Product3',
          description: "It's very good thing!-3",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 4,
          title: 'Product4',
          description: "It's very good thing!-4",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 5,
          title: 'Product5',
          description: "It's very good thing!-5",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 6,
          title: 'Product6',
          description: "It's very good thing!-6",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 7,
          title: 'Product7',
          description: "It's very good thing!-7",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 8,
          title: 'Product8',
          description: "It's very good thing!-8",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 9,
          title: 'Product9',
          description: "It's very good thing!-9",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 10,
          title: 'Product10',
          description: "It's very good thing!-10",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 11,
          title: 'Product11',
          description: "It's very good thing!-11",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
        {
          id: 12,
          title: 'Product12',
          description: "It's very good thing!-12",
          price: '450$',
          picture:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          tags: 'tag-1, tag-2, tag-3, tag-4, tag-5',
        },
      ],
    },
    mainPage: {
      products: [
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '1100',
          'data-product-id': '9',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '2200',
          'data-product-id': '10',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '3300',
          'data-product-id': '11',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '4400',
          'data-product-id': '12',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '5500',
          'data-product-id': '13',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '6600',
          'data-product-id': '14',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '1100',
          'data-product-id': '15',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '7700',
          'data-product-id': '16',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '8800',
          'data-product-id': '17',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '9900',
          'data-product-id': '18',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '11000',
          'data-product-id': '19',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '12000',
          'data-product-id': '20',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '13000',
          'data-product-id': '21',
        },
        {
          src:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyeb-r_lrGwSN7UESC-DIz-JWXNbsOMkAW7IH8HSToF1WuzobuA',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '14000',
          id: '22',
        },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },

  dispatch(action) {
    this._state.adminPage = adminReducer(this._state.adminPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
