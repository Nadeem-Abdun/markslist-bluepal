import React from 'react'
import { Box, Stack, Avatar, Typography } from '@mui/material'

export default function Header() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='center' alignItems='center'>
                    {/* Title Box */}
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='90%' width='80%' direction='row' display='flex' justifyContent='center' alignItems='center'>
                            <Box height='100%' width='25%' display='flex' justifyContent='center' alignItems='center'>
                                <Avatar alt="Jaspreet Img" src="https://material-ui.com/static/images/avatar/7.jpg" sx={{ width: 75, height: 75 }} />
                            </Box>
                            <Box height='100%' width='75%' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                    <Typography component='h1' fontSize='25px' fontWeight='bold' color='#f7f3fd' fontFamily='Montserrat' >Jaspreet Kaur Ahuja</Typography>
                                    <Typography component='h1' fontSize='12px' fontWeight='medium' color='#f7f3fd' fontFamily='Montserrat' >Orchids International School, Noida</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                    {/* Counter Box */}
                    <Box height='100%' width='50%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='90%' width='90%' direction='row' display='flex' justifyContent='flex-end' alignItems='center'>
                            <Stack height='100%' width='17%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography component='h1' fontSize='18px' fontWeight='bold' color='#f7f3fd' fontFamily='Montserrat' >150</Typography>
                                <Typography component='h1' fontSize='12px' fontWeight='medium' color='#f7f3fd' fontFamily='Montserrat' >Students</Typography>
                            </Stack>
                            <Stack height='100%' width='17%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography component='h1' fontSize='18px' fontWeight='bold' color='#f7f3fd' fontFamily='Montserrat' >05</Typography>
                                <Typography component='h1' fontSize='12px' fontWeight='medium' color='#f7f3fd' fontFamily='Montserrat' >Subjects</Typography>
                            </Stack>
                            <Stack height='100%' width='17%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                <Typography component='h1' fontSize='18px' fontWeight='bold' color='#f7f3fd' fontFamily='Montserrat' >84</Typography>
                                <Typography component='h1' fontSize='12px' fontWeight='medium' color='#f7f3fd' fontFamily='Montserrat' >Exams</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
