import React from "react";
import "./Strategies.scss";
import { Divider } from "antd";
import BaseButton from "../../components/Button/Button";

const Strategies = () => {
  return (
    <div className="section-strategies">
      <h2 className="heading-strategies">
        Qualities & Customizable Website Optimization Strategies
      </h2>
      <div className="strategies">
        <Divider className="divider" />
        <h3 className="strategy-heading">Find your target keywords</h3>
        <p className="strategy-text">
          Select keywords aligned with your target market and use them to return
          search engine results. As you research keywords, don’t forget about
          user intent.
        </p>
        <Divider className="divider" />
        <h3 className="strategy-heading">Build better backlinks</h3>
        <p className="strategy-text">
          Backlinks from other highly-ranked sites can help organically improve
          your standing in search results. Best bet? Create and submit relevant,
          market-focused content to industry news or knowledge sites.
        </p>
        <Divider className="divider" />
        <h3 className="strategy-heading">Optimize your on-page content</h3>
        <p className="strategy-text">
          Great content relies on relevance. Any blog post, video, podcast, or
          digital resource you create should focus on your target market.
        </p>
        <Divider className="divider" />
        <h3 className="strategy-heading">Speed up your website</h3>
        <p className="strategy-text">
          Website speed is a critical component of the user experience — on any
          device. Google began incorporating mobile page speed in 2018 as a
          factor in search rankings, making improved performance a factor in
          favorable results.
        </p>

        <div className="btn-strategy">
          <BaseButton type="primary" text="Explore All Strategies" />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
