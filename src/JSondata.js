const JSONdata = {
  id: 1,
  name: 'root',
  isfolder: true,
  items: [
    {
      id: 2,
      name: 'public',
      isfolder: true,
      items: [
        {
          id: 3,
          name: 'public nested 1',
          isfolder: true,
          items: [
            {
              id: 4,
              name: 'index.html',
              isfolder: false,
              items: []
            },
            {
              id: 5,
              name: 'hello.html',
              isfolder: false,
              items: []
            }
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'src',
      isfolder: true,
      items: [
        {
          id: 7,
          name: 'App.js',
          isfolder: false,
          items: []
        },
        {
          id: 8,
          name: 'index.js',
          isfolder: false,
          items: []
        },
        {
          id: 9,
          name: 'styles.css',
          isfolder: false,
          items: []
        }
      ]
    },
    {
      id: 10,
      name: 'package.json',
      isfolder: false,
      items: []
    }
  ]
}

export {
  JSONdata
}