import Logo from '../assets/logo.png'; // the double dot is to move out of the current directory which is components folder since the assets folder is also a directory inside of the src folder so as to be able to dive into the intented folder
export const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
