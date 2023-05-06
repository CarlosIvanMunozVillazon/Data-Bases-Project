"use client"
import Navbar from "./components/Navbar"
import { Avatar, Container, Grid, Paper } from "@mui/material"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl" //main component for designing forms
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import FormHelperText from "@mui/material/FormHelperText"
import CssBaseline from "@mui/material/CssBaseline"
import { url } from "inspector"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

// sx={{
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }}

//se pone un form control por cada input

export default function Home() {
  return (

    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />

      <Grid item

        xl={8.5}
        xs={false}
        sm={4}
        md={7}

        sx={{

          backgroundImage: `url('./public/images/plazaChe.jpeg')`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000000',
          backgroundSize: 'cover',
          backgroundPosition: 'center',


        }} />

      <Grid item xl={3.5}
        xs={12}
        sm={8}
        md={5}

        component={Paper}

        elevation={6}

        alignItems="center"
        rowSpacing={4}


      >

        <Box sx={{

          my: 8,
          mx: 4,

          display: 'flex',
          flexDirection: 'column',

          alignItems: 'center'


        }}>

          <Box component="form" sx={{ mt: 1 }} alignItems="center" display="flex" flexDirection="column">

            <Avatar sx={{ m: 5, bgcolor: 'primary' }}>
              ddd
            </Avatar>

            <Typography component="h1" variant="h6" fontFamily="fantasy" fontWeight="bold">
              Iniciar Sesion
            </Typography>

            <Box sx={{ m: 1 }}>
              <FormControl>
                <InputLabel htmlFor="email">Correo Electronico</InputLabel>
                <Input id="email" type="email" aria-describedby=""></Input>
                <FormHelperText>Correo institucional</FormHelperText>
              </FormControl>

            </Box>

            <Box sx = {{m : 1}}>
              <FormControl>
                <InputLabel htmlFor="pwd" >Contraseña</InputLabel>
                <Input id="pwd" type="password" aria-describedby=""></Input>
                <FormHelperText>Escriba su contraseña</FormHelperText>
              </FormControl>

            </Box>


            <Button variant="contained" color="primary">
              Iniciar sesion
            </Button>


          </Box>

        </Box>


      </Grid>


    </Grid>


  )
}
