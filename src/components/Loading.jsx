import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Loading() {
 



const {loading} = useSelector((state) => state.products)
 

  return (
    <div>
      
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}

      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
