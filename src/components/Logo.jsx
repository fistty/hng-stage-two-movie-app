import tvLogo from "../../assets/tv-logo.svg";
import "./Logo.css";
export const Logo = () => {
	return (
		<div className="logo">
			<img className="logo" alt="Tv Logo" src={tvLogo} />
			<div className="text-wrapper">MovieBox</div>
		</div>
	);
};
