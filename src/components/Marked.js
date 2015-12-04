import React         from 'react';
import marked        from 'marked';
import highlight     from 'highlight.js';
import 'highlight.js/styles/default.css';

const defaultOptions = {
  gfm:         true,
  tables:      true,
  breaks:      false,
  pedantic:    false,
  sanitize:    false,
  smartLists:  true,
  smartypants: false,
  highlight: (code, language) => (
    language ? highlight.highlight(language, code, true).value : code
  )
};

export default function(props) {
  const { source } = props;
  const options = {
    ...defaultOptions,
    props
  };
  const parsed = marked(source, options);
  return (
    <div dangerouslySetInnerHTML={{__html: parsed}} />
  );
}
