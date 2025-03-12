import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Button from "../design-system/button/button"
const DesignSystem: React.FC<PageProps> = () => {

  return (
    <main>
      <h1>Design system</h1>

      {/* Headings */}
      <h2>Headings</h2>

      <h1>Heanding H1</h1>
      <h2>Heanding H2</h2>
      <h3>Heanding H3</h3>
      <h4>Heanding H4</h4>
      <h5>Heanding H5</h5>
      <h6>Heanding H6</h6>

      {/* Buttons */}
      <h2>Buttons</h2>
      <Button 
        text="Get started"
      />


    </main>
  )
}

export default DesignSystem

export const Head: HeadFC = () => <title>Design system</title>
