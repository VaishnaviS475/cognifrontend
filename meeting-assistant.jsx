import { useState, useEffect, useRef, useCallback } from "react";

const COLORS = {
  bg: "#0A0C10",
  bgSurface: "#10131A",
  bgCard: "#141820",
  bgInput: "#1A1E28",
  border: "#252B3A",
  borderHover: "#353D52",
  accent: "#4F8EF7",
  accentDim: "#2A4A8A",
  accentGlow: "rgba(79,142,247,0.15)",
  teal: "#2DD4BF",
  tealDim: "#134E4A",
  amber: "#F59E0B",
  amberDim: "#78350F",
  red: "#F87171",
  redDim: "#7F1D1D",
  green: "#4ADE80",
  greenDim: "#14532D",
  text: "#E8EBF4",
  textMuted: "#6B7499",
  textDim: "#8890B0",
};

const styles = {
  app: {
    minHeight: "100vh",
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: "'DM Mono', 'Fira Code', 'Courier New', monospace",
    fontSize: "14px",
  },
  loginPage: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `radial-gradient(ellipse 80% 60% at 50% -20%, ${COLORS.accentGlow}, transparent)`,
    padding: "2rem",
  },
  loginCard: {
    width: "100%",
    maxWidth: "400px",
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "16px",
    padding: "2.5rem",
  },
  logoMark: {
    width: "48px",
    height: "48px",
    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal})`,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
    fontSize: "22px",
  },
  h1: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    margin: "0 0 0.25rem",
    color: COLORS.text,
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },
  subtitle: {
    fontSize: "13px",
    color: COLORS.textMuted,
    margin: "0 0 2rem",
    fontFamily: "'DM Sans', sans-serif",
  },
  label: {
    display: "block",
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: COLORS.textDim,
    marginBottom: "6px",
  },
  input: {
    width: "100%",
    background: COLORS.bgInput,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "8px",
    padding: "10px 14px",
    color: COLORS.text,
    fontSize: "14px",
    fontFamily: "inherit",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "1rem",
    transition: "border-color 0.2s",
  },
  btnPrimary: {
    width: "100%",
    background: `linear-gradient(135deg, ${COLORS.accent}, #6366F1)`,
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "'DM Sans', sans-serif",
    cursor: "pointer",
    letterSpacing: "0.03em",
    transition: "opacity 0.2s, transform 0.1s",
  },
  dashboard: {
    display: "grid",
    gridTemplateRows: "56px 1fr",
    minHeight: "100vh",
  },
  topbar: {
    background: COLORS.bgSurface,
    borderBottom: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1.5rem",
  },
  topbarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "700",
    fontSize: "15px",
    letterSpacing: "-0.3px",
  },
  logoIcon: {
    width: "28px",
    height: "28px",
    background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.teal})`,
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    padding: "3px 10px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontFamily: "'DM Sans', sans-serif",
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "1fr 360px",
    gap: "0",
    overflow: "hidden",
    height: "calc(100vh - 56px)",
  },
  leftPanel: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRight: `1px solid ${COLORS.border}`,
  },
  rightPanel: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: COLORS.bgSurface,
  },
  toolbar: {
    display: "flex",
    gap: "8px",
    padding: "12px 16px",
    background: COLORS.bgSurface,
    borderBottom: `1px solid ${COLORS.border}`,
    flexWrap: "wrap",
  },
  toolBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "8px",
    padding: "7px 14px",
    color: COLORS.textDim,
    fontSize: "12px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.15s",
    whiteSpace: "nowrap",
  },
  section: {
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "10px",
    overflow: "hidden",
  },
  sectionHeader: {
    padding: "10px 14px",
    borderBottom: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: COLORS.bgSurface,
  },
  sectionTitle: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: COLORS.textMuted,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "600",
  },
  transcript: {
    flex: 1,
    overflowY: "auto",
    padding: "14px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "13px",
    lineHeight: "1.8",
  },
  transcriptLine: {
    marginBottom: "8px",
    padding: "6px 10px",
    borderRadius: "6px",
    background: COLORS.bgInput,
    borderLeft: `3px solid ${COLORS.border}`,
  },
  insightTab: {
    padding: "6px 12px",
    background: "transparent",
    border: "none",
    color: COLORS.textMuted,
    fontSize: "12px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: "500",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "all 0.15s",
  },
  insightTabActive: {
    background: COLORS.accentGlow,
    color: COLORS.accent,
  },
  chatMsg: {
    padding: "8px 12px",
    borderRadius: "8px",
    marginBottom: "8px",
    fontSize: "13px",
    lineHeight: "1.6",
    fontFamily: "'DM Sans', sans-serif",
  },
};

const DEMO_TRANSCRIPT = [
  { speaker: "Alex Chen", role: "PM", time: "09:01", text: "Alright, let's kick things off. We need to finalize the Q3 roadmap today." },
  { speaker: "Maria Santos", role: "Eng Lead", time: "09:02", text: "I've reviewed the feature requests. The auth overhaul is blocking three downstream teams." },
  { speaker: "David Kim", role: "Designer", time: "09:03", text: "From a UX perspective, the onboarding flow is our biggest pain point — 62% drop-off at step 3." },
  { speaker: "Alex Chen", role: "PM", time: "09:04", text: "Maria, can you give us a realistic timeline for the auth work?" },
  { speaker: "Maria Santos", role: "Eng Lead", time: "09:05", text: "Six weeks minimum if we don't take on new debt. But we need two more engineers allocated." },
  { speaker: "David Kim", role: "Designer", time: "09:07", text: "I'll have the new onboarding mockups ready by Friday for review." },
  { speaker: "Alex Chen", role: "PM", time: "09:08", text: "Agreed. Maria owns the auth epic, David delivers mockups Friday. Let's lock this roadmap by EOD." },
];

const DEMO_INSIGHTS = {
  summary: "The Q3 planning meeting focused on two critical initiatives: the authentication system overhaul (blocking 3 teams) and onboarding UX improvements (62% drop-off at step 3). Resource constraints were identified — 2 additional engineers needed for auth work. Timeline of 6 weeks was proposed for auth completion.",
  actions: [
    { owner: "Maria Santos", task: "Deliver auth overhaul — 6 week timeline", priority: "high" },
    { owner: "David Kim", task: "Complete onboarding mockups by Friday", priority: "medium" },
    { owner: "Alex Chen", task: "Finalize and lock Q3 roadmap by EOD", priority: "high" },
    { owner: "Alex Chen", task: "Secure 2 additional engineer allocations", priority: "high" },
  ],
  decisions: [
    "Auth overhaul is highest priority Q3 initiative",
    "Maria Santos is the owner of the auth epic",
    "Onboarding redesign to proceed in parallel with auth work",
    "Roadmap locked by end of current business day",
  ],
  risks: [
    { level: "high", text: "Auth work blocking 3 downstream teams — delay has cascading impact" },
    { level: "high", text: "Engineering resource constraint — 2 FTEs needed but not yet confirmed" },
    { level: "medium", text: "Parallel workstreams may stretch team capacity thin" },
    { level: "low", text: "Friday mockup deadline leaves little review buffer before sprint planning" },
  ],
};

const DEMO_SPEAKERS = [
  { name: "Alex Chen", role: "Product Manager", responsibility: "Q3 roadmap ownership, resource allocation, stakeholder alignment", color: COLORS.accent },
  { name: "Maria Santos", role: "Engineering Lead", responsibility: "Auth epic delivery, technical scoping, team capacity planning", color: COLORS.teal },
  { name: "David Kim", role: "UX Designer", responsibility: "Onboarding redesign, mockup delivery by Friday", color: "#A78BFA" },
];

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setError("");
    setTimeout(() => {
      localStorage.setItem("cogni_user", JSON.stringify({ email, loggedIn: true }));
      setLoading(false);
      onLogin(email);
    }, 900);
  };

  return (
    <div style={styles.loginPage}>
      <div style={styles.loginCard}>
        <div style={styles.logoMark}>🧠</div>
        <h1 style={styles.h1}>CogniMeet</h1>
        <p style={styles.subtitle}>AI-powered cognitive meeting intelligence</p>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Email address</label>
          <input
            type="email"
            style={styles.input}
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@company.com"
            onFocus={e => e.target.style.borderColor = COLORS.accent}
            onBlur={e => e.target.style.borderColor = COLORS.border}
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={{ ...styles.input, marginBottom: error ? "0.5rem" : "1.5rem" }}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••••"
            onFocus={e => e.target.style.borderColor = COLORS.accent}
            onBlur={e => e.target.style.borderColor = COLORS.border}
          />
          {error && <p style={{ color: COLORS.red, fontSize: "12px", margin: "0 0 1rem", fontFamily: "'DM Sans', sans-serif" }}>{error}</p>}
          <button
            type="submit"
            style={{ ...styles.btnPrimary, opacity: loading ? 0.7 : 1 }}
            disabled={loading}
            onMouseEnter={e => { if (!loading) e.target.style.opacity = "0.85"; }}
            onMouseLeave={e => e.target.style.opacity = loading ? "0.7" : "1"}
          >
            {loading ? "Signing in…" : "Sign in →"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "12px", color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
          Try: any email + any password
        </p>
      </div>
    </div>
  );
}

function InsightsPanel({ insights, loading }) {
  const [tab, setTab] = useState("summary");

  const tabs = [
    { key: "summary", label: "Summary" },
    { key: "actions", label: `Actions ${insights ? `(${insights.actions.length})` : ""}` },
    { key: "decisions", label: "Decisions" },
    { key: "risks", label: "Risks" },
  ];

  const riskColor = (level) => ({
    high: { color: COLORS.red, bg: COLORS.redDim },
    medium: { color: COLORS.amber, bg: COLORS.amberDim },
    low: { color: COLORS.green, bg: COLORS.greenDim },
  }[level] || { color: COLORS.textMuted, bg: COLORS.border });

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ ...styles.sectionHeader, gap: "4px", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{ ...styles.insightTab, ...(tab === t.key ? styles.insightTabActive : {}) }}
          >{t.label}</button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
        {loading && (
          <div style={{ color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span> Analyzing meeting…
          </div>
        )}
        {!loading && !insights && (
          <p style={{ color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>
            Load a meeting or run an analysis to see insights here.
          </p>
        )}
        {!loading && insights && tab === "summary" && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", lineHeight: "1.7", color: COLORS.textDim }}>
            {insights.summary}
          </p>
        )}
        {!loading && insights && tab === "actions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {insights.actions.map((a, i) => (
              <div key={i} style={{ ...styles.transcriptLine, borderLeftColor: a.priority === "high" ? COLORS.red : COLORS.amber }}>
                <div style={{ fontSize: "11px", color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif", marginBottom: "3px" }}>
                  {a.owner} ·{" "}
                  <span style={{ color: a.priority === "high" ? COLORS.red : COLORS.amber }}>{a.priority}</span>
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>{a.task}</div>
              </div>
            ))}
          </div>
        )}
        {!loading && insights && tab === "decisions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {insights.decisions.map((d, i) => (
              <div key={i} style={{ ...styles.transcriptLine, borderLeftColor: COLORS.teal, fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>
                {d}
              </div>
            ))}
          </div>
        )}
        {!loading && insights && tab === "risks" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {insights.risks.map((r, i) => {
              const rc = riskColor(r.level);
              return (
                <div key={i} style={{ ...styles.transcriptLine, borderLeftColor: rc.color }}>
                  <span style={{
                    ...styles.badge,
                    background: rc.bg,
                    color: rc.color,
                    marginBottom: "4px",
                    display: "inline-flex",
                    fontSize: "10px",
                  }}>{r.level}</span>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>{r.text}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ChatSection({ transcript, insights }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I've analyzed this meeting. Ask me anything about the discussion, action items, or decisions." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const context = `
