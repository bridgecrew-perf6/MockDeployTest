import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebarActions";

import {
  Button,
  Collapse,
  Navbar,
} from "reactstrap";

// import {
//   AlertCircle,
//   Bell,
//   BellOff,
//   Home,
//   MessageCircle,
//   Settings,
//   User
// } from "react-feather";

// import * as Icon from 'react-feather';

import { selectFullName } from "../redux/Selectors/UserLoginInfoSelectors";
import { Link } from "react-router-dom";

// import { useEffect } from "react";
// import { useState } from "react";
// import UserApi from "../api/UserApi";

const NavbarComponents = (props) => {

  // const handleChange = () => {

  // }

  return (
    <>
    
    <Navbar color="white" light expand>
      <Button  style={{marginLeft: '45%'}} >
      
        <Link to="/DuLichViet"><img src='https://dulichkhatvongviet.com/wp-content/uploads/2013/07/logo-va-slogan-xuc-tien-du-lich-viet-nam-o-trong-nuoc.jpg' alt='Ảnh'
      style={{width: '121%', height: '92px', marginLeft: '-13px'}} > 
        
        </img></Link>
        </Button>

      <Collapse navbar>
      
      </Collapse>

    </Navbar>
    </>
  );
};

const mapGlobalStateToProps = state => {
  return {
    app: state.app,
    fullName: selectFullName(state)
  }
};

export default connect(mapGlobalStateToProps, { toggleSidebar })(NavbarComponents);
