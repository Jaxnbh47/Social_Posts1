import { Post } from "../Post";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

  export function PostForm({ onSubmit, onClose }: { onSubmit: (post: Post) => void; onClose: () => void }) {
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ title, thought });

    };

    return (
      <form className="ThoughtForm" onSubmit={handleSubmit}>
        <button className="closebutton" onClick={onClose}>
          X
        </button>
        <h2>New Thought</h2>
        <label>
          Title:
          <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>
          Thought:
          <textarea onChange={(e) => setThought(e.target.value)}></textarea>
        </label>
        <button type="submit">Add Post</button>
      </form>
    );
  }

//attempting below to use react strap modals for extra challenge
  // export function PostForm({ onSubmit, onClose }: { onSubmit: (post: Post) => void; onClose: () => void }) {
//   const [title, setTitle] = useState("");
//   const [thought, setThought] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ title, thought });
//     setShowForm(false);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <FormGroup>
//         <Label for="title">Title:</Label>
//         <Input
//           type="text"
//           name="title"
//           id="title"
//           value={title}
//           onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setTitle(event.target.value)}
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label for="thought">Thought:</Label>
//         <Input
//           type="textarea"
//           name="thought"
//           id="thought"
//           value={thought}
//           onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setThought(event.target.value)}
//         />
//       </FormGroup>
//       <Button type="submit">Submit</Button>
//       <Button onClick={onClose} className="closebutton">
//         X
//       </Button>
//     </Form>
//   );
// };


// function PostForm () {
//   const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

//   return (
//     <div>
//       <Button color="danger" onClick={toggle}>
//         New Thoughts
//       </Button>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>
//             Do Something
//           </Button>{' '}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default PostForm;