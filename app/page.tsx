"use client"
import Navbar from "./components/Navbar"
import { Container, Grid } from "@mui/material"
import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl" //main component for designing forms
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import FormHelperText from "@mui/material/FormHelperText"
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
    <Container component="main" maxWidth="xl" sx={{
      height: '50vh'
      , backgroundImage: '/public/images/FacultadDeEnfermeria.jpg',
      bgColor: "black"
    }}>

      <Grid container alignItems="center" columnSpacing={9}>
        <Grid item xl={9} style={{background:'#f2f6fc', backgroundImage: './public/images/FacultadDeEnfermeria.jpg'}}>
        </Grid>

        <Grid container xl={3} alignItems="center" rowSpacing={4}>

          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}></Grid>
          <Grid item xl={12}>
            <FormControl>
              <InputLabel htmlFor="email">Correo Electronico</InputLabel>
              <Input id="email" type="email" aria-describedby=""></Input>
              <FormHelperText>Correo institucional</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xl={12}>
            <FormControl>
              <InputLabel htmlFor="pwd" >Contraseña</InputLabel>
              <Input id="pwd" type="password" aria-describedby=""></Input>
              <FormHelperText>Escriba su contraseña</FormHelperText>
            </FormControl>

          </Grid>

          <Grid item xl={12}>
            <Button variant="contained" color="primary">
              Iniciar sesion
            </Button>
          </Grid>

        </Grid>

      </Grid>
    </Container>
  )
}
