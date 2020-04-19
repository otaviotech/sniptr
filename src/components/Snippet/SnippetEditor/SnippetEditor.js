import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import { debounce } from 'debounce';

import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/snippets/javascript';
import 'ace-builds/src-min-noconflict/ext-searchbox';
import 'ace-builds/src-min-noconflict/ext-language_tools';

function SnippetEditor(props) {
  return (
    <AceEditor
      mode="javascript"
      theme="tomorrow"
      width="100%"
      onChange={debounce(props.onChange, props.debounceDelay)}
      value={props.value}
      name="UNIQUE_ID_OF_DIV"
      placeholder={props.placeholder}
      showPrintMargin
      showGutter
      highlightActiveLine
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        fontSize: 16,
        highlightSelectedWord: true,
        // enableEmmet: true,
        maxLines: 10,
        minLines: 10,
        animatedScroll: true,
      }}
    />
  );
}

SnippetEditor.propTypes = {
  onChange: PropTypes.func.isRequired,
  debounceDelay: PropTypes.number,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

SnippetEditor.defaultProps = {
  debounceDelay: 300,
};

export default SnippetEditor;
