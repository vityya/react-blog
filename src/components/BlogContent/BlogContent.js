import "./BlogContent.css";
import { POSTS } from "../../shared/projectData";
import { BlogCard } from "./components/BlogCard";
import { Component } from "react";
import { AddPostForm } from "./components/AddPostForm";
import axios from "axios";

export class BlogContent extends Component {
  state = {
    showAddForm: false,
    blogArr: [],
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
      showAddForm: true,
    });
  };
  handleShowAddFormhide = () => {
    this.setState({
      showAddForm: false,
    });
  };

  handleEscape = (e) => {
    if (e.key === "Escape" && this.state.showAddForm)
      this.handleShowAddFormhide();
  };

  addNewBlogPost = (blogPost) => {
    this.setState((state) => {
      const posts = [...state.blogArr];

      posts.push(blogPost);
      localStorage.setItem("blogPost", JSON.stringify(posts));
      return {
        blogArr: posts,
      };
    });
  };

  componentDidMount() {
    axios
      .get("https://63ad5349da81ba97619932f9.mockapi.io/posts")
      .then((response) => {
        this.setState({ blogArr: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    window.addEventListener("keyup", this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscape);
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
    if (this.state.blogArr.length === 0) return <h1>Завантажую данні...</h1>;
    return (
      <div className="blogPage">
        {this.state.showAddForm && (
          <AddPostForm
            blogArr={this.state.blogArr}
            addNewBlogPost={this.addNewBlogPost}
            handleShowAddFormhide={this.handleShowAddFormhide}
          />
        )}

        <>
          <h1>Блог</h1>
          <div className="addNewPost">
            <button className="blackBtn" onClick={this.handleShowAddFormShow}>
              Створити новий пост
            </button>
          </div>
          <div className="posts">{blogPosts}</div>{" "}
        </>
      </div>
    );
  }
}
