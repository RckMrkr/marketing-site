import { useState } from "react"

export default () => {
  const [isHovered, setIsHovered] = useState(false);

  return {
    isHovered, setIsHovered,
  }
}