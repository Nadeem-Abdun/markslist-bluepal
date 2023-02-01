import React, { useState } from 'react'
import { Box, Stack, Tab, styled, InputBase, IconButton, Typography, Avatar, MenuItem, Menu, Button } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import SearchIcon from '@mui/icons-material/Search';
import { studentList } from '../API/studentList'

export default function Content() {
    // Tabs State Handling
    const [value, setValue] = useState("")
    const handleTab = (event, newValue) => {
        setValue(newValue)
        setQuery(newValue)
    }
    // Search Bar State Handling
    const [query, setQuery] = useState("")
    const handleQuery = (event) => {
        setQuery(event.target.value);
    }
    const filteredData = studentList.filter(studentDat => {
        return (
            studentDat.name.toLowerCase().startsWith(query.toLowerCase()) ||
            studentDat.subject.toLowerCase().startsWith(query.toLowerCase()) ||
            studentDat.examtyp.toLowerCase().startsWith(query.toLowerCase())
        );
    });
    const StyledTab = styled(Tab)({
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#8f65f7',
    })

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                <Stack height='95%' width='90%' direction='column' display='flex' justifyContent='center' alignItems='center'>
                    {/* Tabs And Search Box */}
                    <Box height='10%' width='100%' display='flex' justifyContent='center' alignItems='center'>
                        <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='space-between' alignItems='center'>
                            {/* Tabs */}
                            <Box height='100%' width='40%' display='flex' justifyContent='flex-start' alignItems='center'>
                                <TabContext value={value}>
                                    <TabList onChange={handleTab} TabIndicatorProps={{ style: { background: '#ffffff' } }} >
                                        <StyledTab label='All' value="" />
                                        <StyledTab label='Class Exam' value='Class Exam' />
                                        <StyledTab label='Online Exam' value='Online Exam' />
                                        <StyledTab label='Missed Exam' value='Missed Exam' />
                                    </TabList>
                                </TabContext>
                            </Box>
                            {/* Search */}
                            <Box height='100%' width='30%' display='flex' justifyContent='flex-end' alignItems='center'>
                                <Box height='90%' width='75%' display='flex' justifyContent='flex-end' alignItems='center' borderRadius='20px' border={1} borderColor='#dcdcdc'>
                                    <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='center' alignItems='center'>
                                        <Box height='100%' width='85%' display='flex' justifyContent='center' alignItems='center'>
                                            <InputBase sx={{ width: '225px', paddingX: '10px', fontSize: '13px' }} onChange={handleQuery} placeholder='Search Name, Subject, Exam Typ...' />
                                        </Box>
                                        <Box height='100%' width='15%' display='flex' justifyContent='flex-end' alignItems='center'>
                                            <IconButton><SearchIcon /></IconButton>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                    {/* List Header */}
                    <Box height='7%' width='100%' display='flex' justifyContent='center' alignItems='center' borderRadius='15px' bgcolor='#f7f7f7'>
                        <Stack height='100%' width='100%' direction='row' display='flex' justifyContent='flex-start' alignItems='center'>
                            <Box height='100%' width='8%' display='flex' justifyContent='center' alignItems='center'>
                                {/* EmptyBox */}
                            </Box>
                            <Box height='100%' width='20.3%' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Name</Typography>
                            </Box>
                            <Box height='100%' width='20.3%' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Subject</Typography>
                            </Box>
                            <Box height='100%' width='20.35%' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Marks Scored</Typography>
                            </Box>
                            <Box height='100%' width='20.45%' display='flex' justifyContent='flex-start' alignItems='center'>
                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Type of Exam</Typography>
                            </Box>
                            <Box height='100%' width='10.6%' display='flex' justifyContent='center' alignItems='center'>
                                {/* EmptyBox */}
                            </Box>
                        </Stack>
                    </Box>
                    {/* List */}
                    <Box height='83%' width='100%' display='flex' justifyContent='center' alignItems='center' overflow='auto' marginTop={1}>
                        {/* List Column */}
                        <Stack height='100%' width='100%' spacing={1} direction='column' display='flex' justifyContent='flex-start' alignItems='center'>
                            {/* List Row - 1 */}
                            {filteredData.map((data, index) => {
                                const { name, avatId, grade, subject, score, examtyp } = data
                                return (
                                    <Stack height='13%' width='100%' direction='row' display='flex' justifyContent='center' alignItems='center' key={index}>
                                        <Box height='100%' width='8%' display='flex' justifyContent='center' alignItems='center'>
                                            <Avatar alt="Jaspreet Img" src={avatId} sx={{ width: 46, height: 46 }} />
                                        </Box>
                                        <Box height='100%' width='20.65%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Stack height='100%' width='100%' direction='column' display='flex' justifyContent='center' alignItems='flex-start'>
                                                <Typography component='h1' fontSize='18px' fontWeight='bold' color='#225e89' fontFamily='Montserrat' >{name}</Typography>
                                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >Grade {grade}</Typography>
                                            </Stack>
                                        </Box>
                                        <Box height='100%' width='20.65%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >{subject}</Typography>
                                        </Box>
                                        <Box height='100%' width='20.65%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >{score} / 100</Typography>
                                        </Box>
                                        <Box height='100%' width='20.65%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            {examtyp !== 'Missed Exam' ?
                                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#a3aab3' fontFamily='Montserrat' >{examtyp}</Typography>
                                                :
                                                <Typography component='h1' fontSize='13px' fontWeight='medium' color='#fb9494' fontFamily='Montserrat' >{examtyp}</Typography>
                                            }
                                        </Box>
                                        <Box height='100%' width='9.4%' display='flex' justifyContent='flex-start' alignItems='center'>
                                            <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={{ fontSize: '13px', fontWeight: 'medium', color: '#cf79d0', fontFamily: 'Montserrat', component:'text', textTransform:'capitalize' }}>Edit</Button>
                                            {/* <Typography component='h1' fontSize='13px' fontWeight='medium' color='#cf79d0' fontFamily='Montserrat' >Edit</Typography> */}
                                        </Box>
                                    </Stack>
                                );
                            })}
                        </Stack>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
                            <MenuItem onClick={handleClose} component='h1' sx={{ fontSize:'13px', fontWeight:'medium', fontFamily:'Montserrat' }}>Modify</MenuItem>
                            <MenuItem onClick={handleClose} component='h1' sx={{ fontSize:'13px', fontWeight:'medium', fontFamily:'Montserrat' }}>Remove</MenuItem>
                        </Menu>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
