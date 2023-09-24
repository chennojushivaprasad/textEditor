import TextEditor from './components/TextEditor'
import {ThemeProvider} from './Context/ThemeContext/themeContext'
import './App.css'

const App = () => (
  <ThemeProvider>
    <TextEditor />
  </ThemeProvider>
)

export default App
