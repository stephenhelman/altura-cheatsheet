import { useState } from "react";

const data = {
  phases: [
    {
      id: "programs",
      icon: "🏷️",
      label: "Programs",
      color: "#14B8A6",
      sections: [
        {
          title: "Diagnose First — Always",
          items: [
            "NEVER ask: 'Which program do you want?'",
            "Clean + strong profile → Executive Builder",
            "Dirty credit (derogatories, collections) → Restoration",
            "Clean but thin/underpowered → Optimization",
            "Wants everything handled, max certainty → Black Label",
          ],
        },
        {
          title: "1. Executive Business Builder — $7,800",
          items: [
            "WHO: High scores, thick clean profile, already fundable",
            "WHAT: Business fundability setup, lender positioning, funding execution, inquiry removal, white glove support",
            "NOT included: No credit repair, no tradelines (they don't need it)",
            "LENGTH: 6 months · Financing available",
            "PITCH: 'You don't need fixing — you need clean execution.'",
          ],
        },
        {
          title: "2. Business Credit Restoration — $9,800",
          items: [
            "WHO: Decent/good scores BUT derogatories, collections, high inquiries holding them back",
            "WHAT: Everything in Builder + full credit repair",
            "LENGTH: 6 months · Financing available",
            "PITCH: 'We need to clean this up while we build — otherwise we're forcing bad approvals.'",
          ],
        },
        {
          title: "3. Business Credit Optimization — $9,800",
          items: [
            "WHO: Clean credit but thin/underpowered profile — needs more accounts, age, or depth",
            "WHAT: Everything in Builder + tradelines (primary, new, or backdated)",
            "LENGTH: 6 months · Financing available",
            "PITCH: 'Your credit is clean — it's just underbuilt. We add strength so lenders take you seriously.'",
          ],
        },
        {
          title: "4. Black Label Business Accelerator — $11,800",
          items: [
            "WHO: Wants max funding potential, no guesswork, every lever pulled simultaneously",
            "WHAT: Everything — repair + tradelines + refinance & capital planning + white glove",
            "LENGTH: 6 months · Financing available",
            "PITCH: 'This removes every limitation. We clean, build, boost, and execute at the same time.'",
          ],
        },
        {
          title: "Guarantee (All Programs)",
          items: [
            "✅ $150,000 minimum funding guarantee",
            "✅ We work until achieved (scope-adjusted if needed)",
            "✅ Backend is flat and non-negotiable",
            "FRAMING: 'We don't win by selling programs — we win by getting you more capital.'",
          ],
        },
        {
          title: "Performance-Based Entry Option",
          items: [
            "Use ONLY when qualified client is resistant to full upfront — NOT a discount",
            "Executive Builder: $500 min down + 10% of all funding secured",
            "All other programs: $2,000 min down + 10% of all funding secured",
            "✅ Closers may collect MORE than minimum upfront",
            "❌ Cannot reduce or negotiate the 10% backend — ever",
            "❌ Cannot trade upfront dollars for backend changes",
            "PITCH: 'This isn't a discount — it's a different alignment structure.'",
          ],
        },
      ],
    },
    {
      id: "triage",
      icon: "⚡",
      label: "Lead Triage",
      color: "#F59E0B",
      sections: [
        {
          title: "5 Qualification Questions",
          items: [
            "1. Credit score (all 3 bureaus)?",
            "2. Recent credit applications?",
            "3. Credit utilization %?",
            "4. Any negative events (lates, collections)?",
            "5. Funding goal & purpose?",
          ],
        },
        {
          title: "Lead Type → Action",
          items: [
            "Type 1 Resistant → Polite exit, don't chase",
            "Type 2 Skeptical → Trust-build: proof, transparency",
            "Type 3 Hesitant → Objection handling, ROI framing",
            "Type 4 Engaged → Qualify deeply, set expectations",
            "Type 5 Ready → Fast-track: confirm → present → pay",
          ],
        },
        {
          title: "Escalation Rules",
          items: [
            "Tier 1–2 + qualified → Closers",
            "High-value / custom pricing → Jarren (Sales Dir)",
            "Legal / compliance / VIP → Tony (Owner)",
          ],
        },
      ],
    },
    {
      id: "credit",
      icon: "📊",
      label: "Credit Analysis",
      color: "#3B82F6",
      sections: [
        {
          title: "Fundability Tiers",
          items: [
            "Tier 1 (720+) → Best approvals, $50K–$150K, immediate",
            "Tier 2 (680–719) → Solid, $30K–$75K, immediate",
            "Tier 3 (650–679) → Optimize, $10K–$30K, 60–90 days",
            "Tier 4 (<650) → Credit repair first, 90–180 days",
          ],
        },
        {
          title: "Utilization Rules",
          items: [
            "<10% → Premium tier",
            "<30% → Good",
            "30–50% → Limits approvals",
            "50%+ on any card → MAJOR red flag",
          ],
        },
        {
          title: "Inquiry Count",
          items: [
            "0–2 in 6mo → Green light",
            "3–4 → Moderate risk",
            "5+ → Wait 60–90 days",
          ],
        },
        {
          title: "Bureau Pull Cheatsheet",
          items: [
            "Amex → Experian (stack same-day)",
            "Chase → EX or all 3 (5/24 rule!)",
            "Navy Federal → EQ or TU",
            "Discover → TransUnion",
            "Capital One → All 3 (weakest matters)",
            "Citi → EQ or EX (8/65 rule)",
            "Wells Fargo → EX primarily",
          ],
        },
      ],
    },
    {
      id: "sequence",
      icon: "🏦",
      label: "Funding Sequence",
      color: "#10B981",
      sections: [
        {
          title: "Priority Order",
          items: [
            "1. Existing banking relationships (highest odds)",
            "2. Pre-approvals (Amex, Chase, BoA, WF, PNC)",
            "3. High-balance banks ($10K+ business checking)",
            "4. Regional banks + credit unions",
            "5. FinTech (Bluevine, Fundbox, OnDeck)",
            "6. Alternative / revenue-based lenders",
          ],
        },
        {
          title: "Application Timeline",
          items: [
            "Week 1: Relationships + pre-approvals (3–5 apps)",
            "Week 2: Regional banks + CUs (3–5 apps)",
            "Week 3: National banks (2–3 apps)",
            "Week 4: FinTech/alternative if needed",
            "⚠️ Space apps 7–14 days apart",
          ],
        },
        {
          title: "Score-Based Strategy",
          items: [
            "720+: Tier 1 nationals",
            "680–719: Regional + CUs",
            "640–679: FinTech focus",
            "<640: Revenue/equipment only",
          ],
        },
        {
          title: "Essential 5 Banks",
          items: [
            "1. Navy Federal (best relationship powerhouse)",
            "2. Chase (best business credit, 5/24!)",
            "3. Amex (highest limits, 90-day spacing)",
            "4. Discover (starter, high approval)",
            "5. Citi (longest 0% offers, 18–21 mo)",
          ],
        },
      ],
    },
    {
      id: "products",
      icon: "💰",
      label: "Product Match",
      color: "#8B5CF6",
      sections: [
        {
          title: "Funding Waterfall (Cheapest → Expensive)",
          items: [
            "1. 0% APR credit cards",
            "2. Credit union loans (6–9% APR)",
            "3. Bank loans/LOCs",
            "4. Equipment financing (8–25%)",
            "5. SBA loans",
            "6. Personal loans",
            "7. Revenue-based financing (20–40%)",
            "8. Invoice financing",
            "9. MCA → LAST RESORT (40–200% APR)",
          ],
        },
        {
          title: "Financing Options (Altura-Specific)",
          items: [
            "Payva: 520+, up to $15K, instant — PRIMARY",
            "PayPal Pay Later: 650+, up to $10K",
            "EazeDiamond: 630+, $5K–$25K, 5.9% — BEST structured",
            "Afterpay: Small gap filler",
            "EazeCap: 500+, $5K only, 40% payout — last resort",
            "Credit Key: Business owners only",
          ],
        },
        {
          title: "EAZE State Restrictions (Do NOT use)",
          items: ["MT, NY, DE, IN, MS, CA, NV, WV, CT, WA, ME"],
        },
        {
          title: "Quick Decision Guide",
          items: [
            "Need instant → Payva or PayPal",
            "630+ + structured → EazeDiamond",
            "<620 + $5K only → EazeCap",
            "Small gap → Afterpay",
            "Business owner → Credit Key",
          ],
        },
      ],
    },
    {
      id: "creditunions",
      icon: "🤝",
      label: "Credit Unions",
      color: "#EC4899",
      sections: [
        {
          title: "90-Day Relationship Framework",
          items: [
            "Days 1–7: Open checking + savings, direct deposit (CRITICAL)",
            "Days 8–60: 5–10 debit txns/mo, no overdrafts, save $500+",
            "Day 60–89: Yellow light — optimize balances",
            "Day 91+: Apply (Green light)",
          ],
        },
        {
          title: "Approval Probability",
          items: [
            "New member: 20–30%",
            "6 months + balance: 40–50%",
            "12 months + direct deposit: 70–80%",
            "24 months + full relationship: 90%+",
          ],
        },
        {
          title: "Membership Hack (ACC)",
          items: [
            "Join American Consumer Council → Code: 'Andrews'",
            "Cost: ~$5–10 → Unlocks 500+ credit unions",
            "Then target: Navy Fed, PenFed, Alliant, DCU, Andrews FCU",
          ],
        },
        {
          title: "Soft Pull Strategy",
          items: [
            "1. Prequal at 3–5 CUs (no hard pull)",
            "2. Compare offers",
            "3. Hard apply to best 1–2 only",
            "Key CUs: Navy Fed, PenFed, Alliant, Bethpage, First Tech",
          ],
        },
        {
          title: "Red Lights (Do NOT apply)",
          items: [
            "<60 days membership",
            "No direct deposit",
            "Idle account",
            "Recent overdrafts",
            "Score below CU minimum",
          ],
        },
      ],
    },
    {
      id: "onboarding",
      icon: "🚀",
      label: "Post-Sale Onboarding",
      color: "#F97316",
      sections: [
        {
          title: "Day 0 (Within 2 hours of close)",
          items: [
            "Auto welcome email immediately",
            "SMS 10 min later",
            "Specialist personal outreach <2 hrs",
            "CRM: Move to Onboarding, assign specialist, set 24/48/72h follow-ups",
          ],
        },
        {
          title: "Docs Required (48hr target)",
          items: [
            "Business: License, EIN letter, Articles of Inc, 4mo bank statements",
            "Personal: DL, SS card, 2mo bank statements, voided check",
            "Financial: 2yr business + personal tax returns",
          ],
        },
        {
          title: "Follow-Up Escalation",
          items: [
            "24h → Reminder text",
            "48h → Phone call",
            "72h → Escalation email",
            "7 days → Loop in sales",
            "21 days → Close/cancel",
          ],
        },
        {
          title: "Specialist KPIs",
          items: [
            "Time to funding: <12 days",
            "Satisfaction: >4.5/5",
            "Docs in 48h: >90%",
            "Funding success: >80%",
            "Response time: <2 hours",
            "Revenue/client: >$3,500",
          ],
        },
        {
          title: "Post-Funding (3–5 days)",
          items: [
            "Confirm receipt + activation",
            "Remind payment dates",
            "Utilization: Keep <30%",
            "Set autopay",
            "90-day: Free credit review + upsell",
            "9–10 score: Ask for review/referral ($500 each)",
          ],
        },
      ],
    },
    {
      id: "troubleshoot",
      icon: "🧯",
      label: "Troubleshoot",
      color: "#EF4444",
      sections: [
        {
          title: "Client Not Responding",
          items: [
            "1. Multi-channel outreach",
            "2. Simplify the ask",
            "3. Offer alternate upload method",
            "4. Set deadline",
            "5. Loop sales at 7 days",
            "6. Final notice at 14 days",
            "7. Close at 21 days",
          ],
        },
        {
          title: "Low Credit Score",
          items: [
            "Be transparent, reset expectations",
            "Options: Credit repair, alt lending, authorized user, business credit",
            "Build 6-month improvement plan",
          ],
        },
        {
          title: "Multiple Denials",
          items: [
            "STOP applying blindly",
            "Analyze denial reasons",
            "Adjust lender mix",
            "Consider secured options",
            "Set realistic expectations",
          ],
        },
        {
          title: "Refund Request",
          items: [
            "Listen first",
            "Review contract",
            "Show work completed",
            "Offer expedite",
            "Escalate to manager",
            "Document everything",
          ],
        },
        {
          title: "Compliance (Always)",
          items: [
            "Disclose fees clearly",
            "NEVER guarantee funding",
            "Follow FCRA for credit pulls",
            "Honor refund policy",
            "Document all communications",
          ],
        },
      ],
    },
  ],
  checkoutLinks: {
    copecart: [
      {
        label: "$5K Program",
        url: "https://copecart.com/us/products/1e174c3b/checkout",
      },
      {
        label: "$9.8K Program",
        url: "https://copecart.com/us/products/8296f329/checkout",
      },
      {
        label: "$11.8K Program",
        url: "https://copecart.com/us/products/e245a617/checkout",
      },
    ],
    fanbasis: [
      {
        label: "$5K Program",
        url: "https://www.fanbasis.com/agency-checkout/alturafund/Mw93Q",
      },
      {
        label: "$7.8K Program",
        url: "https://www.fanbasis.com/agency-checkout/alturafund/ZYznv",
      },
      {
        label: "$11.8K Program",
        url: "https://www.fanbasis.com/agency-checkout/alturafund/71XWQ",
      },
    ],
    eaze: "https://fastapprovalnow.com/",
  },
};

