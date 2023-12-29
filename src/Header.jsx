import Lcd from './Lcd';

const Header = ({ timeMode, toggle }) => {
  return <header className="flex items-center pb-12">
    <h1 className="text-3xl flex-1 font-light">
      UI
      <span className="text-sm">/ playground</span>
    </h1>
    <Lcd
      timeMode={timeMode}
      toggle={toggle}
    />
  </header>
}

export default Header;
