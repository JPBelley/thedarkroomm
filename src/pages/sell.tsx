import * as React from "react"
import type { PageProps } from "gatsby"
import SpanText from "../utils/span-text";

import Layout from "../components/layout/layout";


// Import Swiper styles
import 'swiper/css';

const SellPage: React.FC<PageProps> = ({ data }) => {

  return (
    <>
      <Layout>
        <div className={`hero container relative flex items-center justify-center flex-col text-center`}>
          <h1 className="mt-8 mb-8">
            <SpanText
              text={'Sell with us'}
              delay={.04}
            />
          </h1>
          <p className="max-w-4xl text-center mx-auto mb-4 text-xl">You’ve been thinking about selling your presets?</p>
          <p className="max-w-4xl text-center mx-auto mb-12 text-xl">The Darkroomm is a space where you can share your work with other photographers. It’s a simple way to put your edits out there, connect with people who enjoy trying new looks, and maybe earn something extra along the way.</p>
        </div>
        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
          <h2 className="max-w-4xl text-center mx-auto mb-4">Reach out to us</h2>
          <p className="max-w-4xl text-center mx-auto mb-4 text-xl">Share your email with us, and we’ll reach out shortly to walk you through the process, answer your questions, and show you how easy it is to start selling your presets with us</p>
          <div className="text-center ml-embedded pb-12 lg:pb-32 min-h-[236px] lg:min-h-[316px]" data-form="n9OTOh"></div>
        </div>
      </Layout>
    </>
  )
}

export default SellPage

export { Head } from "../seo/head"