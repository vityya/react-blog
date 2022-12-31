import "./BlogContent.css";
import { POSTS } from "../../shared/projectData";
import { BlogCard } from "./components/BlogCard";
import { Component } from "react";
import { AddPostForm } from "./components/AddPostForm";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { EditPostForm } from "./components/EditPostForm";

export class BlogContent extends Component {
  state = {
    showAddForm: false,
    showEditForm: false,
    blogArr: [],
    isPendiing: false,
    selectedPost: {},
  };
  fetchPost = () => {
    axios
      .get("https://63ad5349da81ba97619932f9.mockapi.io/posts")
      .then((response) => {
        this.setState({
          blogArr: response.data,
          isPendiing: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  likePost = (blogPost) => {
    const temp = { ...blogPost };
    temp.liked = !temp.liked;

    axios
      .put(
        `https://63ad5349da81ba97619932f9.mockapi.io/posts/${blogPost.id}`,
        temp
      )
      .then((response) => {
        console.log("Пост зміннений =>", response.data);
        this.fetchPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deletePost = (blogPost) => {
    if (window.confirm(`Видалити ${blogPost.title}?`)) {
      this.setState({
        isPendiing: true,
      });
      axios

        .delete(
          `https://63ad5349da81ba97619932f9.mockapi.io/posts/${blogPost.id}`
        )
        .then((response) => {
          console.log("Пост удален => ", response.data);
          this.fetchPost();
        })
        .catch((err) => console.log(err));
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

  handleShowEditFormShow = () => {
    this.setState({
      showEditForm: true,
    });
  };
  handleEditFormHide = () => {
    this.setState({
      showEditForm: false,
    });
  };

  // handleEscape = (e) => {
  //   if (e.key === "Escape" && this.state.showAddForm)
  //     this.handleShowAddFormhide();
  // };

  addNewBlogPost = (blogPost) => {
    this.setState({
      isPendiing: true,
    });
    axios
      .post("https://63ad5349da81ba97619932f9.mockapi.io/posts/", blogPost)
      .then((response) => {
        console.log("Пост створенний => ", response.data);
        this.fetchPost();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  editBlogPost = (updatedBlogPost) => {
    this.setState({
      isPendiing: true,
    });

    axios
    .put(`https://63ad5349da81ba97619932f9.mockapi.io/posts/${updatedBlogPost.id}`, updatedBlogPost)
    .then((response) => {
      console.log("Пост відридагований => ", response.data);
      this.fetchPost();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleSelectPost = (blogPost) => {
    this.setState({
      selectedPost: blogPost,
    });
  };

  componentDidMount() {
    this.fetchPost();
    window.addEventListener("keyup", this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscape);
  }

  render() {
    console.log(this.state.selectedPost);
    const blogPosts = this.state.blogArr.map((item, pos) => {
      return (
        <BlogCard
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={() => this.likePost(item)}
          deletePost={() => this.deletePost(item)}
          handleShowEditFormShow={() => this.handleShowEditFormShow()}
          handleSelectPost={() => this.handleSelectPost(item)}
        />
      );
    });
    if (this.state.blogArr.length === 0) return <h1>Завантажую данні...</h1>;

    const postOpacity = this.state.isPendiing ? 0.5 : 1;
    return (
      <div className="blogPage">
        {this.state.showAddForm && (
          <AddPostForm
            blogArr={this.state.blogArr}
            addNewBlogPost={this.addNewBlogPost}
            handleShowAddFormhide={this.handleShowAddFormhide}
          />
        )}
        {this.state.showEditForm && (
          <EditPostForm
            handleEditFormHide={this.handleEditFormHide}
            selectedPost={this.state.selectedPost}
            editBlogPost = {this.editBlogPost}
          />
        )}
        <>
          <h1>Блог</h1>
          <div className="addNewPost">
            <button className="blackBtn" onClick={this.handleShowAddFormShow}>
              Створити новий пост
            </button>
          </div>

          <div className="posts" style={{ opacity: postOpacity }}>
            {blogPosts}
          </div>
          {this.state.isPendiing && <CircularProgress className="preloader" />}
        </>
      </div>
    );
  }
}
