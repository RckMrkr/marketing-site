import { useState } from 'react'

export default (defaultMenuState) => {
  const [isMenuShown, setIsMenuShown] = useState(defaultMenuState);

  const toggleIsMenuShown = () => setIsMenuShown(!isMenuShown);

  return { isMenuShown, toggleIsMenuShown}
}