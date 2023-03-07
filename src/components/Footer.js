import React from "react";
import { Grid, Typography, Divider } from "@mui/material";

const Footer = () => (
<div style={{ maxWidth: 700, margin: "auto", textAlign: "center", "@media (max-width: 600px)": {textAlign: "left"} }}>

    <Divider sx={{ margin: "24px auto", width: 60 }} />
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align="center"
          gutterBottom
          color="textSecondary"
          sx={{ fontWeight: "bold" }}
        >
          NEED HELP?
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          +856 021 255 154
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          +856 021 253 618
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          info@facns.la
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align="center"
          gutterBottom
          color="textSecondary"
          sx={{ fontWeight: "bold" }}
        >
          COMPANY
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          FaCNS Co.,Ltd
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          FaCNS Co.,Ltd
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align="center"
          gutterBottom
          color="textSecondary"
          sx={{ fontWeight: "bold" }}
        >
          LOCATION
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          N8 Building, Khun Bu Lom Road, Ban Hatsady, Chanthabuly District,
          Vientiane Capital.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align="center"
          gutterBottom
          color="textSecondary"
          sx={{ fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <Typography align="center" gutterBottom color="textSecondary">
          CURRENCIES
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Footer;
