import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Exam } from '../youtubeexapl/DayOneComponent';
import { DayTwo } from '../youtubeexapl/DayTwoComponent';
import { DayThree } from '../youtubeexapl/DayThreeComponent';
import { DayFour } from '../youtubeexapl/DayFourComponent';
import { DayFive } from '../youtubeexapl/DayFiveComponent';
import AppbarComponent from '../appbar-component/AppbarComponent';






interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
       <AppbarComponent/>
      <AppBar position="static" color="default">
       
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Day One" {...a11yProps(0)} />
          <Tab label="Day Two" {...a11yProps(1)} />
          <Tab label="Day Three" {...a11yProps(2)} />
          <Tab label="Day Four" {...a11yProps(3)} />
          <Tab label="Day Five" {...a11yProps(4)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Exam />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DayTwo />

      </TabPanel>
      <TabPanel value={value} index={2}>
        <DayThree />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DayFour />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DayFive />
      </TabPanel>


    </div>
  );
}