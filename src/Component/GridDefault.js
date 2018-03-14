import React from "react";
import Paper from "material-ui/Paper";
import {
  SelectionState,
  SortingState,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  VirtualTable
} from "@devexpress/dx-react-grid-material-ui";

const GridDefault = (props) => {
  const {
    rows,
    columns,
    changeSelection
  } = props;

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <Table />
        <SelectionState
          onSelectionChange={changeSelection}
        />
        <SortingState />
        <VirtualTable />
        <TableHeaderRow showSortingControls />
        <TableSelection />
      </Grid>
    </Paper>
  );
}

export default GridDefault;
