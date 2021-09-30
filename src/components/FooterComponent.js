import React from 'react';
import beach from '../assets/images/beach_flex.jpeg';
import '../styles/footer.css';

function Footer() {
	return (
		<footer className="footer">
			<div className="links_container">
				<div className="links_box">
					<h2>
						FREE&nbsp;
						<a href="https://gmail.us20.list-manage.com/subscribe?u=38345a5e43f450dd2589b003d&id=f28cff3b0c">
							E-BOOK
						</a>
						! MACRO CHEAT SHEET & NUTRIENT TIMING GUIDE!
					</h2>
					<a href="https://gmail.us20.list-manage.com/subscribe?u=38345a5e43f450dd2589b003d&id=f28cff3b0c">
						<div className="link">E-BOOK</div>
					</a>
				</div>
				<div className="links_box">
					<h2>
						CHECK OUT LEGENDARY FOODS WITH MY DICOUNT CODE:&nbsp;
						<a href="https://www.eatlegendary.com/?aff=479">
							SARAHLIZ
						</a>
					</h2>
					<a href="https://www.eatlegendary.com/?aff=479">
						<div className="link">LEGENDARY FOODS</div>
					</a>
				</div>
			</div>

			<hr />
			<div className="main_footer">
				<a className="footer_link" href="">
					facebook
				</a>
				<a className="footer_link" href="">
					instagram
				</a>

				<p class="footer_link email">sarahlizfitness@gmail.com</p>

				<a
					className="footer_link attribute"
					href="https://pngtree.com/so/fitness"
				>
					fitness png from pngtree.com
				</a>
			</div>
			<hr />
			<div className="ending_footer">
				<h2 className="company_header">SarahLiz Fitness</h2>
				<img className="footer_img" src={beach} alt="" />
			</div>
		</footer>
	);
}

export default Footer;
