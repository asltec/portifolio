import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/eu.jpg"
import '../styles/components/sidebar.sass';




const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Adauto Lucas" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer/>
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
}

export default SideBar