You are a meeting assistant AI. The following is the meeting transcript and insights:

TRANSCRIPT:
${(transcript || DEMO_TRANSCRIPT).map(l => `[${l.time}] ${l.speaker} (${l.role}): ${l.text}`).join("\n")}

INSIGHTS:
Summary: ${(insights || DEMO_INSIGHTS).summary}
Action Items: ${(insights || DEMO_INSIGHTS).actions.map(a => `${a.owner}: ${a.task}`).join("; ")}
Decisions: ${(insights || DEMO_INSIGHTS).decisions.join("; ")}

Answer the user's question about this meeting concisely in 2-4 sentences. Be specific and reference actual details from the meeting.
`;
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: context,
          messages: [{ role: "user", content: userMsg }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "I couldn't process that request.";
      setMessages(m => [...m, { role: "assistant", text }]);
    } catch {
      setMessages(m => [...m, { role: "assistant", text: "Error connecting to AI. Please check your connection and try again." }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      <div style={{ ...styles.sectionHeader }}>
        <span style={styles.sectionTitle}>Ask AI</span>
        <span style={{ ...styles.badge, background: COLORS.accentGlow, color: COLORS.accent, fontSize: "10px" }}>Powered by Claude</span>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            ...styles.chatMsg,
            background: m.role === "user" ? COLORS.accentGlow : COLORS.bgInput,
            borderLeft: m.role === "assistant" ? `3px solid ${COLORS.accent}` : "none",
            color: m.role === "user" ? COLORS.accent : COLORS.text,
            alignSelf: m.role === "user" ? "flex-end" : "flex-start",
            maxWidth: "90%",
          }}>
            {m.text}
          </div>
        ))}
        {loading && (
          <div style={{ ...styles.chatMsg, background: COLORS.bgInput, borderLeft: `3px solid ${COLORS.accent}`, color: COLORS.textMuted, fontSize: "12px" }}>
            Thinking…
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div style={{ padding: "10px 12px", borderTop: `1px solid ${COLORS.border}`, display: "flex", gap: "8px" }}>
        <input
          style={{ ...styles.input, margin: 0, flex: 1, padding: "8px 12px", fontSize: "13px" }}
          placeholder="Ask about this meeting…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          onFocus={e => e.target.style.borderColor = COLORS.accent}
          onBlur={e => e.target.style.borderColor = COLORS.border}
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          style={{
            background: COLORS.accent,
            border: "none",
            borderRadius: "8px",
            padding: "8px 14px",
            color: "#fff",
            fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: "600",
            cursor: "pointer",
            opacity: loading || !input.trim() ? 0.5 : 1,
          }}
        >→</button>
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout }) {
  const [transcript, setTranscript] = useState([]);
  const [insights, setInsights] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [status, setStatus] = useState("");
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const transcriptRef = useRef(null);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      chunksRef.current = [];

      mr.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
          sendChunk(e.data);
        }
      };

      mr.start(3000);
      setIsRecording(true);
      setStatus("Recording live…");
      setRecordingTime(0);
      timerRef.current = setInterval(() => setRecordingTime(t => t + 1), 1000);

      setTranscript(t => [...t, {
        speaker: "System",
        role: "Live",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        text: "🔴 Live recording started. Audio is being captured in 3-second chunks.",
      }]);
    } catch {
      setStatus("Microphone access denied.");
    }
  };

  const sendChunk = async (chunk) => {
    try {
      const formData = new FormData();
      formData.append("audio", chunk, "chunk.webm");
      await fetch("/live-audio", { method: "POST", body: formData });
    } catch {}
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(t => t.stop());
    }
    clearInterval(timerRef.current);
    setIsRecording(false);
    setStatus("Recording stopped.");
    setTranscript(t => [...t, {
      speaker: "System",
      role: "Live",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      text: `⏹ Recording ended after ${recordingTime}s. ${chunksRef.current.length} chunks captured.`,
    }]);
  };

  const uploadAudio = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "audio/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setStatus(`Uploaded: ${file.name}`);
        setTranscript(t => [...t, {
          speaker: "System",
          role: "Upload",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          text: `📁 Audio file uploaded: ${file.name} (${(file.size / 1024).toFixed(1)}KB). Ready for analysis.`,
        }]);
      }
    };
    input.click();
  };

  const loadDemo = () => {
    setTranscript(DEMO_TRANSCRIPT);
    setInsights(null);
    setStatus("Demo meeting loaded.");
  };

  const analyzeMeeting = async () => {
    if (transcript.length === 0) {
      setStatus("Load a meeting first.");
      return;
    }
    setAnalyzing(true);
    setStatus("Analyzing meeting…");
    setInsights(null);

    try {
      const transcriptText = transcript
        .filter(l => l.role !== "Live" && l.role !== "Upload")
        .map(l => `[${l.time}] ${l.speaker} (${l.role}): ${l.text}`)
        .join("\n");

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a meeting analysis AI. Analyze the provided meeting transcript and return a JSON object with exactly this structure:
{
  "summary": "2-3 sentence executive summary",
  "actions": [{"owner": "Name", "task": "description", "priority": "high|medium|low"}],
  "decisions": ["decision 1", "decision 2"],
  "risks": [{"level": "high|medium|low", "text": "risk description"}]
}
Return ONLY valid JSON, no markdown, no extra text.`,
          messages: [{ role: "user", content: `Analyze this meeting:\n\n${transcriptText}` }],
        }),
      });
      const data = await res.json();
      const rawText = data.content?.map(b => b.text || "").join("") || "{}";
      const clean = rawText.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setInsights(parsed);
      setStatus("Analysis complete.");
    } catch {
      setInsights(DEMO_INSIGHTS);
      setStatus("Analysis complete (demo fallback).");
    }
    setAnalyzing(false);
  };

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const speakerColor = (i) => [COLORS.accent, COLORS.teal, "#A78BFA", COLORS.amber][i % 4];

  const speakersFromTranscript = () => {
    const map = {};
    transcript.filter(l => l.role !== "Live" && l.role !== "Upload").forEach(l => {
      if (!map[l.speaker]) map[l.speaker] = { name: l.speaker, role: l.role, count: 0 };
      map[l.speaker].count++;
    });
    return Object.values(map);
  };

  const speakers = speakersFromTranscript();
  const displaySpeakers = insights ? DEMO_SPEAKERS : speakers.map((s, i) => ({ ...s, color: speakerColor(i), responsibility: `${s.count} turn${s.count !== 1 ? "s" : ""}` }));

  return (
    <div style={styles.dashboard}>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 2px; }
      `}</style>

      {/* Top bar */}
      <div style={styles.topbar}>
        <div style={styles.topbarLogo}>
          <div style={styles.logoIcon}>🧠</div>
          CogniMeet
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {isRecording && (
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: COLORS.red, fontSize: "12px", fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.red, animation: "pulse 1s infinite", display: "inline-block" }} />
              LIVE · {formatTime(recordingTime)}
            </span>
          )}
          {status && <span style={{ fontSize: "11px", color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>{status}</span>}
          <span style={{ fontSize: "12px", color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>{user}</span>
          <button
            onClick={onLogout}
            style={{ ...styles.toolBtn, padding: "5px 10px", fontSize: "11px" }}
            onMouseEnter={e => e.target.style.borderColor = COLORS.borderHover}
            onMouseLeave={e => e.target.style.borderColor = COLORS.border}
          >Sign out</button>
        </div>
      </div>

      {/* Main grid */}
      <div style={styles.mainContent}>
        {/* Left panel */}
        <div style={styles.leftPanel}>
          {/* Toolbar */}
          <div style={styles.toolbar}>
            {!isRecording ? (
              <button
                onClick={startRecording}
                style={{ ...styles.toolBtn, borderColor: COLORS.red, color: COLORS.red }}
                onMouseEnter={e => { e.currentTarget.style.background = COLORS.redDim; }}
                onMouseLeave={e => { e.currentTarget.style.background = COLORS.bgCard; }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: COLORS.red, display: "inline-block" }} />
                Start Live Meeting
              </button>
            ) : (
              <button
                onClick={stopRecording}
                style={{ ...styles.toolBtn, borderColor: COLORS.amber, color: COLORS.amber }}
                onMouseEnter={e => { e.currentTarget.style.background = COLORS.amberDim; }}
                onMouseLeave={e => { e.currentTarget.style.background = COLORS.bgCard; }}
              >
                ■ Stop Meeting
              </button>
            )}
            <button
              onClick={uploadAudio}
              style={styles.toolBtn}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.borderHover; e.currentTarget.style.color = COLORS.text; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textDim; }}
            >↑ Upload Audio</button>
            <button
              onClick={loadDemo}
              style={styles.toolBtn}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.borderHover; e.currentTarget.style.color = COLORS.text; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.color = COLORS.textDim; }}
            >▶ Load Demo</button>
            <button
              onClick={analyzeMeeting}
              disabled={analyzing}
              style={{ ...styles.toolBtn, borderColor: analyzing ? COLORS.border : COLORS.accentDim, color: analyzing ? COLORS.textMuted : COLORS.accent }}
              onMouseEnter={e => { if (!analyzing) { e.currentTarget.style.background = COLORS.accentGlow; } }}
              onMouseLeave={e => { e.currentTarget.style.background = COLORS.bgCard; }}
            >
              {analyzing ? <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span> : "✦"}
              {analyzing ? " Analyzing…" : " Analyze Meeting"}
            </button>
          </div>

          {/* Transcript + Speakers */}
          <div style={{ display: "grid", gridTemplateRows: "1fr auto", flex: 1, overflow: "hidden", gap: "0" }}>
            {/* Transcript */}
            <div style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ ...styles.sectionHeader, background: COLORS.bgSurface }}>
                <span style={styles.sectionTitle}>Live Transcript</span>
                <span style={{ fontSize: "11px", color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
                  {transcript.length} lines
                </span>
              </div>
              <div ref={transcriptRef} style={{ ...styles.transcript, flex: 1 }}>
                {transcript.length === 0 ? (
                  <div style={{ color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif", fontSize: "13px", padding: "1rem 0" }}>
                    No transcript yet. Start a meeting, upload audio, or load the demo.
                  </div>
                ) : transcript.map((line, i) => {
                  const colors = [COLORS.accent, COLORS.teal, "#A78BFA", COLORS.amber, "#F472B6"];
                  const speakerIdx = [...new Set(transcript.map(l => l.speaker))].indexOf(line.speaker);
                  const col = colors[speakerIdx % colors.length];
                  return (
                    <div key={i} style={{ ...styles.transcriptLine, borderLeftColor: line.role === "Live" || line.role === "Upload" ? COLORS.border : col }}>
                      <span style={{ color: col, fontSize: "11px", fontWeight: "600", marginRight: "8px" }}>{line.speaker}</span>
                      <span style={{ color: COLORS.textMuted, fontSize: "11px", marginRight: "8px" }}>{line.time}</span>
                      <span style={{ color: COLORS.textDim, fontSize: "11px" }}>{line.role}</span>
                      <div style={{ marginTop: "3px", color: COLORS.text, fontSize: "13px" }}>{line.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Speaker Cards */}
            {displaySpeakers.length > 0 && (
              <div style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <div style={{ ...styles.sectionHeader }}>
                  <span style={styles.sectionTitle}>Participants</span>
                  <span style={{ fontSize: "11px", color: COLORS.textMuted, fontFamily: "'DM Sans', sans-serif" }}>{displaySpeakers.length}</span>
                </div>
                <div style={{ display: "flex", gap: "8px", padding: "10px 14px", overflowX: "auto" }}>
                  {displaySpeakers.map((s, i) => (
                    <div key={i} style={{
                      background: COLORS.bgInput,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: "8px",
                      padding: "10px 12px",
                      minWidth: "160px",
                      borderTop: `2px solid ${s.color}`,
                      flex: "0 0 auto",
                    }}>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: "600", fontSize: "13px", color: s.color }}>{s.name}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: COLORS.textMuted, marginTop: "2px" }}>{s.role}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: COLORS.textDim, marginTop: "6px", lineHeight: "1.5" }}>{s.responsibility}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right panel */}
        <div style={styles.rightPanel}>
          <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", borderBottom: `1px solid ${COLORS.border}` }}>
            <InsightsPanel insights={insights} loading={analyzing} />
          </div>
          <div style={{ height: "45%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <ChatSection transcript={transcript} insights={insights} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("cogni_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.loggedIn) return parsed.email;
      }
    } catch {}
    return null;
  });

  const handleLogin = (email) => setUser(email);
  const handleLogout = () => {
    localStorage.removeItem("cogni_user");
    setUser(null);
  };

  return (
    <div style={styles.app}>
      {user ? <Dashboard user={user} onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}
