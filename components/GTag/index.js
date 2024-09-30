import Script from "next/script";

function GTag() {
  return (
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DPMM9SCTZS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DPMM9SCTZS');
        `}
      </Script>
    </div>
  );
}

export default GTag;
