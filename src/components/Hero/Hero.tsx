import Brands from "@components/Brands"
import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"

type HeroProps = { title: string; text: string }

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const Hero = async ({ title, text }: HeroProps) => {
  const { css } = useCSS({ meta: import.meta })
  const brandsItem = await Brands({
    title: "Brands",
    text: "Brands",
  })

  return (
    <section class={useName}>
      <style>{css}</style>
      <div class="hero-inner">
        <div class="inner-intro">
          <h2>{title}</h2>
          <p>{text}</p>
          <a href="#liam" class="link-button">
            Learn More
          </a>
        </div>
      </div>
      {brandsItem}
    </section>
  )
}

export default Hero
