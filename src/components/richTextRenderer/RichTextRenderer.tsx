import React from "react";

interface RichTextChild {
    text?: string;
    children?: RichTextChild[];
}

interface RichTextBlock {
    type: "paragraph" | "heading" | "list";
    level?: number; // for heading
    format?: "unordered" | "ordered"; // for list
    children: RichTextChild[];
}

interface RichTextRendererProps {
    content: RichTextBlock[];
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
    const renderChildren = (children: RichTextChild[]): React.ReactNode =>
        children.map((child, idx) => {
            if (child.children && child.children.length > 0) {
                return <React.Fragment key={idx}>{renderChildren(child.children)}</React.Fragment>;
            }
            return <React.Fragment key={idx}>{child.text}</React.Fragment>;
        });

    return (
        <div>
            {content.map((block, index) => {
                switch (block.type) {
                    case "paragraph":
                        return <p key={index}>{renderChildren(block.children)}</p>;

                    case "heading":
                        switch (block.level) {
                            case 1:
                                return <h1 key={index}>{renderChildren(block.children)}</h1>;
                            case 2:
                                return <h2 key={index}>{renderChildren(block.children)}</h2>;
                            case 3:
                                return <h3 key={index}>{renderChildren(block.children)}</h3>;
                            default:
                                return <h4 key={index}>{renderChildren(block.children)}</h4>;
                        }

                    case "list":
                        if (block.format === "unordered") {
                            return (
                                <ul key={index}>
                                    {block.children.map((li, liIndex) => (
                                        <li key={liIndex}>{renderChildren(li.children ?? [])}</li>
                                    ))}
                                </ul>
                            );
                        }
                        if (block.format === "ordered") {
                            return (
                                <ol key={index}>
                                    {block.children.map((li, liIndex) => (
                                        <li key={liIndex}>{renderChildren(li.children ?? [])}</li>
                                    ))}
                                </ol>
                            );
                        }
                        return null;

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default RichTextRenderer;
