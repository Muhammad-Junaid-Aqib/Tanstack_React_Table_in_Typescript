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
                </Box>
            </Box>
        </>
    )
}

export default Filter
