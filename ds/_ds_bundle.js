/* @ds-bundle: {"format":4,"namespace":"DoneshOlyaieDesignSystem_f301ad","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"MarginLabel","sourcePath":"components/core/MarginLabel.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ComparisonTable","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"DisplayTitle","sourcePath":"components/editorial/DisplayTitle.jsx"},{"name":"Footnote","sourcePath":"components/editorial/Footnote.jsx"},{"name":"FootnoteMark","sourcePath":"components/editorial/Footnote.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"ShiftPair","sourcePath":"components/editorial/ShiftPair.jsx"},{"name":"Takeaway","sourcePath":"components/editorial/Takeaway.jsx"},{"name":"PhotoPlate","sourcePath":"components/media/PhotoPlate.jsx"},{"name":"TextureField","sourcePath":"components/media/TextureField.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ce27258ac50a","components/core/Eyebrow.jsx":"ac7d80a3e512","components/core/MarginLabel.jsx":"67cdbbe7e0f3","components/core/Rule.jsx":"e12859a347f9","components/core/Tag.jsx":"f76c7e38647a","components/data/ComparisonTable.jsx":"d4d4fe1adcfa","components/data/StatBlock.jsx":"425a4b410155","components/editorial/DisplayTitle.jsx":"52f080925c08","components/editorial/Footnote.jsx":"2e797b520c1c","components/editorial/PullQuote.jsx":"e130b8cdbfb4","components/editorial/ShiftPair.jsx":"f21f9058eed5","components/editorial/Takeaway.jsx":"15ec5c9c16c4","components/media/PhotoPlate.jsx":"4d95e0827761","components/media/TextureField.jsx":"2440c62eafec","export/personal-site/about.jsx":"56c5e90d4ca6","export/personal-site/casestudy.jsx":"2dac6d16b294","export/personal-site/home.jsx":"13a7fe9c90ce","export/personal-site/shell.jsx":"29ccd9643267","export/personal-site/work.jsx":"89a9e46d10fe","ui_kits/personal_site/about.jsx":"0c511e5261f0","ui_kits/personal_site/casestudy.jsx":"fc727e28f482","ui_kits/personal_site/home.jsx":"45a57e938858","ui_kits/personal_site/shell.jsx":"29ccd9643267","ui_kits/personal_site/work.jsx":"89a9e46d10fe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DoneshOlyaieDesignSystem_f301ad = window.DoneshOlyaieDesignSystem_f301ad || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--font-mono)",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "var(--track-label)",
  borderRadius: "var(--radius-none)",
  border: "var(--hair) solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background var(--dur-fast) var(--ease-cut), color var(--dur-fast) var(--ease-cut), transform var(--dur-instant) var(--ease-cut)",
  whiteSpace: "nowrap",
  appearance: "none"
};
const SIZES = {
  sm: {
    fontSize: "var(--size-micro)",
    padding: "7px 14px"
  },
  md: {
    fontSize: "var(--size-label)",
    padding: "11px 20px"
  },
  lg: {
    fontSize: "var(--size-caption)",
    padding: "15px 28px"
  }
};
function skin(variant, hover) {
  switch (variant) {
    case "ink":
      return hover ? {
        background: "var(--cobalt)",
        color: "var(--ink-000)",
        borderColor: "var(--cobalt)"
      } : {
        background: "var(--ink-900)",
        color: "var(--ink-000)",
        borderColor: "var(--ink-900)"
      };
    case "outline":
      return hover ? {
        background: "var(--ink-900)",
        color: "var(--ink-000)",
        borderColor: "var(--ink-900)"
      } : {
        background: "transparent",
        color: "var(--text-primary)",
        borderColor: "var(--line-hair)"
      };
    case "acid":
      return hover ? {
        background: "var(--ink-900)",
        color: "var(--acid)",
        borderColor: "var(--ink-900)"
      } : {
        background: "var(--acid)",
        color: "var(--ink-900)",
        borderColor: "var(--ink-900)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: hover ? "var(--cobalt)" : "var(--text-primary)",
        borderColor: "transparent",
        padding: "4px 0",
        boxShadow: `inset 0 -1px 0 0 ${hover ? "var(--cobalt)" : "var(--line-hair)"}`
      };
    default:
      return {};
  }
}
function Button({
  children,
  variant = "ink",
  size = "md",
  href,
  disabled = false,
  trailing,
  leading,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const Tag = href ? "a" : "button";
  const composed = {
    ...BASE,
    ...SIZES[size],
    ...skin(variant, hover && !disabled),
    ...(disabled ? {
      opacity: 0.32,
      cursor: "not-allowed"
    } : null),
    ...(down && !disabled ? {
      transform: "translateY(1px)"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: composed
  }), leading, /*#__PURE__*/React.createElement("span", null, children), trailing);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ink: "var(--text-primary)",
  inverse: "var(--ink-000)",
  cobalt: "var(--cobalt)",
  muted: "var(--text-muted)"
};
function Eyebrow({
  children,
  underline = true,
  align = "center",
  tone = "ink",
  size = "md",
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: size === "sm" ? "var(--size-micro)" : "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: TONES[tone] || tone,
      textAlign: align,
      display: "block",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      paddingBottom: underline ? "5px" : 0,
      borderBottom: underline ? `var(--rule) solid ${TONES[tone] || tone}` : "none"
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/MarginLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MarginLabel({
  children,
  side = "left",
  tone = "ink",
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : tone === "muted" ? "var(--text-muted)" : "var(--text-primary)";
  const tick = {
    display: "block",
    width: "9px",
    height: 0,
    borderTop: `var(--hair) solid ${color}`,
    alignSelf: "center"
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      writingMode: "vertical-rl",
      transform: side === "left" ? "rotate(180deg)" : "none",
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--size-micro)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: tick
  }), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    style: tick
  }));
}
Object.assign(__ds_scope, { MarginLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MarginLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WEIGHTS = {
  hair: "var(--hair)",
  rule: "var(--rule)",
  heavy: "var(--rule-heavy)"
};
function Rule({
  weight = "hair",
  tone = "ink",
  style = "solid",
  inset = 0,
  vertical = false,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : tone === "soft" ? "var(--line-soft)" : "var(--line-hair)";
  const thickness = WEIGHTS[weight] || weight;
  return /*#__PURE__*/React.createElement("hr", _extends({}, rest, {
    style: {
      border: "0",
      margin: 0,
      alignSelf: "stretch",
      ...(vertical ? {
        width: 0,
        borderLeft: `${thickness} ${style} ${color}`,
        marginBlock: inset
      } : {
        height: 0,
        borderTop: `${thickness} ${style} ${color}`,
        marginInline: inset,
        width: "100%"
      }),
      ...rest.style
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  paper: {
    background: "var(--ink-000)",
    color: "var(--ink-900)"
  },
  ink: {
    background: "var(--ink-900)",
    color: "var(--ink-000)"
  },
  acid: {
    background: "var(--acid)",
    color: "var(--ink-900)"
  },
  teal: {
    background: "var(--teal)",
    color: "var(--ink-900)"
  },
  coral: {
    background: "var(--coral)",
    color: "var(--ink-900)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-primary)",
    boxShadow: "inset 0 0 0 1px var(--line-hair)"
  }
};
const TILTS = {
  none: "0deg",
  hair: "var(--tilt-hair)",
  sm: "var(--tilt-sm)",
  md: "var(--tilt-md)",
  lg: "var(--tilt-lg)"
};
function Tag({
  children,
  tone = "paper",
  tilt = "none",
  shape = "box",
  size = "md",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: size === "sm" ? "var(--size-label)" : "var(--size-caption)",
      lineHeight: 1.3,
      padding: size === "sm" ? "3px 7px" : "5px 10px",
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-none)",
      transform: `rotate(${TILTS[tilt] || tilt})`,
      ...TONES[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ComparisonTable({
  columns,
  rows,
  tone = "ink",
  caption,
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : "var(--text-primary)";
  const line = tone === "inverse" ? "var(--ink-000)" : "var(--line-hair)";
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      width: "100%",
      ...style
    }
  }), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      color
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: "left",
      padding: "var(--space-3) var(--space-5) var(--space-3) 0",
      borderTop: `var(--hair) solid ${line}`,
      borderBottom: `var(--hair) solid ${line}`,
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((cell, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    style: {
      verticalAlign: "top",
      padding: "var(--space-5) var(--space-5) var(--space-5) 0",
      borderBottom: `var(--hair) solid ${line}`,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body)",
      whiteSpace: "pre-line"
    }
  }, cell)))))), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  lg: "var(--size-display-lg)",
  md: "var(--size-display-md)",
  sm: "var(--size-display-sm)"
};
function StatBlock({
  value,
  label,
  source,
  size = "md",
  tone = "ink",
  align = "left",
  font = "display",
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : tone === "cobalt" ? "var(--cobalt)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
      textAlign: align,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: font === "mono" ? "var(--font-mono)" : "var(--font-display)",
      fontWeight: font === "mono" ? 700 : 400,
      fontSize: SIZES[size] || size,
      lineHeight: 0.92,
      letterSpacing: "var(--track-display)",
      color
    }
  }, value), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-body)",
      color,
      maxWidth: "26ch"
    }
  }, label) : null, source ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--size-micro)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: tone === "inverse" ? "var(--ink-300)" : "var(--text-muted)"
    }
  }, source) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DisplayTitle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xl: "var(--size-display-xl)",
  lg: "var(--size-display-lg)",
  md: "var(--size-display-md)",
  sm: "var(--size-display-sm)",
  xs: "var(--size-headline)"
};
const FAMILIES = {
  display: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    letterSpacing: "var(--track-display)",
    lineHeight: "var(--leading-display)"
  },
  serif: {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    letterSpacing: "var(--track-tight)",
    lineHeight: "var(--leading-tight)"
  },
  sans: {
    fontFamily: "var(--font-sans)",
    fontWeight: 400,
    letterSpacing: "var(--track-tight)",
    lineHeight: "var(--leading-snug)"
  },
  fat: {
    fontFamily: "var(--font-fat)",
    fontWeight: 400,
    letterSpacing: "0",
    lineHeight: 1.1
  },
  marker: {
    fontFamily: "var(--font-marker)",
    fontWeight: 400,
    letterSpacing: "0.01em",
    lineHeight: 1.12
  }
};
const TONES = {
  ink: "var(--text-primary)",
  inverse: "var(--ink-000)",
  cobalt: "var(--cobalt)",
  coral: "var(--coral)",
  teal: "var(--teal)",
  acid: "var(--acid)",
  muted: "var(--text-muted)"
};
function DisplayTitle({
  children,
  size = "lg",
  font = "display",
  tone = "ink",
  align = "left",
  italic = false,
  balance = true,
  as = "h2",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      margin: 0,
      fontSize: SIZES[size] || size,
      color: TONES[tone] || tone,
      textAlign: align,
      fontStyle: italic ? "italic" : "normal",
      textWrap: balance ? "balance" : "pretty",
      ...FAMILIES[font],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { DisplayTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DisplayTitle.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Footnote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Footnote({
  n,
  children,
  tone = "ink",
  size = "sm",
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-200)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("p", _extends({}, rest, {
    style: {
      margin: 0,
      display: "flex",
      gap: "0.5em",
      fontFamily: "var(--font-sans)",
      fontSize: size === "xs" ? "var(--size-micro)" : "var(--size-caption)",
      lineHeight: 1.45,
      color,
      ...style
    }
  }), n != null ? /*#__PURE__*/React.createElement("sup", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      lineHeight: 1
    }
  }, n) : null, /*#__PURE__*/React.createElement("span", null, children));
}
function FootnoteMark({
  n,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("sup", _extends({}, rest, {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "0.62em",
      ...rest.style
    }
  }), n);
}
Object.assign(__ds_scope, { Footnote, FootnoteMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Footnote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  lg: "var(--size-display-sm)",
  md: "var(--size-headline)",
  sm: "var(--size-title)"
};
function PullQuote({
  children,
  attribution,
  size = "md",
  tone = "ink",
  quoted = true,
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : tone === "cobalt" ? "var(--cobalt)" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: SIZES[size] || size,
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--track-tight)",
      color,
      textWrap: "pretty"
    }
  }, quoted ? "\u201C" : "", children, quoted ? "\u201D" : ""), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--size-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color
    }
  }, attribution) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ShiftPair.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  lg: "var(--size-display-lg)",
  md: "var(--size-display-md)",
  sm: "var(--size-display-sm)",
  xs: "var(--size-title)"
};
const CONNECTOR = {
  lg: "var(--size-display-sm)",
  md: "var(--size-title)",
  sm: "var(--size-subtitle)",
  xs: "var(--size-body)"
};
function ShiftPair({
  from,
  to,
  size = "md",
  tone = "ink",
  align = "left",
  layout = "stacked",
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : tone === "cobalt" ? "var(--cobalt)" : "var(--text-primary)";
  const lede = {
    fontFamily: "var(--font-sans)",
    fontSize: CONNECTOR[size],
    fontWeight: 400,
    lineHeight: 1.1,
    color
  };
  const term = {
    fontFamily: "var(--font-display)",
    fontSize: SIZES[size],
    lineHeight: "var(--leading-display)",
    letterSpacing: "var(--track-display)",
    color
  };
  const row = {
    display: "flex",
    alignItems: "baseline",
    gap: "0.35em"
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: "flex",
      flexDirection: layout === "inline" ? "row" : "column",
      alignItems: layout === "inline" ? "baseline" : align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
      gap: layout === "inline" ? "0.4em" : "0.18em",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: lede
  }, "From"), /*#__PURE__*/React.createElement("span", {
    style: term
  }, from)), /*#__PURE__*/React.createElement("span", {
    style: row
  }, /*#__PURE__*/React.createElement("span", {
    style: lede
  }, "to"), /*#__PURE__*/React.createElement("span", {
    style: term
  }, to)));
}
Object.assign(__ds_scope, { ShiftPair });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ShiftPair.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Takeaway.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Takeaway({
  children,
  label = "Takeaway",
  variant = "box",
  width = 560,
  tone = "ink",
  style,
  ...rest
}) {
  const color = tone === "inverse" ? "var(--ink-000)" : "var(--ink-900)";
  const text = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--size-body-sm)",
    lineHeight: "var(--leading-body)",
    color,
    margin: 0,
    textWrap: "pretty"
  };
  const slug = {
    fontFamily: "var(--font-mono)",
    fontWeight: 700,
    fontSize: "var(--size-label)",
    letterSpacing: "var(--track-label)",
    textTransform: "uppercase",
    color
  };
  if (variant === "starburst") {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      style: {
        width,
        aspectRatio: "396 / 436",
        backgroundImage: "var(--shape-starburst)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "grid",
        placeItems: "center",
        ...style
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "52%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: slug
    }, label), /*#__PURE__*/React.createElement("p", {
      style: text
    }, children)));
  }
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width,
      border: `var(--hair) solid ${color}`,
      padding: "var(--space-5) var(--space-5)",
      background: variant === "filled" ? "var(--acid)" : "transparent",
      ...style
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: text
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...slug,
      marginRight: "0.4em"
    }
  }, label, ":"), children));
}
Object.assign(__ds_scope, { Takeaway });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Takeaway.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoPlate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TILTS = {
  none: "0deg",
  hair: "var(--tilt-hair)",
  sm: "var(--tilt-sm)",
  md: "var(--tilt-md)",
  lg: "var(--tilt-lg)",
  xl: "var(--tilt-xl)"
};
function PhotoPlate({
  src,
  alt = "",
  tilt = "none",
  width,
  height,
  ratio,
  caption,
  tag,
  shadow = "plate",
  fit = "cover",
  style,
  imgStyle,
  ...rest
}) {
  const shadowVal = shadow === "none" ? "none" : shadow === "lifted" ? "var(--shadow-plate-lifted)" : "var(--shadow-plate)";
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      margin: 0,
      width,
      display: "inline-flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      transform: `rotate(${TILTS[tilt] || tilt})`,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      lineHeight: 0,
      boxShadow: shadowVal,
      background: "var(--ink-100)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: "block",
      width: "100%",
      height: height || (ratio ? undefined : "100%"),
      aspectRatio: ratio,
      objectFit: fit,
      ...imgStyle
    }
  }), tag ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-10px",
      bottom: "12px"
    }
  }, tag) : null), caption ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-caption)",
      lineHeight: 1.35,
      color: "var(--text-muted)"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { PhotoPlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoPlate.jsx", error: String((e && e.message) || e) }); }

// components/media/TextureField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TEXTURES = {
  halftone: {
    backgroundImage: "var(--tex-halftone-fine)",
    backgroundSize: "190px 235px",
    backgroundRepeat: "repeat"
  },
  "halftone-cyan": {
    backgroundImage: "var(--tex-halftone-cyan)",
    backgroundSize: "110px 130px",
    backgroundRepeat: "repeat"
  },
  "halftone-duotone": {
    backgroundImage: "var(--tex-halftone-duotone)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  grain: {
    backgroundImage: "var(--tex-grain)",
    backgroundSize: "420px 320px",
    backgroundRepeat: "repeat"
  },
  mesh: {
    backgroundImage: "var(--tex-mesh)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  moire: {
    backgroundImage: "var(--tex-moire)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  "dither-aerial": {
    backgroundImage: "var(--tex-dither-aerial)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  "dither-portrait": {
    backgroundImage: "var(--tex-dither-portrait)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  grid: {
    backgroundImage: "var(--tex-warped-grid)",
    backgroundSize: "165px 220px",
    backgroundRepeat: "repeat",
    backgroundColor: "var(--ink-900)"
  },
  chaos: {
    backgroundImage: "var(--gradient-chaos)"
  },
  graphite: {
    backgroundImage: "var(--gradient-graphite)"
  },
  split: {
    backgroundImage: "var(--gradient-split)"
  },
  ink: {
    background: "var(--ink-800)"
  },
  paper: {
    background: "var(--ink-000)"
  }
};
function TextureField({
  texture = "halftone",
  children,
  height,
  width = "100%",
  padding = 0,
  dim = 0,
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      position: "relative",
      width,
      height,
      padding,
      overflow: "hidden",
      ...TEXTURES[texture],
      ...style
    }
  }), dim ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      background: `rgba(13,12,12,${dim})`,
      pointerEvents: "none"
    }
  }) : null, children != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%"
    }
  }, children) : null);
}
Object.assign(__ds_scope, { TextureField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/TextureField.jsx", error: String((e && e.message) || e) }); }

// export/personal-site/about.jsx
try { (() => {
const ROLES = [["Brand Director", "Petlibro", "2026 —", "Brand strategy, portfolio positioning and go-to-market for a global Series B pet-tech company. Built the organic social strategy, creator programme and measurement framework from nothing, and hired the team to run them."], ["Head of Strategy", "MullenLowe US", "2024 – 2026", "$100MM+ across defense, financial services, CPG, consumer healthcare and spirits. Led holding-company-level RFPs worth $500MM+ combined."], ["Director, Marketing", "Keurig Dr Pepper", "2021 – 2024", "Introduced and scaled the in-house marketing function for a multi-brand portfolio. Co-chaired the data transformation task force."], ["EVP / Group Planning Director", "Deutsch Los Angeles", "2020 – 2021", "Nintendo, Keurig Dr Pepper, Lowe's, PetSmart, Georgia Pacific, Bayer, California Milk Advisory Board."], ["Group Planning Director", "David&Goliath", "2014 – 2020", "Kia, Universal Studios, U.S. Department of the Interior, Jack in the Box, Coca-Cola Emerging Brands, E&J Gallo Spirits, LG Mobile."]];
const SCHOOLS = [["MBA, with distinction", "Ross School of Business, University of Michigan"], ["MFA, Dramatic Criticism", "Yale University"], ["BA, Political Science & Theatre", "University of Southern California"]];
function About() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    as: "h1"
  }, "A dramaturg who learned to read a P&L."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      marginTop: 32,
      maxWidth: "58ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Fifteen years leading $100MM+ portfolios in categories where the lawyers get a vote \u2014 healthcare, financial services, spirits, defense, automotive. I build challenger positioning inside incumbent businesses, and I like the constraint."), /*#__PURE__*/React.createElement("p", null, "I trained as a critic before I trained as a marketer, which mostly means I am suspicious of anything that sounds good and can\u2019t be evidenced. The method is the same every time: read everything, watch what people actually do, then say the uncomfortable thing out loud before someone else does.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ink",
    href: "mailto:dolyaie@gmail.com",
    trailing: "\u2192"
  }, "Email me"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline"
  }, "Download CV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.grainSphere,
    alt: "A grainy sphere on a gradient ground",
    style: {
      width: "100%",
      objectFit: "cover",
      boxShadow: "var(--shadow-plate)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: window.__resources.starburst,
    alt: "",
    style: {
      position: "absolute",
      right: -22,
      top: -18,
      width: 148,
      transform: "rotate(-8deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 12,
      top: 36,
      width: 96,
      textAlign: "center",
      font: "700 10px/1.35 var(--font-mono)",
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, "Available for", /*#__PURE__*/React.createElement("br", null), "advisory work")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page-warm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-11) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, ROLES.map(([role, org, years, note], i) => /*#__PURE__*/React.createElement("div", {
    key: role,
    style: {
      display: "grid",
      gridTemplateColumns: "300px 1fr 140px",
      gap: 32,
      alignItems: "start",
      padding: "28px 0",
      borderBottom: "var(--hair) solid var(--line-hair)",
      borderTop: i === 0 ? "var(--hair) solid var(--line-hair)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 24px/1.2 var(--font-display)",
      letterSpacing: "var(--track-display)"
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/1.5 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--cobalt)",
      marginTop: 6
    }
  }, org)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 16px/1.5 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 var(--font-mono)",
      textAlign: "right",
      letterSpacing: ".06em"
    }
  }, years)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, SCHOOLS.map(([d, s]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      padding: "18px 0",
      borderBottom: "var(--hair) solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 22px/1.3 var(--font-serif)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 15px/1.4 var(--font-sans)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "Also"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 26
    }
  }, ["MullenLowe Global Representative", "IPG Rise Committee Chair", "KDP Data Transformation Task Force Co-Chair", "KDP LGBTQ+ ERG Mentor", "AdColor Entrepreneurship Mentor", "LA LGBT Center"].map((t, i) => /*#__PURE__*/React.createElement(DS.Tag, {
    key: t,
    tone: "outline",
    tilt: ["hair", "none", "sm"][i % 3]
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    font: "fat",
    size: "xs",
    tone: "coral",
    italic: true
  }, "Ask me about the carnival."))))));
}
function Contact() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    "data-theme": "ink",
    style: {
      background: "var(--ink-800)",
      color: "var(--ink-000)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-12) var(--page-margin)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.marbledDisc,
    alt: "A marbled disc reading: a beautiful content strategy does not hide an ugly company truth",
    style: {
      width: "100%",
      maxWidth: 420
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left",
    tone: "inverse"
  }, "Get in touch"), /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    tone: "inverse",
    style: {
      marginTop: 32
    }
  }, "Tell me the thing you can\u2019t say in the all-hands."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.9 var(--font-mono)",
      color: "var(--ink-200)",
      marginTop: 40
    }
  }, "dolyaie@gmail.com", /*#__PURE__*/React.createElement("br", null), "310.597.1095", /*#__PURE__*/React.createElement("br", null), "Los Angeles, CA"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "acid",
    href: "mailto:dolyaie@gmail.com",
    trailing: "\u2192"
  }, "Start a conversation"))))));
}
Object.assign(window, {
  About,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/personal-site/about.jsx", error: String((e && e.message) || e) }); }

// export/personal-site/casestudy.jsx
try { (() => {
function CaseStudy({
  id,
  go
}) {
  const w = WORK.find(x => x.id === id) || WORK[0];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "sm",
    leading: "\u2190",
    onClick: () => go("work")
  }, "Back to work")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: w.img,
    alt: "",
    style: {
      width: "100%",
      height: 640,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      right: 24,
      top: 100,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(DS.ShiftPair, {
    from: w.from,
    to: w.to,
    size: "sm",
    tone: "inverse"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, w.kind), /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "sm",
    font: "sans",
    as: "h1"
  }, w.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, w.client, " \xB7 ", w.year, " \xB7 Role: lead strategist"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      margin: 0
    }
  }, w.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      margin: 0
    }
  }, "The brief arrived as a media question and left as a company question. We started with the evidence \u2014 articles, op-eds, history, theory, data \u2014 then went looking for the part of the culture that had already changed its mind and hadn\u2019t told anyone."), /*#__PURE__*/React.createElement(DS.Takeaway, {
    width: "100%"
  }, "Individuals are building their own rituals, not borrowing yours. The work is to add value, not annoyance.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page-warm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-11) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "The shift"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48,
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(DS.StatBlock, {
    size: "sm",
    value: "662%",
    label: "increase in sales at Entireworld since March",
    source: "Vogue Business"
  }), /*#__PURE__*/React.createElement(DS.StatBlock, {
    size: "sm",
    value: "80%",
    label: "rise in searches for \u2018DIY\u2019 year over year",
    source: "Google Trends"
  }), /*#__PURE__*/React.createElement(DS.StatBlock, {
    size: "sm",
    value: "1 in 5",
    label: "of the workforce could be entirely remote after the pandemic",
    source: "Upwork"
  })))), /*#__PURE__*/React.createElement(Section, {
    label: "What we made"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DS.PhotoPlate, {
    src: window.__resources.bedroomWarm,
    width: 300,
    ratio: "3 / 4",
    tilt: "sm",
    alt: "An unmade bed in morning light",
    tag: /*#__PURE__*/React.createElement(DS.Tag, {
      tilt: "hair"
    }, "New domesticity")
  }), /*#__PURE__*/React.createElement(DS.PhotoPlate, {
    src: window.__resources.coveredCar,
    width: 340,
    ratio: "4 / 3",
    tilt: "md",
    alt: "A car under a blue cover"
  }), /*#__PURE__*/React.createElement(DS.PhotoPlate, {
    src: window.__resources.raisedFistBw,
    width: 240,
    ratio: "3 / 4",
    tilt: "hair",
    shadow: "lifted",
    alt: "A raised fist at a protest"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 260px",
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(DS.PullQuote, {
    size: "sm",
    attribution: "Audre Lorde"
  }, "Caring for myself is not self-indulgence. It is self-preservation, and that is an act of political warfare.")))), /*#__PURE__*/React.createElement(Section, {
    label: "Summary"
  }, /*#__PURE__*/React.createElement(DS.ComparisonTable, {
    columns: ["New Mindset", "Meaning", "Brand Application"],
    rows: [["Integration", "Values\n+\nActions", "Champion progress,\nnot perfection"], ["Work-Life Boundaries", "Intention\n+\nRituals", "Add value,\nnot annoyance"], ["Self-Aware", "Self\n+\nCommunity", "Be thoughtful,\nnot transactional"], ["Counsel Culture", "Expectations\n+\nReality", "Normalize evolution,\nnot ego"], ["Strategic", "Instincts\n+\nLifestyle", "Offer inspiration,\nnot aspiration"]],
    caption: "(You might want to screenshot this.)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ink",
    onClick: () => go("work"),
    trailing: "\u2192"
  }, "Next project"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    href: "mailto:dolyaie@gmail.com"
  }, "Ask about this one"))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/personal-site/casestudy.jsx", error: String((e && e.message) || e) }); }

