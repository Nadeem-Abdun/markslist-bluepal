import Header from './Components/Header'
import Filter from './Components/Filter'
import Content from './Components/Content'
import { Box, Stack } from '@mui/material'

function App() {

  return (
    <>
      {/* Web Screen */}
      <Box height='100vh' width='100vw' display='flex' justifyContent='center' alignItems='center' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
          {/* Header Box */}
          <Box height='14%' width='100%' display='flex' justifyContent='center' alignItems='center' sx={{ background: 'linear-gradient(to right, #6424f4, #7633b7)' }}>
            <Header />
          </Box>
          {/* Filter Box */}
          <Box height='11%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#f7f7f7'>
            <Filter />
          </Box>
          {/* Tabs And List Box */}
          <Box height='75%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
            <Content />
          </Box>
        </Stack>
      </Box >
      {/* Mobile Screen */}
      <Box height='768px' width='1366px' display='flex' justifyContent='center' alignItems='center' sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='center'>
          {/* Header Box */}
          <Box height='14%' width='100%' display='flex' justifyContent='center' alignItems='center' sx={{ background: 'linear-gradient(to right, #6424f4, #7633b7)' }}>
            <Header />
          </Box>
          {/* Filter Box */}
          <Box height='11%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#f7f7f7'>
            <Filter />
          </Box>
          {/* Tabs And List Box */}
          <Box height='75%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
            <Content />
          </Box>
        </Stack>
      </Box >
    </>
  );
}

export default App;
