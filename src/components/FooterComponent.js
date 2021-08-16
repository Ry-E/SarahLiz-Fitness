import React from 'react';
import beach from '../assets/images/beach_flex.jpeg';
import '../styles/footer.css';

function Footer() {
	return (
		<div className="footer">
			<div className="links_container">
				<h2 className="links_header">My Links</h2>
				<a href="https://gmail.us20.list-manage.com/subscribe?u=38345a5e43f450dd2589b003d&id=f28cff3b0c">
					<div className="link">
						FREE EBOOK! MACRO CHEAT SHEET & NUTRIENT TIMING GUIDE!
					</div>
				</a>
				<a href="https://www.eatlegendary.com/?aff=479">
					<div className="link">
						LEGENDARY FOODS DISCOUNT CODE: SARAHLIZ
					</div>
				</a>
			</div>
			<img className="footer_img" src={beach} alt="" />
			<hr />
			<div className="main_footer">
				<div className="social">
					<h2>Social</h2>
					<a href="">facebook</a>
					<a href="">instagram</a>
				</div>
				<div className="contact">
					<h2>Contact</h2>
					<p>sarahlizfitness@gmail.com</p>
				</div>
			</div>
			<a href="https://pngtree.com/so/fitness">
				fitness png from pngtree.com
			</a>
		</div>
	);
}

export default Footer;
