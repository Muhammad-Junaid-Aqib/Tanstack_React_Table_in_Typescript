import React from 'react'
import { Box, InputBase, FormControl, InputLabel, Select, MenuItem, Pagination, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './consultations.css'
import { styled, alpha } from '@mui/material/styles';
import CustomTable from '../components/CTable';


const SearchIconWrapper = styled('div')(({ theme }) => ({
    width: '25px',
    height: '25px',
    border: '2px solid rgb(0,123,255)',
    borderRadius: "10px",
    backgroundColor: "rgb(0,123,255)",
    color: "white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
}));

const Consultations = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: "#f2f2f2",
                padding: "0 5px",
                //   border: "1px solid green",
                //   margin: "0 auto",
                top: 0
            }}>
                <Box>
                    <h1>Consultation</h1>
                </Box>
                {/* <Box className="search_pagination">
                    <Box className="search_box_show_page_number">
                        <Box className="searchBox">

                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: "2em",
                            width: '12em',
                            height: '40px',
                        }}>
                            <Box sx={{
                                fontSize: '15px',
                                marginRight: "10px"
                            }}>
                                show per page
                            </Box>
                            <Box>
                                <FormControl fullWidth sx={{
                                    
                                }} size="small"
                                >
                                    <Select
                                        sx={{
                                            height: "35px",
                                            width: '65px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>15</MenuItem>
                                        <MenuItem value={30}>20</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            fontSize: '15px'
                        }}>
                            Showing 1- 15 of 783 entries
                        </Box>
                        <Box>
                            <Stack spacing={1}>
                                <Pagination count={10} color="primary" />
                            </Stack>
                        </Box>
                    </Box>
                </Box> */}
                <Box sx={{
                    mt: 2,
                    margin: "10px 15px",
                }}>
                    <CustomTable />
                </Box>
                <h1>junaid</h1>
            </Box>

        </>
    )
}

export default Consultations
