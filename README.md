# 🎯 DAG Pipeline Editor – Nexstem Assignment

This is a **React-based DAG (Directed Acyclic Graph) Pipeline Editor** built as part of the Nexstem Frontend Intern assignment.  
Users can visually add nodes, draw edges, validate the structure, and apply auto-layout.

---

## 🚀 Live Demo

🔗 **Demo:** [https://nexstem-assessment-dag-graph.vercel.app/](https://nexstem-assessment-dag-graph.vercel.app/)



---

## 📸 Screenshots

| Add Nodes | Auto Layout | DAG Validation |
|-----------|-------------|----------------|
| ![Add Node](screenshots/add-node.png) | ![Auto Layout](screenshots/auto-layout.png) | ![Valid DAG](screenshots/valid-dag.png) |

> Create a folder named `screenshots/` and place your screenshots there.

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/VATHSAV2004/nexstem_assessment_DAG_graph.git
cd nexstem_assessment_DAG_graph
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

The app will run on `http://localhost:3000`.

---

## 📚 Libraries Used

| Library        | Purpose                                      |
|----------------|----------------------------------------------|
| **reactflow**  | Render interactive graph with drag/connect   |
| **dagre**      | Auto-layout of DAG nodes                     |
| **react**      | Core UI library                              |

---

## 🧱 Key Features

- ✅ Add nodes via button + label prompt
- ✅ Delete Nodes
- ✅ Draw directional edges (with arrow markers)
- ✅ Prevent invalid connections (no self-loop, source→source, etc.)
- ✅ Delete nodes/edges with Delete key
- ✅ Auto Layout using Dagre
- ✅ Live DAG validity checker (no cycles, all connected)
- ✅ Styled UI with clean buttons and colored status

---

## 🔧 Folder Structure

```
src/
│
├── components/
│   ├── PipelineEditor/       → Main graph editor UI
│   ├── CustomNode/           → Custom node with source/target handles
│   ├── Controls/             → Add Node & Auto Layout buttons
│   └── StatusMessage/        → DAG validation status (Valid/Invalid)
│
├── utils/
│   ├── layout.js             → Dagre auto-layout logic
│   └── validation.js         → DAG validation (cycle, connection checks)
│
└── App.js                    → Renders <PipelineEditor />
```

---

## 🎥 Screen Recording

📽️ [Watch on Loom / YouTube / Google Drive](https://your-video-link)

---

## ⚙️ Challenges & Learnings

### 1. DAG Validation Logic
- Writing DFS logic to detect cycles and ensure all nodes are connected.
- ✅ Solved using adjacency list and recursion.

### 2. Layout Integration with Dagre
- Mapping positions from Dagre back into React Flow.
- ✅ Handled with helper to format input/output.


---

## ✅ Future Improvements

- Export/import pipeline as JSON
- Node type selection (source/processor/output)
- Right-click context menu for editing/deleting
- Undo/Redo support
- Save to backend or localStorage

---