// export/personal-site/home.jsx
try { (() => {
const WORK = [{
  id: "culture-in-chaos",
  n: "01",
  title: "A Guide to Culture in Chaos",
  client: "The Projects",
  year: "2020",
  kind: "Cultural Foresight",
  img: window.__resources.busStop,
  from: "Optimization",
  to: "Integration",
  blurb: "A 30-page trend report on what happens to consumer culture when the rat race stops."
}, {
  id: "petlibro",
  n: "02",
  title: "Building a Category Before the Category Exists",
  client: "Petlibro",
  year: "2026",
  kind: "Brand Strategy",
  img: window.__resources.houseRed,
  from: "Gadgets",
  to: "Guardianship",
  blurb: "Brand narrative, GTM and a from-scratch social and creator programme for a Series B pet-tech portfolio."
}, {
  id: "regulated",
  n: "03",
  title: "Breakthrough Inside the Guardrails",
  client: "MullenLowe US",
  year: "2025",
  kind: "Integrated Campaigns",
  img: window.__resources.coveredCar,
  from: "Compliance",
  to: "Craft",
  blurb: "$100MM+ across defense, financial services, consumer healthcare and spirits — all of it regulated, none of it boring."
}, {
  id: "in-house",
  n: "04",
  title: "An In-House Agency, From Zero",
  client: "Keurig Dr Pepper",
  year: "2024",
  kind: "Organisational Design",
  img: window.__resources.bedroomWarm,
  from: "Spend",
  to: "System",
  blurb: "Standing up in-house marketing for a multi-brand portfolio, then co-chairing the data transformation that measured it."
}];
function WorkRow({
  item,
  go,
  index
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#" + item.id,
    onClick: e => {
      e.preventDefault();
      go("case", item.id);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "64px 1fr 220px 150px 90px",
      gap: 24,
      alignItems: "center",
      padding: "26px 0",
      borderBottom: "var(--hair) solid var(--line-hair)",
      borderTop: index === 0 ? "var(--hair) solid var(--line-hair)" : "none",
      textDecoration: "none",
      color: hover ? "var(--cobalt)" : "var(--text-primary)",
      transition: "color var(--dur-fast) var(--ease-cut)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 13px/1 var(--font-mono)",
      letterSpacing: ".08em"
    }
  }, item.n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 32px/1.1 var(--font-display)",
      letterSpacing: "var(--track-display)"
    }
  }, item.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 15px/1.4 var(--font-sans)",
      color: hover ? "var(--cobalt)" : "var(--text-secondary)"
    }
  }, item.client), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, item.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 13px/1 var(--font-mono)",
      textAlign: "right"
    }
  }, hover ? "→" : item.year), hover ? /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: "",
    style: {
      position: "absolute",
      right: 130,
      top: -34,
      width: 168,
      height: 120,
      objectFit: "cover",
      transform: "rotate(-3.5deg)",
      boxShadow: "var(--shadow-plate-lifted)",
      pointerEvents: "none"
    }
  }) : null);
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "clamp(380px, 42vw, 560px)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.busStop,
    alt: "Two strangers waiting at a bus stop",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--page-margin)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      font: "400 76px/1.02 var(--font-display)",
      letterSpacing: "var(--track-display)",
      maxWidth: "15ch",
      textShadow: "0 2px 24px rgba(13,12,12,.45)"
    }
  }, "I find the why behind the what."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      font: "400 20px/1.5 var(--font-sans)",
      maxWidth: "52ch",
      marginTop: 22,
      textShadow: "0 2px 18px rgba(13,12,12,.55)"
    }
  }, "Brand strategy, go-to-market and integrated campaigns for companies operating in categories where the rules are written down."))), /*#__PURE__*/React.createElement(Section, {
    label: "Selected Work"
  }, WORK.map((w, i) => /*#__PURE__*/React.createElement(WorkRow, {
    key: w.id,
    item: w,
    go: go,
    index: i
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    onClick: () => go("work"),
    trailing: "\u2192"
  }, "The full index"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-chaos)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-11) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "How I work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 56,
      marginTop: "var(--space-8)"
    }
  }, [["Research", "Articles, op-eds, history, theory, data."], ["Observation", "Culture, media, memes, anecdotes, attitudes."], ["Insight", "The—why—behind—the—what."]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderTop: "1.5px solid var(--ink-900)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 34px/1.1 var(--font-display)",
      letterSpacing: "var(--track-display)",
      marginTop: 14
    }
  }, v)))))), /*#__PURE__*/React.createElement(Section, {
    label: "Currently"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Brand Director at Petlibro, reporting to the CEO \u2014 brand strategy, portfolio positioning and go-to-market for a global pet-tech company shipping smart hardware faster than most people ship slides."), /*#__PURE__*/React.createElement("p", null, "Before that: Head of Strategy at MullenLowe US, Director of Marketing at Keurig Dr Pepper, EVP/Group Planning Director at Deutsch LA, and Group Planning Director at David&Goliath. Fifteen years, roughly four industries, one recurring question."), /*#__PURE__*/React.createElement(DS.Footnote, null, "MBA, Michigan Ross \xB7 MFA Dramatic Criticism, Yale \xB7 BA, USC")), /*#__PURE__*/React.createElement(DS.Takeaway, {
    width: "100%",
    label: "Point of view"
  }, "Most brand problems are company problems wearing a nicer coat. A beautiful content strategy does not hide an ugly company truth."))));
}
Object.assign(window, {
  Home,
  WORK,
  WorkRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/personal-site/home.jsx", error: String((e && e.message) || e) }); }

// export/personal-site/shell.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
const DS = window.DoneshOlyaieDesignSystem_f301ad;
const NAV = [["work", "Work"], ["writing", "Writing"], ["about", "About"]];
function Header({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--surface-page)",
      borderBottom: "var(--hair) solid var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "18px var(--page-margin)",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      font: "300 24px/1 var(--font-sans)",
      letterSpacing: ".02em",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, "Donesh Olyaie", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      verticalAlign: "super"
    }
  }, "*")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "baseline"
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      font: "700 12px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      paddingBottom: 4,
      color: route === id ? "var(--cobalt)" : "var(--text-primary)",
      borderBottom: route === id ? "1.5px solid var(--cobalt)" : "1.5px solid transparent"
    }
  }, label)), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    variant: "ink",
    onClick: () => go("contact")
  }, "Get in touch"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "var(--hair) solid var(--line-hair)",
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-9) var(--page-margin) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 34px/1.08 var(--font-display)",
      letterSpacing: "var(--track-display)",
      maxWidth: "16ch"
    }
  }, "If humans are evolving, how are industries?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "acid",
    trailing: "\u2192",
    href: "mailto:dolyaie@gmail.com"
  }, "Start a conversation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.9 var(--font-mono)",
      color: "var(--text-secondary)"
    }
  }, "dolyaie@gmail.com", /*#__PURE__*/React.createElement("br", null), "310.597.1095", /*#__PURE__*/React.createElement("br", null), "Los Angeles, CA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, NAV.concat([["contact", "Contact"]]).map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      font: "400 14px/1.6 var(--font-sans)",
      color: "var(--text-primary)",
      textDecoration: "none",
      borderBottom: "1px solid transparent",
      alignSelf: "flex-start"
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--page-margin) var(--space-7)",
      font: "700 10px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Brand strategy \xB7 Marketing leadership \xB7 Go-to-market"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026")));
}
function Section({
  label,
  children,
  pad = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: pad ? "var(--space-11) var(--page-margin)" : 0
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, label)) : null, children);
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  DS,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/personal-site/shell.jsx", error: String((e && e.message) || e) }); }

