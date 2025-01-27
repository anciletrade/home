import Helmet from "react-helmet";

// export default function WaitlistWidget() {
//     return (
//         <>
//             <div
//                 id="getWaitlistContainer"
//                 data-waitlist_id="23473"
//                  data-widget_type="WIDGET_3"
//             ></div>
//             <Helmet>
//                 <link
//                 rel="stylesheet"
//                 type="text/css"
//                 href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
//                 />
//                 <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
//             </Helmet>
//         </>
//     );
// }


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
