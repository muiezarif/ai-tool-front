import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {


    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link
                        rel="shortcut icon"
                        href="favicon.ico"
                        type="image/x-icon"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
                        integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ="
                        crossOrigin="anonymous"
                    />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i" rel="stylesheet"/>
                    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
                    <link href="/vendor/aos/aos.css" rel="stylesheet"/>
                    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
                    <link href="/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                    <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
                    <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
                    <link href="/css/style.css" rel="stylesheet"/>


                    <script src="/vendor/aos/aos.js"></script>
                    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/vendor/glightbox/js/glightbox.min.js"></script>
                    <script src="/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                    <script src="/vendor/swiper/swiper-bundle.min.js"></script>
                    <script src="/vendor/php-email-form/validate.js"></script>


                    <script src="/js/main.js"></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                <div id="modal-root"></div>


                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                {/*<script type="module" src="/js/jquery-3.2.1.min.js"/>*/}
                {/*/!* eslint-disable-next-line @next/next/no-sync-scripts *!/*/}
                {/*<script type="module" src="/js/bootstrap.min.js"/>*/}
                </body>
            </Html>
        );
    }
}

export default MyDocument;

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.


    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles)],
    };
};