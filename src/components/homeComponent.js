import React, { Component } from 'react';

export default class homeComponent extends Component {
    render() {
        return (
        	<div className=" login-signup">
        	    <div className="row" style={{marginTop: 50}}>
        	    	
	            	<div className="col-sm-6 nav-tab-holder">
		            	<ul className= "nav nav-tabs row" role="tablist">
		            	<li role="presentation" className="active col-sm-6"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Promtions</a></li>
		            	<li role="presentation" className="col-sm-6"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">User</a></li>
		            	</ul>
	            	</div>
	            </div>
	            <div className="tab-content">
	            	<div role="tabpanel" className="tab-pane active" id="home"> 
	            	 <div class="row">
		            	<div className="col-sm-6 mobile-pull">
		            	<article role="login">
		            	<h3 className="text-center"><i className="fa fa-lock"></i>USER</h3>           
		                	<form className="signup"  method="post">
		                	  <div class="form-group">
			                    <input type="text" class="form-control" placeholder="UserName" />
			                  </div>
			                  <div class="form-group">
			                    <input type="email" class="form-control" placeholder="Email Address" />
			                  </div>
			                  <div class="form-group">
			                    <input type="text" class="form-control" placeholder="Phone Number"/>
			                  </div>
			                  <div class="form-group">
			                    <input type="password" class="form-control" placeholder="Password"/>
			                  </div>
			                  <div class="form-group">
			                    <input type="password" class="form-control" placeholder="Confirm Password"/>
			                  </div>
			                  <div class="form-group">
			                    <div class="checkbox">
			                      <label>
			                        <input type="checkbox"/> Please accept the terms and conditions to proceed with your request
			                      </label>
			                    </div>
			                  </div>
			                  <div class="form-group">
			                    <input type="submit" class="btn btn-success btn-block"  value="SUBMIT"/>
			                  </div>
		                	</form>
		                	<footer role="signup" class="text-center" />
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
		               	<div class="col-sm-6">
			              <article role="manufacturer"  class="text-center">
				                <header>
				                  ADMIN
				                </header>
				                <h1>FREE</h1>
				                <ul class="text-left">
				                  <li><i class="fa fa-check"></i>  Unlimited  access</li>
				                  <li><i class="fa fa-check"></i>  Create Project Lists</li>
				                  <li><i class="fa fa-check"></i>  Create Project Lists</li>
				                  <li><i class="fa fa-check"></i>  Share Files</li>
				                  <li><i class="fa fa-check"></i>   Unlimited  access</li>
				                  <li><i class="fa fa-check"></i>  Unlimited  access</li>
				                </ul>
			                <a href="#" class="btn btn-success">SignUp  For Admin</a>
			              </article>
			            </div>

		             </div>
		       
	               	</div>


	               	 <div role="tabpanel" class="tab-pane" id="profile">
				        <div class="row">

				          <div class="col-sm-6 mobile-pull">
				            <article role="login">
				              <h3 class="text-center"><i class="fa fa-lock"></i> Create User Account</h3>
				              <form class="signup" action="index.html" method="post">
				                <div class="form-group">
				                  <input type="text" class="form-control" placeholder="UserName"/>
				                </div>
				                <div class="form-group">
				                  <input type="email" class="form-control" placeholder="Email Address"/>
				                </div>
				         
				                <div class="form-group">
				                  <input type="password" class="form-control" placeholder="Password"/>
				                </div>
				                <div class="form-group">
				                  <input type="password" class="form-control" placeholder="Confirm Password"/>
				                </div>
				                <div class="form-group">
				                  <div class="checkbox">
				                    <label>
				                      <input type="checkbox"/> Please accept the terms and conditions to proceed with your request.
				                    </label>
				                  </div>
				                </div>
				                <div class="form-group">
				                  <input type="submit" class="btn btn-success btn-block"  value="SUBMIT"/>
				                </div>
				              </form>
				              <footer role="signup" class="text-center">
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

				          <div class="col-sm-6">
				            <article role="manufacturer"  class="text-center">
				              <header>
				                USER
				              </header>
				              <h1>FREE</h1>
				              <ul class="text-left">
				                <li><i class="fa fa-check"></i>  Unlimited Site Access</li>
				                <li><i class="fa fa-check"></i>   Unlimited Site Access</li>
				                <li><i class="fa fa-check"></i>  Unlimited Site Access</li>
				                <li><i class="fa fa-check"></i>  Unlimited Site Access</li>
				                <li><i class="fa fa-check"></i>   Unlimited Site Access</li>
				                <li><i class="fa fa-check"></i>   Unlimited Site Access</li>
				              </ul>

				              <a href="#" class="btn btn-success">SignUp  For User</a>
				            </article>
				          </div>
				        </div>
				      </div>
	            </div>
        	</div>
        )
    }
}