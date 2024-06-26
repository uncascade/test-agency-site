// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oaXUEGapRcCGqowHuDEpD8
// Component: 70iF3PuSXG61
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import NavigationBar from "../../NavigationBar"; // plasmic-import: 2P7sajECr50s/component
import ProjectHeader from "../../ProjectHeader"; // plasmic-import: 3bfx_b85LIwJ/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: TYimLntQf16_/component
import ContactSection from "../../ContactSection"; // plasmic-import: YtGQ5t_QmBzd/component
import Footer from "../../Footer"; // plasmic-import: jv_LgadY7Zhn/component
import { useScreenVariants as useScreenVariantsoyplvy8WjIzj } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Oyplvy8WjIZJ/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: oaXUEGapRcCGqowHuDEpD8/projectcss
import sty from "./PlasmicPremiumSaaSDesign.module.css"; // plasmic-import: 70iF3PuSXG61/css

createPlasmicElementProxy;

export const PlasmicPremiumSaaSDesign__VariantProps = new Array();

export const PlasmicPremiumSaaSDesign__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPremiumSaaSDesign__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsoyplvy8WjIzj()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPremiumSaaSDesign.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPremiumSaaSDesign.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPremiumSaaSDesign.pageMetadata.title}
        />

        <meta
          key="description"
          name="description"
          content={PlasmicPremiumSaaSDesign.pageMetadata.description}
        />

        <meta
          key="og:description"
          property="og:description"
          content={PlasmicPremiumSaaSDesign.pageMetadata.description}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicPremiumSaaSDesign.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <ProjectHeader
            data-plasmic-name={"projectHeader"}
            data-plasmic-override={overrides.projectHeader}
            className={classNames("__wab_instance", sty.projectHeader)}
          />

          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__kTjDd)}
            id={"Services"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___7Trb4)}
              displayHeight={"700px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/beginners_guide_website_in_3_minutes/images/wallpaperjpg.jpg",
                fullWidth: 1921,
                fullHeight: 1081,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__s9Tj8)}
            id={"work"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__aI4Ov)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__gNTdD
                )}
              >
                {"The Client."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9SHgK
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__fiTvy)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__urYd
                )}
              >
                {"The Problem."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__u2HBa
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__zqwKh)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__w2PK
                )}
              >
                {"The Solution."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pgrBj
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__qrLuL)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__wJz5L)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img___8NyZl)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/beginners_guide_website_in_3_minutes/images/studentGae18422981280Jpg.jpg",
                    fullWidth: 1280,
                    fullHeight: 853,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__gMel)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__fpmkL)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___1Wgb7)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/beginners_guide_website_in_3_minutes/images/laptopG9B1Ff63691280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div className={classNames(projectcss.all, sty.column__mwB4)}>
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__q6FE1)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/beginners_guide_website_in_3_minutes/images/entrepreneurG23179Fc2C1280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__mnKd)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__rfOj
                  )}
                >
                  {"The Process."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hWoZ
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__yNjRo)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__hSw9X)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__rI1Ei)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/beginners_guide_website_in_3_minutes/images/laptopG9A7A99E251920Jpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__m5GRb)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___9Iho9
                  )}
                >
                  {"The Result."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oqtLw
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__yuvpM)}
              id={"contact"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ohy63)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"See my all other \nprojects."}
                </h2>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___8YGyz)}
              >
                <div className={classNames(projectcss.all, sty.column__ps4PE)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__konul
                    )}
                    image={{
                      src: "/plasmic/beginners_guide_website_in_3_minutes/images/abstractBackgroundJpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1171,
                      aspectRatio: undefined
                    }}
                    link={`/web-visual-design`}
                    title={"Web Visual Design"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__tB6Df)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__w90
                    )}
                    link={`/project-relaunch`}
                    title={"Project Relaunch"}
                  />
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "projectHeader",
    "h2",
    "contactSection",
    "footer"
  ],

  navigationBar: ["navigationBar"],
  projectHeader: ["projectHeader"],
  h2: ["h2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPremiumSaaSDesign__ArgProps,
          internalVariantPropNames: PlasmicPremiumSaaSDesign__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPremiumSaaSDesign__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPremiumSaaSDesign";
  } else {
    func.displayName = `PlasmicPremiumSaaSDesign.${nodeName}`;
  }
  return func;
}

export const PlasmicPremiumSaaSDesign = Object.assign(
  // Top-level PlasmicPremiumSaaSDesign renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    projectHeader: makeNodeComponent("projectHeader"),
    h2: makeNodeComponent("h2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPremiumSaaSDesign
    internalVariantProps: PlasmicPremiumSaaSDesign__VariantProps,
    internalArgProps: PlasmicPremiumSaaSDesign__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Premium SaaS Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPremiumSaaSDesign;
/* prettier-ignore-end */
