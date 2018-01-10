const products = { 
       '1': { 
	   name: 'car',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 1, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://auto.ndtvimg.com/car-images/medium/hyundai/elite-i20/hyundai-elite-i20.jpg?v=2" },
	   '2': { 
	   name: 'Bike',
	   description: 'bleble', 
	   price: 929.99, 
	   id: 2, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://www.bricklanebikes.co.uk/content/images/thumbs/0030350_2018-6ku-fixie-single-speed-bike-beach-bum_1200.jpeg" },
	   '3': { 
	   name: 'Castrol Edge',
	   description: 'bleble', 
	   price: 99.99,
	   id: 3, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://www.avto.bim.bg/images_parts/65895.jpg" },
	   '4': { 
	   name: 'test4',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 4, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '5': { 
	   name: 'test5',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 5, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '6': { 
	   name: 'test6',
	   description: 'bleble', 
	   price: 99.99,
	   id: 6, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '7': { 
	   name: 'test7',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 7, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '8': { 
	   name: 'Coffee table',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 8, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://i1.adis.ws/i/fv/PRODFUJICT----001_Fuji_Coffee-Table?$zoom$&h=1623&w=2304" },
	   '9': { 
	   name: 'Gumi',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 9, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "data:image/jpeg;base64,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" },
	   '10': { 
	   name: 'test10',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 10, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '11': { 
	   name: 'test11',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 11, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://www.shoes.com/images-SBV115/conceptshops/womens-athletic-shoes.jpg" },
	   '12': { 
	   name: 'test12',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 12, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '13': { 
	   name: 'test13',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 13, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" },
	   '14': { 
	   name: 'test14',
	   description: 'bleble', 
	   price: 99.99, 
	   id: 14, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://m.media-amazon.com/images/G/01/2017/boy-shoes/august2017/2942532-p-MULTIVIEW._V517654247_.jpg" },
	   '15': { 
	   name: 'test15',
	   description: 'bleble', 
	   price: 99.99,
	   id: 15, 
	   createdBy: "pesho@abv.bg", 
	   createdOn: Date.now(), 
	   image: "https://dsw.scene7.com/is/image/DSWShoes/404995_001_ss_01?$colpg$" }
};

let currentId = 8

module.exports = {
  total: () => Object.keys(products).length,
  save: (product) => {
    const id = ++currentId
    product.id = id

    let newProduct = {
      id,
	  name: product.name,
	  description: product.description,
      price: product.price,
      image: product.image,
      createdOn: new Date(),
      createdBy: product.createdBy,
      likes: [],
      reviews: []
    }

    products[id] = newProduct
  },
  all: (page, search) => {
    const pageSize = 10

    let startIndex = (page - 1) * pageSize
    let endIndex = startIndex + pageSize

    return Object
      .keys(products)
      .map(key => products[key])
      .filter(product => {
        if (!search) {
          return true
        }

        const productName = product.name.toLowerCase()
        const searchTerm = search.toLowerCase()

        return productName.indexOf(searchTerm) >= 0
      })
      .sort((a, b) => b.id - a.id)
      .slice(startIndex, endIndex)
  },
  findById: (id) => {
    return products[id]
  },
  addReview: (id, rating, comment, user) => {
    const review = {
      rating,
      comment,
      user,
      createdOn: new Date()
    }

    products[id].reviews.push(review)
  },
  allReviews: (id) => {
    return products[id]
      .reviews
      .sort((a, b) => b.createdOn - a.createdOn)
      .slice(0)
  },
  like: (id, user) => {
    const likes = products[id].likes

    if (likes.indexOf(user) >= 0) {
      return false
    }

    likes.push(user)

    return true
  },
  byUser: (user) => {
    return Object
      .keys(products)
      .map(key => products[key])
      .filter(product => product.createdBy === user)
      .sort((a, b) => b.id - a.id)
  },
  delete: (id) => {
    delete products[id]
  }
}
