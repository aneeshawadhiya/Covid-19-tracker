import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames';

const Cards = ({data : {confirmed,recovered,deaths,lastUpdate}}) => {
  if(!confirmed){
    return 'Loading....';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={4} justify-content="space-around">
        <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.infected,styles.hvr_sweep_to_top)} >
          <CardContent className={styles.cardContent}>
            <Typography  color="textSecondary" variant="h5" gutterBottom style={{fontFamily:"archia",fontWeight:"bold"}}>
              INFECTED
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              <div>
                {new Date(lastUpdate).toDateString()}
              </div>
              </Typography>
           
            <Typography variant="h4" style={{marginTop:"30px",fontFamily:"archia",fontWeight:"bold"}}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="h6" style={{marginTop:"30px",fontFamily:"archia",fontWeight:"bold"}}>
              CONFIRMED
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.recovered,styles.hvr_card2)}>
          <CardContent>
          <Typography  color="textSecondary" variant="h5" gutterBottom style={{fontFamily:"archia",fontWeight:"bold"}}>
              RECOVERED
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              <div>
                {new Date(lastUpdate).toDateString()}
              </div>
              </Typography>
           
            <Typography variant="h4" style={{marginTop:"30px",fontFamily:"archia",fontWeight:"bold"}}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="h6" style={{marginTop:"30px",fontFamily:"archia",fontWeight:"bold"}}>
              RECOVERED
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={10} md={3} className={cx(styles.card,styles.deaths,styles.hvr_card3)}>
          <CardContent>
          <Typography  color="textSecondary" variant="h5" gutterBottom style={{fontFamily:"archia",fontWeight:"bold"}}>
              DEATHS
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              <div>
                {new Date(lastUpdate).toDateString()}
              </div>
              </Typography>
           
            <Typography variant="h4" style={{marginTop:"30px",fontFamily:"archia",fontWeight:"bold"}}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography variant="h6" style={{marginTop:"30px",fontFamily:"archia",fontWeight:"bold"}}>
              DECEASED
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