// export/personal-site/work.jsx
try { (() => {
const FILTERS = ["All", "Brand Strategy", "Cultural Foresight", "Integrated Campaigns", "Organisational Design"];
function WorkIndex({
  go
}) {
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? WORK : WORK.filter(w => w.kind === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    as: "h1"
  }, "Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      cursor: "pointer",
      border: "var(--hair) solid var(--line-hair)",
      borderRadius: 0,
      padding: "8px 14px",
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      background: filter === f ? "var(--ink-900)" : "transparent",
      color: filter === f ? "var(--ink-000)" : "var(--text-primary)",
      transition: "background var(--dur-fast) var(--ease-cut), color var(--dur-fast) var(--ease-cut)"
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "72px 56px",
      marginTop: "var(--space-10)"
    }
  }, list.map((w, i) => /*#__PURE__*/React.createElement("a", {
    key: w.id,
    href: "#" + w.id,
    onClick: e => {
      e.preventDefault();
      go("case", w.id);
    },
    style: {
      textDecoration: "none",
      color: "var(--text-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: w.img,
    alt: "",
    style: {
      width: "100%",
      height: 340,
      objectFit: "cover",
      transform: `rotate(${i % 2 ? "1.8deg" : "-1.8deg"})`,
      boxShadow: "var(--shadow-plate)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -12,
      bottom: 18
    }
  }, /*#__PURE__*/React.createElement(DS.Tag, {
    tilt: i % 2 ? "hair" : "sm"
  }, w.kind))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, w.client, " \xB7 ", w.year), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 34px/1.08 var(--font-display)",
      letterSpacing: "var(--track-display)",
      marginTop: 10
    }
  }, w.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.45 var(--font-serif)",
      marginTop: 10,
      color: "var(--text-secondary)"
    }
  }, w.blurb))))), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 19px/1.5 var(--font-serif)",
      color: "var(--text-muted)",
      marginTop: 40
    }
  }, "Nothing filed under that. Yet.") : null));
}
function Writing() {
  const PIECES = [["Counsel culture is the only accountability that scales", "Essay", "2026"], ["Comfort was never the trend. Control was.", "Note", "2025"], ["What a dramaturg knows that a strategist forgets", "Essay", "2025"], ["Screen time is inevitable. Attention is not.", "Note", "2024"], ["On briefing in regulated categories", "Field guide", "2024"]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    as: "h1"
  }, "Writing"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)"
    }
  }, PIECES.map(([t, kind, year], i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 160px 70px",
      gap: 24,
      alignItems: "baseline",
      padding: "24px 0",
      borderBottom: "var(--hair) solid var(--line-hair)",
      borderTop: i === 0 ? "var(--hair) solid var(--line-hair)" : "none",
      textDecoration: "none",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 28px/1.2 var(--font-serif)",
      letterSpacing: "var(--track-tight)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 13px/1 var(--font-mono)",
      textAlign: "right"
    }
  }, year)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(DS.PullQuote, {
    size: "sm",
    attribution: "Guy Debord, The Society of the Spectacle"
  }, "The decline of being into having, and having into merely appearing."), /*#__PURE__*/React.createElement(DS.TextureField, {
    texture: "moire",
    height: 220
  }))));
}
Object.assign(window, {
  WorkIndex,
  Writing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/personal-site/work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal_site/about.jsx
try { (() => {
const ROLES = [["Brand Director", "Petlibro", "2026 —", "Brand strategy, portfolio positioning and go-to-market for a global Series B pet-tech company. Built the organic social strategy, creator programme and measurement framework from nothing, and hired the team to run them."], ["Head of Strategy", "MullenLowe US", "2024 – 2026", "$100MM+ across defense, financial services, CPG, consumer healthcare and spirits. Led holding-company-level RFPs worth $500MM+ combined."], ["Director, Marketing", "Keurig Dr Pepper", "2021 – 2024", "Introduced and scaled the in-house marketing function for a multi-brand portfolio. Co-chaired the data transformation task force."], ["EVP / Group Planning Director", "Deutsch Los Angeles", "2020 – 2021", "Nintendo, Keurig Dr Pepper, Lowe's, PetSmart, Georgia Pacific, Bayer, California Milk Advisory Board."], ["Group Planning Director", "David&Goliath", "2014 – 2020", "Kia, Universal Studios, U.S. Department of the Interior, Jack in the Box, Coca-Cola Emerging Brands, E&J Gallo Spirits, LG Mobile."]];
const SCHOOLS = [["MBA, with distinction", "Ross School of Business, University of Michigan"], ["MFA, Dramatic Criticism", "Yale University"], ["BA, Political Science & Theatre", "University of Southern California"]];
function About() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.25fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    as: "h1"
  }, "A dramaturg who learned to read a P&L."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      marginTop: 32,
      maxWidth: "58ch"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Fifteen years leading $100MM+ portfolios in categories where the lawyers get a vote \u2014 healthcare, financial services, spirits, defense, automotive. I build challenger positioning inside incumbent businesses, and I like the constraint."), /*#__PURE__*/React.createElement("p", null, "I trained as a critic before I trained as a marketer, which mostly means I am suspicious of anything that sounds good and can\u2019t be evidenced. The method is the same every time: read everything, watch what people actually do, then say the uncomfortable thing out loud before someone else does.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ink",
    href: "mailto:dolyaie@gmail.com",
    trailing: "\u2192"
  }, "Email me"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline"
  }, "Download CV"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/grain-sphere.png",
    alt: "A grainy sphere on a gradient ground",
    style: {
      width: "100%",
      objectFit: "cover",
      boxShadow: "var(--shadow-plate)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/shapes/starburst.png",
    alt: "",
    style: {
      position: "absolute",
      right: -22,
      top: -18,
      width: 148,
      transform: "rotate(-8deg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 12,
      top: 36,
      width: 96,
      textAlign: "center",
      font: "700 10px/1.35 var(--font-mono)",
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, "Available for", /*#__PURE__*/React.createElement("br", null), "advisory work")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page-warm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-11) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "Experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, ROLES.map(([role, org, years, note], i) => /*#__PURE__*/React.createElement("div", {
    key: role,
    style: {
      display: "grid",
      gridTemplateColumns: "300px 1fr 140px",
      gap: 32,
      alignItems: "start",
      padding: "28px 0",
      borderBottom: "var(--hair) solid var(--line-hair)",
      borderTop: i === 0 ? "var(--hair) solid var(--line-hair)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 24px/1.2 var(--font-display)",
      letterSpacing: "var(--track-display)"
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/1.5 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--cobalt)",
      marginTop: 6
    }
  }, org)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 16px/1.5 var(--font-sans)",
      color: "var(--text-secondary)"
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 var(--font-mono)",
      textAlign: "right",
      letterSpacing: ".06em"
    }
  }, years)))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "Education"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, SCHOOLS.map(([d, s]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      padding: "18px 0",
      borderBottom: "var(--hair) solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 22px/1.3 var(--font-serif)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 15px/1.4 var(--font-sans)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, s))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "Also"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 26
    }
  }, ["MullenLowe Global Representative", "IPG Rise Committee Chair", "KDP Data Transformation Task Force Co-Chair", "KDP LGBTQ+ ERG Mentor", "AdColor Entrepreneurship Mentor", "LA LGBT Center"].map((t, i) => /*#__PURE__*/React.createElement(DS.Tag, {
    key: t,
    tone: "outline",
    tilt: ["hair", "none", "sm"][i % 3]
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    font: "fat",
    size: "xs",
    tone: "coral",
    italic: true
  }, "Ask me about the carnival."))))));
}
function Contact() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    "data-theme": "ink",
    style: {
      background: "var(--ink-800)",
      color: "var(--ink-000)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-12) var(--page-margin)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/shapes/marbled-disc.png",
    alt: "A marbled disc reading: a beautiful content strategy does not hide an ugly company truth",
    style: {
      width: "100%",
      maxWidth: 420
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left",
    tone: "inverse"
  }, "Get in touch"), /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    tone: "inverse",
    style: {
      marginTop: 32
    }
  }, "Tell me the thing you can\u2019t say in the all-hands."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.9 var(--font-mono)",
      color: "var(--ink-200)",
      marginTop: 40
    }
  }, "dolyaie@gmail.com", /*#__PURE__*/React.createElement("br", null), "310.597.1095", /*#__PURE__*/React.createElement("br", null), "Los Angeles, CA"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "acid",
    href: "mailto:dolyaie@gmail.com",
    trailing: "\u2192"
  }, "Start a conversation"))))));
}
Object.assign(window, {
  About,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal_site/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal_site/casestudy.jsx
try { (() => {
function CaseStudy({
  id,
  go
}) {
  const w = WORK.find(x => x.id === id) || WORK[0];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-8) var(--page-margin) 0"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ghost",
    size: "sm",
    leading: "\u2190",
    onClick: () => go("work")
  }, "Back to work")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: w.img,
    alt: "",
    style: {
      width: "100%",
      height: 640,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      right: 24,
      top: 100,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(DS.ShiftPair, {
    from: w.from,
    to: w.to,
    size: "sm",
    tone: "inverse"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, w.kind), /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "sm",
    font: "sans",
    as: "h1"
  }, w.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, w.client, " \xB7 ", w.year, " \xB7 Role: lead strategist"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      margin: 0
    }
  }, w.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      margin: 0
    }
  }, "The brief arrived as a media question and left as a company question. We started with the evidence \u2014 articles, op-eds, history, theory, data \u2014 then went looking for the part of the culture that had already changed its mind and hadn\u2019t told anyone."), /*#__PURE__*/React.createElement(DS.Takeaway, {
    width: "100%"
  }, "Individuals are building their own rituals, not borrowing yours. The work is to add value, not annoyance.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page-warm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-11) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "The shift"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 48,
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(DS.StatBlock, {
    size: "sm",
    value: "662%",
    label: "increase in sales at Entireworld since March",
    source: "Vogue Business"
  }), /*#__PURE__*/React.createElement(DS.StatBlock, {
    size: "sm",
    value: "80%",
    label: "rise in searches for \u2018DIY\u2019 year over year",
    source: "Google Trends"
  }), /*#__PURE__*/React.createElement(DS.StatBlock, {
    size: "sm",
    value: "1 in 5",
    label: "of the workforce could be entirely remote after the pandemic",
    source: "Upwork"
  })))), /*#__PURE__*/React.createElement(Section, {
    label: "What we made"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DS.PhotoPlate, {
    src: "../../assets/imagery/bedroom-warm.png",
    width: 300,
    ratio: "3 / 4",
    tilt: "sm",
    alt: "An unmade bed in morning light",
    tag: /*#__PURE__*/React.createElement(DS.Tag, {
      tilt: "hair"
    }, "New domesticity")
  }), /*#__PURE__*/React.createElement(DS.PhotoPlate, {
    src: "../../assets/imagery/covered-car.png",
    width: 340,
    ratio: "4 / 3",
    tilt: "md",
    alt: "A car under a blue cover"
  }), /*#__PURE__*/React.createElement(DS.PhotoPlate, {
    src: "../../assets/imagery/raised-fist-bw.png",
    width: 240,
    ratio: "3 / 4",
    tilt: "hair",
    shadow: "lifted",
    alt: "A raised fist at a protest"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 260px",
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(DS.PullQuote, {
    size: "sm",
    attribution: "Audre Lorde"
  }, "Caring for myself is not self-indulgence. It is self-preservation, and that is an act of political warfare.")))), /*#__PURE__*/React.createElement(Section, {
    label: "Summary"
  }, /*#__PURE__*/React.createElement(DS.ComparisonTable, {
    columns: ["New Mindset", "Meaning", "Brand Application"],
    rows: [["Integration", "Values\n+\nActions", "Champion progress,\nnot perfection"], ["Work-Life Boundaries", "Intention\n+\nRituals", "Add value,\nnot annoyance"], ["Self-Aware", "Self\n+\nCommunity", "Be thoughtful,\nnot transactional"], ["Counsel Culture", "Expectations\n+\nReality", "Normalize evolution,\nnot ego"], ["Strategic", "Instincts\n+\nLifestyle", "Offer inspiration,\nnot aspiration"]],
    caption: "(You might want to screenshot this.)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "ink",
    onClick: () => go("work"),
    trailing: "\u2192"
  }, "Next project"), /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    href: "mailto:dolyaie@gmail.com"
  }, "Ask about this one"))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal_site/casestudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal_site/home.jsx
