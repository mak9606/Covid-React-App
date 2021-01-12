import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



 const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
     if(!confirmed){
         return "loading..";
     }

    return (
        <div className={Styles.container}>
            <Grid container spacing="3" justify="center">

                <Grid item component={Card} xs={12} md={3}
                className={cx(Styles.Cards,Styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value}
                            separator="," duration={2.5} />
                        </Typography>       
                        <Typography color="textSecondary">
                              {new Date(lastUpdate).toDateString()  }   
                         </Typography>
                         <Typography variant="body1">
                             Active cases of Covid-19
                         </Typography>

                    </CardContent>
                </Grid>
               
                <Grid item component={Card} xs={12} md={3}
                className={cx(Styles.cards,Styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={recovered.value}
                            separator="," duration={2.5} />
                        </Typography>       
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()  }     
                         </Typography>
                         <Typography variant="body1">
                             Recovered from Covid-19
                         </Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}
                className={cx(Styles.Cards,Styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <CountUp start={0} end={deaths.value}
                            separator="," duration={2.5} />
                        </Typography>       
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()  }
                         </Typography>
                         <Typography variant="body1">
                             Number of deaths caused by Covid-19
                         </Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;