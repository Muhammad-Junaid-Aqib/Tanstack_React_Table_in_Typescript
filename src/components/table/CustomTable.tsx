import React from 'react';
import { flexRender, } from '@tanstack/react-table';
import { SwapVert } from '@mui/icons-material';

import {
    Box,
    Paper,
    TableBody,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const CustomTable = ({ tabled }) => {
    // console.log(tabled.getHeaderGroups())
  return (
    <div>
          <TableContainer
              sx={{
                  border: "2px solid #f2f2f2",
                  borderRadius: "15px",
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
                      {tabled.data}
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
    </div>
  );
}

export default CustomTable;
