import logo from './user_icon.png';
import './App.css';
import Book from './Book.js';
import Modal from './Components/Modal';
import background from './bookshelf.png'

import { useState } from 'react';

function App() {
  let books = [
    {title: "The Last Wish", description: "Geralt is a Witcher, a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless hunter. Yet he is no ordinary killer. His sole purpose: to destroy the monsters that plague the world. But not everything monstrous-looking is evil and not everything fair is good . . . and in every fairy tale there is a grain of truth.", author: "Andrzej Sapkowski", cover: "https://images.isbndb.com/covers/91/86/9780316029186.jpg"}, 
    {title: "Art of War", description: "Twenty-Five Hundred years ago, Sun Tzu wrote this classic book of military strategy based on Chinese warfare and military thought. Since that time, all levels of military have used the teaching on Sun Tzu to warfare and civilization have adapted these teachings for use in politics, business and everyday life. The Art of War is a book which should be used to gain advantage of opponents in the boardroom and battlefield alike.", author: "Sun Tzu", cover: "https://images.isbndb.com/covers/23/91/9780345362391.jpg"}, 
    {title: "Sonichu", description: " Sonichu #0 is the first issue of Christine Weston Chandler's magnum opus. The comic consists of Sonichu's first three adventures. In Sonichu's Origin, the core cast of the series is introduced as Sonichu and Rosechu are created. Then, in Genesis of the Lovehogs, the two protagonists meet and immediately fall in love. Finally, in Sonichu vs. Naitsirhc, our yellow hero does battle with his first real villain, who but foreshadows the challenges awaiting the hedgehogs in the following issue. ", author: "Christine Weston Chandler", cover: "https://static.tvtropes.org/pmwiki/pub/images/sonichu_15.jpg"},
    {title: "", description: "", author: "", cover: ""}
  ];

  const [openModal, setOpenModal] = useState(false);
  const [bookIndex, setBookIndex] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } height="40px" width="40px" />
      </header>

      <img className="shelf" src={ background }></img>

      <div className="bookshelf">
        {
          Object.entries(books).map(([key, book]) => {
            return (
              <Book 
                book={ book }
                onClick={() => {
                  setOpenModal(true);
                  setBookIndex(key);
                }}
              />
            );
          })
        }
      </div>
      {openModal && <Modal closeModal={setOpenModal} book={books[bookIndex]} />}
    </div>
  );
}

export default App;
