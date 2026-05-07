1. Core Principles
Clarity over cleverness

Users should instantly understand what the page does.

If something needs explanation → simplify it.

Avoid:

fancy interactions that reduce usability
hidden actions
surprising behaviour
Consistency everywhere

Keep consistent across the entire product:

spacing
typography
colors
button styles
icon usage
animations
error messages
empty states
loading states

Consistency reduces cognitive load and builds trust.

Reduce cognitive load

Users should not need to think hard.

Good UI:

shows only what is needed now
hides complexity progressively
minimizes decisions

Bad UI:

too many buttons
too many colors
too many choices
2. Layout & Spacing
8-pt spacing system

Always use multiples of 8:

4 / 8 / 16 / 24 / 32 / 40 / 48 / 64 / 80

This creates visual rhythm and consistency.

Visual hierarchy

Every page must clearly communicate:

Page title
Section title
Main content
Secondary info
Metadata

Use:

size
weight
spacing
contrast (never color alone)
Content width

Readable width:

60–80 characters per line
max container ≈ 1200px

Use:

centered layout for dashboards & forms
full width only for tables/boards
3. Typography
Font rules
Max 2 fonts
Body line-height: 1.5–1.7
Avoid light gray text on white
Recommended scale
Role	Size
H1	32–40px
H2	24–28px
H3	20–22px
Body	16px
Small	14px
Caption	12px
4. Color System
Standard palette

Every product must define:

Primary
Secondary
Success
Warning
Error
Neutral grayscale (10–12 steps)
Color usage
Purpose	Color
Primary action	Primary
Success	Green
Warning	Orange
Error	Red
Info	Blue

Color must never be decorative only.

5. Contrast & Accessibility (CRITICAL)

Contrast is a non-negotiable requirement.

Minimum WCAG contrast ratios
Element	Ratio
Body text	≥ 4.5 : 1
Large text (≥18px / 14px bold)	≥ 3 : 1
UI components & borders	≥ 3 : 1
Focus indicators	≥ 3 : 1
Hard rules
Never rely on color alone to convey meaning.
Disabled text must remain readable.
Placeholder text must pass ≥ 4.5:1 where possible.
Borders separating surfaces must be visible.
Dark mode contrast pitfalls

Avoid:

pure black #000
pure white #FFF
neon colors on dark backgrounds without testing
6. Buttons & Actions
Button hierarchy
Primary
main action per screen
max 1–2 per view
Secondary
alternative actions
Tertiary / Ghost
low importance
Danger
destructive actions
Button rules
Min height: 40–44px
Must show hover / focus / disabled states
Use verbs:

Good:

Save changes
Create project
Delete account

Bad:

Submit
OK
Continue
7. Forms UX

Golden rule: forms must feel easy

Labels

Always place labels above inputs.

Never use placeholders as labels.

Validation
Validate on blur (not every keystroke)
Show error under the field
Use human language

Bad:

Invalid input (code 422)

Good:

Email must contain @
Reduce friction
Autofocus first field
Provide defaults
Use correct input types
Use dropdowns only when necessary
8. Feedback & States

Every action must produce feedback.

Loading

Use:

skeleton loaders (preferred)
spinners (short waits)
progress bars (long tasks)
Empty states

Every empty list needs:

explanation
CTA

Example:

No projects yet
Create your first project to get started
Success states

Always confirm completed actions:

toast
inline message
visual change
9. Error Handling

Good errors:

human language
explain what happened
explain how to fix

Bad:

Something went wrong.

Good:

We couldn’t upload the file.
Try again or choose a smaller file.
10. Navigation

Users should never feel lost.

Use:

clear top nav or sidebar
breadcrumbs on deep pages
active states

Rules:

Logo → home
Avoid hidden navigation
Avoid >2 nesting levels
11. Tables & Data

Tables must be scannable.

Rules:

right-align numbers
truncate long text
sorting & filtering
search
pagination or infinite scroll
12. Accessibility (Must-Have)
Full keyboard navigation
Visible focus states (never remove outline)
Semantic HTML
Alt text for all images
13. Motion & Animation

Motion must have meaning.

Timing:

micro: 150–250ms
transitions: 250–400ms
large UI changes: 300–500ms

Respect prefers-reduced-motion.

14. Performance UX

Targets:

First load < 2.5s
Interaction < 100ms
Minimal layout shift

Use:

skeletons
optimistic updates
lazy loading
15. Mobile First

Breakpoints:

sm 640px
md 768px
lg 1024px
xl 1280px

Rules:

touch targets ≥ 44px
no hover-only interactions
collapse complex UI
16. Dark Mode

Support from the start.

Avoid:

pure black / pure white
harsh contrast spikes
17. UX Anti-Patterns

Avoid:

modal overload
infinite spinners
hidden primary actions
placeholder-only labels
tiny click targets
auto-playing media
surprise navigation
dropdown overuse
18. PCS Hero — Style Guide
Theme System

Theme controlled via:

<html data-theme="dark|light">

Stored in:

localStorage → pcs-theme

Initialized in <head> to prevent flash.

Fonts
Token	Font	Usage
--font-michroma	Roboto

Typography

Hero heading:

uppercase
letter-spacing: 0.04em
always white

Body:

16px
line-height 1.6
Color Tokens (Dark)

Key tokens:

--bg: #06080c
--bg-3: rgba(10,13,18,0.95)
--fg: #ffffff
--fg-2: rgba(255,255,255,0.65)
--border: rgba(255,255,255,0.12)
--accent: #00edc2

Accent stays unchanged in light theme.

Industrial Visual Style

Global rule:

NO border radius

Applies to:

cards
buttons
inputs
chips

Exceptions:

scrollbar thumb: 6px
thinking dots: 50%
ChatBar
background: var(--bg-3)
border: 1px solid var(--border)
backdrop-filter: blur(20px)
padding: 24px

Focused input:

border-top: accent
glow shadow accent 12%
Chips

Idle:

background: surface
border: border
color: fg-2

Hover:

border-color: accent
color: fg
Animations

Hero intro:

opacity 0→1
y 14→0
0.7s easeOut

Messages:

0.22s

Hover:

0.15–0.2s

Reduced motion → opacity only.

19. Pre-Release Checklist

Before shipping:

Can a new user understand the page in 5 seconds?
Is the main action obvious?
Are all states implemented?
Are errors helpful?
Is mobile usable?
Is keyboard navigation complete?
Does contrast meet WCAG?
Does it feel fast?
