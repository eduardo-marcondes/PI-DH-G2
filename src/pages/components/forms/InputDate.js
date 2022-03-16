import * as React from 'react';
import ptLocale from 'date-fns/locale/pt-BR/index';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';
import {useWidth} from "../../../hooks/useWidth";

export default function InputDate() {
    const [value, setValue] = React.useState([null, null]);
    const width = useWidth();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptLocale}>
            <Stack spacing={3}>
                {(width < 830) ?
                    <MobileDateRangePicker
                        startText="Retirada"
                        endText="Devolução"
                        value={value}
                        disablePast
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <>
                                <input ref={startProps.inputRef} {...startProps.inputProps} />
                                <input ref={endProps.inputRef} {...endProps.inputProps} />
                            </>
                        )}/>
                    :
                    <DesktopDateRangePicker
                        toolbarTitle="select"
                        startText="Retirada"
                        endText="Devolução"
                        value={value}
                        disablePast
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                            <>
                                <input ref={startProps.inputRef} {...startProps.inputProps} />
                                <input ref={endProps.inputRef} {...endProps.inputProps} />
                            </>
                        )}
                    />
                }
            </Stack>
        </LocalizationProvider>
    );
}
