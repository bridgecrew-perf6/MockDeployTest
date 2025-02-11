import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebarActions";

import {
  // Row,
  // Col,
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ListGroup,
  // ListGroupItem,
} from "reactstrap";

import {
  // AlertCircle,
  // Bell,
  // BellOff,
  // Home,

  // MessageCircle,
  Settings,
  User
} from "react-feather";
import * as Icon from 'react-feather';

// import * as Icon from 'react-feather';

// import avatar1 from "../assets/img/avatars/avatar.jpg";
// import avatar3 from "../assets/img/avatars/avatar-3.jpg";
// import avatar4 from "../assets/img/avatars/avatar-4.jpg";
// import avatar5 from "../assets/img/avatars/avatar-5.jpg";
import { selectFullName } from "../redux/Selectors/UserLoginInfoSelectors";
import { Link } from "react-router-dom";
// import Button from "reactstrap/lib/Button";

// import { useEffect } from "react";
// import { useState } from "react";
// import UserApi from "../api/UserApi";

// const notifications = [
//   {
//     type: "important",
//     title: "Update completed",
//     description: "Restart server 12 to complete the update.",
//     time: "2h ago"
//   },
//   {
//     type: "default",
//     title: "Lorem ipsum",
//     description: "Aliquam ex eros, imperdiet vulputate hendrerit et.",
//     time: "6h ago"
//   },
//   {
//     type: "login",
//     title: "Login from 192.186.1.1",
//     description: "",
//     time: "6h ago"
//   },
//   {
//     type: "request",
//     title: "New connection",
//     description: "Anna accepted your request.",
//     time: "12h ago"
//   }
// ];

// const messages = [
//   {
//     name: "Ashley Briggs",
//     avatar: avatar5,
//     description: "Nam pretium turpis et arcu. Duis arcu tortor.",
//     time: "15m ago"
//   },
//   {
//     name: "Chris Wood",
//     avatar: avatar1,
//     description: "Curabitur ligula sapien euismod vitae.",
//     time: "2h ago"
//   },
//   {
//     name: "Stacie Hall",
//     avatar: avatar4,
//     description: "Pellentesque auctor neque nec urna.",
//     time: "4h ago"
//   },
//   {
//     name: "Bertha Martin",
//     avatar: avatar3,
//     description: "Aenean tellus metus, bibendum sed, posuere ac, mattis non.",
//     time: "5h ago"
//   }
// ];

const NavbarDropdown = ({
  children,
  count,
  showBadge,
  header,
  footer,
  icon: Icon
}) => (
  <UncontrolledDropdown nav inNavbar className="mr-2">
    <DropdownToggle nav className="nav-icon dropdown-toggle">
      <div className="position-relative">
        <Icon className="align-middle" size={18} />
        {showBadge ? <span className="indicator">{count}</span> : null}
      </div>
    </DropdownToggle>
    <DropdownMenu right className="dropdown-menu-lg py-0">
      <div className="dropdown-menu-header position-relative">
        {count} {header}
      </div>
      <ListGroup>{children}</ListGroup>
      <DropdownItem header className="dropdown-menu-footer">
        <span className="text-muted">{footer}</span>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

// const NavbarDropdownItem = ({ icon, title, description, time, spacing }) => (
//   <ListGroupItem>
//     <Row noGutters className="align-items-center">
//       <Col xs={2}>{icon}</Col>
//       <Col xs={10} className={spacing ? "pl-2" : null}>
//         <div className="text-dark">{title}</div>
//         <div className="text-muted small mt-1">{description}</div>
//         <div className="text-muted small mt-1">{time}</div>
//       </Col>
//     </Row>
//   </ListGroupItem>
// );

const NavbarComponent = (props) => {


  return (
    // tắt 3 gạch
    <Navbar color="white" light expand>
      <span
        className="sidebar-toggle d-flex mr-2"
        onClick={() => {
          props.toggleSidebar();
        }}
      >
        <i className="hamburger align-self-center" />
      </span>

      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          {/* <NavbarDropdown
            header="New Messages"
            footer="Show all messages"
            icon={MessageCircle}
            count={messages.length}
            showBadge
          >
            {messages.map((item, key) => {
              return (
                <NavbarDropdownItem
                  key={key}
                  icon={
                    <img
                      className="avatar img-fluid rounded-circle"
                      src={item.avatar}
                      alt={item.name}
                    />
                  }
                  title={item.name}
                  description={item.description}
                  time={item.time}
                  spacing
                />
              );
            })}
          </NavbarDropdown> */}
          {/* 
          <NavbarDropdown
            header="New Notifications"
            footer="Show all notifications"
            icon={BellOff}
            count={notifications.length}
          >
            {notifications.map((item, key) => {
              let icon = <Bell size={18} className="text-warning" />;

              if (item.type === "important") {
                icon = <AlertCircle size={18} className="text-danger" />;
              }

              if (item.type === "login") {
                icon = <Home size={18} className="text-primary" />;
              }

              if (item.type === "request") {
                icon = <User size={18} className="text-success" />;
              }

              return (
                <NavbarDropdownItem
                  key={key}
                  icon={icon}
                  title={item.title}
                  description={item.description}
                  time={item.time}
                />
              );
            })}
          </NavbarDropdown> */}

          {/*đăng nhập và đăng ký user */}
          <NavbarDropdown
            header=""
            footer=""
            icon={User}
          >
            <span>
              <Icon.LogIn size={18} className="text-primary" />  <Link to="/auth/sign-in"> <b>Đăng nhập</b> </Link>
            </span>
          </NavbarDropdown>

          <UncontrolledDropdown nav inNavbar>
            <span className="d-inline-block d-sm-none">
              <DropdownToggle nav caret>
                <Settings size={18} className="align-middle" />
              </DropdownToggle>
            </span>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

const mapGlobalStateToProps = state => {
  return {
    app: state.app,
    fullName: selectFullName(state)
  }
};

export default connect(mapGlobalStateToProps, { toggleSidebar })(NavbarComponent);
