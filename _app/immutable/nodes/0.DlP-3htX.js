import { s as safe_not_equal, n as noop, d as detach, e as append_hydration, u as head_selector, x as empty, z as onMount, p as attr, c as insert_hydration, f as claim_element, k as element, D as claim_html_tag, H as HtmlTagHydration, E as create_slot, F as update_slot_base, G as get_all_dirty_from_scope, I as get_slot_changes, j as claim_space, g as children, l as space } from "../chunks/DhipIWGX.js";
import { S as SvelteComponent, i as init, d as destroy_component, t as transition_out, a as transition_in, m as mount_component, b as claim_component, e as create_component } from "../chunks/w1gIoQsl.js";
import { u as userPrefersMode, t as theme, d as derivedMode, s as systemPrefersMode, a as disableTransitions, b as themeColors, c as darkClassNames, l as lightClassNames, m as modeStorageKey, e as themeStorageKey } from "../chunks/C_i4H-yG.js";
import { g as globals } from "../chunks/OenZPaBa.js";
const prerender = true;
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, null, safe_not_equal, {});
  }
}
function setMode(mode) {
  userPrefersMode.set(mode);
}
function setTheme(theme$1) {
  theme.set(theme$1);
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode, themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const theme2 = localStorage.getItem("mode-watcher-theme") || defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2);
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2);
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2);
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2);
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme2) {
    rootEl.setAttribute("data-theme", theme2);
    localStorage.setItem("mode-watcher-theme", theme2);
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const { document: document_1 } = globals;
function create_if_block_1(ctx) {
  let meta;
  let meta_content_value;
  return {
    c() {
      meta = element("meta");
      this.h();
    },
    l(nodes) {
      meta = claim_element(nodes, "META", { name: true, content: true });
      this.h();
    },
    h() {
      attr(meta, "name", "theme-color");
      attr(meta, "content", meta_content_value = /*themeColors*/
      ctx[0].dark);
    },
    m(target, anchor) {
      insert_hydration(target, meta, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*themeColors*/
      1 && meta_content_value !== (meta_content_value = /*themeColors*/
      ctx2[0].dark)) {
        attr(meta, "content", meta_content_value);
      }
    },
    d(detaching) {
      if (detaching) {
        detach(meta);
      }
    }
  };
}
function create_else_block(ctx) {
  let html_tag;
  let raw_value = `<script>(` + setInitialMode.toString() + `)(` + JSON.stringify(
    /*initConfig*/
    ctx[2]
  ) + `);<\/script>`;
  let html_anchor;
  return {
    c() {
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      html_tag = claim_html_tag(nodes, false);
      html_anchor = empty();
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(html_anchor);
        html_tag.d();
      }
    }
  };
}
function create_if_block(ctx) {
  let html_tag;
  let raw_value = `<script nonce=${/*trueNonce*/
  ctx[1]}>(` + setInitialMode.toString() + `)(` + JSON.stringify(
    /*initConfig*/
    ctx[2]
  ) + `);<\/script>`;
  let html_anchor;
  return {
    c() {
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      html_tag = claim_html_tag(nodes, false);
      html_anchor = empty();
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*trueNonce*/
      2 && raw_value !== (raw_value = `<script nonce=${/*trueNonce*/
      ctx2[1]}>(` + setInitialMode.toString() + `)(` + JSON.stringify(
        /*initConfig*/
        ctx2[2]
      ) + `);<\/script>`)) html_tag.p(raw_value);
    },
    d(detaching) {
      if (detaching) {
        detach(html_anchor);
        html_tag.d();
      }
    }
  };
}
function create_fragment$1(ctx) {
  let if_block0_anchor;
  let if_block1_anchor;
  let if_block0 = (
    /*themeColors*/
    ctx[0] && create_if_block_1(ctx)
  );
  function select_block_type(ctx2, dirty) {
    if (
      /*trueNonce*/
      ctx2[1]
    ) return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  return {
    c() {
      if (if_block0) if_block0.c();
      if_block0_anchor = empty();
      if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1nen96w", document_1.head);
      if (if_block0) if_block0.l(head_nodes);
      if_block0_anchor = empty();
      if_block1.l(head_nodes);
      if_block1_anchor = empty();
      head_nodes.forEach(detach);
    },
    m(target, anchor) {
      if (if_block0) if_block0.m(document_1.head, null);
      append_hydration(document_1.head, if_block0_anchor);
      if_block1.m(document_1.head, null);
      append_hydration(document_1.head, if_block1_anchor);
    },
    p(ctx2, [dirty]) {
      if (
        /*themeColors*/
        ctx2[0]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block0) if_block0.d(detaching);
      detach(if_block0_anchor);
      if_block1.d(detaching);
      detach(if_block1_anchor);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let trueNonce;
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  let { disableTransitions: disableTransitions$1 = true } = $$props;
  let { darkClassNames: darkClassNames$1 = ["dark"] } = $$props;
  let { lightClassNames: lightClassNames$1 = [] } = $$props;
  let { defaultTheme = "" } = $$props;
  let { nonce = "" } = $$props;
  let { themeStorageKey: themeStorageKey$1 = "mode-watcher-theme" } = $$props;
  let { modeStorageKey: modeStorageKey$1 = "mode-watcher-mode" } = $$props;
  onMount(() => {
    const unsubscriber = derivedMode.subscribe(() => {
    });
    systemPrefersMode.tracking(track);
    systemPrefersMode.query();
    const localStorageMode = "light";
    setMode(localStorageMode);
    localStorage.setItem(getModeStorageKey(), "light");
    document.documentElement.setAttribute("data-theme", "light");
    setTheme("light");
    localStorage.setItem(getThemeStorageKey(), "light");
    return () => {
      unsubscriber();
    };
  });
  const initConfig = defineConfig({
    defaultMode,
    themeColors: themeColors$1,
    darkClassNames: darkClassNames$1,
    lightClassNames: lightClassNames$1,
    defaultTheme,
    modeStorageKey: modeStorageKey$1,
    themeStorageKey: themeStorageKey$1
  });
  $$self.$$set = ($$props2) => {
    if ("track" in $$props2) $$invalidate(3, track = $$props2.track);
    if ("defaultMode" in $$props2) $$invalidate(4, defaultMode = $$props2.defaultMode);
    if ("themeColors" in $$props2) $$invalidate(0, themeColors$1 = $$props2.themeColors);
    if ("disableTransitions" in $$props2) $$invalidate(5, disableTransitions$1 = $$props2.disableTransitions);
    if ("darkClassNames" in $$props2) $$invalidate(6, darkClassNames$1 = $$props2.darkClassNames);
    if ("lightClassNames" in $$props2) $$invalidate(7, lightClassNames$1 = $$props2.lightClassNames);
    if ("defaultTheme" in $$props2) $$invalidate(8, defaultTheme = $$props2.defaultTheme);
    if ("nonce" in $$props2) $$invalidate(9, nonce = $$props2.nonce);
    if ("themeStorageKey" in $$props2) $$invalidate(10, themeStorageKey$1 = $$props2.themeStorageKey);
    if ("modeStorageKey" in $$props2) $$invalidate(11, modeStorageKey$1 = $$props2.modeStorageKey);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*disableTransitions*/
    32) {
      disableTransitions.set(disableTransitions$1);
    }
    if ($$self.$$.dirty & /*themeColors*/
    1) {
      themeColors.set(themeColors$1);
    }
    if ($$self.$$.dirty & /*darkClassNames*/
    64) {
      darkClassNames.set(darkClassNames$1);
    }
    if ($$self.$$.dirty & /*lightClassNames*/
    128) {
      lightClassNames.set(lightClassNames$1);
    }
    if ($$self.$$.dirty & /*modeStorageKey*/
    2048) {
      modeStorageKey.set(modeStorageKey$1);
    }
    if ($$self.$$.dirty & /*themeStorageKey*/
    1024) {
      themeStorageKey.set(themeStorageKey$1);
    }
    if ($$self.$$.dirty & /*nonce*/
    512) {
      $$invalidate(1, trueNonce = typeof window === "undefined" ? nonce : "");
    }
  };
  return [
    themeColors$1,
    trueNonce,
    initConfig,
    track,
    defaultMode,
    disableTransitions$1,
    darkClassNames$1,
    lightClassNames$1,
    defaultTheme,
    nonce,
    themeStorageKey$1,
    modeStorageKey$1
  ];
}
class Mode_watcher extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      track: 3,
      defaultMode: 4,
      themeColors: 0,
      disableTransitions: 5,
      darkClassNames: 6,
      lightClassNames: 7,
      defaultTheme: 8,
      nonce: 9,
      themeStorageKey: 10,
      modeStorageKey: 11
    });
  }
}
function create_fragment(ctx) {
  let modewatcher;
  let t0;
  let div;
  let t1;
  let navbar;
  let current;
  modewatcher = new Mode_watcher({});
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  navbar = new Navbar({});
  return {
    c() {
      create_component(modewatcher.$$.fragment);
      t0 = space();
      div = element("div");
      if (default_slot) default_slot.c();
      t1 = space();
      create_component(navbar.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(modewatcher.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(navbar.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24");
    },
    m(target, anchor) {
      mount_component(modewatcher, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      append_hydration(div, t1);
      mount_component(navbar, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(modewatcher.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(navbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modewatcher.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(navbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(div);
      }
      destroy_component(modewatcher, detaching);
      if (default_slot) default_slot.d(detaching);
      destroy_component(navbar);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const prerender2 = true;
  setMode("light");
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2) $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [prerender2, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { prerender: 0 });
  }
  get prerender() {
    return this.$$.ctx[0];
  }
}
export {
  Layout as component,
  _layout as universal
};
//# sourceMappingURL=0.DlP-3htX.js.map
