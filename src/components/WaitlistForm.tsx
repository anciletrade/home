import Helmet from "react-helmet";


export default function WaitlistWidget() {
    return (
        <>
            <div className="launchlist-widget" data-key-id="a3DHWa" data-height="120px"></div>

            <Helmet>
                <script
                    src="https://getlaunchlist.com/js/widget.js"
                    type="text/javascript"
                    defer
                />
            </Helmet>
            
        </>
    );
}
