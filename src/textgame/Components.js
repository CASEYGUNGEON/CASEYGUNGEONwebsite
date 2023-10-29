import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export function ButtonGridTest(props) {
    return (
        <ButtonGrid width='40%' height='25%' statearr={props.statearr} rows={3} options={[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} />
    );
}

export function ButtonGrid(props) {
    const selection = props.statearr[0];
    const setSelection = props.statearr[1];
    const selectionType = props.statearr[2];
    const setSelectionType = props.statearr[3];
    const type = props.type;

    const options = props.options;
    const optionKeys = Object.keys(options);

    const rows = props.rows;
    const perRow = Math.ceil(optionKeys.length / rows);

    const buttonWidth = props.buttonWidth;
    const buttonHeight = props.buttonHeight;
    const buttonStyle = {
        height: buttonHeight,
        width: buttonWidth
    }

    return (
        <Grid width={props.width} height={props.height} container rowSpacing={2} columnSpacing={2} columns={perRow}>
            {optionKeys.map((key, index) =>
                <Grid item style={buttonStyle} xs={1}>
                    <Button style={buttonStyle} variant='contained' onClick={() => { setSelection(options[key]); setSelectionType(type) }}>{key}</Button>
                </Grid>)
            }
        </Grid>
    );
}