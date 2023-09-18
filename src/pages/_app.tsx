import '../styles/global.css';
import Head from 'next/head';

const App = ({Component, pageProps}) => {
  return (
    <>
        <Head>
            <title>Mayoral</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
  );
}

export default App;
