import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Main = (props) => {
  return (
    /* 페이지 SEO 작업 */
        <HelmetProvider>
            <Helmet 
                titleTemplate="%s | RunBBit's Youtube" 
                defaultTitle="RunBBit's Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
        
            <Header />
          <main id='main' role='main'>
            {props.children}
          </main>
          <Footer />
        </HelmetProvider>
  )
}

export default Main