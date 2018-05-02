const resolvers = {
    Query: {
      author(root, args) {
        return { id: 1, firstName: 'Vinicius ', lastName: 'Dias' };
      },
      allAuthors() {
        return [ { id: 1, firstName: 'Vinicius ', lastName: 'Dias' },{ id: 1, firstName: 'Cavalo', lastName: 'de fogo' } ];
      }
    },
    Author: {
      posts(author) {
        return [
          { id: 1, title: 'A post', text: 'Some text', views: 2 },
          { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
        ];
      }
    },
    Post: {
      author(post) {
        return { id: 1, firstName: 'Hello', lastName: 'World' };
      }
    }
  };
  
  export default resolvers;