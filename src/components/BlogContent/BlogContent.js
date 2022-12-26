import "./BlogContent.css";
import { POSTS } from "../../shared/projectData";
import { BlogCard } from "./components/BlogCard";
import { Component } from "react";
import { AddPostForm } from "./components/AddPostForm";

export class BlogContent extends Component {
  state = {
    showAddForm: false,
    blogArr: JSON.parse(localStorage.getItem("blogPost")) || POSTS,
  };

  likePost = (pos) => {
    const temp = [...this.state.blogArr];
    temp[pos].liked = !temp[pos].liked;
    this.setState({
      blogArr: temp,
    });

    localStorage.setItem("blogPost", JSON.stringify(temp));
  };

  deletePost = (pos) => {
    if (window.confirm(`Видалити ${this.state.blogArr[pos].title}?`)) {
      const temp = [...this.state.blogArr];
      temp.splice(pos, 1);

      this.setState({
        blogArr: temp,
      });
      localStorage.setItem("blogPost", JSON.stringify(temp));
    }
  };

  handleShowAddFormShow = () => {
    this.setState({
      showAddForm: true
    })
  }
  handleShowAddFormhide = () => {
    this.setState({
      showAddForm: false
    })
  }

  render() {
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(pos)}
          deletePost={() => this.deletePost(pos)}
        />
      );
    });
    return (
      <>
        {this.state.showAddForm ? <AddPostForm handleShowAddFormhide={this.handleShowAddFormhide} /> : null}

        <>
          <h1>Simple Blog</h1>
          <button className="blackBtn" onClick={this.handleShowAddFormShow}>Створити новий пост</button>
          <div className="posts">{blogPosts}</div>{" "}
        </>
      </>
    );
  }
}
