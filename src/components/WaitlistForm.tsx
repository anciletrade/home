import { Button, TextField } from "@mui/material";
import Helmet from "react-helmet";


export default function WaitlistWidget() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
            {/* <div className="launchlist-widget" data-key-id="a3DHWa" ></div> */}

            <Helmet>
                <script
                    src="https://getlaunchlist.com/js/widget.js"
                    type="text/javascript"
                    defer
                />
            </Helmet>

            <form className="launchlist-form waitlist_form" action="https://getlaunchlist.com/s/a3DHWa" method="POST" style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '1rem',
                width: '100%',
                maxWidth: '500px',
            }}>
                <TextField
                    type="email"
                    required
                    placeholder="Your email address"
                    // label="Email address"
                    name="email"
                    id="email"
                    variant="outlined"
                    hiddenLabel
                    autoComplete="off"
                    className="waitlist_form_input"
                    sx={{
                        '.css-18k2znq-MuiInputBase-root-MuiOutlinedInput-root': {
                            padding: '8px 12px',
                            borderRadius: '4px',
                        },
                        padding: '4px 0 5px',
                        ':focus-visible': {
                            outline: 'none',
                        },
                        width: '100%',
                    }}

                />
                <Button type="submit" variant="contained" style={{ whiteSpace: 'nowrap', borderRadius: '4px' }}>
                    Join Waitlist
                </Button>
            </form>

        </div>
    );
}
