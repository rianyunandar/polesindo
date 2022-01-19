import React from "react";
import styles from "./TextBlock.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import { Button } from "../../elements";
import { useCustomState } from "../../../state/state";

export default () => {
  const [state, actions] = useCustomState();
  return (
    <Layout col="2" padding>
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <span className={styles.subtitle} style={{ color: THEME.color }}>
            Tentang Kami
          </span>
          <h2>Polesindo.com</h2>
          <p className={styles.paragraph}>
            penyedia layanan jasa poles lantai dari beragam material seperti
            marmer, teraso, granit, batu andesit, lantai tegel, acian semen,
            lantai beton yang berpengalaman dan telah dipercaya oleh banyak
            pelanggan kami.
          </p>
          <p className={styles.paragraph}>
            <b>
              Kami berkomitmen untuk memberikan pelayanan terbaik dan
              profesional dalam hal memoles, membersihkan, serta proses
              kristalisasi lantai
            </b>
          </p>
          <div className={styles.btn_box}>
            <Button to="/blog/post_4" hoverType="solid-gray-tb">
              Hubungi Kami
            </Button>
            <Button
              click={() => actions.toogleVideo()}
              type="solid-gray-tb"
              hoverType="solid-color-tb"
              after="&#xf105;"
            />
          </div>
        </div>
      </article>
      <article className={styles.wrapper}>
        <figure className={styles.image}>
          <div
            className={styles.rectangle}
            style={{ borderColor: THEME.color }}
          />
          <div className={styles.photo}>
            <i
              onClick={() => actions.toogleVideo()}
              className="las la-caret-right"
              style={{ borderColor: THEME.color, color: THEME.color }}
            />
            <span
              style={{
                background:
                  "url(" +
                  state.data.header_bgs.about_video_poster +
                  ") center/cover",
              }}
            />
          </div>
        </figure>
      </article>
    </Layout>
  );
};
