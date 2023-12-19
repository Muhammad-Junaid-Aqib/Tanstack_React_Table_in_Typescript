import React, { useState, useEffect, useRef, HTMLProps } from 'react'
import {
    Box, InputBase, FormControl, InputLabel, Select, MenuItem,
    Paper,
    TableBody,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Pagination,
    Stack,
    // Checkbox,
    Button,
    Chip
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './consultations.css'
import { styled, } from '@mui/material/styles';
import CustomTable from '../components/table/CustomTable';
import { Circle } from '@mui/icons-material';
// import CustomTable from '../components/CTable'
import {

} from "@mui/material";
import { ColumnDef, useReactTable, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table'
import DATAFROMJSON from '../Data/data.json'

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

const Consultation = styled(Box)(({ theme }) => ({
    // color: 'red',
    // marginTop: '40px',
}));

const SearchAndPagination = styled(Box)(({ theme }) => ({
    // color: 'red',
    // marginTop: '40px',
    backgroundColor: 'lightcyan'
}));

type Data = {
    userId: number;
    consultationName: string;
    typesName: string;
    publicStatus: string;
    lastUpdated: string;
    action: string;
};
const IndeterminateCheckbox = ({ indeterminate, className = '', ...rest }: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
    const ref = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        if (typeof indeterminate === 'boolean') {
            ref.current.indeterminate = !rest.checked && indeterminate
        }
    }, [ref, indeterminate])
    return (
        <>
            <input
                type="checkbox"
                ref={ref}
                className={className + ' cursor-pointer'}
                {...rest}
            />
        </>
    )
}
const Consultations = () => {

    const columns = React.useMemo<ColumnDef<Data>[]>(() => [
        {
            accessorKey: 'userId',
            header: () => <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                <Box>
                    <IndeterminateCheckbox
                        {...{
                            checked: tabled.getIsAllRowsSelected(),
                            indeterminate: tabled.getIsSomeRowsSelected(),
                            onChange: tabled.getToggleAllRowsSelectedHandler(),
                        }}
                    />
                </Box>
                <Box>User ID</Box>
            </Box>,
            // size: 25,
            columnOrder: "ColumnOrderState",
            cell: (props) => <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                <Box>
                    <IndeterminateCheckbox
                    // {...{
                    // checked: row.getIsSelected(),
                    // disabled: !row.getCanSelect(),
                    // indeterminate: row.getIsSomeSelected(),
                    // onChange: row.getToggleSelectedHandler(),
                    // }}
                    />
                </Box>
                <Box>{props.getValue()}</Box>
            </Box>
        },
        {
            accessorKey: 'consultationName',
            header: 'Consultation Name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'typesName',
            header: 'Types Name',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'publicStatus',
            header: 'Public Status',
            cell: (props) =>
                <Chip icon={<Circle
                    style={{
                        color: (props.getValue() === "Live") ? 'rgb(0,123,255)' :
                            (props.getValue() === "In Review") ? 'yellow' :
                                (props.getValue() === "Reviewed") ? 'rgb(0,123,255)' : 'gray',
                        borderRadius: "70px",
                        width: '10px',
                        height: '10px',
                    }}
                />} label={props.getValue()} size="small" />
        },
        {
            accessorKey: 'lastUpdated',
            header: 'Last Updated',
            cell: (props) => <p>{props.getValue()}</p>
        },
        {
            accessorKey: 'action',
            header: 'Action(s)',
            enableSorting: false,
            cell: (props) => <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    spacing: '10px',
                    gap: 1,
                }}>
                {/* {props.getValue()} */}
                <Button variant="contained" size="small" sx={{
                    fontSize: '10px',
                    borderRadius: '8px'
                }}>+ Add Step</Button>
                <Button variant="contained" size="small" sx={{
                    fontSize: '10px',
                    borderRadius: '8px'
                }}>Set OC Flow</Button>
                <Button variant="contained" size="small" sx={{
                    fontSize: '10px',
                    borderRadius: '8px',
                }}>Iterate OC</Button>
                <Button variant="contained" size="small" sx={{
                    fontSize: '10px',
                    borderRadius: '8px'
                }}>Migrate To</Button>
                <Button variant="contained" size="small" sx={{
                    fontSize: '10px',
                    borderRadius: '8px'
                }}>View</Button>
            </Box>
        },
    ],
        []
    );

    const [data, setData] = useState(DATAFROMJSON)
    const [columnFilters, setColumnFilters] = useState([])
    const [rowSelection, setRowSelection] = useState({})

    const tabled = useReactTable({
        data,
        columns,
        state: {
            columnFilters,
            rowSelection: rowSelection,
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setRowSelection,
        enableRowSelection: true,
    })

    return (
        <>
            {/* <Box sx={{
                backgroundColor: "#f2f2f2",
                padding: "0 5px",
                //   border: "1px solid green",
                //   margin: "0 auto",
                top: 0
            }}>
                <Box>
                    <h1>Consultation</h1>
                </Box> */}
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
            {/* <Box sx={{
                    mt: 2,
                    margin: "10px 15px",
                }}>
                    <CustomTable />
                </Box>
                <h1>junaid</h1>
            </Box> */}
            <Box>
                <Consultation>
                    <h1> Consultations</h1>
                </Consultation>
                <SearchAndPagination>
                    SearchAndPagination
                </SearchAndPagination>
                <Box>
                    <CustomTable tabled={tabled} />
                </Box>
            </Box>

        </>
    )
}

export default Consultations
