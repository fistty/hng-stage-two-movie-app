import tvLogo from "../../assets/tv-logo.svg";

export const Logo = () => {
	return (
		<div className="logo">
			<img alt="Tv Logo" src={tvLogo} />
			<div className="text-wrapper">MovieBox</div>
		</div>
	);
};
