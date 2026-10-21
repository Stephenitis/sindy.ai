# Portfolio creation: recorded time and token usage

These figures reproduce the October 20, 2026 audit preserved in the [process case study](../dist/sindys-treasure-trove/portfolio-process/index.html). They have not been recalculated from raw session logs for this documentation update. M means million tokens; values are approximate and rounded.

## Time and audit scope

- **Earlier collaboration checkpoint: approximately 3 hours 40 minutes.** This included discussion, design, implementation, and troubleshooting. Later handoff and refinement continued beyond it; a final end-to-end duration was not recorded here.
- **Earlier two-chat token checkpoint:** approximately 1.70M uncached input plus output tokens, with another 132.92M cached input tokens. This is an earlier, narrower snapshot—not an amount to add to the later audit.
- **Broader audit cutoff: approximately 8:48 p.m. Eastern on October 20, 2026.** It covered six main chats and ten delegated agents associated with the workspace. Its scope differs from the elapsed-time checkpoint, so dividing its token total by 3 hours 40 minutes would be misleading.

## Major token totals

| Category | Tokens |
| --- | ---: |
| Main chats and delegated agents | 283.26M |
| Additional automatic reviews, estimated | 41.44M |
| Combined total, provisional | 324.70M |
| Cached input within combined total | 317.19M |
| Uncached input within combined total | 7.10M |
| Output within combined total | 414,390 |

About **97.8% of input was cached**. Cached input is context processed again across calls; it is not an equivalent amount of new writing. Reasoning tokens are already included in output. Rounded components may not sum exactly to rounded totals.

## Workstream breakdown

Each workstream includes its delegated agents once. Automatic reviews are listed separately above.

| Workstream | Cumulative tokens | Uncached input | Output |
| --- | ---: | ---: | ---: |
| Primary portfolio workflow | 176.58M | 2.96M | 218,825 |
| Figma portfolio evidence | 33.77M | 669,744 | 46,132 |
| Hosting investigation | 29.29M | 310,615 | 36,066 |
| Work research and domain/deployment work | 25.92M | 314,254 | 46,549 |
| Figma discussion and delegated task | 15.87M | 218,592 | 16,800 |
| Scribble refinement and audit discussion | 1.84M | 182,826 | 4,456 |

The primary portfolio workflow accounted for about **62% of the chat-and-agent total**.

## What contributed to overhead

- The primary chat recorded **799 usage events and 636 tool invocations**. Carrying a long conversation through repeated calls increased cumulative input.
- The ten delegated workers accounted for **74.30M tokens and 590 tool invocations**. These are already included in the workstreams, not additional usage.
- **797 browser-tool invocations** occurred across chats and workers. Browser descriptions, documentation, and repeated checks added context; the audit did not isolate an exact browser-only token total.
- **40 automatic review sessions** contributed an estimated 41.44M additional tokens after inherited starting counters were subtracted. Review attribution remains provisional.

These categories overlap and should not be added together. The audit describes where usage accumulated; it does not establish that every high-usage activity was unnecessary.

## Lessons for the next build

1. Keep one primary conversation for decisions and integration; record accepted decisions in shared project files.
2. Give delegated workers narrow, independent deliverables with only the relevant context and short return reports.
3. Use focused browser inspections and tool responses; verify meaningful milestones instead of repeatedly capturing entire pages.
4. Confirm source material, intended artifacts, and deployment targets early to reduce rework.
5. Measure completed, verified outcomes. More agents or more tool calls do not automatically improve efficiency.

Potential savings from these changes have not been measured. These counters are **not a billing estimate or a subscription-allowance calculation**. Separate voice and image-generation service usage may be absent, and later work is outside this fixed snapshot.
