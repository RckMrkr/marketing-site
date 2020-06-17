import useTopMenu from './useTopMenu'
import useTopImages from './useTopImages'

export default () => {
  const { mobileMenuIsShown, setMobileMenuIsShown} = useTopMenu();
  const { hero } = useTopImages();
  
  return {
    mobileMenuIsShown,
    setMobileMenuIsShown,
    hero,
  }
}