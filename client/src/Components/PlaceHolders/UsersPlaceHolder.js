import React, { Fragment } from "react";

import {
  Menu as SUI_Menu,
  Segment as SUI_Segment,
  Image as SUI_Image,
  Grid as SUI_Grid,
  Card as SUI_Card,
  Dimmer as SUI_Dimmer,
  Loader as SUI_Loader,
  Icon as SUI_Icon,
  Placeholder
} from "semantic-ui-react";

export default () => (
  <Fragment>
    <SUI_Grid.Column>
      <SUI_Segment raised key="UserPlaceHolder1">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </SUI_Segment>
    </SUI_Grid.Column>
    <SUI_Grid.Column>
      <SUI_Segment raised key="UserPlaceHolder2">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </SUI_Segment>
    </SUI_Grid.Column>
    <SUI_Grid.Column>
      <SUI_Segment raised key="UserPlaceHolder3">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </SUI_Segment>
    </SUI_Grid.Column>
    <SUI_Grid.Column>
      <SUI_Segment raised key="UserPlaceHolder4">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </SUI_Segment>
    </SUI_Grid.Column>
    <SUI_Grid.Column>
      <SUI_Segment raised key="UserPlaceHolder5">
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="short" />
          </Placeholder.Paragraph>
        </Placeholder>
      </SUI_Segment>
    </SUI_Grid.Column>
  </Fragment>
);
