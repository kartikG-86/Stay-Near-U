import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPg, getAllPg } from "../api";
// import { Link } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { blue, blueGrey, red } from "@mui/material/colors";
// import { MuiThemeProvider } from "@material-ui/core";
// import { Margin } from "@mui/icons-material";
// import { red } from "@mui/material/colors";

const defaultTheme = createTheme();

const NewPg = () => {
  const dispatch = useDispatch();
  const { pg, isLoading, error } = useSelector((state) => state.pg);
  const [pgImgPreview, setpgImgPreview] = useState([]);
  const [images, setImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  /////////////////////////////////for facilities//////////////////////////////////////////

  const [facFields, setfacFields] = useState([""]);

  const handleAddfacField = () => {
    setfacFields([...facFields, ""]);
  };

  const handleRemovefacField = (index) => {
    const updatedFields = [...facFields];
    updatedFields.splice(index, 1);
    setfacFields(updatedFields);
  };

  const handlefacFieldChange = (index, value) => {
    const updatedFields = [...facFields];
    updatedFields[index] = value;
    setfacFields(updatedFields);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////for prices/////////////////////////////////////////////////////////////
  const [pricesFields, setpricesFields] = useState([""]);

  const handleAddpricesField = () => {
    setpricesFields([...pricesFields, ""]);
  };

  const handleRemovepricesField = (index) => {
    const updatedFields = [...pricesFields];
    updatedFields.splice(index, 1);
    setpricesFields(updatedFields);
  };

  const handlepricesFieldChange = (index, value) => {
    const updatedFields = [...pricesFields];
    updatedFields[index] = value;
    setpricesFields(updatedFields);
  };

  /////////////////////////////////////////on submit///////////////////////////////////////////////////////////////

  const onSubmit = async (data) => {
    try {
      const { pgImg, ...rest } = data;
      const pgImgFile = pgImg.length ? pgImg[0] : null;

      const pgData = new FormData();

      pgData.append("pgName",data.pgName);
      pgData.append("ownerName",data.ownerName);
      pgData.append("contactNumber",data.contactNumber);
      pgData.append("furnishing",data.furnishing);
      pgData.append("address",data.address);
      pgData.append("occupancyType",data.occupancyType);
      pgData.append("tenantType",data.tenantType);
      pgData.append("noticePeriod",data.noticePeriod);

      pgData.append("price",JSON.stringify(pricesFields));
      pgData.append("facilities",JSON.stringify(facFields));

      images.forEach((image) => {
        pgData.append("pgImg", image);
      });


    //   const pgData = {
    //     ...rest,
    //     pgImage: pgImgFile,
    //     prices: JSON.stringify(pricesFields),
    //     facility: JSON.stringify(facFields),
    //   };
      const response = await dispatch(addPg(pgData));
      console.log(pgData);
      if (response && response.payload && response.payload.success) {
          window.alert("Pg Added Successfully");
      }
      reset();
    } catch (error) {
      throw Error(error.message);
    }
  };

  useEffect(() => {
    try {
      dispatch(getAllPg());
    } catch (error) {
      throw new Error(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      window.alert(error);
    }
  }, [error]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container>
        <Grid>
          {/* <div> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="post"
            encType="multipart/form-data"
          >
            <Grid>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                fontSize={35}
                padding={3}
              >
                Fill the PG Details
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("pgName", { required: true })}
                id="pgName"
                label="Pg Name"
                required
                variant="filled"
                color="success"
                margin="normal"
                helperText="Please Enter your PG Name"
              />
              {errors.pgName && <span>*required field</span>}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("ownerName", { required: true })}
                id="ownerName"
                required
                label="Owner Name"
                variant="filled"
                color="success"
                margin="normal"
                helperText="Please Enter the Owner's Name"
              />
              {errors.ownerName && <span>*required field</span>}
            </Grid>

            <Grid item xs={12} sm={6}>
              <input type="number"
                id="contactNumber"
                {...register("contactNumber", { required: true })}
                required
              />
              {errors.contactNumber && <span>*required field</span>}
            </Grid>

            <Grid item xs={10} sm={6}>
              {pricesFields.map((field, index) => (
                <div key={index}>
                  <input type="number"
                    name = "price"
                    id="price"
                    value={field}
                    onChange={(e) =>
                      handlepricesFieldChange(index, e.target.value)
                    }
                    required
                  />
                  <Button
                    type="Button"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => handleRemovepricesField(index)}
                    hidden={index === 0 ? true : false}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="Button"
                sx={{ border: "1px solid red", my: "1em" }}
                onClick={handleAddpricesField}
              >
                Add Price
              </Button>
            </Grid>

            <Grid item xs={10} sm={6}>
              {facFields.map((field, index) => (
                <div key={index}>
                  <TextField
                    value={field}
                    onChange={(e) =>
                      handlefacFieldChange(index, e.target.value)
                    }
                    required
                    label="Facility"
                    variant="filled"
                    color="success"
                    helperText="Please Enter Facility"
                  />
                  <Button
                    type="Button"
                    onClick={() => handleRemovefacField(index)}
                    hidden={index === 0 ? true : false}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="Button"
                sx={{ border: "1px solid red", my: "1em" }}
                onClick={handleAddfacField}
              >
                Add Facility
              </Button>
            </Grid>

            <Grid item xs={10} sm={6}>
              <label htmlFor="furnishing">Furnishing</label>
              <label htmlFor="furnished">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="furnished"
                  id="furnished"
                  value="Furnished"
                  {...register("furnishing")}
                />
                Furnished
              </label>
              <label htmlFor="semi-furnished">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="semi-furnished"
                  id="semi-furnished"
                  value="Semi-Furnished"
                  {...register("furnishing")}
                />
                Semi-Furnished
              </label>
              <label htmlFor="furnishing">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="non-furnished"
                  id="non-furnished"
                  value="Not Furnished"
                  {...register("furnishing")}
                />
                Non-Furnished
              </label>
            </Grid>

            <Grid item xs={10} sm={6}>
              <input type="number"
                name="noticePeriod"
                id="noticePeriod"
                {...register("noticePeriod", { required: true })}
              />
              {errors.noticePeriod && <span>*required field</span>}
            </Grid>

            <Grid item xs={10} sm={6}>
              <TextField
                fullWidth
                {...register("address", { required: true })}
                id="address"
                label="Address"
                variant="filled"
                required
                color="success"
                helperText="Please Enter your Address"
              />
              {errors.address && <span>*required field</span>}
            </Grid>

            <Grid item xs={10} sm={8}>
              <label htmlFor="occupancyType">Occupancy Type</label>
              <label htmlFor="singleRoom">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="singleRoom"
                  id="singleRoom"
                  value="Single Room"
                  {...register("occupancyType")}
                />
                Single Room
              </label>
              <label htmlFor="doubleSharing">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="doubleSharing"
                  id="doubleSharing"
                  value="Double Sharing"
                  {...register("occupancyType")}
                />
                Double Sharing Room
              </label>
              <label htmlFor="tripleSharing">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="tripleSharing"
                  id="tripleSharing"
                  value="Triple Sharing"
                  {...register("occupancyType")}
                />
                Triple Sharing Room
              </label>
            </Grid>

            <Grid item xs={10} sm={6}>
              <label htmlFor="tenantType">Tenant Type</label>
              <label htmlFor="boys">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  margin="5rem"
                  name="Boys"
                  id="boys"
                  value="Boys"
                  required
                  {...register("tenantType", { required: true })}
                />
                Boy
              </label>
              <label htmlFor="girls">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="girls"
                  id="girls"
                  value="Girls"
                  required
                  {...register("tenantType", { required: true })}
                />
                Girl
              </label>
              <label htmlFor="others">
                <input
                  style={{ margin: "1rem" }}
                  type="Radio"
                  name="others"
                  id="others"
                  value="Others"
                  required
                  {...register("tenantType", { required: true })}
                />
                Both
              </label>
              {errors.tenantType && <span>*required field</span>}
            </Grid>

            <Grid item xs={10} sm={6}>
              <label htmlFor="pgImages">PG Images</label>
              <input
                required
                style={{ margin: "1rem" }}
                type="file"
                name="pgImg"
                id="pgImg"
                accept="image/*"
                multiple
                {...register("pgImg", { required: true })}
                onInput={(e) => {
                  const files = Array.from(e.target.files);

                  setImages([]);
                  setpgImgPreview([]);

                  files.forEach((file) => {
                    const reader = new FileReader();

                    reader.onload = () => {
                      if (reader.readyState === 2) {
                        setpgImgPreview((old) => [...old, reader.result]);
                        setImages((old) => [...old, reader.result]);
                      }
                    };

                    reader.readAsDataURL(file);
                  });
                }}
              />
              {errors.pgImg && <span>*required field</span>}
              <Grid item xs={10} sm={6}>
                {pgImgPreview.map((image, index) => (
                  <img key={index} src={image} alt="Preview" />
                ))}
              </Grid>
            </Grid>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
          {/* </div> */}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default NewPg;
