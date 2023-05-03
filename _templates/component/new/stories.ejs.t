---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name)%>.stories.js
---

import React from "react";
import <%= name %> from '.'
export default {
  title: "UI 组件/<%= name %>",
  component: <%= name %>
}
export const Default = ()=><<%= name %>>默认</<%= name %>>