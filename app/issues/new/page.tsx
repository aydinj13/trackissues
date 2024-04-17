"use client"

import { Button, TextArea, TextField, TextFieldRoot } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
        <TextArea placeholder="Title" />
        <SimpleMDE placeholder="Description" />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage