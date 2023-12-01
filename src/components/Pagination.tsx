import React from 'react'
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
    getSortedRowModel,
} from "@tanstack/react-table";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import {
    PaginationContainer,
    StyledPagination,
    StyledPaginationItem,
} from "./Table.style";

const Pagination = () => {
  return (
    <>
      
    </>
  )
}

export default Pagination
{/* <PaginationContainer>
        <Box>
          <Typography
            variant="caption"
            sx={{ fontWeight: "bold", padding: "0px 5px" }}
          >
            {paginationType === "cursor"
              ? `${table.getFilteredRowModel().rows.length || ""} Total Records`
              : `Showing ${startRowNo} to ${endRowNo} of ${table.getFilteredRowModel().rows.length || ""
              }`}
          </Typography>
        </Box>
        <Box>
          <StyledPagination
            color="primary"
            shape="rounded"
            count={Math.floor(data.length / pageSize)}
            page={pageNo}
            disabled={disabled}
            onChange={(_e, pNo) => {
              table.setPageIndex(pNo - 1);
              setPage?.(pNo);
            }}
            renderItem={(item) => {
              const direction = item.type === "next" ? "forward" : "backward";
              // const paginationBtnDisabled = item.type === 'next' ? !metaData?.hasNextPage : !metaData?.hasPreviousPage

              if (item.type === "page") {
                return (
                  <StyledPaginationItem
                    {...item}
                    components={{ next: ArrowForward, previous: ArrowBack }}
                    onClick={() => {
                      if (item?.page) {
                        //manuaaly invoke react-table page start with 0 so -1 to the page
                        table.setPageIndex(item.page - 1);
                        //Manually Invoke setPage offset start with 1
                        setPage?.(item.page);
                      }
                    }}
                  />
                );
              }
              return (
                <StyledPaginationItem
                  {...item}
                  components={{ next: ArrowForward, previous: ArrowBack }}
                  {...(cursorPagination ? { disabled: false } : {})}
                  onClick={
                    cursorPagination
                      ? () => setPage?.(null, direction)
                      : item.onClick
                  }
                />
              );
            }}
          />
        </Box>
</PaginationContainer> */}