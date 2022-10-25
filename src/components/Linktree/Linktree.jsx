import React from 'react'
import {FaSlack, FaGithub} from 'react-icons/fa';
import './Linktree.css'


function Linktree() {
  return (
    <div className='container'>
      <div>
      <button id="twitter" type="button" className="twitter btn btn-primary btn-lg btn-block">
        <a className='twitter-link' href="https://twitter.com/zambogo7">Twitter Link</a>
      </button>
      </div>
      <div>
      <button id="btn_zuri" type="button" className="btn_zuri btn btn-secondary btn-lg btn-block">
        <a className='zuri-team-link' href="https://training.zuri.team">Zuri Team</a>
      </button>
      </div>
     <div>
     <button id="books" type="button" className="books btn btn-secondary btn-lg btn-block">
        <a className='books-link' href="http://books.zuri.team">Zuri Books</a>
      </button>
     </div>
     <div>
     <button id="python_books" type="button" className="python_books btn btn-secondary btn-lg btn-block">
        <a className='python-books-link' href=" https://books.zuri.team/python-for-beginners?ref_id=<yourslackname">Python Zuri Books</a>
      </button>
     </div>
     <div>
     <button id="pitch" type="button" className="pitch btn btn-secondary btn-lg btn-block">
        <a className='skill-link' href="https://background.zuri.team">Check your coding skills with zuri</a>
      </button>
     </div>
     <div>
     <button id="book_design" type="button" className="book_design btn btn-secondary btn-lg btn-block">
        <a className='zuri-free-link' href="https://books.zuri.team/design-rules">Zuri Free Design Books</a>
      </button>
     </div>

        <span className='slack'><FaSlack color='red'/></span>
        <FaGithub/>
        
        
    </div>
  )
}

export default Linktree