try { (() => {
const WORK = [{
  id: "culture-in-chaos",
  n: "01",
  title: "A Guide to Culture in Chaos",
  client: "The Projects",
  year: "2020",
  kind: "Cultural Foresight",
  img: "../../assets/imagery/bus-stop.png",
  from: "Optimization",
  to: "Integration",
  blurb: "A 30-page trend report on what happens to consumer culture when the rat race stops."
}, {
  id: "petlibro",
  n: "02",
  title: "Building a Category Before the Category Exists",
  client: "Petlibro",
  year: "2026",
  kind: "Brand Strategy",
  img: "../../assets/imagery/house-red.png",
  from: "Gadgets",
  to: "Guardianship",
  blurb: "Brand narrative, GTM and a from-scratch social and creator programme for a Series B pet-tech portfolio."
}, {
  id: "regulated",
  n: "03",
  title: "Breakthrough Inside the Guardrails",
  client: "MullenLowe US",
  year: "2025",
  kind: "Integrated Campaigns",
  img: "../../assets/imagery/covered-car.png",
  from: "Compliance",
  to: "Craft",
  blurb: "$100MM+ across defense, financial services, consumer healthcare and spirits — all of it regulated, none of it boring."
}, {
  id: "in-house",
  n: "04",
  title: "An In-House Agency, From Zero",
  client: "Keurig Dr Pepper",
  year: "2024",
  kind: "Organisational Design",
  img: "../../assets/imagery/bedroom-warm.png",
  from: "Spend",
  to: "System",
  blurb: "Standing up in-house marketing for a multi-brand portfolio, then co-chairing the data transformation that measured it."
}];
function WorkRow({
  item,
  go,
  index
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#" + item.id,
    onClick: e => {
      e.preventDefault();
      go("case", item.id);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "64px 1fr 220px 150px 90px",
      gap: 24,
      alignItems: "center",
      padding: "26px 0",
      borderBottom: "var(--hair) solid var(--line-hair)",
      borderTop: index === 0 ? "var(--hair) solid var(--line-hair)" : "none",
      textDecoration: "none",
      color: hover ? "var(--cobalt)" : "var(--text-primary)",
      transition: "color var(--dur-fast) var(--ease-cut)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 13px/1 var(--font-mono)",
      letterSpacing: ".08em"
    }
  }, item.n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 32px/1.1 var(--font-display)",
      letterSpacing: "var(--track-display)"
    }
  }, item.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 15px/1.4 var(--font-sans)",
      color: hover ? "var(--cobalt)" : "var(--text-secondary)"
    }
  }, item.client), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, item.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 13px/1 var(--font-mono)",
      textAlign: "right"
    }
  }, hover ? "→" : item.year), hover ? /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: "",
    style: {
      position: "absolute",
      right: 130,
      top: -34,
      width: 168,
      height: 120,
      objectFit: "cover",
      transform: "rotate(-3.5deg)",
      boxShadow: "var(--shadow-plate-lifted)",
      pointerEvents: "none"
    }
  }) : null);
}
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "clamp(380px, 42vw, 560px)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bus-stop.png",
    alt: "Two strangers waiting at a bus stop",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--page-margin)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      font: "400 76px/1.02 var(--font-display)",
      letterSpacing: "var(--track-display)",
      maxWidth: "15ch",
      textShadow: "0 2px 24px rgba(13,12,12,.45)"
    }
  }, "I find the why behind the what."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      font: "400 20px/1.5 var(--font-sans)",
      maxWidth: "52ch",
      marginTop: 22,
      textShadow: "0 2px 18px rgba(13,12,12,.55)"
    }
  }, "Brand strategy, go-to-market and integrated campaigns for companies operating in categories where the rules are written down."))), /*#__PURE__*/React.createElement(Section, {
    label: "Selected Work"
  }, WORK.map((w, i) => /*#__PURE__*/React.createElement(WorkRow, {
    key: w.id,
    item: w,
    go: go,
    index: i
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "outline",
    onClick: () => go("work"),
    trailing: "\u2192"
  }, "The full index"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gradient-chaos)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-11) var(--page-margin)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, "How I work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 56,
      marginTop: "var(--space-8)"
    }
  }, [["Research", "Articles, op-eds, history, theory, data."], ["Observation", "Culture, media, memes, anecdotes, attitudes."], ["Insight", "The—why—behind—the—what."]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderTop: "1.5px solid var(--ink-900)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 12px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 34px/1.1 var(--font-display)",
      letterSpacing: "var(--track-display)",
      marginTop: 14
    }
  }, v)))))), /*#__PURE__*/React.createElement(Section, {
    label: "Currently"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 19px/1.45 var(--font-serif)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Brand Director at Petlibro, reporting to the CEO \u2014 brand strategy, portfolio positioning and go-to-market for a global pet-tech company shipping smart hardware faster than most people ship slides."), /*#__PURE__*/React.createElement("p", null, "Before that: Head of Strategy at MullenLowe US, Director of Marketing at Keurig Dr Pepper, EVP/Group Planning Director at Deutsch LA, and Group Planning Director at David&Goliath. Fifteen years, roughly four industries, one recurring question."), /*#__PURE__*/React.createElement(DS.Footnote, null, "MBA, Michigan Ross \xB7 MFA Dramatic Criticism, Yale \xB7 BA, USC")), /*#__PURE__*/React.createElement(DS.Takeaway, {
    width: "100%",
    label: "Point of view"
  }, "Most brand problems are company problems wearing a nicer coat. A beautiful content strategy does not hide an ugly company truth."))));
}
Object.assign(window, {
  Home,
  WORK,
  WorkRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal_site/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal_site/shell.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
const DS = window.DoneshOlyaieDesignSystem_f301ad;
const NAV = [["work", "Work"], ["writing", "Writing"], ["about", "About"]];
function Header({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "var(--surface-page)",
      borderBottom: "var(--hair) solid var(--line-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "18px var(--page-margin)",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      go("home");
    },
    style: {
      font: "300 24px/1 var(--font-sans)",
      letterSpacing: ".02em",
      color: "var(--text-primary)",
      textDecoration: "none"
    }
  }, "Donesh Olyaie", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      verticalAlign: "super"
    }
  }, "*")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      alignItems: "baseline"
    }
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      font: "700 12px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      paddingBottom: 4,
      color: route === id ? "var(--cobalt)" : "var(--text-primary)",
      borderBottom: route === id ? "1.5px solid var(--cobalt)" : "1.5px solid transparent"
    }
  }, label)), /*#__PURE__*/React.createElement(DS.Button, {
    size: "sm",
    variant: "ink",
    onClick: () => go("contact")
  }, "Get in touch"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "var(--hair) solid var(--line-hair)",
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "var(--space-9) var(--page-margin) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 34px/1.08 var(--font-display)",
      letterSpacing: "var(--track-display)",
      maxWidth: "16ch"
    }
  }, "If humans are evolving, how are industries?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(DS.Button, {
    variant: "acid",
    trailing: "\u2192",
    href: "mailto:dolyaie@gmail.com"
  }, "Start a conversation"))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.9 var(--font-mono)",
      color: "var(--text-secondary)"
    }
  }, "dolyaie@gmail.com", /*#__PURE__*/React.createElement("br", null), "310.597.1095", /*#__PURE__*/React.createElement("br", null), "Los Angeles, CA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, NAV.concat([["contact", "Contact"]]).map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#" + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    },
    style: {
      font: "400 14px/1.6 var(--font-sans)",
      color: "var(--text-primary)",
      textDecoration: "none",
      borderBottom: "1px solid transparent",
      alignSelf: "flex-start"
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 var(--page-margin) var(--space-7)",
      font: "700 10px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Brand strategy \xB7 Marketing leadership \xB7 Go-to-market"), /*#__PURE__*/React.createElement("span", null, "\xA9 2026")));
}
function Section({
  label,
  children,
  pad = true
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: pad ? "var(--space-11) var(--page-margin)" : 0
    }
  }, label ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(DS.Eyebrow, {
    align: "left"
  }, label)) : null, children);
}
Object.assign(window, {
  Header,
  Footer,
  Section,
  DS,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal_site/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal_site/work.jsx
try { (() => {
const FILTERS = ["All", "Brand Strategy", "Cultural Foresight", "Integrated Campaigns", "Organisational Design"];
function WorkIndex({
  go
}) {
  const [filter, setFilter] = React.useState("All");
  const list = filter === "All" ? WORK : WORK.filter(w => w.kind === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    as: "h1"
  }, "Work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      cursor: "pointer",
      border: "var(--hair) solid var(--line-hair)",
      borderRadius: 0,
      padding: "8px 14px",
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      background: filter === f ? "var(--ink-900)" : "transparent",
      color: filter === f ? "var(--ink-000)" : "var(--text-primary)",
      transition: "background var(--dur-fast) var(--ease-cut), color var(--dur-fast) var(--ease-cut)"
    }
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "72px 56px",
      marginTop: "var(--space-10)"
    }
  }, list.map((w, i) => /*#__PURE__*/React.createElement("a", {
    key: w.id,
    href: "#" + w.id,
    onClick: e => {
      e.preventDefault();
      go("case", w.id);
    },
    style: {
      textDecoration: "none",
      color: "var(--text-primary)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: w.img,
    alt: "",
    style: {
      width: "100%",
      height: 340,
      objectFit: "cover",
      transform: `rotate(${i % 2 ? "1.8deg" : "-1.8deg"})`,
      boxShadow: "var(--shadow-plate)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -12,
      bottom: 18
    }
  }, /*#__PURE__*/React.createElement(DS.Tag, {
    tilt: i % 2 ? "hair" : "sm"
  }, w.kind))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, w.client, " \xB7 ", w.year), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 34px/1.08 var(--font-display)",
      letterSpacing: "var(--track-display)",
      marginTop: 10
    }
  }, w.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 17px/1.45 var(--font-serif)",
      marginTop: 10,
      color: "var(--text-secondary)"
    }
  }, w.blurb))))), list.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 19px/1.5 var(--font-serif)",
      color: "var(--text-muted)",
      marginTop: 40
    }
  }, "Nothing filed under that. Yet.") : null));
}
function Writing() {
  const PIECES = [["Counsel culture is the only accountability that scales", "Essay", "2026"], ["Comfort was never the trend. Control was.", "Note", "2025"], ["What a dramaturg knows that a strategist forgets", "Essay", "2025"], ["Screen time is inevitable. Attention is not.", "Note", "2024"], ["On briefing in regulated categories", "Field guide", "2024"]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(DS.DisplayTitle, {
    size: "md",
    as: "h1"
  }, "Writing"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)"
    }
  }, PIECES.map(([t, kind, year], i) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 160px 70px",
      gap: 24,
      alignItems: "baseline",
      padding: "24px 0",
      borderBottom: "var(--hair) solid var(--line-hair)",
      borderTop: i === 0 ? "var(--hair) solid var(--line-hair)" : "none",
      textDecoration: "none",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 28px/1.2 var(--font-serif)",
      letterSpacing: "var(--track-tight)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 11px/1 var(--font-mono)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, kind), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 13px/1 var(--font-mono)",
      textAlign: "right"
    }
  }, year)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(DS.PullQuote, {
    size: "sm",
    attribution: "Guy Debord, The Society of the Spectacle"
  }, "The decline of being into having, and having into merely appearing."), /*#__PURE__*/React.createElement(DS.TextureField, {
    texture: "moire",
    height: 220
  }))));
}
Object.assign(window, {
  WorkIndex,
  Writing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal_site/work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.MarginLabel = __ds_scope.MarginLabel;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.DisplayTitle = __ds_scope.DisplayTitle;

__ds_ns.Footnote = __ds_scope.Footnote;

__ds_ns.FootnoteMark = __ds_scope.FootnoteMark;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.ShiftPair = __ds_scope.ShiftPair;

__ds_ns.Takeaway = __ds_scope.Takeaway;

__ds_ns.PhotoPlate = __ds_scope.PhotoPlate;

__ds_ns.TextureField = __ds_scope.TextureField;

})();
