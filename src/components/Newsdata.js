import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import 'bootstrap/dist/css/bootstrap.min.css';

import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import Button from '@material-ui/core/Button';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1rem 1rem',
    };
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: '1.3rem',
    color: "#0a0a0a",
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Nunito',
    color: '#0a0a0a',
    opacity: 0.9,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: '1.05rem',
  },
}));

const CustomCard = ({ classes, image, title, subtitle, url }) => {
  const mediaStyles = useFourThreeCardMediaStyles();

  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h3'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
        <CardActions className="learn-more">

          <Button size="small" color="primary">

            <a href={url} target="blank" rel="noopener"> Learn More </a>
          </Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
};

export default function Newsdata(props) {
  const articles = props.data;
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#eaf0fd' });

  return (


    <Grid classes={gridStyles} container spacing={4} className="row">
      {articles.map((item, index) => {
        return (
          <Grid item className="col-md-4 col-sm-6">
            <CustomCard
              classes={styles}
              title={item.title}
              subtitle={item.description}
              url={item.url}
              image={item.urlToImage}
            />
          </Grid>
        )
      })}
    </Grid>


  );
};

