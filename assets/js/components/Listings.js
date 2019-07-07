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
				<section id="listings" >
					<section className="search-area">
						<input type="text" name="search" />
					</section>
					<section className="sort-by-area">
						<div className="results"> 390 results found</div>
						<div className="sort-options">
							<select className="sort-by" name="sort-by">
								<option value="price-asc">Highest Price</option>
								<option value="price-dsc">Lowest Price</option>
							</select>
							<div className="view">
								<i className="fas fa-th-list" aria-hidden="true"></i>
								<i className="fas fa-th" aria-hidden="true"></i>
							</div>
						</div>
					</section>
					<section className="listing-results">
						{/* <div className="col-md-3"> */}
							<div className="listings">
						{/* </div> */}
							<div className="listing-img">
								<span className="address">1222 Ironwood Ave</span><br/>
								<div className="details">
									<div className="coll-md-3">
										<div className="user-img"></div>
									</div>
									<div className="col-md-9">
										<div className="user-details">
											<span className="user-name">Ricarda Steen</span>
											<span className="post-date">05/05/2019</span>
										</div>
										<div className="listing-details">
											<div className="square-footage" aria-hidden="false">
												<span>1000 ft&up2; </span>
												<i className="far fa-square" aria-hidden="false"></i>
											</div>
											<div className="bedrooms">
												<i className="fa fa-bed" aria-hidden="true"></i>
												<span className="bedrooms">3 bedrooms</span>
											</div>
											<div className="view-btn">View Listing</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bottom-info">
								<span className="rate">$250/night</span> <br />
								<span className="location"><i className="far fa-map-marker"></i>Pine Mountain Club, CA</span>
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