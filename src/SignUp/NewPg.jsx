import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPg, getAllPg } from "../api";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Grid, Radio } from "@mui/material";
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
// import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, blueGrey, red } from "@mui/material/colors";
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
      pgData.append("noticePriod",data.noticePriod);

      pgData.append("price",JSON.stringify(pricesFields));
      pgData.append("facilities",JSON.stringify(pricesFields));

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
      <container>
        <Grid>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="post"
              encType="multipart/form-data"
            >
              <div>
                <Typography
                  component="h1"
                  variant="h5"
                  align="center"
                  fontSize={35}
                  padding={3}
                >
                  Fill the PG Details
                </Typography>
                <TextField
                  fullWidth
                  {...register("pgName", { required: true })}
                  id="pgName"
                  label="Pg Name"
                  variant="filled"
                  color="success"
                  margin="normal"
                  helperText="Please Enter your PG Name"
                />
                {errors.pgName && <span>*required field</span>}
              </div>

              <div>
                <TextField
                  fullWidth
                  {...register("ownerName", { required: true })}
                  id="ownerName"
                  label="Owner Name"
                  variant="filled"
                  color="success"
                  margin="normal"
                  helperText="Please Enter the Owner's Name"
                />
                {errors.ownerName && <span>*required field</span>}
              </div>

              <div>
                <TextField
                  id="contactNumber"
                  fullWidth
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  {...register("contactNumber", { required: true })}
                  label="Contact Number"
                  variant="filled"
                  color="success"
                  margin="normal"
                  helperText="Please Enter your Contact Number"
                />
                {errors.contactNumber && <span>*required field</span>}
              </div>

              <div>
                {pricesFields.map((field, index) => (
                  <div key={index}>
                    <TextField
                      id="price"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      value={field}
                      onChange={(e) =>
                        handlepricesFieldChange(index, e.target.value)
                      }
                      required
                      label="Price"
                      variant="filled"
                      color="success"
                      helperText="Please Enter Price"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemovepricesField(index)}
                      hidden={index === 0 ? true : false}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddpricesField}>
                  Add Price
                </button>
              </div>

              <div>
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
                    <button
                      type="button"
                      onClick={() => handleRemovefacField(index)}
                      hidden={index === 0 ? true : false}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddfacField}>
                  Add Facility
                </button>
              </div>

              <div>
                <label htmlFor="furnishing">Furnishing</label>
                <label htmlFor="furnished">
                  <input
                    type="radio"
                    name="furnished"
                    id="furnished"
                    value="Furnished"
                    {...register("furnishing")}
                  />
                  Furnished
                </label>
                <label htmlFor="semi-furnished">
                  <input
                    type="radio"
                    name="semi-furnished"
                    id="semi-furnished"
                    value="Semi-Furnished"
                    {...register("furnishing")}
                  />
                  Semi-Furnished
                </label>
                <label htmlFor="furnishing">
                  <input
                    type="radio"
                    name="non-furnished"
                    id="non-furnished"
                    value="Not Furnished"
                    {...register("furnishing")}
                  />
                  Non-Furnished
                </label>
              </div>

              <div>
                <TextField
                  fullWidth
                  name="noticePriod"
                  id="noticePriod"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  {...register("noticePriod", { required: true })}
                  label="Notice Period"
                  variant="filled"
                  color="success"
                  helperText="Please Enter the Notice Period"
                />
                {errors.noticePeriod && <span>*required field</span>}
              </div>

              <div>
                <TextField
                  fullWidth
                  {...register("address", { required: true })}
                  id="address"
                  label="Address"
                  variant="filled"
                  color="success"
                  helperText="Please Enter your Address"
                />
                {errors.address && <span>*required field</span>}
              </div>

              <div>
                <label htmlFor="occupancyType">Occupancy Type</label>
                <label htmlFor="singleRoom">
                  <input
                    type="radio"
                    name="singleRoom"
                    id="singleRoom"
                    value="Single Room"
                    {...register("occupancyType")}
                  />
                  Single Room
                </label>
                <label htmlFor="doubleSharing">
                  <input
                    type="radio"
                    name="doubleSharing"
                    id="doubleSharing"
                    value="Double Sharing"
                    {...register("occupancyType")}
                  />
                  Double Sharing Room
                </label>
                <label htmlFor="tripleSharing">
                  <input
                    type="radio"
                    name="tripleSharing"
                    id="tripleSharing"
                    value="Triple Sharing"
                    {...register("occupancyType")}
                  />
                  Triple Sharing Room
                </label>
              </div>

              <div>
                <label htmlFor="tenantType">Tenant Type</label>
                <label htmlFor="boys">
                  <input
                    type="radio"
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
                    type="radio"
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
                    type="radio"
                    name="others"
                    id="others"
                    value="Others"
                    required
                    {...register("tenantType", { required: true })}
                  />
                  Others
                </label>
                {errors.tenantType && <span>*required field</span>}
              </div>

              <div>
                <label htmlFor="pgImages">PG Images</label>
                <input
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
                <div>
                  {pgImgPreview.map((image, index) => (
                    <img key={index} src={image} alt="Preview" />
                  ))}
                </div>
              </div>

              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </Grid>
      </container>
    </ThemeProvider>
  );
};

export default NewPg;
