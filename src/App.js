import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './App.css'

// Replace your code here
const App = () => {
  const [bold, setBold] = useState(false)
  const [italic, setItalic] = useState(false)
  const [under, setUnder] = useState(false)

  const boldColor = bold ? '#faff00' : '#f1f5f9'
  const italicColor = italic ? '#faff00' : '#f1f5f9'
  const underlineColor = under ? '#faff00' : '#f1f5f9'

  const bold1 = bold ? 'bold' : 'normal'
  const i1 = italic ? 'italic' : 'normal'
  const u1 = under ? 'underline' : 'normal'

  return (
    <div className="main-container">
      <div className="app-container">
        <div>
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
            className="image"
          />
        </div>
        <div className="data-container">
          <ul className="button-container">
            <li className="button">
              <button
                type="button"
                className="button1"
                data-testid="bold"
                style={{color: boldColor}}
                onClick={() => setBold(!bold)}
              >
                <VscBold size={25} />
              </button>
            </li>
            <li className="button">
              <button
                type="button"
                className="button1"
                data-testid="italic"
                style={{color: italicColor}}
                onClick={() => setItalic(!italic)}
              >
                <GoItalic size={25} />
              </button>
            </li>
            <li className="button">
              <button
                type="button"
                className="button1"
                data-testid="underline"
                style={{color: underlineColor}}
                onClick={() => setUnder(!under)}
              >
                <AiOutlineUnderline size={25} />
              </button>
            </li>
          </ul>
          <hr />

          <form>
            <textarea
              rows="4"
              cols="50"
              style={{fontWeight: bold1, fontStyle: i1, textDecoration: u1}}
            >
              H
            </textarea>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
