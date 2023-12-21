import React from 'react'
import { Box, InputBase, FormControl, Select, MenuItem, Pagination, Stack } from "@mui/material";


const PaginationComponent = ({ tabled }) => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'lightblue',
      }}>
        show per page
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
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'lightgreen',
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
    </>
  )
}

export default PaginationComponent

//   < Box sx = {{
//   fontSize: '15px',
//     marginRight: "10px"
// }}>
//   show per page
//         </ >
//         <Box>
//           <FormControl fullWidth sx={{
//           }} size="small"
//           >
//             <Select
//               sx={{
//                 height: "35px",
//                 width: '65px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <MenuItem value={10}>10</MenuItem>
//               <MenuItem value={20}>15</MenuItem>
//               <MenuItem value={30}>20</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <Box sx={{
//           display: 'flex',
//           alignItems: 'center',
//         }}>
//           <Box sx={{
//             fontSize: '15px'
//           }}>
//             Showing {tabled.getState().pagination.pageIndex + 1} -
//             {tabled.getState().pagination.pageSize} of
//             {tabled.getCanNextPage()} entries
//           </Box>
//           <Box>
//             <Stack spacing={1}>
//               <Pagination
//                 count={tabled.getPageCount()}
//                 color="primary"
//                 shape="rounded"
//                 onClick={() => tabled.nextPage()}
//               />
//             </Stack>
//           </Box>
//         </Box>