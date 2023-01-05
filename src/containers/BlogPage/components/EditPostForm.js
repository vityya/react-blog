import "./EditPostForm.css";
import CancelIcon from "@mui/icons-material/Cancel";
import { Component } from "react";

export class EditPostForm extends Component {
  state = {
    postTitle: this.props.selectedPost.title,
    postDescription: this.props.selectedPost.description,
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

  savePost = (e) => {
    e.preventDefault();
    const post = {
      id: this.props.selectedPost.id,
      title: this.state.postTitle,
      description: this.state.postDescription,
      liked: this.props.selectedPost.liked,
    };

    this.props.editBlogPost(post);
    this.props.handleEditFormHide();
  };

  handleEscape = (e) => {
    if (e.key === "Escape") this.props.handleEditFormHide();
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscape);
  }

  render() {
    const handleEditFormHide = this.props.handleEditFormHide;
    return (
      <>
        <form action="" className="editPostForm" onSubmit={this.savePost}>
          <button className="hideBtn" onClick={handleEditFormHide}>
            <CancelIcon />
          </button>
          <h2>Редагування посту</h2>
          <div>
            <input
              className="editFormInput"
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
              className="editFormInput"
              name="postDescription"
              placeholder="Опис посту"
              value={this.state.postDescription}
              onChange={this.handlePostDescChange}
              rows={8}
              required
            />
          </div>
          <div>
            <button className="blackBtn" type="submit">
              Зберегти
            </button>
          </div>
        </form>
        <div onClick={handleEditFormHide} className="overlay"></div>
      </>
    );
  }
}
