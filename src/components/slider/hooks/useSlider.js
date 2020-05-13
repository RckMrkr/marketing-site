import { useEffect, useRef, useState, Children } from "react"

export default () => {
  const ref = useRef();
  const [elementWidth, setElementWidth] = useState(-1);
  useEffect(() => {
    const handler = () => {
      ref.current && setElementWidth(ref.current.offsetWidth);
    }

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  useEffect(() => {
    const heights = Array.from(ref.current.querySelectorAll('.slide')).map(node => node.offsetHeight);
    const maxHeight = Math.max(...heights);
    ref.current.querySelectorAll('.track')[0].style.height = maxHeight + 'px';
  }, [elementWidth])


  return { ref };
}