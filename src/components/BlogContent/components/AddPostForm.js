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
      postTitle: e.target.value
    })
  }

  handlePostDescChange = (e) => {
    this.setState ({
      postDescription: e.target.value
    })
  }
  render() {
    const handleShowAddFormhide = this.props.handleShowAddFormhide;
    return (
      <>
        <form action="" className="AddPostForm">
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
            />
          </div>
          <div>
            <textarea
              className="addFormInput"
              name="postDescription"
              placeholder="Опис посту"
              value={this.state.postDescription}
              onChange = {this.handlePostDescChange}
            />
          </div>
          <div>
            <button
              className="blackBtn"
              onClick={handleShowAddFormhide}
              type="button"
            >
              Додати пост
            </button>
          </div>
        </form>
        <div onClick={handleShowAddFormhide} className="overlay"></div>
      </>
    );
  }
}
