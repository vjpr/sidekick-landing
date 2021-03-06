import Head from 'next/head'
import fileSaver from 'file-saver'

const saveFile = url => {
  fileSaver.saveAs(url)
}

const desktopFile =
  //'https://sidekick-assets.s3.eu-central-1.amazonaws.com/sidekick-desktop-macos-silicon.zip'
  'https://sidekick-assets.s3.eu-central-1.amazonaws.com/ElectronReact-4.5.0-mac.zip'
const extensionFile =
  //'https://sidekick-assets.s3.eu-central-1.amazonaws.com/sidekick-chrome-extension.crx.zip'
  'https://sidekick-assets.s3.eu-central-1.amazonaws.com/prod.zip'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sidekick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Sidekick</h1>

        <p className="description">Vertical tabs for Chrome</p>

        <div className="grid">
          <a className="card">
            <h3 onClick={() => saveFile(extensionFile)}>
              Download Chrome Extension &rarr;
            </h3>
            <div>
              <p style={{fontSize: '13px'}}>
                To install, in Chrome, go to, Menu > More tools > Extensions >
                Developer mode
              </p>
              <br />
              <p style={{fontSize: '13px'}}>
                Click "Load unpacked" > Select folder you downloaded
              </p>
            </div>
          </a>

          <a href="" target="_blank" className="card">
            <h3 onClick={() => saveFile(desktopFile)}>
              Download Desktop App &rarr;
            </h3>
            <p>MacOS Apple Silicon Only</p>
            <p style={{fontSize: '13px'}}>
              You may need to right-click the app in finder and click open.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
