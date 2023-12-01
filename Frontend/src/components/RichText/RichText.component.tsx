import React, { Dispatch, useEffect, useState } from "react";
import { Editor } from 'react-draft-wysiwyg';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './RichText.scss'
import { modal } from "../Modal/Modal.constants";
import { ignoreError } from "../../helpers/error";

ignoreError()

export interface Props {
  defaultValue: any
  reducer: Reducer
}
export interface Reducer {
  feedFormText: string
  setFeedFormText: (payload: any) => void
  dispatch: Dispatch<any>
}

const RichText: React.FC<Props> = ({defaultValue, reducer}) => {
  const {
    feedFormText,
    setFeedFormText,
    dispatch
  } = reducer

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  )
  const [, setConvertedContent] = useState<string | null>(null)
  const [tempImageData, setTempImageData] = useState('')

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(defaultValue);
    const { contentBlocks, entityMap } = blocksFromHTML;
    setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(contentBlocks, entityMap)));
  }, [defaultValue]);

  useEffect(() => {
    setConvertedContent(prevContent => {
      const html = convertToHTML(editorState.getCurrentContent());
      dispatch(setFeedFormText(html));
      return html;
    });
  }, [editorState, dispatch, setFeedFormText])
  
  const uploadImageCallBack = (file: any, callback: any) => {
    return new Promise((resolve, reject) => {
      const reader = new window.FileReader()
      reader.onloadend = async () => {
        try {
          const result: string | null = reader.result as string
          setTempImageData(result || '')
          resolve({ data: { link: result } })
        } catch (error) {
          console.error('Error uploading image:', error)
          reject(error)
        }
      };
      reader.readAsDataURL(file)
    });
  };

  const config = {
    image: {
      uploadCallback: uploadImageCallBack,
      previewImage: true,
      alt: { present: true, mandatory: false },
      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    }
  };

  useEffect(() => {
    const updatedText = feedFormText
      .replace("<figure>", "<img src='"+tempImageData+"' />")
      .replace("</figure>", " ")
  
    if (feedFormText !== updatedText) {
      dispatch(setFeedFormText(updatedText))
    }
  }, [tempImageData, feedFormText, setFeedFormText, dispatch]);

  return (
    <div className="RichText__Editor">
      <Editor
        toolbar={config}
        placeholder={modal.input_text_placeholder}
        editorState={editorState}
        onEditorStateChange={setEditorState}
      />
    </div>
  );
}

export default RichText