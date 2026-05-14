import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowRight,
  Brain,
  Bug,
  CheckCircle2,
  Code2,
  Github,
  Lightbulb,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import './styles.css';

const links = {
  github: 'https://github.com/ShailPatel27/Code-Insights',
  issues: 'https://github.com/ShailPatel27/Code-Insights/issues',
  marketplace: import.meta.env.VITE_MARKETPLACE_URL,
  site: import.meta.env.VITE_SITE_URL,
};

const insightTypes = [
  {
    icon: Bug,
    title: 'Mutation',
    text: 'Know when a call edits the object you already have instead of creating a clean copy.',
  },
  {
    icon: ArrowRight,
    title: 'Return Values',
    text: 'See whether the useful result is returned, stored, or hidden behind a silent None.',
  },
  {
    icon: Sparkles,
    title: 'Randomness',
    text: 'Spot behavior that depends on chance, seeds, or repeated runs.',
  },
  {
    icon: Workflow,
    title: 'State',
    text: 'Understand side effects before they turn one line into a debugging detour.',
  },
  {
    icon: ShieldCheck,
    title: 'Scale',
    text: 'Recognize copies, memory-heavy operations, and performance-sensitive patterns.',
  },
  {
    icon: Lightbulb,
    title: 'Traps',
    text: 'Catch the practical gotchas that are obvious only after they break your flow once.',
  },
];

const flow = [
  {
    label: 'Hover',
    title: 'A small explanation appears where your attention already is.',
    text: 'Code Insights reads the function call in context and surfaces the behavior that matters now.',
  },
  {
    label: 'Learn',
    title: 'Open the deeper view without leaving the editor.',
    text: 'Signatures, parameters, examples, and behavioral notes live in a persistent VS Code panel.',
  },
  {
    label: 'Test',
    title: 'Run through guided examples that make behavior visible.',
    text: 'The test experience is designed around before-and-after understanding, not vague output dumps.',
  },
  {
    label: 'Ask AI',
    title: 'Ask for a plain-English explanation when the static insight is not enough.',
    text: 'Curated data stays the trust layer; AI becomes the conversational layer on top.',
  },
];

