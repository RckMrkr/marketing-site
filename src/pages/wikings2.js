import React from "react"
import SEO from "../components/seo"
import GuideScreenshot from "../page_components/wikings/guide-screenshot"
import * as styles from "../page_components/wikings/wikings.module.scss"

const logoUrl =
  "https://static.wixstatic.com/media/2e73f9_98e986c750b3438e818817a0a653bb9f~mv2.png/v1/fill/w_316,h_316,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Wikings_logo.png"

const broadcasterEngine = `-- ===================================================================
-- AUTOMATED FORTNITE BROADCAST ENGINE (OFFICIAL OBS LUA API)
-- ===================================================================
local obs = obslua
local last_idle_switch = 0
local idle_player_index = 1
local current_phase = ""
local hero_thumb_roster = {}

function get_var(name, default_val)
    local val = obs.config_get_string(obs.obs_frontend_get_global_config(), "AdvSceneSwitcherVars", name)
    if val == nil or val == "" then return default_val end
    return val
end

function set_var(name, value)
    obs.config_set_string(obs.obs_frontend_get_global_config(), "AdvSceneSwitcherVars", name, tostring(value))
end

function set_source_visibility(scene_name, source_name, visible)
    local scene_source = obs.obs_get_source_by_name(scene_name)
    if scene_source ~= nil then
        local scene = obs.obs_scene_from_source(scene_source)
        if scene ~= nil then
            local scene_item = obs.obs_scene_find_source(scene, source_name)
            if scene_item ~= nil then
                obs.obs_sceneitem_set_visible(scene_item, visible)
            end
        end
        obs.obs_source_release(scene_source)
    end
end

function broadcaster_engine_tick()
    local auto_enabled = tonumber(get_var("Auto_Director_Enabled", "1"))
    if auto_enabled == 0 then return end

    local idle_time_setting = tonumber(get_var("Rotation_Idle_Time", "12"))
    local alive_players = {}
    local active_hero_player = 0

    -- 1. Scan NDI-signal og Lobby-status
    for i = 1, 16 do
        local source = obs.obs_get_source_by_name("Player " .. i)
        local has_video_signal = false
        if source ~= nil then
            has_video_signal = obs.obs_source_active(source)
            obs.obs_source_release(source)
        end

        local in_lobby = tonumber(get_var("Player" .. i .. "_InLobby", "0"))
        local is_in_combat = tonumber(get_var("Player" .. i .. "_InCombat", "0"))

        if has_video_signal and (in_lobby == 0) then
            set_var("Player" .. i .. "_Active", 1)
            table.insert(alive_players, i)
            if is_in_combat == 1 and active_hero_player == 0 then
                active_hero_player = i
            end
        else
            set_var("Player" .. i .. "_Active", 0)
            set_var("Player" .. i .. "_InCombat", 0)
        end
    end

    local total_alive = #alive_players
    set_var("Players_Alive", total_alive)

    -- 2. Fase-tjek
    local new_phase = ""
    if total_alive >= 13 then new_phase = "HERO_16"
    elseif total_alive >= 9 then new_phase = "HERO_12"
    elseif total_alive >= 5 then new_phase = "HERO_8"
    elseif total_alive >= 3 then new_phase = "GRID_4"
    elseif total_alive == 2 then new_phase = "DUEL"
    elseif total_alive == 1 then new_phase = "SOLO"
    end

    if total_alive == 16 and current_phase ~= "HERO_16" then
        current_phase = "HERO_16"
        hero_thumb_roster = {}
    elseif new_phase ~= current_phase then
        current_phase = new_phase
        if current_phase == "HERO_12" or current_phase == "HERO_8" then
            hero_thumb_roster = {}
            for idx, p_num in ipairs(alive_players) do
                hero_thumb_roster[idx] = p_num
            end
        end
    end

    -- 3. Idle Rotation
    if total_alive > 0 then
        if active_hero_player == 0 then
            local current_time = os.time()
            if current_time - last_idle_switch >= idle_time_setting then
                idle_player_index = idle_player_index + 1
                last_idle_switch = current_time
            end
            if idle_player_index > total_alive then idle_player_index = 1 end
            active_hero_player = alive_players[idle_player_index] or 1
        else
            last_idle_switch = os.time()
        end
    end
    set_var("Hero_Main_Player", active_hero_player)

    -- 4. Opdater Kilder
    if active_hero_player > 0 then
        for i = 1, 16 do
            local show_player = (i == active_hero_player)
            set_source_visibility("Hero_Main_Module", "Player " .. i, show_player)
        end
    end

    -- 5. Styr Rød Ramme
    if current_phase == "HERO_16" then
        for i = 1, 16 do
            local show_border = (i == active_hero_player)
            set_source_visibility("Hero_16_Players", "Border_Player_" .. i, show_border)
        end
    elseif current_phase == "HERO_12" or current_phase == "HERO_8" then
        local max_thumbs = (current_phase == "HERO_12") and 12 or 8
        for idx = 1, 12 do
            if idx <= max_thumbs then
                local p_num = hero_thumb_roster[idx] or 0
                local show_border = (p_num > 0 and p_num == active_hero_player)
                set_source_visibility("Thumb" .. idx .. "_Module", "Red_Frame", show_border)
            else
                set_source_visibility("Thumb" .. idx .. "_Module", "Red_Frame", false)
            end
        end
    end
end

function script_load(settings)
    obs.timer_add(broadcaster_engine_tick, 500)
end
function script_unload()
    obs.timer_remove(broadcaster_engine_tick)
end`

