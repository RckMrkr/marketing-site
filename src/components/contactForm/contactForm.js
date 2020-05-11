import React from 'react'
import classname from 'classname'
import useContactForm from './hooks'

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default ({from, isDark}) => {
  const {
    name, setName,
    email, setEmail,
    message, setMessage,
  } = useContactForm();

  const handleSubmit = async (e) => {
    alert('Yo');
    try {
      console.log(encode({ "form-name": "contact", name, email, message, sentFrom: from }))
      // await fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({ "form-name": "contact", name, email, message, sentFrom: from })
      // });
      alert('Success');
    } catch(error){
      alert(error)
    }

    e.preventDefault();
  }
  const setProperty = (event, setter) => setter(event.target.value);
  return (
    <section className={classname("section", {"is-dark": isDark})}>
      <div className="container">
        <h4 class="title has-text-centered">How may we help?</h4>
        <div className="columns is-horizontal-center">
          <div className="column is-two-thirds">
            <form onSubmit={handleSubmit}>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label" htmlFor='contactFormName'>Name</label>
                    <div className="control">
                      <input id="contactFormName" onInput={e => setProperty(e, setName)}  value={name} className="input" type="text" />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <label className="label" htmlFor='contactFormEmail'>E-mail</label>
                    <div className="control">
                      <input id="contactFormEmail" onInput={e => setProperty(e, setEmail)} value={email} className="input" type="email" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
              <div class="column">
                  <div className="field">
                    <label className="label" htmlFor='contactFormMessage'>Message</label>
                    <div className="control">
                      <textarea id="contactFormMessage" onInput={e => setProperty(e, setMessage)} className="textarea" value={message}></textarea>
                    </div>
                  </div>
              </div></div>
              <div className="columns">
                <div className="column">
                  <div className="field is-flex is-horizontal-center">
                    <p className="control">
                      <button type="submit" className="button is-success">
                        Send
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
