// import React, { Component, Fragment } from "react";
// import {
//   withRouter,
//   Route,
//   BrowserRouter as Router,
//   Switch
// } from "react-router-dom";
// import { removeToken } from "../Components/AuthHelper/AuthHelper";

// // UI Library Components

// import {
//   Layout,
//   Icon,
//   Row,
//   Col,
//   Menu as Ant_Menu,
//   Dropdown as Ant_Dropdown,
//   Button as Ant_Button,
//   message
// } from "antd";
// import { Menu, Segment, Dropdown, Image, Grid, Card } from "semantic-ui-react";

// import CompanyLogo from "../Images/CompanyLogo.png";
// import ProfilePicture from "../Images/fern-sample.jpg";

// // Layout Components
// import HeaderMenu from "../Components/Dashboard/HeaderMenu";

// // Container Components
// import Dashboard from "../Components/Containers/Dashboard";
// import Users from "../Components/Containers/Users";
// import Posts from "../Components/Containers/Posts";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   handleActiveItem = Item => {
//     console.log(Item);
//     this.props.history.push(`/home/${Item}`);
//   };

//   render() {
//     const { Header, Content, Footer, Sider } = Layout;

//     return (
//       <Layout>
//         <Layout style={{ height: "100vh", overflow: "hidden" }}>
//           <HeaderMenu
//             tokenContent={this.props.tokenContent}
//             handleActiveItem={this.handleActiveItem}
//           />
//           <Content style={{ margin: "24px 16px 0" }}>
//             <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
//               <Router>
//                 <Switch>
//                   <Route path="/home/dashboard" component={Dashboard} />
//                   <Route path="/home/users" component={Users} />
//                   <Route path="/home/posts" component={Posts} />
//                   <Route render={() => <h1>DEFAULT COMPONENT RENDERED</h1>} />
//                 </Switch>
//               </Router>
//             </div>
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// export default withRouter(Home);

//=======================================================================================================
import React, { Component, Fragment } from "react";
import {
  withRouter,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { removeToken } from "../Components/AuthHelper/AuthHelper";

// UI Library Components

import {
  Layout,
  Icon,
  Row,
  Col,
  Menu as Ant_Menu,
  Dropdown as Ant_Dropdown,
  Button as Ant_Button,
  message
} from "antd";
import { Menu, Segment, Dropdown, Image, Grid, Card } from "semantic-ui-react";

import CompanyLogo from "../Images/CompanyLogo.png";
import ProfilePicture from "../Images/fern-sample.jpg";

// Layout Components
import HeaderMenu from "../Components/Dashboard/HeaderMenu";

// Container Components
import Dashboard from "../Components/Containers/Dashboard";
import Users from "../Components/Containers/Users";
import Posts from "../Components/Containers/Posts";

const { Header, Content, Footer, Sider } = Layout;

const handleActiveItem = Item => {
  console.log(Item);
  return Item;
};

export default ({ match, tokenContent }) => {
  console.log(match);
  return (
    <Layout>
      <Layout style={{ height: "100vh", overflow: "hidden" }}>
        <HeaderMenu
          tokenContent={tokenContent}
          handleActiveItem={handleActiveItem}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <Segment
            raised
            style={{ padding: 24, background: "#fff", minHeight: 360 }}
          >
            <Router>
              <Switch>
                <Route render={() => <h1>DEFAULT COMPONENT RENDERED</h1>} />
              </Switch>
            </Router>
          </Segment>
        </Content>
      </Layout>
    </Layout>
  );
};
