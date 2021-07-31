
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/logo.png'
import { Container, Grid, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';



export default function Home() {
  return (
    <div className="login">
      <Container >
        <Grid container spacing={12} justifyContent="center">
          <Grid item md={2} justifyContent="center" >
            <form>
              <div className="logo">
                <Image className="logo " width={200} height={130} justifyContent="center" src={Logo} alt="Picture of the author" />
              </div>
              <TextField id="outlined-basic" type="email" margin="normal" fullWidth label="Login" variant="outlined" />
              <TextField id="outlined-basic" type="password" margin="normal" fullWidth label="Senha" variant="outlined" />
              <Button fullWidth variant="contained" color="primary" size="large" margin="normal" endIcon={<SendIcon />}>
                Entrar
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div >
  )

}