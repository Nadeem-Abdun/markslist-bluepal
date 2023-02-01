import React from 'react'
import { Box, Stack, Badge, InputBase, Typography, Button } from '@mui/material'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Filter() {
    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='87%' width='90%' direction='row' display='flex' justifyContent='center' alignItems='center'>
                    {/* AddImagebox */}
                    <Box height='100%' width='5%' display='flex' justifyContent='center' alignItems='center'>
                        <Badge overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }} badgeContent={<AddCircleOutlinedIcon fontSize='small' sx={{ fill: '#26ceb4', bgcolor: '#ffffff', borderRadius: '50%' }} />}>
                            <AccountCircleIcon sx={{ height: '50px', width: '50px', fill: '#cdcdcd' }} />
                        </Badge>
                    </Box>
                    {/* Student Name Search */}
                    <Box height='100%' width='22%' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Stack height='100%' width='90%' spacing={0.5} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h1' fontSize='12px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Student's Name</Typography>
                            <InputBase placeholder='' component='input' sx={{ borderRadius: '50px', bgcolor: '#dcdcdc', width: '190px', paddingX: '20px', fontSize:'13px', fontFamily:'Montserrat' }} />
                        </Stack>
                    </Box>
                    {/* Subject Search */}
                    <Box height='100%' width='22%' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Stack height='100%' width='90%' spacing={0.5} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h1' fontSize='12px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Subject</Typography>
                            <InputBase placeholder='Select from list' component='input' sx={{ borderRadius: '50px', bgcolor: '#dcdcdc', width: '190px', paddingX: '20px', fontSize:'13px', fontFamily:'Montserrat' }} />
                        </Stack>
                    </Box>
                    {/* Marks Search */}
                    <Box height='100%' width='15%' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Stack height='100%' width='90%' spacing={0.5} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h1' fontSize='12px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Marks Scored</Typography>
                            <InputBase placeholder='' component='input' sx={{ borderRadius: '50px', bgcolor: '#dcdcdc', width: '140px', paddingX: '20px', fontSize:'13px', fontFamily:'Montserrat' }} />
                        </Stack>
                    </Box>
                    {/* Exam Type Search */}
                    <Box height='100%' width='22%' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Stack height='100%' width='90%' spacing={0.5} direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                            <Typography component='h1' fontSize='12px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Type of Exam</Typography>
                            <InputBase placeholder='Select from list' component='input' sx={{ borderRadius: '50px', bgcolor: '#dcdcdc', width: '190px', paddingX: '20px', fontSize:'13px', fontFamily:'Montserrat' }} />
                        </Stack>
                    </Box>
                    {/* Add Button */}
                    <Box height='100%' width='14%' display='flex' justifyContent='flex-end' alignItems='center'>
                        <Stack height='100%' width='100%' spacing={0.5} direction='column' display='flex' justifyContent='center' alignItems='flex-end'>
                            <Typography component='h1' fontSize='12px' fontWeight='medium' color='#f7f7f7' fontFamily='Montserrat' >.</Typography>
                            <Button variant='contained' sx={{ background: 'linear-gradient(to right, #6424f4, #7633b7)', borderRadius: '30px', paddingX: '35px' }}>ADD NOW</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
