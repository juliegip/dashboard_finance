import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import Navbar from './scenes/navbar'
import Dashboard from './scenes/dashboard'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<div>dashboard pages</div>} />
              <Route
                path="/predictions"
                element={<div>predictions page</div>}
              />
            </Routes>
          </Box>
          <Dashboard />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
