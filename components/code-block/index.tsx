import React from "react";
import styles from "./index.module.css";

interface CodeBlockProps {
  type: "maven" | "gradle";
}
// ... existing code ...

const mavenCode = `
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-all</artifactId>
    <version>5.8.33</version>
</dependency>
`;
const mavenCodeHighlight = `<span style="color: #FF00F1">&lt;</span><span style="color: #6DFF1C">dependency</span><span style="color: #FF00F1">&gt;</span>
    <span style="color: #FF00F1">&lt;</span><span style="color: #6DFF1C">groupId</span><span style="color: #FF00F1">&gt;</span><span style="color: #E0DFFF">cn.hutool</span><span style="color: #FF00F1">&lt;/</span><span style="color: #6DFF1C">groupId</span><span style="color: #FF00F1">&gt;</span>
    <span style="color: #FF00F1">&lt;</span><span style="color: #6DFF1C">artifactId</span><span style="color: #FF00F1">&gt;</span><span style="color: #E0DFFF">hutool-all</span><span style="color: #FF00F1">&lt;/</span><span style="color: #6DFF1C">artifactId</span><span style="color: #FF00F1">&gt;</span>
    <span style="color: #FF00F1">&lt;</span><span style="color: #6DFF1C">version</span><span style="color: #FF00F1">&gt;</span><span style="color: #E0DFFF">5.8.33</span><span style="color: #FF00F1">&lt;/</span><span style="color: #6DFF1C">version</span><span style="color: #FF00F1">&gt;</span>
<span style="color: #FF00F1">&lt;/</span><span style="color: #6DFF1C">dependency</span><span style="color: #FF00F1">&gt;</span>`;

const gradleCode = `
implementation 'cn.hutool:hutool-all:5.8.33'
`;
const gradleCodeHighlight = `<span style="color: #6DFF1C">implementation</span> '<span style="color: #e5c07b">cn.hutool</span>:<span style="color: #61afef">hutool-all</span>:<span style="color: #ff69b4">5.8.33</span>'`;

export const CodeBlock: React.FC<CodeBlockProps> = ({ type }) => {
  const highlightCode =
    type === "maven" ? mavenCodeHighlight : gradleCodeHighlight;
  return (
    <div className={styles.wrapper}>
      <div className={styles.codeBlock}>
        <div className={styles.codeHeader}>
          <div className={styles.windowButtons}>
            <div className={styles.closeButton} />
            <div className={styles.minimizeButton} />
            <div className={styles.maximizeButton} />
          </div>
        </div>
        <div className={styles.code}>
          <div dangerouslySetInnerHTML={{ __html: highlightCode }} />
        </div>
        <button
          className={styles.copyButton}
          onClick={() => {
            const code = type === "maven" ? mavenCode : gradleCode;
            navigator.clipboard.writeText(code);
          }}
        >
          一键复制
        </button>
      </div>
      <div className={styles.description}>
        <span>在项目的</span>
        {type === "maven" ? (
          <>
            <span className={styles.lineCode}>pom.xml</span>
            <span>的</span>
            <span className={styles.lineCode}>dependencies</span>
          </>
        ) : null}
        <span>中加入以上内容</span>
      </div>
    </div>
  );
};
