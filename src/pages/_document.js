import { Html } from "next/document";
import { Head } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;800&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
    </Html>
  );
}
