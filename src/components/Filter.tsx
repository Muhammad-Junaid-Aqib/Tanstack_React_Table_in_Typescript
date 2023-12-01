import React from 'react'
import { Box, InputBase, FormControl, Select, MenuItem, Pagination, Stack } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import '../pages/consultations.css'
import { styled } from '@mui/material/styles';


const SearchIconWrapper = styled(Box)(({ theme }) => ({
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


const Filter = ({ columnFilters, setColumnFilters }) => {
    const taskName = columnFilters.find((f) => f.id === "consultationName")?.value || ""

    console.log(columnFilters)

    const onFilterChange = (id, value) =>
        setColumnFilters((prev) =>
            prev
                .filter((f) => f.id !== id)
                .concat({
                    id,
                    value,
                })
        );



    const onSubmit = () => {
        console.log(columnFilters)
    }
    return (
        <>
            <Box className="search_pagination">
                <Box className="search_box_show_page_number">
                    <Box className="searchBox">
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={taskName}
                            onChange={(e) => onFilterChange("consultationName", e.target.value)}
                        />
                        <SearchIconWrapper sx={{
                            // display: (taskName === null) ? '' : 'none'
                        }}>
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
            </Box>
        </>
    )
}

export default Filter
