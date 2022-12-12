import React from 'react';
import './playPage.css'
import playImage from '../../images/playImage.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { useHistory  } from "react-router-dom";

const PlayPage = (props) => {
    const history = useHistory();
  
    const { handleSubmit, control, reset } = useForm();
    const onSubmit = data => {
    // console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
    history.push("/play/result");
    };

    // const [showResults, setShowResults] = React.useState(false)
    // const onClick = () => setShowResults(true)

    return (
        <><div>
            <img className="hero-image" src={playImage} alt="Play"/>
        </div>
        <div className='top-text'>
            <h2>Calculate!</h2>
        </div>
        <div className='text-area'> 
            <h5>What your finances would be in...</h5>
        </div> 
            <form onSubmit={handleSubmit(onSubmit)}>
            <span className="ques">
                <Controller
                    name="numberOfYears"
                    control={control}
                    defaultValue="1"
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        inputProps={{
                            pattern: "[0-9]*",
                        }}
                        type = "number"
                        label="Number of Years"
                        variant="filled"
                        value={value}
                        onChange={onChange}
                        error={!!error || value < 1}
                        helperText={error ? error.message : null}
                    />
                    )}
                    rules={{ required: 'Number of Years Required in Digits' }}
                />
                </span>
                <div className='play-area'>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Mutual Funds</h4>
                            <Controller
                                name="mutualFunds"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Insurance Plans</h4>
                            <Controller
                                name="insurancePlans"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Equity and Stocks</h4>
                            <Controller
                                name="equityStocks"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Savings Deposits</h4>
                            <Controller
                                name="savingsDeposits"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Commodities</h4>
                            <Controller
                                name="commodities"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Digital Gold</h4>
                            <Controller
                                name="digitalGold"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Fixed Assets</h4>
                            <Controller
                                name="fixedAssets"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box className='boxes'  sx={{
                                width: 300,
                                height: 300}}>
                        <Card>
                        <CardContent>  
                        <Stack
                            component="form"
                            sx={{
                                width: '25ch',
                            }}
                            spacing={2}
                            noValidate
                            autoComplete="off"
                            > 
                            <h4>Fixed Deposits</h4>
                            <Controller
                                name="fixedDeposits"
                                control={control}
                                defaultValue=""
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <TextField
                                    inputProps={{
                                        pattern: "[0-9]*",
                                    }}
                                    type = "number"
                                    label="Enter Amount"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={value < 0}
                                    helperText="In Digits"
                                />
                                )}
                            />
                            </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <div className='buttons-section'> 
                            <Button type="submit" variant="contained" color="primary" >
                                Calculate
                            </Button>
                        <Button onClick={()=>reset()}>
                            Reset
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
  }
  
export default PlayPage;