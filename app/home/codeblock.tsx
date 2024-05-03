'use client'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-clojure";
import "ace-builds/src-noconflict/mode-cobol";
import "ace-builds/src-noconflict/mode-coffee";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-dart";
import "ace-builds/src-noconflict/mode-dockerfile";
import "ace-builds/src-noconflict/mode-elixir";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-groovy";
import "ace-builds/src-noconflict/mode-haskell";
import "ace-builds/src-noconflict/mode-haxe";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-julia";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-lisp";
import "ace-builds/src-noconflict/mode-lua";
import "ace-builds/src-noconflict/mode-makefile";
import "ace-builds/src-noconflict/mode-matlab";
import "ace-builds/src-noconflict/mode-objectivec";
import "ace-builds/src-noconflict/mode-pascal";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-scala";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-zig";


import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/ext-language_tools";

// SyntaxHighlighter.registerLanguage('javascript', js);

interface Props {
    code: string; 
}

const CodeBlock: React.FC<Props> = ({code}) => {
  return (
    <AceEditor
      className=""
      height="240px"
      readOnly={false}
      value={code}
      mode="python"
      theme="github_dark"
      fontSize="18px"
      highlightActiveLine={false}
      setOptions={{
        enableLiveAutocompletion: false,
        showLineNumbers: true,
        tabSize: 2,
        scrollPastEnd: false,
      }}
    />
  );
};

export default CodeBlock;