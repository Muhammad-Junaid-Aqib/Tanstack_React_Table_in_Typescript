import { useEffect, useState, useRef, HTMLProps, useMemo } from 'react'
import { ColumnDef, useReactTable, getCoreRowModel, flexRender, getFilteredRowModel, getSortedRowModel, getPaginationRowModel } from '@tanstack/react-table'
// import datag from '../Data/data.json'
import Filter from './Filter'
import item from '../Data/data.json'
import { SwapVert, Circle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import {
  Box,
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


type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

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

// const RESIZER = styled(Box)(() => ({
//   position: "relative",
//   // opacity: 0,
//   marginTop: "0px",
//   marginRight: "0px",
//   height: "100%",
//   width: "5px",
//   background: "rgb(0,123,255)",
//   cursor: "col-resize",
//   userSelect: "none",
//   touchAction: "none",
//   borderRadius: "6px",
// }));

const CTable = () => {
  const columns = [
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
  ]

  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(item)
  const [page, setPage] = useState(item)
  const [columnFilters, setColumnFilters] = useState([])
  
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

  // console.log(table.getHeaderGroups())
  return (
    <>
      <Box className="search_pagination">
        <Filter
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Box sx={{
            fontSize: '15px'
          }}>
            Showing {tabled.getState().pagination.pageIndex + 1} -
            {tabled.getState().pagination.pageSize} of
            {tabled.getCanNextPage()} entries
          </Box>
          <Box>
            <Stack spacing={1}>
              <Pagination
                count={tabled.getPageCount()}
                color="primary"
                shape="rounded"
                onClick={() => tabled.nextPage()}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
      <TableContainer
        sx={{
          border: "2px solid #f2f2f2",
          borderRadius: "10px",
          backgroundColor: "white",
          margin: "15px 0px"
        }}
        component={Paper}
      >
        <Table sx={{
          width: `{ ${tabled}.getTotalSize() }`
        }}>
          <TableHead sx={{
            position: "relative",
          }}>
            {tabled.getHeaderGroups().map((headerGroup) => (
              <TableRow className='tr' key={headerGroup.id} sx={{
              }}>
                {headerGroup.headers.map((header) => (
                  <TableCell className='th' key={header.id}
                    colSpan={header.colSpan}
                  >
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      <Box sx={{
                        fontWeight: "bold",
                        fontSize: '12px',
                        marginRight: '5px',
                        color: "rgb(0,123,255)",
                      }}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Box>
                      <Box
                        sx={{
                        }}>
                        {
                          header.column.getCanSort() && <SwapVert
                            fontSize='10px'
                            onClick={
                              header.column.getToggleSortingHandler()
                            }
                          />
                        }
                      </Box>
                    </Box>
                  </TableCell >
                ))}
              </TableRow>
            ))}

          </TableHead>
          <TableBody>
            {tabled.getRowModel().rows.map((row) => (
              <TableRow className="tr" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="td"
                    width={100}
                    height={40}
                    key={cell.id}
                    sx={{
                      // border: "1px solid red",
                      // height: "10px"
                      paddingTop: "0px",
                      paddingBottom: "0px",
                      paddingRight: "0px",
                      paddingLeft: "17px",
                      width: `{ ${cell}.column.getSize() }`,
                      fontSize: '12px'
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* checkboxSelection */}
      </TableContainer>
    </>
  )
}

export default CTable
