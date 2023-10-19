import Lcd from './Lcd';

const Header = () => {
  return <header className="flex items-center pb-12">
    <h1 className="text-3xl flex-1 uppercase font-light">UI</h1>
    <Lcd/>
  </header>
}

export default Header;
