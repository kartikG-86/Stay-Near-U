import React, { useState, useEffect } from "react";
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import FilterData, { getFilterValues } from "./FilterData";
import { Link, useParams } from "react-router-dom";
import { CompressOutlined } from "@mui/icons-material";

const FilterBox = (prop) => {
  const [filters, setFilters] = useState(FilterData);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  const [tenateType, setTenateType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [furnishing, setFurnishing] = useState("");

  const searchProperties = (filterName, filterValue) => {
    if (filterName == "minPrice") {
      setMinPrice(filterValue.value);
    } else if (filterName == "maxPrice") {
      setMaxPrice(filterValue.value);
    } else if (filterName == "sort") {
      setSort(filterValue.value);
    } else if (filterName == "roomType") {
      setRoomType(filterValue.value);
    } else if (filterName == "tenateType") {
      setTenateType(filterValue.value);
    } else if (filterName == "furnishing") {
      setFurnishing(filterValue.value);
    }
  };

  const handleFilterProperties = () => {
    const filters = {
      minPrice,
      maxPrice,
      sort,
      tenateType,
      roomType,
      furnishing,
    };

    console.log(filters);

    let newData = prop.CardData;

    if (filters.tenateType != "") {
      newData = newData.filter((item) => {
        if (tenateType == "Boys") {
          return item.TenateType.length == 1 && item.TenateType[0] == "Boys";
        } else if (tenateType == "Girls") {
          return item.TenateType.length == 1 && item.TenateType[0] == "Girls";
        } else {
          return item.TenateType.length == 2;
        }
      });
    }

    if (filters.roomType != "") {
      newData = newData.filter((item) => {
        if (roomType == "Single Room") {
          return item.OccupancyType[0] == "Single Room";
        } else if (roomType == "Double Sharing") {
          return (
            item.OccupancyType[0] == "Double Sharing" ||
            item.OccupancyType[1] == "Double Sharing"
          );
        } else if (roomType == "Triple Sharing") {
          return (
            item.OccupancyType[0] == roomType ||
            item.OccupancyType[1] == roomType ||
            item.OccupancyType[2] == roomType
          );
        }
      });
    }

    if (filters.furnishing != "") {
      newData = newData.filter((item) => {
        return item.Furnishing == furnishing;
      });
    }

    if (minPrice != "") {
      newData = newData.filter((item) => {
        return (
          Number(item.price[item.price.length - 1].split(",").join("")) >=
          Number(minPrice.split("₹").join("").split(",").join(""))
        );
      });
    }
    if (maxPrice != "") {
      newData = newData.filter((item) => {
        return (
          Number(item.price[0].split(",").join("")) <=
          Number(maxPrice.split("₹").join("").split(",").join(""))
        );
      });
    }

    // if (sort != "") {
    //   if (sort == "Lowest Price") {
    //     newData = newData.sort(function (a, b) {
    //       console.log("Hi");
    //       if( Number(a.price[a.price.length - 1].split(",").join("")) >
    //         Number(b.price[b.price.length - 1].split(",").join("")))
    //         {}
    //       return (

    //       );
    //     });
    //   } else {
    //     newData = newData.sort(function (a, b) {
    //       return (
    //         Number(a.price[0].split(",").join("")) -
    //         Number(b.price[0].split(",").join(""))
    //       );
    //     });
    //   }
    // }

    prop.setCardData(newData);
  };

  return (
    <>
      <Grid container spacing={1} justifyContent="center">
        {filters?.map((filter) => (
          <Grid item md={2} sm={4} xs={6}>
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
                  searchProperties(filter.queryName, event.target.value);
                }}
              >
                {filter?.colName?.map((type, ind) => (
                  <MenuItem value={type}>{type.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
        <Grid item md={12} align="center" style={{ marginTop: "1rem" }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleFilterProperties}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FilterBox;
