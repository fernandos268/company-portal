import React from "react";
import { connect } from "react-redux";

import { Segment as SUI_Segment, Grid as SUI_Grid } from "semantic-ui-react";

const mapStateToProps = state => {
  return {
    posts: state.PostsReducer.posts
  };
};

const ConnectedList = ({ posts }) => {
  return (
    <SUI_Segment basic>
      <ul className="list-group list-group-flush">
        {posts.map(post => (
          <li className="list-group-item" key={post.id}>
            {post.title} <br />
            {post.content}
          </li>
        ))}
      </ul>
    </SUI_Segment>
  );
};

const Posts = connect(mapStateToProps)(ConnectedList);

export default Posts;