export default () => (
  <main className={styles.page}>
    <SEO
      title="Wikings Esport | Opsætningsguide: Koordinator PC"
      description="Opsætningsguide til Wikings Esport Fortnite Broadcast Master Control."
    />
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logoUrl} alt="Wikings Esport Logo" />
        </div>
        <h1>Opsætningsguide: Koordinator PC</h1>
        <p className={styles.subtitle}>Fortnite Broadcast Master Control</p>
      </header>

      <section id="installation">
        <h2>1. Installation af Software</h2>
        <p>
          Koordinator-computeren indsamler alle 16 feeds via NDI og styrer
          logikken. Følgende skal installeres (udover OBS Studio og NDI Runtime,
          som på spiller-PC&apos;erne):
        </p>

        <div className={styles.downloadGrid}>
          <div className={styles.downloadCard}>
            <h3>Advanced Scene Switcher</h3>
            <p>
              Plugin til makroer, mønstergenkendelse og lyd/motion-detektion.
            </p>
            <a
              href="https://github.com/WarmUpTill/SceneSwitcher/releases"
              target="_blank"
              className={styles.btnDownload}
            >
              💾 Hent Plugin (GitHub)
            </a>
          </div>
          <div className={styles.downloadCard}>
            <h3>DistroAV (NDI Plugin)</h3>
            <p>
              Nødvendig for at modtage &quot;Player 1-16&quot; over netværket.
            </p>
            <a
              href="https://github.com/DistroAV/DistroAV/releases/tag/6.2.1"
              target="_blank"
              className={styles.btnDownload}
            >
              💾 Hent NDI Plugin
            </a>
          </div>
        </div>
      </section>

      <section id="kilder">
        <h2>2. Grundlæggende Kilder</h2>
        <p>
          Før vi bygger scenerne, skal disse rå kilder oprettes én gang for alle
          under fanen &quot;Kilder&quot; i en tom scene.
        </p>

        <table className={styles.coordinatorTable}>
          <thead>
            <tr>
              <th>Type i OBS</th>
              <th>Navngivning</th>
              <th>Fil / Opsætning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Billede</td>
              <td>
                <code>Club_Logo</code>
              </td>
              <td>Wikings Logo (Baggrund ved eliminering/pause)</td>
            </tr>
            <tr>
              <td>Billede</td>
              <td>
                <code>Red_Frame</code>
              </td>
              <td>
                Et 16:9 PNG billede med en 6px rød yderkant og helt gennemsigtig
                midte (Overlay ramme)
              </td>
            </tr>
            <tr>
              <td>NDI Source (x16)</td>
              <td>
                <code>Player 1</code> til <code>Player 16</code>
              </td>
              <td>Forbindes til PC-01 til PC-16 via NDI drop-down</td>
            </tr>
            <tr>
              <td>Tekst (GDI+ / FreeType2)</td>
              <td>
                <code>Hero_Tag_Text</code>
              </td>
              <td>Midlertidig tekst, f.eks. &quot;PLAYER NAME&quot;</td>
            </tr>
            <tr>
              <td>Tekst (x4)</td>
              <td>
                <code>Slot1_Tag_Text</code> ... <code>Slot4_Tag_Text</code>
              </td>
              <td>Tekstkilder til finale-scenerne</td>
            </tr>
          </tbody>
        </table>

        <GuideScreenshot
          className={styles.screenshotBox}
          alt="screenshot af kilde-panelet"
        />
      </section>

      <section id="moduler">
        <h2>3. Moduler (Indlejrede Scener)</h2>
        <p>
          Opret disse scener i panelet &quot;Scener&quot;. De bruges som
          byggeklodser (nested scenes) i de egentlige hovedscener.
          Lagrækkefølgen (øverst til nederst i Kilder) er afgørende.
        </p>

        <table className={styles.coordinatorTable}>
          <thead>
            <tr>
              <th>Modul / Scene Navn</th>
              <th>Lag-struktur (Top til Bund)</th>
              <th>Formål</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Hero_Main_Module</strong>
              </td>
              <td>
                1. <code>Hero_Tag_Text</code>
                <br />
                2. <code>Player 1</code> til <code>Player 16</code>
                <br />
                3. <code>Club_Logo</code>
              </td>
              <td>Det store midterbillede i Hero-scenerne.</td>
            </tr>
            <tr>
              <td>
                <strong>Slot1_Module</strong> (til Slot4)
              </td>
              <td>
                1. <code>SlotX_Tag_Text</code>
                <br />
                2. <code>Player 1</code> til <code>Player 16</code>
                <br />
                3. <code>Club_Logo</code>
              </td>
              <td>
                Spiller-kasser til Grid_Top4, 1v1 og Solo. (Dupliker Slot 1 tre
                gange)
              </td>
            </tr>
            <tr>
              <td>
                <strong>Thumb1_Module</strong> (til Thumb12)
              </td>
              <td>
                1. <code>Red_Frame</code>
                <br />
                2. <code>Player 1</code> til <code>Player 16</code>
                <br />
                3. <code>Club_Logo</code>
              </td>
              <td>
                Dynamiske thumbnails til Hero_12 og Hero_8. (Dupliker op til 12
                gange)
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="hovedscener">
        <h2>4. Hovedscener (Broadcast Output)</h2>
        <p>
          Disse scener udgør selve udsendelsen. Opbyg dem ved at indsætte
          underscenerne via <strong>+</strong> &rarr; <strong>Scene</strong>.
        </p>

        <table className={styles.coordinatorTable}>
          <thead>
            <tr>
              <th>Scenenavn</th>
              <th>Opbygning (Størrelser sættes via Ctrl+E / Cmd+E)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>00_Lobby_Pause</strong>
              </td>
              <td>
                Indsæt <code>Club_Logo</code> i midten af en mørk baggrund.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Hero_16_Players</strong>
              </td>
              <td>
                - <code>Hero_Main_Module</code> (1408x792, X:256, Y:0)
                <br />- 16x NDI Kilderne (<code>Player 1-16</code>) placeret i
                en U-form (256x144 px).
                <br />- 16x <code>Red_Frame</code> (Omdøbt til{" "}
                <code>Border_Player_1..16</code>) lagt direkte ovenpå videoerne.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Hero_12_Players</strong>
              </td>
              <td>
                - <code>Hero_Main_Module</code> (1280x720, X:320, Y:0)
                <br />- Indsæt Scenerne <code>Thumb1_Module</code> til{" "}
                <code>Thumb12_Module</code> (320x180 px ned langs siderne).
              </td>
            </tr>
            <tr>
              <td>
                <strong>Hero_8_Players</strong>
              </td>
              <td>
                Samme som Hero_12, men kun <code>Thumb1_Module</code> til{" "}
                <code>Thumb8_Module</code>.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Grid_Top4</strong>
              </td>
              <td>
                Indsæt <code>Slot1_Module</code> til <code>Slot4_Module</code>{" "}
                (960x540 px i et 2x2 gitter).
              </td>
            </tr>
            <tr>
              <td>
                <strong>Split_1v1_Duel</strong>
              </td>
              <td>
                Indsæt <code>Slot1_Module</code> &amp; <code>Slot2_Module</code>{" "}
                (960x1080 px side-om-side).
              </td>
            </tr>
            <tr>
              <td>
                <strong>Solo_Player</strong>
              </td>
              <td>
                Indsæt <code>Slot1_Module</code> strakt til fuldskærm
                (1920x1080).
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="lua">
        <h2>5. OBS Lua Engine (Hovedhjernen)</h2>
        <p>
          Dette script håndterer al logik (NDI signal-tjek, karusel-rotation, og
          den røde ramme). Kørslen sker 2 gange i sekundet.
        </p>
        <ol className={styles.stepList}>
          <li>
            Kopier koden nedenfor og gem den i Notesblok som{" "}
            <code>broadcaster_engine.lua</code> på PC&apos;en.
          </li>
          <li>
            I OBS: Gå til <code>Værktøjer</code> &rarr; <code>Scripts</code>{" "}
            &rarr; Klik på <strong>+</strong> og vælg filen.
          </li>
        </ol>
        <pre className={styles.codeBlock}>{broadcasterEngine}</pre>
      </section>

      <section id="makroer">
        <h2>6. Advanced Scene Switcher (Makroer)</h2>
        <p>
          Åbn <code>Værktøjer</code> &rarr; <code>Advanced Scene Switcher</code>{" "}
          &rarr; <code>Macro</code>. Her oprettes de regler, som kigger på
          spillet. For Player-makroerne laves Player 1, hvorefter de kopieres og
          rettes til Player 2-16.
        </p>

        <h3 className={styles.coordinatorHeading}>
          Lobby Check (Opret for Player 1..16)
        </h3>
        <p>
          Opdager om spilleren er i Hovedmenuen via billedgenkendelse på
          `Lobby_TopBar_Crop.png`.
        </p>
        <div className={styles.macroBlock}>
          <strong>IF</strong> Video &gt; Pattern Matching (Player 1) matches
          &quot;Lobby_TopBar_Crop.png&quot; (&gt; 80%){"\n"}
          <strong>THEN</strong> Set Variable &quot;Player1_InLobby&quot; = 1
          {"\n"}
          <strong>ELSE</strong> Set Variable &quot;Player1_InLobby&quot; = 0
        </div>

        <h3 className={styles.coordinatorHeading}>
          Kamp Detektion (Opret for Player 1..16)
        </h3>
        <p>Opdager action baseret på pludselig larm og kamerabevægelse.</p>
        <div className={styles.macroBlock}>
          <strong>IF</strong> Variable &quot;Player1_InLobby&quot; == 0{"\n"}
          <strong>AND</strong> Video &gt; Motion Detection (Player 1) &gt; 25%
          (Area: Midterste 30%){"\n"}
          <strong>AND</strong> Audio &gt; Volume (Player 1) &gt; -10 dB{"\n"}
          <strong>THEN</strong>
          {"\n"} Set Variable &quot;Player1_InCombat&quot; = 1{"\n"} Wait 15
          seconds{"\n"} Set Variable &quot;Player1_InCombat&quot; = 0
        </div>

        <h3 className={styles.coordinatorHeading}>
          Layout Switcher (Opret én gang)
        </h3>
        <p>Skifter OBS scener ud fra det samlede antal levende spillere.</p>
        <div className={styles.macroBlock}>
          <strong>IF</strong> Variable &quot;Auto_Director_Enabled&quot; == 1
          {"\n"}
          <strong>THEN</strong>
          {"\n"} <strong>IF</strong> Variable &quot;Players_Alive&quot; == 0{" "}
          <strong>THEN</strong> Switch Scene to &quot;00_Lobby_Pause&quot;{"\n"}{" "}
          <strong>IF</strong> Variable &quot;Players_Alive&quot; BETWEEN 13 AND
          16 <strong>THEN</strong> Switch Scene to &quot;Hero_16_Players&quot;
          {"\n"} <strong>IF</strong> Variable &quot;Players_Alive&quot; BETWEEN
          9 AND 12 <strong>THEN</strong> Switch Scene to
          &quot;Hero_12_Players&quot;
          {"\n"} <strong>IF</strong> Variable &quot;Players_Alive&quot; BETWEEN
          5 AND 8 <strong>THEN</strong> Switch Scene to
          &quot;Hero_8_Players&quot;{"\n"} <strong>IF</strong> Variable
          &quot;Players_Alive&quot; BETWEEN 3 AND 4 <strong>THEN</strong> Switch
          Scene to &quot;Grid_Top4&quot;{"\n"} <strong>IF</strong> Variable
          &quot;Players_Alive&quot; == 2 <strong>THEN</strong> Switch Scene to
          &quot;Split_1v1_Duel&quot;{"\n"} <strong>IF</strong> Variable
          &quot;Players_Alive&quot; == 1 <strong>THEN</strong> Switch Scene to
          &quot;Solo_Player&quot;
        </div>

        <h3 className={styles.coordinatorHeading}>Nødnulstilling (F12)</h3>
        <p>
          Tillader manuel nulstilling (bruges oftest ved liga-kampe hvor alle
          starter samtidig).
        </p>
        <div className={styles.macroBlock}>
          <strong>IF</strong> Hotkey &quot;F12&quot; pressed{"\n"}
          <strong>THEN</strong>
          {"\n"} Set Variable &quot;Player1_InLobby&quot; = 0 (Op til
          Player16_InLobby = 0){"\n"} Set Variable &quot;Player1_InCombat&quot;
          = 0 (Op til Player16_InCombat = 0)
          {"\n"} Set Variable &quot;Players_Alive&quot; = 16{"\n"} Switch Scene
          to &quot;Hero_16_Players&quot;
        </div>

        <GuideScreenshot
          className={styles.screenshotBox}
          alt="screenshot af Macro-fanen i Advanced Scene Switcher"
        />
      </section>
    </div>
  </main>
)
