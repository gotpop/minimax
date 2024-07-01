import BaseLinePopOver from "@components/BaseLinePopOver"
import { useCSS } from "@hooks/useCSS"
import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"

const MegaNavContent = () => {
  return (
    <div class="content">
      <ul>
        <li class="item">
          <a href="/gallery/1">Product item</a>
        </li>
        <li class="item">
          <a href="#">Product item</a>
        </li>
      </ul>
    </div>
  )
}

const MegaNavItem = ({
  position,
  children,
  textButton,
}: {
  position?: string
  children?: string
  textButton?: string
}) => {
  const trigger = () => (
    <button
      class="trigger"
      id={`menu-toggle-${position}`}
      popovertarget={`menu-items-${position}`}
    >
      {textButton}
    </button>
  )

  const menu = () => (
    <div
      class="mega"
      id={`menu-items-${position}`}
      popover="auto"
      anchor={`menu-toggle-${position}`}
    >
      {children}
    </div>
  )

  const Fragment = () =>
    [trigger, menu].map((item) => item())

  return <Fragment />
}

const MegaNav = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <nav class={mkClass(import.meta.file)}>
      <style>{css}</style>
      <MegaNavItem textButton="Products" position="1">
        <MegaNavContent />
      </MegaNavItem>
      <MegaNavItem textButton="About" position="2">
        <ul>
          <li class="item">Menu item 133</li>
          <li class="item">Menu item 233</li>
        </ul>
      </MegaNavItem>
      <a class="trigger" href="/gallery">
        Gallery
      </a>
      <button class="trigger" popovertarget="basegrid">
        Grid
      </button>
      <BaseLinePopOver />
    </nav>
  )
}

export default MegaNav
