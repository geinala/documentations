import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
// @ts-ignore
import asyncApiSpec from "/specs/asyncapi.yaml";
import "@asyncapi/react-component/styles/default.min.css";

export default function EventCatalog() {
  return (
    <Layout
      title="Event Catalog"
      description="Dokumentasi Event Driven Architecture"
    >
      <div className="asyncapi-container">
        <BrowserOnly fallback={<div>Loading Event Documentation...</div>}>
          {() => {
            const AsyncApiComponent =
              require("@asyncapi/react-component").default;

            return (
              <AsyncApiComponent
                schema={asyncApiSpec}
                config={{
                  show: { sidebar: true, info: true },
                }}
              />
            );
          }}
        </BrowserOnly>
      </div>
    </Layout>
  );
}