export default function AlturaCheatSheet() {
  const [activePhase, setActivePhase] = useState("triage");
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const current = data.phases.find((p) => p.id === activePhase);

  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#0A0A0F",
        minHeight: "100vh",
        color: "#E2E8F0",
        padding: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)",
          borderBottom: "2px solid #312E81",
          padding: "20px 24px 16px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "4px",
          }}
        >
          <div
            style={{
              background: "#6366F1",
              color: "#fff",
              fontWeight: "900",
              fontSize: "13px",
              padding: "4px 10px",
              letterSpacing: "3px",
              clipPath:
                "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            ALTURA
          </div>
          <span
            style={{
              color: "#6366F1",
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Funding Rep · Field Guide
          </span>
        </div>
        <div
          style={{ color: "#94A3B8", fontSize: "11px", letterSpacing: "1px" }}
        >
          Client Flow System · All SOPs Condensed
        </div>
      </div>

      {/* Phase Nav */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "4px",
          padding: "12px 16px",
          background: "#0D0D14",
          borderBottom: "1px solid #1E1B4B",
          scrollbarWidth: "none",
        }}
      >
        {data.phases.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(p.id)}
            style={{
              background: activePhase === p.id ? p.color : "transparent",
              color: activePhase === p.id ? "#000" : p.color,
              border: `1px solid ${p.color}`,
              borderRadius: "2px",
              padding: "6px 12px",
              fontSize: "11px",
              fontFamily: "'Courier New', monospace",
              fontWeight: "700",
              letterSpacing: "1px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
              opacity: activePhase === p.id ? 1 : 0.7,
            }}
          >
            {p.icon} {p.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "16px", maxWidth: "900px", margin: "0 auto" }}>
        {/* Phase Header */}
        <div
          style={{
            borderLeft: `4px solid ${current.color}`,
            paddingLeft: "16px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: "900",
              color: current.color,
              letterSpacing: "2px",
            }}
          >
            {current.icon} {current.label.toUpperCase()}
          </h2>
        </div>

        {/* Sections Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {current.sections.map((sec, si) => {
            const key = `${current.id}-${si}`;
            const isOpen = expandedSections[key] !== false; // default open
            return (
              <div
                key={si}
                style={{
                  background: "#111118",
                  border: `1px solid ${current.color}33`,
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleSection(key)}
                  style={{
                    width: "100%",
                    background: `${current.color}18`,
                    border: "none",
                    borderBottom: `1px solid ${current.color}33`,
                    padding: "10px 14px",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: current.color,
                    fontFamily: "'Courier New', monospace",
                    fontWeight: "700",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                  }}
                >
                  <span>{sec.title.toUpperCase()}</span>
                  <span style={{ opacity: 0.6, fontSize: "14px" }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>
                {isOpen && (
                  <ul
                    style={{
                      margin: 0,
                      padding: "12px 14px",
                      listStyle: "none",
                    }}
                  >
                    {sec.items.map((item, ii) => (
                      <li
                        key={ii}
                        style={{
                          fontSize: "12px",
                          lineHeight: "1.7",
                          color:
                            item.startsWith("⚠") || item.startsWith("❌")
                              ? "#FCA5A5"
                              : item.startsWith("✅")
                                ? "#86EFAC"
                                : "#CBD5E1",
                          paddingLeft: "0",
                          borderBottom:
                            ii < sec.items.length - 1
                              ? "1px solid #1E2030"
                              : "none",
                          paddingBottom: "6px",
                          marginBottom: "6px",
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Checkout Links — always visible at bottom */}
        <div style={{ marginTop: "28px" }}>
          <div
            style={{
              borderLeft: "4px solid #6366F1",
              paddingLeft: "16px",
              marginBottom: "14px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#6366F1",
                fontSize: "13px",
                letterSpacing: "3px",
              }}
            >
              🔗 CHECKOUT LINKS
            </h3>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "10px",
            }}
          >
            {/* Copecart */}
            <div
              style={{
                background: "#111118",
                border: "1px solid #6366F133",
                borderRadius: "4px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  color: "#6366F1",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                COPECART — Payva / AfterPay / Credit Key
              </div>
              {data.checkoutLinks.copecart.map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    color: "#93C5FD",
                    fontSize: "12px",
                    textDecoration: "none",
                    padding: "3px 0",
                    borderBottom:
                      i < data.checkoutLinks.copecart.length - 1
                        ? "1px solid #1E2030"
                        : "none",
                  }}
                >
                  {l.label} →
                </a>
              ))}
            </div>
            {/* Fanbasis */}
            <div
              style={{
                background: "#111118",
                border: "1px solid #6366F133",
                borderRadius: "4px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  color: "#6366F1",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                FANBASIS — Payva / AfterPay / Credit Key
              </div>
              {data.checkoutLinks.fanbasis.map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    color: "#93C5FD",
                    fontSize: "12px",
                    textDecoration: "none",
                    padding: "3px 0",
                    borderBottom:
                      i < data.checkoutLinks.fanbasis.length - 1
                        ? "1px solid #1E2030"
                        : "none",
                  }}
                >
                  {l.label} →
                </a>
              ))}
            </div>
            {/* EAZE */}
            <div
              style={{
                background: "#111118",
                border: "1px solid #6366F133",
                borderRadius: "4px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  color: "#6366F1",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                EAZE — EazeDiamond + EazeCap
              </div>
              <a
                href={data.checkoutLinks.eaze}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  color: "#93C5FD",
                  fontSize: "12px",
                  textDecoration: "none",
                }}
              >
                fastapprovalnow.com →
              </a>
              <div
                style={{ color: "#64748B", fontSize: "10px", marginTop: "6px" }}
              >
                States EXCLUDED: MT NY DE IN MS CA NV WV CT WA ME
              </div>
            </div>
          </div>
        </div>

        {/* Quick Score Reference Bar */}
        <div
          style={{
            marginTop: "20px",
            background: "#111118",
            border: "1px solid #1E293B",
            borderRadius: "4px",
            padding: "14px 16px",
          }}
        >
          <div
            style={{
              color: "#64748B",
              fontSize: "10px",
              letterSpacing: "3px",
              marginBottom: "10px",
            }}
          >
            CREDIT TIER QUICK REFERENCE
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {[
              {
                tier: "720+",
                label: "Tier 1",
                color: "#10B981",
                sub: "Best approvals · Immediate",
              },
              {
                tier: "680–719",
                label: "Tier 2",
                color: "#3B82F6",
                sub: "Solid approvals · Immediate",
              },
              {
                tier: "650–679",
                label: "Tier 3",
                color: "#F59E0B",
                sub: "Optimize · 60–90 days",
              },
              {
                tier: "620–649",
                label: "Tier 4",
                color: "#EF4444",
                sub: "Credit repair first",
              },
              {
                tier: "<620",
                label: "Not Ready",
                color: "#6B7280",
                sub: "Repair + 90–180 days",
              },
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${t.color}`,
                  borderRadius: "3px",
                  padding: "6px 10px",
                  flex: "1 1 120px",
                }}
              >
                <div
                  style={{
                    color: t.color,
                    fontSize: "13px",
                    fontWeight: "900",
                  }}
                >
                  {t.tier}
                </div>
                <div style={{ color: "#94A3B8", fontSize: "10px" }}>
                  {t.label}
                </div>
                <div
                  style={{
                    color: "#64748B",
                    fontSize: "10px",
                    marginTop: "2px",
                  }}
                >
                  {t.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            color: "#1E293B",
            fontSize: "10px",
            padding: "20px 0 8px",
            letterSpacing: "2px",
          }}
        >
          ALTURA FUNDING · ALL SOPS CONDENSED · INTERNAL USE
        </div>
      </div>
    </div>
  );
}
