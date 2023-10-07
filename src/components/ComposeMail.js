import React from 'react'
import { Dialog ,Box,Typography,styled, InputBase, TextField,Button} from '@mui/material'
import { Close, DeleteOutline } from '@mui/icons-material'


const dialogStyle ={
       height: '90%',
       width: '80%',
       maxHeight: '100%',
       maxWidth: '100%',
       boxShadow: 'none',
       borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500
    }
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: '14px',
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    alignItems: 'center'
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: '500',
    textTransform: 'none',
    borderRadius: '18px',
    width: '100px'
})
   

const ComposeMail = ({ openDialog,setOpenDialog }) => {
   
   const config = {
    
        Host : "smtp.elasticemail.com",
        Username : "codewithashwani@yopmail.com",
        Password : "E1D87DB354173CB42759BD7C09000634E380",
        Port: 2525,    
   }

   const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDialog(false);
   }

   const sendMail = (e) => {
    e.preventDefault();

    if (window.Email){
    window.Email.send({
        ...config,
        To : 'ashwanipatel947@gmail.com',
        From : "ashwanipatel947@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    }
    setOpenDialog(false);
   }

  return (
      <Dialog
        open={openDialog} 
        PaperProps= {{sx: dialogStyle }}
     >
        <Header>
           <Typography>New Message</Typography>
           <Close fontSize='small' onClick= { (e) => closeComposeMail(e)} />
        </Header>
        <RecipientsWrapper>
             <InputBase placeholder='Recipients'/>
             <InputBase placeholder='Subject'/>
        </RecipientsWrapper>
        <TextField
           multiline
           rows={20}
           sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}        
        />
        <Footer>
           <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
           <DeleteOutline onClick={ () =>  setOpenDialog(false)} />
        </Footer>
      </Dialog>
  )
}

export default ComposeMail