import { Box, styled, Pagination, PaginationItem } from "@mui/material";
export const PaginationContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 12px 10px 12px",
}));

export const StyledPagination = styled(Pagination)(() => ({
  padding: "4px 8px",
}));

export const StyledPaginationItem = styled(PaginationItem)(
  ({ theme: { palette, shape } }) => ({
    height: 26,
    minWidth: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: parseInt(`${shape.borderRadius}`) / 2,
    border: `solid 1px ${palette.grey[200]}`,
  })
);
