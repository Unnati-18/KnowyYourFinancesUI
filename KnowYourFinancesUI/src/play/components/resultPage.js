import React from 'react';
import './resultPage.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const ResultPage = (props) => {

    const createData = (topicName, investedAmount, currentAmount, Profit) => {
        return { topicName, investedAmount, currentAmount, Profit };
    }

    var rows = [];
    var years = 0;
    var value = 0;
    var profit = 0;
    var sum = [];
    var current = [];
    var invested = [];
    var showSum = 0;
    var showCurrent = 0;
    var showInvested = 0;
    var newScore = 0;

    const calculateProfit = () => {
        // console.log("Received Data");
        var Data = localStorage.getItem('data')
        var result = JSON.parse(Data)
        // console.log(result)
        years = result['numberOfYears'];
        // console.log(years)
        Object.entries(result).map((val) => {
            profit = 0;
            value = 0;
            var type = val[0]
            var amount = val[1]
            if (type === 'mutualFunds'){
                var result1 = {};
                if(amount === ''){
                    result1 = createData('Mutual Funds', 0, 0, 0)
                }
                else {
                    value =  amount * (Math.pow(1.12, years))
                    value = Math.round(value)
                    profit = value - amount;   
                    result1= createData('Mutual Funds', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result1);

                    // console.log(rows);
            }
            else if (type === 'insurancePlans'){
                profit = 0;
                value = 0;
                var result2 = {};
                if(amount === ''){
                    result2 = createData('Insurance Plans', 0, 0, 0)
                }
                else {
                    var x = (0.02 * amount) * years
                    var y = (0.08 * amount) * years
                    value =  (amount - x) + y;
                    value = Math.round(value)
                    profit = value - amount;   
                    result2= createData('Insurance Plans', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result2);

                    // console.log(rows);
            }
            else if (type === 'equityStocks'){
                profit = 0;
                value = 0;
                var result3 = {};
                if(amount === ''){
                    result3 = createData('Equity and Stocks', 0, 0, 0)
                }
                else {
                    var a = (0.1 * amount) * years
                    value =  parseInt(amount) + a;
                    value = Math.round(value)
                    profit = value - amount;   
                    result3= createData('Equity and Stocks', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result3);

                    // console.log(rows);
            }
            else if (type === 'savingsDeposits'){
                profit = 0;
                value = 0;
                var result4 = {};
                if(amount === ''){
                    result4 = createData('Savings Deposits', 0, 0, 0)
                }
                else {
                    var b = (amount * 3.5 * (years/100))
                    value =  parseInt(amount) + b;
                    value = Math.round(value)
                    profit = value - amount;   
                    result4= createData('Savings Deposits', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result4);

                    // console.log(rows);
            }
            else if (type === 'commodities'){
                profit = 0;
                value = 0;
                var result5 = {};
                if(amount === ''){
                    result5 = createData('Commodities', 0, 0, 0)
                }
                else {
                    var c = (amount * 2 * (years/100))
                    value =  parseInt(amount) + c;
                    value = Math.round(value)
                    profit = value - amount;   
                    result5= createData('Commodities', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result5);
                
                    // console.log(rows);
            }
            else if (type === 'digitalGold'){
                profit = 0;
                value = 0;
                var result6 = {};
                if(amount === ''){
                    result6 = createData('Digital Gold', 0, 0, 0)
                }
                else {
                    var d = (amount * 4 * (years/100))
                    value =  parseInt(amount) + d;
                    value = Math.round(value)
                    profit = value - amount;   
                    result6= createData('Digital Gold', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result6);
                  
                    // console.log(rows);
            }
            else if (type === 'fixedAssets'){
                profit = 0;
                value = 0;
                var result7 = {};
                if(amount === ''){
                    result7 = createData('Fixed Assets', 0, 0, 0)
                }
                else {
                    var e = (amount * 6 * (years/100))
                    value =  parseInt(amount) + e;
                    value = Math.round(value)
                    profit = value - amount;   
                    result7= createData('Fixed Assets', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result7);
                    // console.log(rows);
            }
            else if (type === 'fixedDeposits'){
                profit = 0;
                value = 0;
                var result8 = {};
                if(amount === ''){
                    result8 = createData('Fixed Deposits', 0, 0, 0)
                }
                else {
                    var f = (amount * 8 * (years/100))
                    value =  parseInt(amount) + f;
                    value = Math.round(value)
                    profit = value - amount;   
                    result8= createData('Fixed Deposits', amount, value, profit)
                    sum.push(profit);
                    current.push(value);
                    invested.push(parseInt(amount));
                }
                    rows.push(result8);
                    // console.log(rows);
            }
    })
        // console.log(sum)
        // console.log(current)
        // console.log(invested)

        showSum = sum.reduce((a, b) => a + b, 0);
        showCurrent = current.reduce((a, b) => a + b, 0);
        showInvested = invested.reduce((a, b) => a + b, 0);
        updateScore();
      
    }

    const updateScore = async event => {
            var email = localStorage.getItem('email')
            var oldScore = localStorage.getItem('score')
            newScore = parseInt(oldScore) + showSum;
            localStorage.setItem('score', newScore)
            var token = localStorage.getItem('token')
            try {
              const response = await fetch('https://know-your-finances.onrender.com/api/users/updateUser', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token
                },
                body: JSON.stringify({
                  email: email,
                  score: newScore
                })
              });
        
              const responseData = await response.json();
              if (!response.ok) {
                throw new Error(responseData.message);
              }
            } catch (err) {
              console.log('Something went wrong, please try again.');
            }
        }
        

    return(
        <>
        {calculateProfit()}
        <div className='pageHeading'>
            <h1>Results</h1>
            <h4>Years : {years} </h4>
            <h4>New Score: {newScore}</h4>
        </div>
        <div className='box-space'>
            <Box
        sx={{
            width: 300,
            height: 170,
            backgroundColor: '#89CFEF',
            '&:hover': {
            backgroundColor: '#73C2FB',
            opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <h3 className='head'>Summary</h3>
            <p className='val'> Value Invested : {showInvested}</p>
            <p className='val'> Current Value : {showCurrent}</p>
            <p className='val'> Profit : {showSum}</p>
        </Box>
      </div>
        <div className='table-container'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                TOPIC NAME
                            </TableCell>
                            <TableCell align="right">
                                INVESTED AMOUNT
                            </TableCell>
                            <TableCell align="right">
                                CURRENT AMOUNT
                            </TableCell>
                            <TableCell align="right">
                                PROFIT
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.topicName}
                                sx={{ '&:last-child td, &:last-child th':
                                    { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.topicName}
                                </TableCell>
                                <TableCell align="right">
                                    {row.investedAmount}
                                </TableCell>
                                <TableCell align="right">
                                    {row.currentAmount}
                                </TableCell>
                                <TableCell align="right">
                                    {row.Profit}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </>
    );
 }

 export default ResultPage;