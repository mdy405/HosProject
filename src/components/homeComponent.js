import React, { Component } from 'react';
import axios from 'axios';

export default class homeComponent extends Component {

	constructor(props)
	{
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onUserNameChange =  this.onUserNameChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.onPassChange = this.onPassChange.bind(this);

	    this.state = {
	        userName: '',
	        email: '',
	        phone:'',
	        password:''
	    }
        
	}
	onUserNameChange(e)
	{
        this.setState({
   	 		userName: e.target.value
        });
	}
	onEmailChange(e)
	{
		this.setState({
   	 		email: e.target.value
        });
	}
	onPhoneChange(e)
	{
        this.setState({
   	 		phone: e.target.value
        });
	}
	onPassChange(e)
	{        this.setState({
   	 		password: e.target.value
        });
	}
	onSubmit(e)
	{
		e.preventDefault();
		const user ={
			userName: this.state.userName,
	        email: this.state.email,
	        phone:this.state.phone,
	        password:this.state.password

		}
		axios.post('http://localhost:1515/user/add', user)
		//console.log(`UserName is ${this.state.userName} and mail is ${this.state.email} and phone is ${this.state.phone} and password is ${this.state.password}`);
		.then(res => console.log(res.data));
        	this.setState({
	        userName: '',
	        email: '',
	        phone:'',
	        password:''
        })
	}

    render() {
        return (
        	<div className=" login-signup">
        	    <div className="row" style={{marginTop: 50}}>
        	    	
	            	<div className="col-sm-6 nav-tab-holder">
		            	<ul className= "nav nav-tabs row" role="tablist">
			            	<li role="presentation" className="active col-sm-6"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Company</a></li>
			            	<li role="presentation" className="col-sm-6"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">User</a></li>
		            	</ul>
	            	</div>
	            </div>
	            <div className="tab-content">
	            	<div role="tabpanel" className="tab-pane active" id="home"> 
	            	 <div className="row">
		            	<div className="col-sm-6 mobile-pull">
		            	<article role="login">
		            	<h3 className="text-center"><i className="fa fa-lock"></i>USER</h3>           
		                	<form className="signup" onSubmit={this.onSubmit}  >
		                	  <div className="form-group">
			                    <input type="text" className="form-control" placeholder="UserName" onChange ={this.onUserNameChange} />
			                  </div>
			                  <div className="form-group">
			                    <input type="email" className="form-control" placeholder="Email Address" onChange ={this.onEmailChange}/>
			                  </div>
			                  <div className="form-group">
			                    <input type="text" className="form-control" placeholder="Phone Number" onChange ={this.onPhoneChange}/>
			                  </div>
			                  <div className="form-group">
			                    <input type="password" className="form-control" placeholder="Password" onChange ={this.onPassChange}/>
			                  </div>
			                  <div className="form-group">
			                    <input type="password" className="form-control" placeholder="Confirm Password"/>
			                  </div>
			                  <div className="form-group">
			                    <div className="checkbox">
			                      <label>
			                        <input type="checkbox"/> Please accept the terms and conditions to proceed with your request
			                      </label>
			                    </div>
			                  </div>
			                  <div className="form-group">
			                    <input type="submit" className="btn btn-success btn-block"  value="SUBMIT"/>
			                  </div>
		                	</form>
		                	<footer role="signup" className="text-center" />
		                  	<ul>
			                    <li>
			                      <a href="#">Terms of Use</a>
			                    </li>
			                    <li>
			                      <a href="#">Privacy Statement</a>
			                    </li>
		                  	</ul>
		                </article>
		               	</div>
		               	<div className="col-sm-6">
			              <article role="manufacturer"  className="text-center">
				                <header>
				                  Company
				                </header>
				                <h1>FREE</h1>
				                <ul className="text-left">
				                  <li><i className="fa fa-check"></i>  Unlimited  access</li>
				                  <li><i className="fa fa-check"></i>  Create Project Lists</li>
				                  <li><i className="fa fa-check"></i>  Create Project Lists</li>
				                  <li><i className="fa fa-check"></i>  Share Files</li>
				                  <li><i className="fa fa-check"></i>   Unlimited  access</li>
				                  <li><i className="fa fa-check"></i>  Unlimited  access</li>
				                </ul>
			                <a href="#" className="btn btn-success">SignUp  For Admin</a>

			              </article>
			            </div>

		             </div>
		       
	               	</div>
	               	 <div role="tabpanel" className="tab-pane" id="profile">
				        <div className="row">

				          <div className="col-sm-6 mobile-pull">
				            <article role="login">
				              <h3 className="text-center"><i className="fa fa-lock"></i> Create a personal Account</h3>
				              <form className="signup" action="index.html" method="post">
				                <div className="form-group">
				                  <input type="text" className="form-control" placeholder="UserName"/>
				                </div>
				                <div className="form-group">
				                  <input type="email" className="form-control" placeholder="Email Address"/>
				                </div>
				         
				                <div className="form-group">
				                  <input type="password" className="form-control" placeholder="Password"/>
				                </div>
				                <div className="form-group">
				                  <input type="password" className="form-control" placeholder="Confirm Password"/>
				                </div>
				                <div className="form-group">
				                  <div className="checkbox">

				                    <label>
				                      <input type="checkbox"/> Please accept the terms and conditions to proceed with your request.
				                    </label>
				                  </div>
				                </div>
				                <div className="form-group">
				                  <input type="submit" className="btn btn-success btn-block"  value="SUBMIT"/>
				                </div>
				              </form>
				              <footer role="signup" className="text-center">

				                <ul>
				                  <li>
				                    <a href="#">Terms of Use</a>
				                  </li>
				                  <li>
				                    <a href="#">Privacy Statement</a>
				                  </li>
				                </ul>
				              </footer>

				            </article>
				          </div>
				          <div className="col-sm-6">
				            <article role="manufacturer"  className="text-center">
				              <header>
				                USER
				              </header>
				              <h1>FREE</h1>
				              <ul className="text-left">
				                <li><i className="fa fa-check"></i>  Unlimited Site Access</li>
				                <li><i className="fa fa-check"></i>   Unlimited Site Access</li>
				                <li><i className="fa fa-check"></i>  Unlimited Site Access</li>
				                <li><i className="fa fa-check"></i>  Unlimited Site Access</li>
				                <li><i className="fa fa-check"></i>   Unlimited Site Access</li>
				                <li><i className="fa fa-check"></i>   Unlimited Site Access</li>
				              </ul>
				              <a href="#" className="btn btn-success">SignUp  For User</a>
				            </article>
				          </div>
				        </div>
				      </div>
	            </div>
        	</div>
        )
    }
}