import ReactMarkdown from "react-markdown";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// Markdown to HTML. Custom it as you want!
export default function MarkDownPost({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: (props: any) => (
          <h1
            style={{
              fontSize: "2.25em",
              fontWeight: 600,
              paddingTop: "0.2em",
              paddingBottom: "0.6em",
              marginBottom: "0.8em",
              borderBottom: "solid #00000020",
              lineHeight: "1.2em",
            }}
            {...props}
          ></h1>
        ),
        h2: (props: any) => (
          <h2
            style={{
              fontSize: "1.36em",
              fontWeight: 500,
              marginBottom: "0.5em",
            }}
            {...props}
          ></h2>
        ),
        h3: (props: any) => (
          <h3
            style={{
              fontSize: "0.9em",
              fontWeight: 300,
              color: "#71717a",
            }}
            {...props}
          ></h3>
        ),
        pre: (props: any) => (
          <pre
            style={{
              fontSize: "0.875em",
              marginBottom: "2.8em",
              borderRadius: "0.8em",
            }}
            {...props}
          ></pre>
        ),
        code: (props: any) => {
          return (
            <SyntaxHighlighter
              language="typescript"
              style={materialDark}
              customStyle={{
                padding: "2em",
                fontSize: "0.9em",
                borderRadius: "1em",
                lineHeight: "1.25em",
              }}
            >
              {props.children}
            </SyntaxHighlighter>
          );
        },
        p: (props: any) => (
          <p
            style={{ lineHeight: "1.8em", marginBottom: "2em" }}
            {...props}
          ></p>
        ),
        ul: (props: any) => (
          <ul style={{ marginBottom: "1em" }} {...props}></ul>
        ),
        li: (props: any) => (
          <div style={{ lineHeight: "2.0em" }}>
            <span style={{ paddingRight: "0.5em" }}>•</span>
            <span style={{ marginBottom: "0.5em" }} {...props}></span>
          </div>
        ),
        strong: (props: any) => (
          <span style={{ fontWeight: 700 }} {...props}></span>
        ),
        a: (props: any) => (
          <a
            target="_blank"
            style={{
              fontStyle: "italic",
              fontSize: "0.95em",
            }}
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