function App() {
  return (
    <main>
      <Hero />
      <section className="section narrative" id="why">
        <div className="section-kicker">Why it exists</div>
        <h2>Most bugs begin in the gap between what a function says and what it does.</h2>
        <p>
          Code Insights closes that gap inside VS Code. It turns hidden behavior into something visible:
          mutation, return values, randomness, side effects, expensive copies, and the tiny practical
          details that long documentation pages rarely put first.
        </p>
      </section>

      <section className="section flow-section" id="experience">
        <div className="section-heading">
          <div>
            <div className="section-kicker">How it feels</div>
            <h2>Hover, learn, test, ask. All in the same workspace.</h2>
          </div>
          <p>
            The experience is intentionally editor-native: fast enough for a quick check, deep enough
            when a function deserves a second look.
          </p>
        </div>
        <div className="flow-track">
          {flow.map((item, index) => (
            <article className="flow-step" key={item.label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ImageStrip />

      <section className="section insight-section" id="insights">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Insight types</div>
            <h2>Built around the behaviors developers actually trip over.</h2>
          </div>
        </div>
        <div className="insight-grid">
          {insightTypes.map(({ icon: Icon, title, text }) => (
            <article className="insight-item" key={title}>
              <Icon aria-hidden="true" size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section" id="trust">
        <div className="trust-copy">
          <div className="section-kicker">The trust layer</div>
          <h2>Curated knowledge first. AI only where it helps.</h2>
          <p>
            Code Insights is designed to explain behavior without pretending to magically execute or
            understand everything. Curated explanations provide predictable grounding, while guided tests
            and AI explanations help turn that grounding into intuition.
          </p>
        </div>
        <div className="trust-terminal" aria-label="Code Insights trust principles">
          <div className="terminal-row ok">
            <CheckCircle2 size={16} />
            <span>Behavior explained at the point of use</span>
          </div>
          <div className="terminal-row ok">
            <CheckCircle2 size={16} />
            <span>Examples shaped around learning, not noise</span>
          </div>
          <div className="terminal-row ok">
            <CheckCircle2 size={16} />
            <span>Curated insight data remains the source of truth</span>
          </div>
          <div className="terminal-row muted">
            <Brain size={16} />
            <span>AI expands explanations without replacing verification</span>
          </div>
        </div>
      </section>

      <section className="section builders" id="builders">
        <div className="builder-panel">
          <Code2 size={28} />
          <h2>For learners who want the why, and builders who want fewer surprises.</h2>
          <p>
            Code Insights is for the moment when a line looks simple but carries a consequence. It keeps
            the answer close to the code, so understanding arrives before the bug report does.
          </p>
        </div>
      </section>

      <section className="section final-cta" id="install">
        <div>
          <div className="section-kicker">Code Insights by Lenex</div>
          <h2>Build intuition without leaving VS Code.</h2>
        </div>
        <div className="cta-actions">
          <a className="button primary" href={links.marketplace}>
            Install Code Insights
            <ArrowRight size={18} />
          </a>
          <a className="button ghost" href={links.github}>
            <Github size={18} />
            View GitHub
          </a>
          <a className="button text" href={links.issues}>
            Send feedback
          </a>
        </div>
      </section>

      <footer>
        <a href="#top" className="footer-brand">Lenex</a>
        <a href={links.site}>{links.site.replace(/^https?:\/\//, '')}</a>
        <a href={links.github}>GitHub</a>
        <a href={links.issues}>Issues</a>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top">
          <img src="/images/lenex-logo-without-name-transparent.png" alt="" />
          <span>
            <small>Lenex</small>
            <strong>Code Insights</strong>
          </span>
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#insights">Insights</a>
          <a href="#trust">Trust</a>
          <a href={links.github}>GitHub</a>
        </div>
        <a className="nav-install" href={links.marketplace}>
          Install
          <ArrowRight size={16} />
        </a>
      </nav>

      <div className="hero-copy">
        <p className="eyebrow">VS Code intelligence for Python behavior</p>
        <h1>Understand what your Python code actually does.</h1>
        <p>
          See behavior, side effects, return values, and practical traps without leaving VS Code.
          Code Insights turns function calls into moments of clarity.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={links.marketplace}>
            Install Code Insights
            <ArrowRight size={18} />
          </a>
          <a className="button secondary" href={links.github}>
            <Github size={18} />
            View source
          </a>
        </div>
      </div>

      <EditorScene />
    </section>
  );
}

function EditorScene() {
  return (
    <div className="workspace" aria-label="Code Insights editor preview">
      <div className="editor-shell">
        <div className="editor-topbar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="tab active">experiment.py</span>
          <span className="tab">insights.numpy.json</span>
        </div>
        <div className="editor-body">
          <ol className="code-lines">
            <li><span className="token-purple">import</span> numpy <span className="token-purple">as</span> np</li>
            <li></li>
            <li>arr = np.array([3, 1, 2])</li>
            <li className="focus-line">np.random.shuffle(arr)<span className="cursor" /></li>
            <li>print(arr)</li>
            <li></li>
            <li>sorted_arr = np.sort(arr)</li>
          </ol>

          <div className="hover-pop">
            <div className="hover-title">
              <Lightbulb size={16} />
              <span>SHUFFLE</span>
            </div>
            <code>np.random.shuffle</code>
            <p>Randomly changes the order of the array in place.</p>
            <ul>
              <li>Modifies the original input</li>
              <li>Uses randomness</li>
              <li>Returns None</li>
            </ul>
            <div className="hover-actions">
              <span>Learn More</span>
              <span>Test</span>
              <span>Ask AI</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="insight-panel">
        <div className="panel-tabs">
          <span className="active">Learn More</span>
          <span>Test</span>
          <span>Ask AI</span>
        </div>
        <div className="panel-content">
          <h2>np.random.shuffle</h2>
          <p className="signature">shuffle(x, axis=0)</p>
          <h3>Behavioral Notes</h3>
          <p>
            This call changes the existing object. Use a copy-producing alternative when you need the
            original order preserved.
          </p>
          <div className="mini-test">
            <Play size={16} />
            <span>Guided test ready</span>
          </div>
          <div className="ask-row">
            <MessageSquareText size={16} />
            <span>Ask why this returns None</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

function ImageStrip() {
  return (
    <section className="section image-strip" aria-label="Code Insights product visuals">
      <div className="image-copy">
        <div className="section-kicker">Inside the editor</div>
        <h2>The explanation lives beside the code that needs it.</h2>
        <p>
          Code Insights keeps the learning loop inside VS Code: quick hovers for the immediate answer,
          a deeper panel for context, and guided paths when you want to test or ask follow-up questions.
        </p>
      </div>
      <div className="screenshot-grid">
        <figure className="screenshot-slot">
          <img src="/images/figma-workspace-1.png" alt="Code Insights editor concept in VS Code" />
          <figcaption>Editor-native flow</figcaption>
        </figure>
        <figure className="screenshot-slot">
          <img src="/images/hover-insight.png" alt="Code Insights hover explanation in VS Code" />
          <figcaption>Hover insight</figcaption>
        </figure>
        <figure className="screenshot-slot">
          <img src="/images/learn-panel.png" alt="Code Insights Learn More panel in VS Code" />
          <figcaption>Learn More panel</figcaption>
        </figure>
        <figure className="screenshot-slot">
          <img src="/images/figma-workspace-2.png" alt="Code Insights expanded sidebar concept" />
          <figcaption>Guided understanding</figcaption>
        </figure>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
