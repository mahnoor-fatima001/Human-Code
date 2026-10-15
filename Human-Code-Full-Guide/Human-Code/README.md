# Human Code — Project Guide

**Created by Mahnoor Fatima**

Human Code is a beginner-friendly static educational website for exploring psychology and everyday human behavior. It introduces ideas through concise lessons, real-life context, a searchable glossary, resources, and lightweight browser-based learning tools. It is designed to encourage curiosity and critical thinking—not to label, diagnose, or manipulate people.

## What the website covers

The curriculum contains ten learning paths:

1. **Human Psychology** — thought, emotion, motivation, memory, learning, personality, and behavior.
2. **Manipulation & Defense** — warning signs of unhealthy pressure, coercion, boundary violations, and safer responses.
3. **Persuasion** — framing, reciprocity, social proof, authority, storytelling, and ethical influence.
4. **Social Influence** — conformity, obedience, norms, peer influence, group behavior, leadership, and online influence.
5. **Attraction & Connection** — first impressions, familiarity, trust, communication, respect, boundaries, and consent-aware connection.
6. **Communication** — listening, questions, nonverbal signals, assertiveness, difficult conversations, and conflict resolution.
7. **Cognitive Biases** — confirmation bias, anchoring, availability, framing, loss aversion, hindsight, and other judgment shortcuts.
8. **Behavioral Patterns** — habits, reinforcement, avoidance, procrastination, conditioning, and behavior change.
9. **Emotional Intelligence** — self-awareness, emotional triggers, regulation, empathy, social awareness, and emotional boundaries.
10. **Relationships** — trust, attachment concepts, friendship, family dynamics, conflict, emotional support, and healthy relationship practices.

## Website pages

- `index.html` — landing page and featured learning paths.
- `pages/courses.html` — overview of all ten learning paths.
- `courses/<topic>/index.html` — lesson list for each learning path.
- `pages/glossary.html` — searchable key-term glossary.
- `pages/resources.html` — links to curriculum, glossary, and reflection tools.
- `pages/dashboard.html` — overview of locally saved lesson completions, bookmarks, quiz scores, and learning paths.
- `pages/progress.html` — progress page.
- `pages/bookmarks.html` — saved learning items.
- `pages/about.html` — project purpose, educational scope, and creator credit.

## Run the website

1. Extract the `Human-Code` folder from the ZIP file.
2. Keep the folders `assets`, `css`, `data`, `js`, `pages`, and `courses` in their existing relative positions.
3. Open `index.html` in a modern browser. For a more reliable local development experience, open the folder in Visual Studio Code and use the Live Server extension.
4. Use the navigation to open Courses, Glossary, Resources, About, or My Learning.
5. Open a course and mark lessons complete. Visit My Learning to see the locally stored totals.

No package installation, build step, backend, database, or account is required for the static site.

## Technology and project structure

- **HTML5** provides the page structure and course content.
- **CSS3** controls layout, colors, components, responsive behavior, and animations.
- **Vanilla JavaScript** handles navigation, glossary search, reveal animations, local progress, and bookmarks.
- **Local storage** saves some learning data in the current browser on the current device.
- **Assets** contains supplied JPG illustrations and the looping hero video.

```text
Human-Code/
├── index.html
├── DESCRIPTION.txt
├── SITE-GUIDE.md
├── README.md
├── assets/
├── css/
│   ├── style.css
│   ├── components.css
│   ├── responsive.css
│   └── animations.css
├── js/
├── data/
├── pages/
└── courses/
    ├── attraction/
    ├── behavioral-patterns/
    ├── cognitive-biases/
    ├── communication/
    ├── emotional-intelligence/
    ├── manipulation/
    ├── persuasion/
    ├── psychology/
    ├── relationships/
    └── social-influence/
```

## Learning and progress behavior

- Lesson completion is stored in browser local storage.
- Bookmarks and quiz-score values are also browser-local when those features are used.
- Data is not synchronized across devices or browsers and can be removed when browser site data is cleared.
- The website does not currently provide user accounts, a remote database, cloud synchronization, or server-side analytics.
- If a browser blocks local storage, progress features may not persist.

## Suggested study method

1. Start with Human Psychology or Cognitive Biases if you are new to the topic.
2. Study one lesson at a time rather than trying to memorize every term.
3. Connect each concept to a real situation, but avoid diagnosing another person from one behavior.
4. Ask what evidence supports an interpretation and what other explanations might fit.
5. Mark lessons complete only after you can explain the main idea in your own words.
6. Use the glossary to review unfamiliar terms.
7. Revisit the material and update your understanding when new evidence appears.

## Responsible-use note

Human Code is for general education and self-reflection. Psychological concepts describe tendencies and research patterns; they are not reliable mind-reading techniques or universal rules. Avoid using the material to manipulate, stereotype, diagnose, or control others. Prioritize consent, autonomy, context, empathy, and safety. The website is not a substitute for professional psychological, medical, or crisis support.

## Customization

- Edit page copy in the relevant `.html` files.
- Update visual design in `css/style.css`, `css/components.css`, `css/responsive.css`, and `css/animations.css`.
- Update browser interactions in the `js/` folder.
- Replace or add images/video in `assets/`, then update the corresponding relative paths and alt text.
- Preserve relative folder paths when moving files so styles, scripts, and media continue to load.

## Pre-release checklist

- Open the home page and each main navigation destination.
- Visit all ten course pages and verify each lesson description.
- Test the mobile navigation at narrow screen widths.
- Test lesson completion, bookmarks, and search in the browser you plan to use.
- Check the browser console for errors and confirm all asset paths load.
- Verify that the About page credits Mahnoor Fatima.
- Review educational wording for nuance, accuracy, and respect for individual differences.
