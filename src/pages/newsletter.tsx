import * as React from "react"
import type { PageProps } from "gatsby"

import Layout from "../components/layout/layout";
import Hero from "../components/hero-product/hero";
import Button from "../design-system/button/button";
import Newsletter from "../components/newsletter/Newsletter";


const NewsletterPage: React.FC<PageProps> = ({ data }) => {

  return (
    <>
      <Layout>
        <Hero
          title='Get your free Lightroom presets'
          description="Transform your shots in one click with these 6 free Lightroom presets. These presets will help you edit faster, create a consistent style, and give every photo a professional."
        />


        <div className="container-white px-5 pt-12 lg:pt-24 rounded-2xl">
          <Newsletter />
        </div>

        <div className="container px-5 pt-12 lg:pt-24 rounded-2xl">

          {/* Products */}
          <h2 className="text-center mb-4">Keep exploring</h2>
          <p className="max-w-4xl text-center mx-auto mb-12 text-xl">Discover our curated collection of Lightroom presets designed for photographers who love moody streets, glowing city lights, and bold, atmospheric edits. Whether you’re shooting urban landscapes, portraits, or night scenes, our presets make it easy to achieve a consistent, professional look in every photo.</p>
          <div className="text-center">
            <Button
              text="Browse Presets"
              color="dark"
              link="/"
              onClick={() => sa_event("home")}
            />
          </div>
        </div>
        
      </Layout>
    </>
  )
}

export default NewsletterPage

export { Head } from "../seo/head"