export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 30,
      coverImage: 'https://covers.oreillystatic.com/images/0636920053675/lrg.jpg'
      },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 40,
      coverImage: 'https://henrikwarne1.files.wordpress.com/2016/10/dsc_1578.jpg'
    }
  ]

  getBooks() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Error! :-('));
        }
        resolve(this.data);
      }, 700);
    })
  }
}