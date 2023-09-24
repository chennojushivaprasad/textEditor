import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {FaSave} from 'react-icons/fa'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

import {useTheme} from '../../Context/ThemeContext/themeContext'
import {
  Heading,
  Button,
  Image,
  ImageElement,
  EditorContainer,
  HrElement,
  ButtonContainer,
  TextAreaElement,
  UnderlineButton,
  ItalicButton,
  SaveFileButton,
  SaveButton,
  CancelButton,
  FileNameInput,
  ThemeButton,
} from './styledComponents'
import './index.css'

function saveTextToFile(text, fileName) {
  if (fileName.trim() !== '') {
    const blob = new Blob([text], {type: 'text/plain'})
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = fileName

    document.body.appendChild(a)
    a.click()

    URL.revokeObjectURL(url)
  }
}

function TextEditor() {
  const [textToBold, setTextToBold] = useState(false)
  const [textToItalic, setTextToItalic] = useState(false)
  const [textToUnderline, setTextToUnderline] = useState(false)

  const [showPopup, setShowPopup] = useState(false)
  const [fileName, setFileName] = useState('')
  const [textToSave, setTextToSave] = useState('')

  const resetState = () => {
    setFileName('')
    setTextToSave('')
    setTextToBold(false)
    setTextToItalic(false)
    setTextToUnderline(false)
  }

  const openPopup = () => {
    setShowPopup(true)
  }

  const closePopup = () => {
    resetState()
    setShowPopup(false)
  }

  const {theme, toggleTheme} = useTheme()

  const bold = () => {
    setTextToBold(prevTextToBold => !prevTextToBold)
  }

  const italic = () => {
    setTextToItalic(prevTextToItalic => !prevTextToItalic)
  }

  const underline = () => {
    setTextToUnderline(prevTextToUnderline => !prevTextToUnderline)
  }

  const handleFileNameChange = e => {
    setFileName(e.target.value)
  }

  const handleChangeInput = e => {
    setTextToSave(e.target.value)
  }

  const handleSave = () => {
    saveTextToFile(textToSave, fileName)
    closePopup()
  }

  const textColor = theme === 'light' ? 'black' : 'white'
  const color = textToBold === false ? textColor : '#e3cf17'
  const italicButtonColor = textToItalic === false ? textColor : '#e3cf17'
  const underlineButtonColor = textToUnderline === false ? textColor : '#e3cf17'
  const fontWeight = textToBold === false ? 'normal' : 'bold'
  const fontStyle = textToItalic === false ? 'normal' : 'italic'
  const textDecoration = textToUnderline === false ? 'normal' : 'underline'

  return (
    <div className={`text-editor ${theme}`}>
      <div className="container">
        <div className="left">
          <Heading>Text Editor</Heading>
          <ImageElement>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              className="image"
              alt="text editor"
            />
          </ImageElement>
        </div>
        <EditorContainer className="right">
          <ButtonContainer>
            <div className="style-text-buttons">
              <Button
                data-testid="bold"
                color={color}
                type="button"
                onClick={bold}
              >
                <VscBold size={25} />
              </Button>

              <ItalicButton
                className="button"
                data-testid="italic"
                type="button"
                color={italicButtonColor}
                onClick={italic}
              >
                <GoItalic size={25} />
              </ItalicButton>

              <UnderlineButton
                className="button"
                data-testid="underline"
                type="button"
                color={underlineButtonColor}
                onClick={underline}
              >
                <AiOutlineUnderline size={25} />
              </UnderlineButton>
            </div>
            <div className="save-button-container">
              <SaveFileButton color={color} type="button" onClick={openPopup}>
                <FaSave />
              </SaveFileButton>
            </div>
          </ButtonContainer>

          <HrElement />
          <TextAreaElement
            fontWeight={fontWeight}
            fontStyle={fontStyle}
            textDecoration={textDecoration}
            onChange={handleChangeInput}
          />
        </EditorContainer>
      </div>
      <ThemeButton onClick={toggleTheme} className="theme-button">
        {theme === 'light' ? (
          <BsFillMoonFill className="toggle-theme-icon" />
        ) : (
          <BsFillSunFill className="toggle-theme-icon" />
        )}
      </ThemeButton>
      {showPopup && (
        <div className="popup">
          <div className="popup-container">
            <label htmlFor="fileInput" className="custom-file-input">
              Save
            </label>
            <FileNameInput
              type="text"
              id="fileInput"
              placeholder="Enter a filename"
              value={fileName}
              onChange={handleFileNameChange}
            />
            <SaveButton onClick={handleSave} className="save-button">
              Save
            </SaveButton>
            <CancelButton onClick={closePopup} className="cancel-button">
              Cancel
            </CancelButton>
          </div>
        </div>
      )}
    </div>
  )
}

export default TextEditor
