import React, { Component } from 'react';

class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		}
	}

	render() {
		return (
			<section id="filter" >
				<div className="inside">
					<h4>Filter</h4>
					<select name="neighbourhood" className="filter neighbourhood">
						<option>Ironwood</option>
					</select>
					<select name="housetype" className="filter neighbourhood">
						<option>Single Family</option>
					</select>
					<select name="bedrooms" className="filter bedrooms">
						<option>3 bedrooms</option>
					</select>
					<select name="bathrooms" className="filter baths">
						<option>2 baths</option>
					</select>
					<div name="price" className="filter price">
						<span className="price">Price</span><br />
						<input type="text" name="min-price" className="min-price"/>
						<input type="text" name="max-price" className="max-price"/>
					</div>
					<div name="floor-space" className="filter floorspace">
						<span className="floor-space">Floor Space</span><br/>
						<input type="text" name="min-floor-space" className="min-floor-space"/>
						<input type="text" name="max-floor-space" className="max-floor-space"/>
					</div>

					<div className="filter extras">
						<span className="facilities">Facilities</span> <br />

						<label htmlFor="extras" >
							<span>Elevator
							<input name="extras" value="elevators" type="checkbox" />
							</span>
						</label> <br />

						<label htmlFor="extras" >
							<span>Storage
							<input name="extras" value="storage" type="checkbox" />
							</span>
						</label> <br />

						<label htmlFor="extras">
							<span>Swimming Pool
							<input name="extras" value="swiming-pool" type="checkbox" />
							</span>
						</label> <br />

						<label htmlFor="extras">
							<span>Gym
							<input name="extras" value="gym" type="checkbox" />
							</span>
						</label> <br />
					</div>
				</div>
			</section>
		)
	}
}

export default Filter;
