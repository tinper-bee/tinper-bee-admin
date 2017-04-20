import React, { Component } from 'react';
import { Row } from 'tinper-bee';
import {Editor, EditorState, RichUtils} from 'draft-js';

import 'draft-js/dist/Draft.css';

class MyEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    _onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }
    render() {
        return (
            <Row>
                <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </Row>

        );
    }
}

export default MyEditor;