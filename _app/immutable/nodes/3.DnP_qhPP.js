import { s as safe_not_equal, d as detach, o as destroy_each, e as append_hydration, c as insert_hydration, p as attr, q as set_style, u as head_selector, f as claim_element, j as claim_space, g as children, k as element, l as space, n as noop, v as get_svelte_dataset } from "../chunks/DhipIWGX.js";
import { S as SvelteComponent, i as init, d as destroy_component, t as transition_out, a as transition_in, c as check_outros, m as mount_component, b as claim_component, e as create_component, g as group_outros } from "../chunks/w1gIoQsl.js";
import { D as DATA, B as BlurFade, e as ensure_array_like, P as ProjectCard } from "../chunks/Ed4Y6JXo.js";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
}
function create_default_slot_2(ctx) {
  let div2;
  let textContent = `<div class="space-y-2"><div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">DATA STORY ARCHIVE</div> <h2 class="pt-4 subtitle text-3xl font-bold tracking-tighter sm:text-4xl svelte-j9rvhw">My Previous Work</h2> <p class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed svelte-j9rvhw"></p></div>`;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div2) !== "svelte-8w6259") div2.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div2, "class", "flex flex-col items-center justify-center space-y-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_default_slot_1(ctx) {
  let projectcard;
  let t;
  let current;
  projectcard = new ProjectCard({
    props: {
      href: (
        /*archive*/
        ctx[0].href
      ),
      title: (
        /*archive*/
        ctx[0].title
      ),
      publisher: (
        /*archive*/
        ctx[0].publisher
      ),
      description: (
        /*archive*/
        ctx[0].description
      ),
      dates: (
        /*archive*/
        ctx[0].dates
      ),
      tags: (
        /*archive*/
        ctx[0].technologies
      ),
      image: (
        /*archive*/
        ctx[0].image
      ),
      video: (
        /*archive*/
        ctx[0].video
      ),
      links: (
        /*archive*/
        ctx[0].links
      )
    }
  });
  return {
    c() {
      create_component(projectcard.$$.fragment);
      t = space();
    },
    l(nodes) {
      claim_component(projectcard.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m(target, anchor) {
      mount_component(projectcard, target, anchor);
      insert_hydration(target, t, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current) return;
      transition_in(projectcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projectcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(projectcard, detaching);
    }
  };
}
function create_each_block(ctx) {
  let blurfade;
  let current;
  blurfade = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY * 1.5 + /*id*/
      ctx[2] * 0.05,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(blurfade.$$.fragment);
    },
    l(nodes) {
      claim_component(blurfade.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(blurfade, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const blurfade_changes = {};
      if (dirty & /*$$scope*/
      8) {
        blurfade_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade.$set(blurfade_changes);
    },
    i(local) {
      if (current) return;
      transition_in(blurfade.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(blurfade.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(blurfade, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let textContent = `<p class="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-relaxed svelte-j9rvhw"><span class="font-semibold cursor-pointer custom-underline svelte-j9rvhw" style="font-family:Cairo Play, serif"><a href="/">←  Eve (Yi) Lu</a></span></p>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-l5afj0") div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-col space-y-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_fragment(ctx) {
  let link0;
  let link1;
  let link2;
  let meta0;
  let meta1;
  let meta2;
  let meta3;
  let meta4;
  let meta5;
  let meta6;
  let meta7;
  let meta8;
  let meta9;
  let meta10;
  let meta11;
  let meta12;
  let meta13;
  let meta14;
  let meta15;
  let t0;
  let main;
  let section;
  let div1;
  let blurfade0;
  let t1;
  let div0;
  let t2;
  let blurfade1;
  let current;
  document.title = DATA.name;
  blurfade0 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  let each_value = ensure_array_like(DATA.archives);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  blurfade1 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      link0 = element("link");
      link1 = element("link");
      link2 = element("link");
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      meta5 = element("meta");
      meta6 = element("meta");
      meta7 = element("meta");
      meta8 = element("meta");
      meta9 = element("meta");
      meta10 = element("meta");
      meta11 = element("meta");
      meta12 = element("meta");
      meta13 = element("meta");
      meta14 = element("meta");
      meta15 = element("meta");
      t0 = space();
      main = element("main");
      section = element("section");
      div1 = element("div");
      create_component(blurfade0.$$.fragment);
      t1 = space();
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      create_component(blurfade1.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-17192nl", document.head);
      link0 = claim_element(head_nodes, "LINK", { rel: true, href: true });
      link1 = claim_element(head_nodes, "LINK", { rel: true, href: true, crossorigin: true });
      link2 = claim_element(head_nodes, "LINK", { href: true, rel: true });
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { property: true, content: true });
      meta2 = claim_element(head_nodes, "META", { property: true, content: true });
      meta3 = claim_element(head_nodes, "META", { property: true, content: true });
      meta4 = claim_element(head_nodes, "META", { property: true, content: true });
      meta5 = claim_element(head_nodes, "META", { property: true, content: true });
      meta6 = claim_element(head_nodes, "META", { property: true, content: true });
      meta7 = claim_element(head_nodes, "META", { property: true, content: true });
      meta8 = claim_element(head_nodes, "META", { name: true, content: true });
      meta9 = claim_element(head_nodes, "META", { name: true, content: true });
      meta10 = claim_element(head_nodes, "META", { name: true, content: true });
      meta11 = claim_element(head_nodes, "META", { name: true, content: true });
      meta12 = claim_element(head_nodes, "META", { name: true, content: true });
      meta13 = claim_element(head_nodes, "META", { name: true, content: true });
      meta14 = claim_element(head_nodes, "META", { name: true, content: true });
      meta15 = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true, style: true });
      var main_nodes = children(main);
      section = claim_element(main_nodes, "SECTION", { id: true });
      var section_nodes = children(section);
      div1 = claim_element(section_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(blurfade0.$$.fragment, div1_nodes);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      claim_component(blurfade1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      section_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link0, "rel", "preconnect");
      attr(link0, "href", "https://fonts.googleapis.com");
      attr(link1, "rel", "preconnect");
      attr(link1, "href", "https://fonts.gstatic.com");
      attr(link1, "crossorigin", "");
      attr(link2, "href", "https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200..1000&display=swap");
      attr(link2, "rel", "stylesheet");
      attr(meta0, "name", "description");
      attr(meta0, "content", DATA.description);
      attr(meta1, "property", "og:title");
      attr(meta1, "content", DATA.name);
      attr(meta2, "property", "og:description");
      attr(meta2, "content", DATA.description);
      attr(meta3, "property", "og:url");
      attr(meta3, "content", DATA.url);
      attr(meta4, "property", "og:site_name");
      attr(meta4, "content", DATA.name);
      attr(meta5, "property", "og:image");
      attr(meta5, "content", DATA.img);
      attr(meta6, "property", "og:locale");
      attr(meta6, "content", "en_US");
      attr(meta7, "property", "og:type");
      attr(meta7, "content", "website");
      attr(meta8, "name", "robots");
      attr(meta8, "content", "index, follow");
      attr(meta9, "name", "googlebot");
      attr(meta9, "content", "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1");
      attr(meta10, "name", "twitter:title");
      attr(meta10, "content", DATA.name);
      attr(meta11, "name", "twitter:card");
      attr(meta11, "content", "summary_large_image");
      attr(meta12, "name", "twitter:image");
      attr(meta12, "content", DATA.img);
      attr(meta13, "name", "twitter:description");
      attr(meta13, "content", DATA.description);
      attr(meta14, "name", "google-site-verification");
      attr(meta14, "content", "your-google-verification-code");
      attr(meta15, "name", "yandex-verification");
      attr(meta15, "content", "your-yandex-verification-code");
      attr(div0, "class", "w-full grid grid-cols-1 gap-5 sm:grid-cols-2");
      attr(div1, "class", "w-full space-y-12");
      attr(section, "id", "projects");
      attr(main, "class", "flex min-h-[100dvh] flex-col space-y-10 svelte-j9rvhw");
      set_style(main, "align-items", "center");
    },
    m(target, anchor) {
      append_hydration(document.head, link0);
      append_hydration(document.head, link1);
      append_hydration(document.head, link2);
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      append_hydration(document.head, meta3);
      append_hydration(document.head, meta4);
      append_hydration(document.head, meta5);
      append_hydration(document.head, meta6);
      append_hydration(document.head, meta7);
      append_hydration(document.head, meta8);
      append_hydration(document.head, meta9);
      append_hydration(document.head, meta10);
      append_hydration(document.head, meta11);
      append_hydration(document.head, meta12);
      append_hydration(document.head, meta13);
      append_hydration(document.head, meta14);
      append_hydration(document.head, meta15);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, section);
      append_hydration(section, div1);
      mount_component(blurfade0, div1, null);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      append_hydration(div1, t2);
      mount_component(blurfade1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const blurfade0_changes = {};
      if (dirty & /*$$scope*/
      8) {
        blurfade0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade0.$set(blurfade0_changes);
      if (dirty & /*BLUR_FADE_DELAY*/
      0) {
        each_value = ensure_array_like(DATA.archives);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const blurfade1_changes = {};
      if (dirty & /*$$scope*/
      8) {
        blurfade1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade1.$set(blurfade1_changes);
    },
    i(local) {
      if (current) return;
      transition_in(blurfade0.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(blurfade1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(blurfade0.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(blurfade1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(main);
      }
      detach(link0);
      detach(link1);
      detach(link2);
      detach(meta0);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      detach(meta4);
      detach(meta5);
      detach(meta6);
      detach(meta7);
      detach(meta8);
      detach(meta9);
      detach(meta10);
      detach(meta11);
      detach(meta12);
      detach(meta13);
      detach(meta14);
      detach(meta15);
      destroy_component(blurfade0);
      destroy_each(each_blocks, detaching);
      destroy_component(blurfade1);
    }
  };
}
let BLUR_FADE_DELAY = 0.04;
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
//# sourceMappingURL=3.DnP_qhPP.js.map
