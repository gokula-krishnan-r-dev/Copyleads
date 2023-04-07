import { TiptapCollabProvider } from "@hocuspocus/provider"
import CharacterCount from "@tiptap/extension-character-count"
import Collaboration from "@tiptap/extension-collaboration"
import CollaborationCursor from "@tiptap/extension-collaboration-cursor"
import Highlight from "@tiptap/extension-highlight"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import React, { useCallback, useEffect, useState } from "react"
import * as Y from "yjs"

// import { variables } from "../../variables"
import MenuBar from "./MenuBar.jsx"

const TextEditor = () => {
  const [status, setStatus] = useState("connecting")
  const [currentUser, setCurrentUser] = useState()

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
    ],
  })

  // useEffect(() => {
  //   // Update status changes
  //   websocketProvider.on("status", (event) => {
  //     setStatus(event.status)
  //   })
  // }, [])

  // Save current user to localStorage and emit to editor
  useEffect(() => {
    if (editor && currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
      editor.chain().focus().updateUser(currentUser).run()
    }
  }, [editor, currentUser])
  console.log(editor)

  return (
    <div className="editor h-[100%]">
      {editor && <MenuBar editor={editor} />}
      <EditorContent
        height={900}
        className="editor__content "
        editor={editor}
      />
    </div>
  )
}
export default TextEditor
