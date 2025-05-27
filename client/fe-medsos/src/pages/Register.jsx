import {
    Alert,
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Link } from "react-router-dom"
import { CardRegister, SignInContainer } from "../utils/style"
import { useForm } from "react-hook-form"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMajor } from '../redux/action/majorAction'
import { authRegister } from '../redux/action/authAction'


const Register = () => {
    const {register, handleSubmit} = useForm()
    const { auth } = useSelector(root => root?.auth)
    const major = useSelector(root => root?.major)
    const dispatch = useDispatch()
    
    useEffect(() => dispatch(fetchMajor()), [])

    const onSubmit = (value) => dispatch(authRegister(value))
    
    return (<>
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
            <CardRegister variant="outlined">
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Sign Up
                </Typography>
                {
                    auth?.message !== "" && <Alert severity="success">
                        {auth?.message}
                    </Alert>
                }
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <FormLabel htmlFor="username">Username</FormLabel>
                                <TextField
                                    // error={emailError}
                                    // helperText={emailErrorMessage}
                                    id="username"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    autoComplete="username"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                // color={emailError ? 'error' : 'primary'}
                                    {...register('username')}
                                />
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField
                                    // error={passwordError}
                                    // helperText={passwordErrorMessage}
                                    name="password"
                                    placeholder="••••••"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    {...register('password')}
                                // color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <TextField
                                    // error={emailError}
                                    // helperText={emailErrorMessage}
                                    id="emil"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    {...register('email')}
                                // color={emailError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <FormLabel htmlFor="firstName">First Name</FormLabel>
                                <TextField
                                    // error={emailError}
                                    // helperText={emailErrorMessage}
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    autoComplete="firstName"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                // color={emailError ? 'error' : 'primary'}
                                {...register('firstName')}
                                />
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth>
                                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                <TextField
                                    // error={emailError}
                                    // helperText={emailErrorMessage}
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    autoComplete="lastName"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    {...register('lastName')}
                                // color={emailError ? 'error' : 'primary'}
                                />
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth style={{ marginTop: 23 }}>
                                <InputLabel id="demo-simple-select-label">Classes</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-major"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Classes"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"X"}>X</MenuItem>
                                    <MenuItem value={"XI"}>XI</MenuItem>
                                    <MenuItem value={"XII"}>XII</MenuItem>
                                    <MenuItem value={"XIII"}>XIII</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth style={{ marginTop: 23 }}>
                                <InputLabel id="demo-simple-select-label-major">Majors</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-major"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Major"

                                    {
                                        ...major?.data?.map((m, i) => <MenuItem
                                            key={i}
                                            value={"PPLG"}>{m?.name}
                                        </MenuItem>)
                                    }
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"PPLG"}>PPLG</MenuItem>
                                    <MenuItem value={"TM"}>TM</MenuItem>
                                    <MenuItem value={"MPLB"}>MPLB</MenuItem>
                                    <MenuItem value={"TJKT"}>TJKT</MenuItem>
                                    <MenuItem value={"TSM"}>TSM</MenuItem>
                                    <MenuItem value={"TKR"}>TKR</MenuItem>
                                    <MenuItem value={"HR"}>HR</MenuItem>
                                    <MenuItem value={"DKV"}>DKV</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={6}>
                            <FormControl fullWidth style={{ marginTop: 23 }}>
                                <InputLabel id="demo-simple-select-label-gender">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label-gender"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Gender"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"M"}>Male</MenuItem>
                                    <MenuItem value={"F"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                    //   onClick={validateInputs}
                    >
                        Sign Up
                    </Button>
                    <center>
                        <Link to={"/login"}>
                            Have account?
                        </Link>
                    </center>
                    {
                    !!auth?.err &&
                    !!auth?.err.errors &&
                    !!auth?.err.errors?.map((e, i) => (
                        <Typography
                        key={i}
                        variant="body2"
                        color="error"
                        sx={{textAlign: 'center'}}
                        >
                            {e?.path} {e?.msg}
                        </Typography>
                    ))
                    }
                </Box>
            </CardRegister>
        </SignInContainer>
    </>)
}

export default Register