import React, { Component } from 'react';
import { Row, Button } from 'tinper-bee';
import {Editor, EditorState, Modifier, RichUtils} from 'draft-js';

import 'draft-js/dist/Draft.css';

const colorStyleMap = {
    red: {
        color: 'rgba(255, 0, 0, 1.0)',
    },
    orange: {
        color: 'rgba(255, 127, 0, 1.0)',
    },
    yellow: {
        color: 'rgba(180, 180, 0, 1.0)',
    },
    green: {
        color: 'rgba(0, 180, 0, 1.0)',
    },
    blue: {
        color: 'rgba(0, 0, 255, 1.0)',
    },
    indigo: {
        color: 'rgba(75, 0, 130, 1.0)',
    },
    violet: {
        color: 'rgba(127, 0, 255, 1.0)',
    },
};

const styles = {
    root: {
        fontFamily: '\'Georgia\', serif',
        fontSize: 14,
        padding: 20,
        width: 600,
    },
    editor: {
        borderTop: '1px solid #ddd',
        cursor: 'text',
        fontSize: 16,
        marginTop: 20,
        minHeight: 400,
        paddingTop: 20,
    },
    controls: {
        fontFamily: '\'Helvetica\', sans-serif',
        fontSize: 14,
        marginBottom: 10,
        userSelect: 'none',
    },
    styleButton: {
        color: '#999',
        cursor: 'pointer',
        marginRight: 16,
        padding: '2px 0',
    },
};


class MyEditor extends Component{
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.focus = () => this.refs.editor.focus();
        this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);
    }

    _toggleColor(toggledColor) {
        const {editorState} = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState, color) => {
                return Modifier.removeInlineStyle(contentState, selection, color)
            }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );

        const currentStyle = editorState.getCurrentInlineStyle();

        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => {
                return RichUtils.toggleInlineStyle(state, color);
            }, nextEditorState);
        }

        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }

        this.onChange(nextEditorState);
    }

    handleKeyCommand(command) {
        //console.log(command);
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
    _onInsertSoftNewLine = () => {
        this.onChange(RichUtils.insertSoftNewline(this.state.editorState));
    }

    onTab = (e) => {
        console.log(arguments);
        const newState = RichUtils.onTab(e, this.state.editorState, 4);

        this.onChange(newState);

    }
    onBackspace = () => {
        console.log(arguments);
        const newState = RichUtils.onBackspace(this.state.editorState);
        this.onChange(newState);
    }
    onDelete = () => {
        console.log(arguments);
        const newState = RichUtils.onDelete(this.state.editorState);
        this.onChange(newState);
    }
    getCurrentBlockType = () => {
        console.log(RichUtils.getCurrentBlockType(this.state.editorState));
    }
    render() {
        return (
            <Row>
                <Button onClick={this._onBoldClick.bind(this)}>Bold</Button>
                <Button onClick={this._onInsertSoftNewLine.bind(this)}>插入一行</Button>
                <Button onClick={this.getCurrentBlockType.bind(this)}>类型</Button>
                <ColorControls
                    editorState={this.state.editorState}
                    onToggle={this.toggleColor}
                />
                <div style={styles.editor} onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    customStyleMap={colorStyleMap}
                    handleKeyCommand={this.handleKeyCommand}
                    onTab={this.onTab}
                    onChange={this.onChange}
                    onBackspace={ this.onBackspace }
                    onDelete={ this.onDelete }
                />
                </div>
            </Row>

        );
    }
}


class StyleButton extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let style;
        if (this.props.active) {
            style = {...styles.styleButton, ...colorStyleMap[this.props.style]};
        } else {
            style = styles.styleButton;
        }

        return (
            <span style={style} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
        );
    }
}

var COLORS = [
    {label: 'Red', style: 'red'},
    {label: 'Orange', style: 'orange'},
    {label: 'Yellow', style: 'yellow'},
    {label: 'Green', style: 'green'},
    {label: 'Blue', style: 'blue'},
    {label: 'Indigo', style: 'indigo'},
    {label: 'Violet', style: 'violet'},
];

const ColorControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div style={styles.controls}>
            {COLORS.map(type =>
                <StyleButton
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

export default MyEditor;