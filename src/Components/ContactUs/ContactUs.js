import { Box } from '@material-ui/core'
import React from 'react'

export default function ContactUs() {
    return (
        <Box bgcolor='#000' color='#fff' display='flex' justifyContent='space-around' py={2}>
            <Box width= '50%'>
                <h2 >Head Office</h2>
                <p>New patliputra colony, near madir masjid road, patna-800061</p>
            </Box>
            <Box width= '50%'>
                <h2>Contact</h2>
             
                <p>Phone no: 7979738728</p>
                <p>Telephone: 66779736</p>
                <p>Email: tameerconst@gmail.com</p>
            </Box>
            
        </Box>
    )
}
