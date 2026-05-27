import {

  createContext,

  useState,

  useEffect

} from 'react'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] = useState(() => {

    const temaSalvo = localStorage.getItem('hburguer-theme')

    return temaSalvo
      ? JSON.parse(temaSalvo)
      : true

  })

  useEffect(() => {

    localStorage.setItem(

      'hburguer-theme',

      JSON.stringify(darkMode)

    )

    if(darkMode){

      document.body.classList.add('dark')

    }else{

      document.body.classList.remove('dark')

    }

  }, [darkMode])

  function toggleTheme(){

    setDarkMode(!darkMode)

  }

  return (

    <ThemeContext.Provider

      value={{

        darkMode,

        toggleTheme

      }}

    >

      {children}

    </ThemeContext.Provider>

  )

}

export default ThemeProvider