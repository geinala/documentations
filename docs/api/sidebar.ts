import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/health-check",
      label: "Health check",
      className: "api-method get",
    },
  ],
};

export default sidebar.apisidebar;
