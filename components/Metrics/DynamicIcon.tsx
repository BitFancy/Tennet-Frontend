import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faPooStorm,
  faMicrochip,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faArrowTrendUp: faArrowTrendUp,
  faPooStorm: faPooStorm,
  faMicrochip: faMicrochip,
  faUserGroup: faUserGroup,
};
const DynamicIcon = ({ iconName, className }) => {
  console.log("icon name ->", iconName);
  const icon = iconMap[iconName];
  if (!icon) {
    return null;
  }
  return <FontAwesomeIcon icon={icon} className={className} />;
};

export default DynamicIcon;
