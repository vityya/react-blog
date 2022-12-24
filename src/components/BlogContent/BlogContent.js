import "./BlogContent.css";
import { POSTS } from "../../shared/projectData";
import { BlogCard } from "./components/BlogCard";
import { Component } from "react";

export class BlogContent extends Component {
  state = {
    showBlog: true,
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

  toggleBlog = () => {
    this.setState((state) => {
      console.log(1);
      return {
        showBlog: !state.showBlog,
      };
    });
    console.log(2);
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
        <button onClick={this.toggleBlog}>
          {this.state.showBlog ? "Hide blog" : "Show Blog"}
        </button>
        {this.state.showBlog ? (
          <>
            <h1>Simple Blog</h1>
            <div className="posts">{blogPosts}</div>{" "}
          </>
        ) : null}
      </>
    );
  }
}
