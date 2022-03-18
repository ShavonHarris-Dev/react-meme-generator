import {useState} from 'react'
import MemesData from '../components/MemesData'

const Meme = () => {
    const [memeImage, setMemeImage] = useState('')

    function getMemeImage(){
        const memesArray = MemesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

  return (
    <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme--image" alt="new meme" />
        </main>
    )
}

export default Meme
