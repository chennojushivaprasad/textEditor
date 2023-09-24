import styled from 'styled-components'

export const Heading = styled.h1`
  color: var(--text-color);
  font-family: 'Roboto';
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const SaveFileButton = styled.button`
  border: none;
  outline: none;
  color: var(--text-color);
  background-color: transparent;
  font-size: 1.3rem;
`

export const SaveButton = styled.button`
  box-sizing: border-box;
  padding: 5px 10px;
  margin-bottom: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  background-color: rgb(62, 119, 243);
  color: white;
`

export const CancelButton = styled.button`
  box-sizing: border-box;
  padding: 5px 10px;
  margin-bottom: 5px;
  border: none;
  outline: none;
  background-color: var(--text-color);
  color: var(--background-color);
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
`

export const ImageElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--secondary-color);
  border: 1px solid var(--text-color);
  border-radius: 9px;
`
export const HrElement = styled.hr`
  color: #cbd5e1;
  width: 100%;
  border-radius: 1px;
`
export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TextAreaElement = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  resize: none;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--text-color);
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
export const ThemeButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--text-color);
  font-size: 1.4rem;
`
export const FileNameInput = styled.input`
  padding: 10px;
  margin-bottom: 5px;
`

export default Heading
