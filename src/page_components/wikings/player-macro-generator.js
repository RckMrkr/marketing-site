import React, { useState } from "react"
import * as styles from "./wikings.module.scss"

const playerNumbers = Array.from({ length: 16 }, (_, index) => index + 1)

export default function PlayerMacroGenerator({ template, label }) {
  const [macroTemplate, setMacroTemplate] = useState(template)
  const [status, setStatus] = useState("")

  async function copyMacro(playerNumber) {
    const macro = macroTemplate.replace(/X/g, playerNumber)

    try {
      await navigator.clipboard.writeText(macro)
      setStatus(`Kopieret for Player ${playerNumber}`)
    } catch {
      setStatus("Kunne ikke kopiere. Kopier teksten manuelt.")
    }
  }

  return (
    <div className={styles.macroGenerator}>
      <label>
        {label}
        <textarea
          value={macroTemplate}
          onChange={event => setMacroTemplate(event.target.value)}
          spellCheck="false"
        />
      </label>
      <p className={styles.macroGeneratorHint}>
        Brug <code>X</code> som pladsmarkør, f.eks. <code>PlayerX</code> eller{" "}
        <code>PC-X</code>.
      </p>
      <div className={styles.playerButtons}>
        {playerNumbers.map(playerNumber => (
          <button
            key={playerNumber}
            type="button"
            onClick={() => copyMacro(playerNumber)}
          >
            Player {playerNumber}
          </button>
        ))}
      </div>
      <p className={styles.macroCopyStatus} aria-live="polite">
        {status}
      </p>
    </div>
  )
}
