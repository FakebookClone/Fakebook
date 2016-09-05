import React from 'react';
import FacebookLogin from 'react-facebook-login';

require('../../../stylesheets/login.scss');

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: JSON.parse(localStorage.getItem('fakebook_user')) }
  }

  responseFacebook(response) {
    console.log(response);
    localStorage.setItem('fakebook_user', JSON.stringify(response));
    this.setState({ user: JSON.parse(localStorage.getItem('fakebook_user')) });
  }

  render() {
    return (
      <div>
        {this.state.user
          ? <div>
              <img src={this.state.user.picture.data.url} />
              <button onClick={this.logout.bind(this)}>Logout</button>
            </div>
          : <FacebookLogin
              appId="145051979269944"
              autoLoad={false}
              fields="name,first_name,last_name,email,picture,age_range,link,about,birthday,cover,relationship_status,significant_other,website,work"
              cssClass="test"
              textButton="Login"
              callback={this.responseFacebook.bind(this)}
            />
        }
      </div>
    )
  }

  logout() {
    console.log('hit');
    localStorage.clear();
    this.setState({ user: null })
  }
}
