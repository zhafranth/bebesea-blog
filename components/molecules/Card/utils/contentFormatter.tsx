import {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
} from "html-react-parser";

const hasImage = (node: Element) => {
  const stack: Element[] = [node];

  while (stack.length > 0) {
    const { name, children } = stack.pop() ?? {};
    if (name === "img") return true;
    if (children) stack.push(...(children as any));
  }

  return false;
};

export const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    const node = domNode as Element;

    // REMOVE STYLE P
    if (node.name === "p") {
      return <p>{domToReact(node.children as DOMNode[], options)}</p>;
    }

    // REMOVE STYLE P
    if (node.attribs?.dir === "ltr") {
      return <p>{domToReact(node.children as DOMNode[], options)}</p>;
    }

    // REMOVE BR ITEM
    if (
      node.children?.length > 0 &&
      (node?.children[0] as Element)?.name === "br"
    ) {
      return <></>;
    }

    // REMOVE STYLE SPAN
    if ((domNode as Element).name === "span") {
      return (
        <span>
          {domToReact((domNode as Element).children as DOMNode[], options)}
        </span>
      );
    }

    // REMOVE IMAGE
    if (hasImage(domNode as Element)) {
      return <></>;
    }
  },
};

export const detailOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    const node = domNode as Element;

    // REMOVE STYLE P
    if (node.name === "p") {
      return <p>{domToReact(node.children as DOMNode[], options)}</p>;
    }

    // REMOVE STYLE P
    if (node.attribs?.dir === "ltr") {
      return <p>{domToReact(node.children as DOMNode[], options)}</p>;
    }

    // REMOVE STYLE SPAN
    if ((domNode as Element).name === "span") {
      return (
        <span>
          {domToReact((domNode as Element).children as DOMNode[], options)}
        </span>
      );
    }
  },
};
