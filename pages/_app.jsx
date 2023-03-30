import Navbar from '@/components/Navbar'
import Sidedesc from '@/components/Sidedesc'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }} className='mainApp'>
        <div style={{ height: "100vh", width: "20vw" }} className='navbar'>
          <Navbar />
        </div>
        <div style={{ height: "100vh", width:"60vw" }} className="component">
          <Component {...pageProps} />
        </div>
        <div style={{ height: "100vh", width: "20vw" }} className="sidedesc">
          <Sidedesc />
        </div>
      </div>
    </>
  )
}
