import { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

const EscapeKeys = ["27", "Escape"]
export default () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showModal, setShowModal] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            contactScrollElementName
          }
        }
      }
    `
  )

  useEffect(() => {
    const handler = ({ key }) => {
      if (EscapeKeys.includes(String(key))) {
        setShowModal(null)
      }
    }
    window.addEventListener("keyup", handler)

    return () => {
      window.removeEventListener("keyup", handler)
    }
  }, [])

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    showModal,
    setShowModal,
    isSubmitting,
    setIsSubmitting,
    contactElementName: site.siteMetadata.contactScrollElementName,
  }
}
