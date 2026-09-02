import React from "react"
import SEO from "../components/seo"
import GuideScreenshot from "../page_components/wikings/guide-screenshot"
import * as styles from "../page_components/wikings/wikings.module.scss"

const logoUrl =
  "https://static.wixstatic.com/media/2e73f9_98e986c750b3438e818817a0a653bb9f~mv2.png/v1/fill/w_316,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wikings_logo.png"

export default () => (
  <main className={styles.page}>
    <SEO
      title="Wikings Esport | Opsætningsguide: Spiller PC"
      description="Opsætningsguide til Wikings Esport Fortnite NDI-Broadcast System."
      lang="da"
    />
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logoUrl} alt="Wikings Esport Logo" />
        </div>
        <h1>Opsætningsguide: Spiller PC</h1>
        <p className={styles.subtitle}>Fortnite NDI-Broadcast System</p>
      </header>

      <section id="installation">
        <h2>1. Installation af Software</h2>
        <p>
          Gennemfør installationerne på spiller-computerne i{" "}
          <strong>nøjagtig denne rækkefølge</strong> før konfigurationen
          startes:
        </p>

        <div className={styles.downloadGrid}>
          <div className={styles.downloadCard}>
            <h3>
              <span className={styles.stepNum}>1</span> OBS Studio (Windows
              x64)
            </h3>
            <p>Hovedprogrammet til optagelse og afvikling af videostrømmen.</p>
            <a
              href="https://cdn-fastly.obsproject.com/downloads/OBS-Studio-32.2.2-Windows-x64-Installer.exe"
              className={styles.btnDownload}
            >
              💾 Hent OBS Studio
            </a>
            <div className={styles.sourceNote}>
              ℹ️ <strong>Nyeste version:</strong> Seneste Windows-version kan
              altid hentes på{" "}
              <a href="https://obsproject.com/" target="_blank">
                obsproject.com
              </a>
              .
            </div>
          </div>

          <div className={styles.downloadCard}>
            <h3>
              <span className={styles.stepNum}>2</span> NDI Redistributable
              Runtime (v6)
            </h3>
            <p>
              Obligatorisk netværks-driver fra NDI, som gør det muligt at sende
              video over lokalt netværk.
            </p>
            <a
              href="https://ndi.link/NDIRedistV6"
              className={styles.btnDownload}
            >
              💾 Hent NDI Runtime v6
            </a>
            <div className={styles.sourceNote}>
              ℹ️ <strong>Nyeste version:</strong> Findes under "Required
              Components" i{" "}
              <a
                href="https://github.com/DistroAV/DistroAV/wiki/1.-Installation#required-components---ndi-runtime"
                target="_blank"
              >
                DistroAV Wiki
              </a>
              .
            </div>
          </div>

          <div className={styles.downloadCard}>
            <h3>
              <span className={styles.stepNum}>3</span> DistroAV (OBS NDI
              Plugin v6.2.1)
            </h3>
            <p>
              Plugin til OBS Studio der tilføjer NDI Output-funktionaliteten.
            </p>
            <a
              href="https://github.com/DistroAV/DistroAV/releases/download/6.2.1/distroav-6.2.1-windows-x64-Installer.exe"
              className={styles.btnDownload}
            >
              💾 Hent DistroAV Plugin
            </a>
            <div className={styles.sourceNote}>
              ℹ️ <strong>Nyeste version:</strong> Tjek altid efter nye
              udgivelser under{" "}
              <a
                href="https://github.com/DistroAV/DistroAV/releases/tag/6.2.1"
                target="_blank"
              >
                DistroAV Releases på GitHub
              </a>
              .
            </div>
          </div>
        </div>
      </section>

      <section id="konfiguration">
        <h2>2. Konfiguration af OBS Studio</h2>
        <p>Åbn OBS Studio på spiller-PC'en og udfør følgende indstillinger:</p>

        <ol className={styles.stepList}>
          <li>
            <strong>Video Output (Skalering til 720p @ 30 FPS):</strong>
            <br />
            Gå til <code>Fil</code> &rarr; <code>Indstillinger</code> &rarr;{" "}
            <code>Video</code> i OBS.
            <ul>
              <li>
                <strong>Base (Canvas) Resolution:</strong>{" "}
                <code>1920x1080</code>
              </li>
              <li>
                <strong>Output (Scaled) Resolution:</strong>{" "}
                <code>1280x720</code>
              </li>
              <li>
                <strong>Common FPS Values:</strong> <code>30</code>
              </li>
            </ul>

            <GuideScreenshot
              className={styles.screenshotBox}
              alt="screenshot af video indstillinger"
            />
          </li>

          <li>
            <strong>Optag Fortnite Video & Lyd (Samlet):</strong>
            <br />
            Gå til panelet <em>Kilder (Sources)</em> nederst i OBS &rarr; Klik
            på <strong>+</strong> &rarr; Vælg{" "}
            <strong>Spiloptagelse / Game Capture</strong>.
            <ul>
              <li>
                Navngiv kilden: <code>Fortnite Game</code>
              </li>
              <li>
                Sæt <strong>Tilstand (Mode):</strong>{" "}
                <code>Optag specifikt vindue (Capture specific window)</code>
              </li>
              <li>
                Sæt <strong>Vindue (Window):</strong>{" "}
                <code>[FortniteClient-Win64-Shipping.exe]: Fortnite</code>
              </li>
              <li>
                Sæt tjekmærke i{" "}
                <strong>Optag lyd (BETA) / Capture audio (BETA)</strong>
              </li>
            </ul>

            <div
              className={styles.sourceNote}
              style={{ borderLeftColor: "var(--wiking-red)" }}
            >
              💡 <strong>Vigtigt under opsætningen:</strong> Fortnite{" "}
              <u>skal køre i baggrunden</u>, mens kilden oprettes, for at OBS
              kan finde processen i listen.
            </div>

            <GuideScreenshot
              className={styles.screenshotBox}
              alt="screenshot af game capture"
            />
          </li>

          <li>
            <strong>Aktiver NDI Main Output:</strong>
            <br />
            Gå til topmenuen: <code>Værktøjer (Tools)</code> &rarr;{" "}
            <code>NDI Main Output Settings</code>.
            <ul>
              <li>
                Sæt tjekmærke i <strong>Main Output Enabled</strong>.
              </li>
              <li>
                Indtast maskinens unikke navn i navnefeltet (fx{" "}
                <code>Player 1</code> for PC-01, <code>Player 2</code> for
                PC-02 osv.).
              </li>
            </ul>

            <GuideScreenshot
              className={styles.screenshotBox}
              alt="screenshot af NDI output"
            />
          </li>
        </ol>
      </section>

      <section id="autostart">
        <h2>3. Automatisk Skjult Opstart</h2>
        <p>
          For at OBS Studio kører usynligt i baggrunden uden at optage plads på
          proceslinjen:
        </p>

        <ol className={styles.stepList}>
          <li>
            <strong>Ret OBS Studio Genvejen:</strong>
            <br />
            Højreklik på OBS Studio-genvejen på skrivebordet og vælg{" "}
            <strong>Egenskaber (Properties)</strong>.
          </li>

          <li>
            <strong>Tilføj startup-parameter:</strong>
            <br />I feltet <strong>Destination (Target)</strong> tilføjes
            koden <code>--minimize-to-tray</code> helt til sidst efter
            anførselstegnene:
            <div className={styles.codeBlock}>
              {
                '"C:\\Program Files\\obs-studio\\bin\\64bit\\obs64.exe" --minimize-to-tray'
              }
            </div>

            <GuideScreenshot
              className={styles.screenshotBox}
              alt="screenshot af egenskaber"
            />
          </li>

          <li>
            <strong>Placer i Windows Opstartsmappe:</strong>
            <br />
            Tryk på tastaturgenvejen <kbd>Win + R</kbd>, skriv{" "}
            <code>shell:startup</code> og tryk <strong>Enter</strong>.
            <br />
            Kopier derefter den tilpassede OBS-genvej ind i denne mappe.

            <GuideScreenshot
              className={styles.screenshotBox}
              alt="screenshot af startup mappe"
            />
          </li>
        </ol>

        <div className={styles.successBox}>
          ✅ <strong>Færdig!</strong> OBS Studio starter nu helt automatisk op
          i baggrunden (nede ved uret), når spiller-PC'en tændes, og udsender
          signalet fejlfrit.
        </div>
      </section>
    </div>
  </main>
)
