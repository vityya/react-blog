import "./AddPostForm.css";
import CancelIcon from "@mui/icons-material/Cancel";

export const AddPostForm = ({ handleShowAddFormhide }) => {
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
          />
        </div>
        <div>
          <textarea
            className="addFormInput"
            name="postDescription"
            placeholder="Опис посту"
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
};
