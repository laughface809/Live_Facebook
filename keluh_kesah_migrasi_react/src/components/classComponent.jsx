import React from "react";

export default class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            f_name: '',
            m_name: '',
            l_name: '' 
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
      }
      
    render() {
      return (
        <div style={{position: 'relative', marginTop: '10%'}}>
            <input id='f_name' onChange={this.handleChange} />
            <input id='m_name' onChange={this.handleChange} />
            <input id='l_name' onChange={this.handleChange} />

            <p> Firstname result : {this.state.f_name}</p>
            <p> Middlename result : {this.state.m_name}</p>
            <p> Lastname result : {this.state.l_name}</p>
        </div>
      )
    }
  }