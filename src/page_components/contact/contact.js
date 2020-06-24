import React from "react"
import Layout from "../../components/layout"
import useContact from './hooks';

const Contact = ({ location }) => {
  const { hero } = useContact();

  return (
    <Layout location={location} hero={hero} title='Contact' subtitle='Contact us'>
      <section className="section">
        <div className="container">
        <p style={{marginBottom: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar id justo eget interdum. Donec purus tellus, ultricies a arcu nec, auctor interdum felis. Nunc ac nunc turpis. Quisque tempus metus sed euismod sollicitudin. Duis dignissim pellentesque tortor, accumsan placerat orci cursus ut. Quisque est ipsum, pellentesque ut sem sed, dictum facilisis dolor. Nulla turpis risus, commodo nec ornare non, laoreet ac justo. Vivamus eleifend elit et lectus blandit vulputate. Duis at pellentesque sem, accumsan placerat ex. Morbi vitae vestibulum velit. Suspendisse tempor ac metus non lacinia. Phasellus laoreet arcu tempor, congue sem vitae, iaculis lacus.</p>
        <p style={{marginBottom: '20px'}}>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam lacinia porttitor ante, eget blandit lorem ultrices at. Pellentesque eget ipsum id dui auctor scelerisque. Nullam iaculis malesuada ex non pharetra. Ut urna odio, fringilla a euismod nec, egestas vitae neque. Morbi feugiat libero sit amet magna porta viverra. Vestibulum turpis metus, aliquet et porta quis, varius a quam. Morbi mattis semper fermentum. Fusce porttitor varius elit ac hendrerit. Sed aliquet dolor a arcu congue congue. Aliquam sollicitudin odio quis mauris bibendum malesuada nec in quam. In volutpat venenatis risus, eu suscipit quam cursus a. Etiam pulvinar malesuada vehicula.</p>
        <p style={{marginBottom: '20px'}}>Nunc et mollis mi. Etiam semper pulvinar risus, nec mattis nibh vestibulum vel. Morbi suscipit, nibh convallis ornare finibus, ipsum ante condimentum ante, quis interdum purus lorem nec lectus. Nam nulla nisl, volutpat a maximus vel, elementum a magna. Aliquam facilisis porta elit in suscipit. In hac habitasse platea dictumst. Phasellus imperdiet ipsum quis mauris vulputate, a hendrerit diam ullamcorper. Sed sed sapien et est euismod aliquam lacinia eu mi. Etiam fringilla interdum massa malesuada vestibulum. Phasellus nunc augue, viverra id euismod sit amet, mollis vitae nunc. Aenean hendrerit faucibus aliquet. Phasellus accumsan metus massa, eget tincidunt mauris consequat eget. Pellentesque facilisis vel metus ac feugiat.</p>
        <p style={{marginBottom: '20px'}}>Integer commodo nulla sed elit sagittis vehicula. Aliquam vitae leo sodales orci dictum rutrum. Donec at ante bibendum, fringilla risus sed, iaculis eros. Nullam fringilla mi eget neque mollis pellentesque. Duis massa est, tempus quis sapien sit amet, luctus ornare eros. Donec sem justo, vehicula eget lorem accumsan, lobortis volutpat neque. Integer vel aliquet enim. Praesent tempus ultrices augue.</p>
        <p style={{marginBottom: '20px'}}>Aenean lectus diam, pretium quis tortor a, pharetra semper lectus. Nulla egestas aliquet urna, eget porta ante porta ut. Integer auctor ut velit et maximus. Donec sed augue in velit varius facilisis. Phasellus dolor nulla, volutpat vitae fringilla eu, varius nec lectus. Sed quis urna et sapien dignissim auctor. Aenean vulputate, risus ac egestas rutrum, dui diam molestie enim, nec laoreet eros augue eget metus.</p>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
