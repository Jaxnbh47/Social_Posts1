import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { PostForm } from './components/PostForm';
import { PostInList } from './components/PostInList';

describe("PostInList", ()=>{
  test ("renders title and thought", ()=>{
    const post = {title: "test title", thought: "test thought"}
    const {getByText}= render(<PostInList post={post} onDelete={jest.fn()}/> )
    expect(getByText(post.title)).toBeInTheDocument()
    expect(getByText(post.thought)).toBeInTheDocument()
  })

  test ("calls on delete callback when Delete button is clicked", ()=>{
    const post = {title: "test title", thought: "test thought"}
    const onDelete = jest.fn()
    const {getByText} = render(<PostInList post={post} onDelete={onDelete}/> )
    fireEvent.click(getByText("Delete"))
    expect(onDelete).toHaveBeenCalled()
  })
})

describe("PostForm", ()=>{
  test("recalls on submit after form submission", ()=>{
    const onSubmit = jest.fn()
    const { getByLabelText, getByText } = render(<PostForm onSubmit={onSubmit} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } />)

    const titleInput = getByLabelText('Title:')
    const thoughtTextarea = getByLabelText("Thought:")
    const submitButton = getByText('Add Post')

    fireEvent.change(titleInput, {target: {value: "test title"}})
    fireEvent.change(thoughtTextarea, {target: {value: "test thought"}})
    fireEvent.click(submitButton)
    expect(onSubmit).toHaveBeenCalledWith({title: "test title", thought: "test thought" })
  })

  test ("calls on closed when close is clicked", ()=>{
    const onClose = jest.fn()
    const {getByText}=render(<PostForm onSubmit={()=>{}}onClose={onClose}/>)
    const closeButton = getByText('X')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalled()
  })
})