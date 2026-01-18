import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import AsyncApiComponent from "@asyncapi/react-component";
import "@asyncapi/react-component/styles/default.min.css";

export default function EventsPage() {
  const [spec, setSpec] = useState<string | null>(null);

  useEffect(() => {
    fetch("/asyncapi/asyncapi.yaml")
      .then((res) => res.text())
      .then(setSpec);
  }, []);

  return (
    <Layout title="Events Documentation">
      <div style={{ margin: "0 auto", width: "100%" }}>
        {spec ? (
          <AsyncApiComponent
            schema={spec}
            config={{ show: { sidebar: true } }}
          />
        ) : (
          <p>Loading AsyncAPI specification…</p>
        )}
      </div>
    </Layout>
  );
}
