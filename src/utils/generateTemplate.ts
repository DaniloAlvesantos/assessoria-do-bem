interface generateTemplateProps {
  html: string;
  attrs: {
    label: string;
    value: string;
  }[];
}

export type generateTemplateAttrs = generateTemplateProps["attrs"];

export const generateTemplate = ({ attrs, html }: generateTemplateProps) => {
  if (!html || !attrs) return;

  let currentHtml = html;

  attrs.forEach((attr) => {
    const regex = new RegExp(`{{${attr.label}}}`, "g");
    currentHtml = currentHtml.replace(regex, attr.value);
  });

  return currentHtml;
};
