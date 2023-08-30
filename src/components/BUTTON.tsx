import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Margin } from '@mui/icons-material';

type def = {
    value: string,
    click:any
}
export default function BasicButtons(props: def) {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="success" size='large' MuiButton-disableElevation disableFocusRipple disableRipple Mui-focusVisible style={{ marginBottom: "10px" }} onClick={props.click}>
                {props.value} 
            </Button>
        </Stack>
    );
}