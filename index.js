const { createElement } = require("react")

const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!
 
 const bookStoreTitle=document.getElementById('#header')

 bookStoreTitle.textContent=bookStore.name
      

 // creating and assinging a value to an elemnt

  const li=document.createElement('li')
  li.textContent='bookContainer' 

   const h3=document.createElement('h3')
  h3.textContent='bookTitle' 

   const p=document.createElement('p')
  p.textContent=`bookAuthor` 
   const img=document.createElement('img')
  img.textContent= `bookImage`

    
// changing the text element of each content 

  const bookTitle= document.querrySelector('bookTitle')
   
  bookTitle.textContent='father of nation'
   
  const bookAuthor= document.querySelector('bookAuthor')
  bookAuthor.textContent='the author of the book'


  const bookImage=document.querySelector('bookImage')

  bookImage.textContent='url'

  // appending of element 
bookTitle.appendChild(bookContainer)

bookAuthor.appendChild(bookContainer)

bookImage.appendChild(bookContainer)

bookContainer.appendChild(bookList)