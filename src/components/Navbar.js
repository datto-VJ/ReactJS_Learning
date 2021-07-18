import React, {Component} from 'react'

class Navbar extends Component {
  render() {
    let menu = ["Home","About us","Contact"]
    let elements = menu.map((item,index)=>{
      return <li className="nav-item active" key={index}>
                <a className="nav-link" href={item}>{item}</a>
             </li>
    })
    return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">PHUOCDAT</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {elements}
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar;