import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';    //转换为HTML 
import draftToMarkdown from 'draftjs-to-markdown';  //标记语言
import {Card} from 'antd';
import './index.scss'

class Editor2 extends Component {
  constructor(props){
    super(props);
    this.state={
      editorState:'',
      editorContent:''
    }
  }
  //编辑状态改变
  onEditorStateChange=(editorState)=> {
    console.log('aa');
    this.setState({
      editorState:editorState
    })
  }
  //获取内容
  onEditorChange=(editorContent)=> {
    console.log('cc');
    this.setState({
      editorContent:editorContent
    })
  }
  render() {
    const {editorState,editorContent} = this.state;
    return (
      <div>
          <Editor
            editorState={editorState}
            //toolbarClassName="toolbarClassName"
            //wrapperClassName="wrapperClassName"
            editorClassName="demo-editor"
            //编辑状态改变
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
              //内容改变
             onContentStateChange={this.onEditorChange}
          />

            <Card title="同步转换HTML" bordered={true}>
                <pre>{draftToHtml(editorContent)}</pre>
            </Card>
            <Card title="同步转换MarkDown" bordered={true}>
                <pre style={{whiteSpace: 'pre-wrap'}}>{draftToMarkdown(editorContent)}</pre>
            </Card>
            <Card title="同步转换JSON" bordered={true}>
                <pre style={{whiteSpace: 'normal'}}>{JSON.stringify(editorContent)}</pre>
            </Card>
                    
      </div>
    );
  }
}

export default Editor2;