import React from 'react';
import './learnPage.css'
import learnImage from '../../images/learnImage.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const learnPage = () => {
    return (
        <><div>
            <img className="hero-image" src={learnImage} alt="Learn"/>
        </div>
        <div className='text-section'>
            <h2>Why?</h2>
            <p className='para'>
            Financial planning is a constantly changing process. It demands constant monitoring 
            and evaluation at each stage but also gives you an advantage over the risks and woes of low money in times of need.
            Making an appropriate plan for spending and investing money necessitates careful planning. 
            It requires effective thinking, research, and budgeting, among other things.
            In India, you must be aware that financial planning is a requirement of a successful and financially secure future.
            </p>
            <p className='para'>
            It's very important to plan how you spend, invest, and use your money if you want to reach financial stability and strength.
            Well, why not? If you are under the impression that it is only for the rich and wealthy, you might be wrong.
            You do not have to be rich to draw a good financial plan. Instead, if you plan, you will probably be richer financially than you were when you began.
            So, whether you're a monthly allowance college student or an employee, a single person, or even a housekeeper with a few possessions - <strong>you need financial planning and its never too late</strong>. 
            </p>
            <h2>How to Start?</h2>
            <p>The first step in Financial Management is Planning. You should focus and prioritise a few areas under this:</p>
            <ol>
                <li>Setting your financial goals</li>
                <li>Analyzing your current financial situation</li>
                <li>Tax planning for a tax-efficient perspective </li>
                <li>Have a retirement strategy</li>
                <li>Goals for accumulating - Have a vision for savings</li>
                <li>Spend less than you make</li>
                <li>Create a budget to better track your expenditures</li>
                <li>50/30/20 Rule - 50% for daily expenses, 30% for other expenses and lifestyle maintainance and 20% for savings and emergency funds</li>
                <li>Avoid Debt</li>
            </ol>
            <h2>Ways to Do</h2>
            <div className='button-sections'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 24 }}>
                            <Grid xs={2} sm={4} md={4} className='grid-space'>
                                <Link to={'/learn/mutual-funds'} className="links">
                                    <Button variant="outlined" size="large" className='button-links'>Mutual funds</Button>
                                </Link>
                            </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/insurance-plans'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Insurance plans</Button>
                            </Link>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/equity-stocks'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Equity and Stocks</Button>
                            </Link>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/savings-deposits'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Savings Deposits</Button>
                            </Link>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/commodities'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Commodities</Button>
                            </Link>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/digital-gold'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Digital Gold</Button>
                            </Link>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/fixed-assets'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Fixed Assets</Button>
                            </Link>
                        </Grid>
                        <Grid xs={2} sm={4} md={4} className='grid-space'>
                            <Link to={'/learn/fixed-deposits-ppf'} className="links">
                                <Button variant="outlined" size="large" className='button-links'>Fixed Deposits</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
        </>
    );
  }
  
  export default learnPage;