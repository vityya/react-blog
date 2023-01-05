import "./AddPostForm.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Component } from "react";

export class AddPostForm extends Component {
  state = {
    postTitle: "",
    postDescription: "",
  };

  handlePostTitleChange = (e) => {
    this.setState({
      postTitle: e.target.value,
    });
  };

  handlePostDescChange = (e) => {
    this.setState({
      postDescription: e.target.value,
    });
  };

  createPost = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.postTitle,
      description: this.state.postDescription,
      liked: false,
    };

    this.props.addNewBlogPost(post);
    this.props.handleShowAddFormhide();
  };

  handleEscape = (e) => {
    if (e.key === "Escape")
      this.props.handleShowAddFormhide();
  }; 

  componentDidMount() {
    window.addEventListener('keyup', this.handleEscape)
  }


  componentWillUnmount(){
    window.removeEventListener('keyup', this.handleEscape)
  }
  render() {
    const handleShowAddFormhide = this.props.handleShowAddFormhide;
    return (
      <>
        <form action="" className="AddPostForm" onSubmit={this.createPost}>
          <button className="hideBtn" onClick={handleShowAddFormhide}>
            <CancelIcon />
          </button>
          <h2>Створення посту</h2>
          <div>
            <input
              className="addFormInput"
              type="text"
              name="postTitle"
              placeholder="Заголовок посту"
              value={this.state.postTitle}
              onChange={this.handlePostTitleChange}
              required
            />
          </div>
          <div>
            <textarea
              className="addFormInput"
              name="postDescription"
              placeholder="Опис посту"
              value={this.state.postDescription}
              onChange={this.handlePostDescChange}
              rows="8"
              required
            />
          </div>
          <div>
            <button className="blackBtn" type="submit">
              Додати пост
            </button>
          </div>
        </form>
        <div onClick={handleShowAddFormhide} className="overlay"></div>
      </>
    );
  }
}
