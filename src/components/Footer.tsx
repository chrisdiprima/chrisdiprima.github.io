import React from "react";

const Footer: React.FC = () => (
	<footer className="bg-gray-200 text-center p-4 mt-8">
		&copy; {new Date().getFullYear()} [Christopher Di Prima]. All rights reserved.
	</footer>
);

export default Footer;
