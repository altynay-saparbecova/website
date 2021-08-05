import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function Postt({ el }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} className="post">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="photo wasnt loaded"
          image={
            el.img
              ? el.img
              : "https://t4.ftcdn.net/jpg/00/89/55/15/360_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {el.date}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {el.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            {el.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
