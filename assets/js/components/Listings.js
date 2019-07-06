import React, { Component } from 'react';

class Listings extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div >
				<section className="listings" >
					<section className="search-area">
						<input type="text" name="search" />
					</section>
					<section className="sort-by-area">
						<div> 390 results found</div>
						<div className="sort-options">
							<select className="sortby" name="sortby">
								<option value="price-asc">Highest Price</option>
								<option value="price-dsc">Lowest Price</option>
							</select>
							<div className="view">
								<i className="fas fa-th-list" aria-hidden="true"></i>
								<i className="fas fa-th" aria-hidden="true"></i>
							</div>
						</div>
					</section>

					<section className="listign-results">
						<div className="listings">
							<div className="listing-img">
								<span className="address">Address</span>
								<div className="details">
									<div className="user-img"></div>
									<div className="user-details">
										<span className="user-name">Ricarda Steen</span>
										<span className="post-date">05/05/2019</span>
									</div>
									<div className="listing-details">
										<div className="square-footage" aria-hidden="true">
											<i className="far fa-square" aria-hidden="true"></i>
											<span>1000 ft&up2;</span>
										</div>
										<div className="bedrooms">
											<i className="fa fa-bed" aria-hidden="true"></i>
											<span className="bedrooms">3 bedrooms</span>
										</div>
									</div>
								</div>
								<div className="bottom-info">
									<span>$250/night</span>
									<span><i className="far fa-map-marker" aria-hidden="true"></i></span>
								</div>
							</div>
						</div>
					</section>
					<section className="pagination">
						<ul className="pagination-nums">
							<li>Prev</li>
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>Next</li>
						</ul>
					</section>

				</section>
			</div>
		);
	}
}

export default Listings;