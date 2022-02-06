import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import {
  Services,
  // Services3,
  // Portfolio2,
  Slider,
  Features2,
  Contacts2,
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>poles lantai indonesia</title>
        <link rel="canonical" href="http://polesindo.com/" />
        <meta
          name="keywords"
          content="jasa poles lantai, poles lantai, poles lantai permeter, tukang poles lantai, harga poles lantai , harga poles lantai permeter, jasa poles lantai lampung, jasa poles lantai palembang, jasa poles lantai jabotabek"
        />
      </Helmet>
      <Slider data={state.data.posts} />
      {/* <Services3 data={state.data.salepoint} /> */}
      <Features2 data={state.data.features2} />
      <Services data={state.data.services} />
      {/* <Portfolio2 data={state.data.portfolio} /> */}
      <Contacts2 />
    </Fragment>
  );
};
