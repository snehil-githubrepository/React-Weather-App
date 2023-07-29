import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { TextField, Typography, Button, Grid } from "@mui/material";
import "./main.css";

function handleButton() {}

function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e5f34dc04c2fd5ff78b8da9fbc3a9956`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      setCountry(resJson.sys);
    };
    fetchApi();
  }, [search]);

  return (
    <div
      style={{
        paddingTop: 200,
        display: "flex",
        justifyContent: "center",
      }}
      xs={10}
      md={6}
      lg={6}
      className="card-parent"
    >
      <Card
        style={{
          width: 700,
          padding: 20,
          backgroundColor: "#274689",
          boxSizing: "border-box",
          border: "2px solid white",
        }}
      >
        <Typography
          variant="h3"
          style={{
            fontWeight: "normal",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
          }}
        >
          Weather Application
        </Typography>
        <Card
          variant="primary"
          style={{
            boxSizing: "border-box",
            border: "1px solid white",
            marginBottom: 10,
          }}
        >
          <TextField
            fullWidth={true}
            placeholder="Enter-a-location"
            variant="outlined"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></TextField>
        </Card>

        {!city && !country ? (
          <Typography
            variant="h3"
            style={{
              fontFamily: "cursive",
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            No data found
          </Typography>
        ) : (
          <Grid
            container
            style={{
              marginTop: 10,
              padding: "3vw",
              backgroundColor: "rgb(135, 135, 235)",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              style={{ backgroundColor: "rgb(135, 135, 235)" }}
            >
              <Typography
                variant="h3"
                style={{
                  fontWeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  color: "#ffff",
                }}
              >
                {search}
              </Typography>
              <Typography
                variant="h3"
                style={{
                  fontWeight: "normal",
                  display: "flex",
                  justifyContent: "center",
                  color: "#ffff",
                }}
              >
                {country.country}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              style={{ backgroundColor: "rgb(135, 135, 235)" }}
            >
              <Typography
                variant="h4"
                style={{
                  fontWeight: "normal",
                  display: "flex",
                  flexWrap: "nowrap",
                  color: "#ffff",
                }}
              >
                {city.temp}° Cel
              </Typography>
              <Grid item xs={12} md={6} lg={6} className="grid-Min-Max">
                <Typography>Min | {city.temp_min}° Cel</Typography>
                <Typography> Max | {city.temp_max}° Cel</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Card>
    </div>
  );
}

export default App;
