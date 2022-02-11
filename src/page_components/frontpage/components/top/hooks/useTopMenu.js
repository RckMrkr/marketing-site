import { useState, useEffect } from "react"

export default () => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)

  useEffect(() => {
    if (mobileMenuIsShown) {
      document.documentElement.classList.add("small-hidden-overflow")
    } else {
      document.documentElement.classList.remove("small-hidden-overflow")
    }
  }, [mobileMenuIsShown])
  return {
    mobileMenuIsShown,
    setMobileMenuIsShown,
  }
}
