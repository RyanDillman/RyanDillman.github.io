import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Email me at ryanfdillman@outlook.com and take a look at the links below.
              </p>
            </div>
          </div>
        </section>
        );
  }
}