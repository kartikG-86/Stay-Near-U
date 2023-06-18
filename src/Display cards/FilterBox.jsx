import React, { useState } from "react";
import { Grid, InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import FilterData from "./FilterData";

const FilterBox = () => {
  const [filters] = useState(FilterData);

  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {filters?.map((filter) => (
          <Grid item md={3} sm={4} xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">
                {filter.FilterHeading}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={name}
                label={filter.FilterHeading}
                onChange={(event) => {
                  console.log(event.target);
                }}
              >
                {filter?.colName?.map((type, ind) => (
                  <MenuItem value={type}>{type.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FilterBox;
