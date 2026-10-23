---
date: '2026-10-20'
title: 'MolCurator'
github: 'https://github.com/varunrishi/molcurator'
external: 'https://github.com/varunrishi/molcurator'
tech:
  - LangGraph
  - LLM Agents
  - GFN2-xTB
  - ORCA
  - CatBoost
  - RDKit
showInProjects: true
---

An AI agent that creates and curates benchmark sets of molecules from a seed molecule with a target property (e.g. a HOMO-LUMO gap window or near-zero S1-T1 gap for TADF emitters). Each round it generates candidates with STONED SELFIES, screens them with GFN2-xTB and a CatBoost model, sends uncertain hits to DFT (ORCA) for validation, and curates verified molecules with multi-level properties.
