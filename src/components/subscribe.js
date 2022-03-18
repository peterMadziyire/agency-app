import React, { Component } from 'react';
import '../styles/home.css';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class Subscribe extends Component {
  render() {
    return (
        <Mailchimp
        action='https://peterstacks.us10.list-manage.com/subscribe/post?u=373ce56e77a303d7e683968b0&amp;id=384642a446'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}

        // className='subscribe'
        />
    );
  }
}
 
export default Subscribe;