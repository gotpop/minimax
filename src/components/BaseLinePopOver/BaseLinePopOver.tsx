import h from "@utils/jsxFactory"
import { mkClass } from "@utils/mkClass"
import { useCSS } from "src/hooks/useCSS"

function BaseLinePopOver({ popovertarget = "basegrid" }) {
  const { css } = useCSS({ meta: import.meta })

  return (
    <div
      cclass={mkClass(import.meta.file)}
      id={popovertarget}
      popover
    >
      <style>{css}</style>
      <h4>Baseline</h4>
      <p>Click anywhere to dismiss</p>

      <button
        class="trigger"
        popovertarget="basegrid"
        popovertargetaction="hide"
      >
        Close
      </button>
    </div>
  )
}

export default BaseLinePopOver
