import React, { Component, Fragment } from "react";

import {
  Menu as SUI_Menu,
  Image,
  Segment,
  Dropdown,
  Icon,
  Button
} from "semantic-ui-react";

import CompanyLogo from "../../Images/CompanyLogo.png";

const SubMenu = SUI_Menu.SubMenu;
const MenuItemGroup = SUI_Menu.ItemGroup;

const trigger = (
  <span>
    <Icon name="user circle" />
    <Button content="Ferns" icon="user circle" />
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

class MenuHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Segment>
        <SUI_Menu stackable secondary>
          <SUI_Menu.Item>
            <Image src={CompanyLogo} size="tiny" />
          </SUI_Menu.Item>

          <SUI_Menu.Item
            name="Users"
            active={activeItem === "Users"}
            onClick={this.handleItemClick}
          />
          <SUI_Menu.Item
            name="features"
            active={activeItem === "features"}
            onClick={this.handleItemClick}
          >
            Features
          </SUI_Menu.Item>
          <SUI_Menu.Item
            name="testimonials"
            active={activeItem === "testimonials"}
            onClick={this.handleItemClick}
          >
            Testimonials
          </SUI_Menu.Item>

          <SUI_Menu.Menu position="right">
            <Dropdown
              trigger={trigger}
              options={options}
              pointing="top left"
              icon={null}
            />
          </SUI_Menu.Menu>
        </SUI_Menu>
      </Segment>
    );
  }
}

export default MenuHeader;
