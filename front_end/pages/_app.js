import 'tailwindcss/tailwind.css'
import {BrowserRouter as Router ,  Route} from 'react-router-dom'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  
}

// export default MyApp
