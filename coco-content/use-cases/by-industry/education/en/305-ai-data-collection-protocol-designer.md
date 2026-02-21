# Use Case #305: AI Data Collection Protocol Designer

**Role**: Researcher | **Industry**: Education | **Task**: Research

---
## Detailed Introduction

**The Pain: Poorly Designed Data Collection Protocols Introduce Irreparable Flaws That Invalidate Research Findings**

Of all the stages in the research process, data collection protocol design is perhaps the most consequential — and the most underinvested. The quality of a study's findings is fundamentally bounded by the quality of its data, and the quality of its data is fundamentally determined by how data collection was designed. A poorly worded survey item introduces systematic measurement bias that affects every response in the dataset. An inadequate sampling strategy produces a sample that cannot support the claimed generalizability. An interview guide that leads participants toward expected answers destroys the ecological validity of the qualitative findings. A field observation protocol without clear operationalization criteria produces inconsistent data across multiple observers. These design flaws are not correctable after the fact — by the time a researcher discovers that their data collection instrument is flawed, the fieldwork is typically complete, the resources are spent, and the timeline does not allow starting over.

The structural source of this problem is time pressure and expertise gaps. Protocol design is often treated as a necessary preliminary task that gets allocated 1–2 weeks before fieldwork begins, during which the researcher is simultaneously managing all other project responsibilities. The result is protocols that are adequate by intuition — developed by experienced researchers who largely get the major elements right — but that contain specific design weaknesses that only a careful methodological audit would surface. A survey question that could be interpreted two ways; a sampling frame that inadvertently excludes a key subgroup; a data recording form that lacks fields for information the analysis plan will require — these are the kinds of protocol failures that accumulate from rushed or unsystematic design processes.

The bias identification challenge is especially acute because the researcher who designs the instrument has inherent blind spots. They know what they are studying, which makes it difficult to anticipate how a participant who lacks that knowledge will interpret a question. They have hypotheses, which makes it difficult to identify where those hypotheses have unconsciously shaped question wording or response option ordering in ways that will produce confirmatory bias. They are domain experts, which makes it difficult to recognize where technical language will confuse general participants. External protocol review is the traditional solution — having a colleague or methods specialist review the instrument before fieldwork — but this requires social capital, scheduling, and substantive engagement that are not always available, especially for under-resourced research teams and graduate students.

The quality assurance gap is a further systemic failure. Even well-designed protocols frequently lack structured quality assurance checkpoints — verification steps built into the fieldwork process that catch data quality problems as they emerge rather than after all data collection is complete. A survey platform that produces response rate alerts, an interview recording checklist that verifies audio quality before the participant leaves, a field data collection form that flags entries outside the expected value range — these kinds of embedded quality checks convert a protocol from a static instrument into an active quality management system. Most protocols are not designed with these checks, so data quality problems accumulate silently and are discovered only during analysis.

**How COCO Solves It**

COCO serves as a systematic protocol design partner — helping researchers build data collection instruments, sampling frameworks, and quality assurance systems that are methodologically sound before fieldwork begins.

1. **Survey and Questionnaire Design**: COCO constructs rigorous survey instruments from research objectives.
   - Translates research questions into specific, measurable survey items
   - Applies established question design principles: clear language, single construct per item, balanced response scales, appropriate ordering
   - Identifies and rewrites double-barreled, leading, and ambiguous questions
   - Designs skip logic, filter questions, and survey flow that minimize respondent burden
   - Recommends validated scale instruments for constructs with established measurement tools

2. **Interview Guide Construction**: COCO builds structured and semi-structured interview protocols.
   - Develops opening questions designed to build rapport and elicit broad context before narrowing
   - Constructs probe hierarchies: main questions, follow-up probes, clarifying probes
   - Balances open-ended exploration with adequate coverage of required themes
   - Identifies where question wording risks leading or priming the participant
   - Designs closing questions that provide opportunity for participant-led additions

3. **Sampling Strategy Design**: COCO constructs sampling frameworks appropriate to the research design.
   - Recommends sampling strategy (probability vs. purposive vs. convenience) based on research goals
   - Calculates or estimates required sample sizes for the statistical power or saturation goals of the study
   - Identifies potential sampling frame gaps — groups systematically excluded by the proposed sampling approach
   - Designs stratification variables and oversampling strategies for subgroup analyses
   - Builds inclusion and exclusion criteria with clear operational definitions

4. **Bias Identification and Mitigation**: COCO conducts a systematic bias audit of proposed protocols.
   - Identifies potential sources of selection bias in the sampling approach
   - Flags survey and interview items that may introduce social desirability, acquiescence, or confirmation bias
   - Evaluates whether the planned data sources adequately represent the target population
   - Recommends specific design modifications to reduce identified biases

5. **Data Recording Instrument Design**: COCO builds structured forms for field data collection and observation.
   - Constructs observation protocols with clear behavioral indicators and coding criteria
   - Designs data recording forms that capture all information required by the analysis plan
   - Builds inter-rater reliability procedures for multi-observer data collection
   - Creates codebooks and operational definitions that enable consistent application across collectors

6. **Quality Assurance Checkpoint System**: COCO designs embedded quality controls for the fieldwork process.
   - Identifies critical quality checkpoints at each stage of data collection (recruitment, consent, data capture, storage)
   - Designs real-time data quality flags for out-of-range values or suspicious response patterns
   - Creates pilot testing protocols to catch instrument problems before full deployment
   - Builds monitoring dashboards to track data quality indicators throughout the fieldwork period

**Measurable Results**

- **Protocol design time**: Structured AI-assisted protocol design reduces the instrument development phase from 3–4 weeks to 5–7 days while producing more methodologically complete output
- **Bias identification**: Systematic AI protocol audits identify an average of 6–10 specific bias risks per instrument that were not identified through researcher self-review
- **Pilot testing outcomes**: Protocols developed with structured design support require 40% fewer revisions during pilot testing than protocols developed through standard researcher-led processes
- **Data quality**: Studies using COCO-designed QA checkpoints report 30% reduction in missing data rates and data entry errors detected during analysis
- **Sampling completeness**: Structured sampling framework design reduces instances of critical subgroup exclusion from sampling frames by an estimated 50%, improving the representativeness of study samples

**Who Benefits**

- **Graduate Students**: Build rigorous, methodologically defensible data collection protocols for dissertations and thesis research without requiring intensive one-on-one faculty supervision of each design decision
- **Applied and Evaluation Researchers**: Design field-deployable data collection systems under contract timelines that don't allow extensive instrument development — without sacrificing methodological rigor
- **Interdisciplinary Research Teams**: Ensure that the data collection design reflects the methodological standards of all contributing disciplines when teams span different methodological traditions
- **Public Health and Social Program Evaluators**: Build quality data collection infrastructure for program evaluations where data quality directly affects the credibility and policy influence of findings

---
## Practical Prompts

**Prompt 1: Survey Instrument Design**
```
Help me design a survey instrument for my research study.

Study context:
- Research question: [YOUR SPECIFIC RESEARCH QUESTION]
- Target population: [WHO WILL COMPLETE THE SURVEY]
- Survey purpose: [WHAT THE SURVEY DATA WILL BE USED FOR]
- Delivery mode: [ONLINE / PAPER / TELEPHONE / IN-PERSON]
- Target completion time: [HOW LONG THE SURVEY SHOULD TAKE — e.g., 10–15 minutes]

Constructs I need to measure:
1. [CONSTRUCT 1] — Definition: [WHAT YOU MEAN BY THIS] — Why important: [WHY YOU'RE MEASURING IT]
2. [CONSTRUCT 2] — Definition: [...] — Why important: [...]
3. [CONSTRUCT 3] — Definition: [...] — Why important: [...]
[Add more as needed]

Population characteristics:
- Education level: [LITERACY / EDUCATION LEVEL OF RESPONDENTS]
- Domain familiarity: [EXPERT / PROFESSIONAL / GENERAL PUBLIC]
- Language: [PRIMARY LANGUAGE / ANY TRANSLATION NEEDS]

Please:
1. Recommend whether to use existing validated scales or develop new items for each construct
2. Draft 3–5 survey items per construct with response scale recommendations
3. Identify any items that risk leading, social desirability, or ambiguity bias — and rewrite them
4. Recommend survey flow and section ordering
5. Design 2–3 attention check items
6. Identify any constructs where the measurement approach may not be valid for this population
```

**Prompt 2: Interview Protocol Design**
```
Design a semi-structured interview protocol for my qualitative study.

Study context:
- Research question(s): [YOUR RQ(S)]
- Interview purpose: [WHAT YOU WANT TO LEARN FROM EACH INTERVIEW]
- Participant type: [WHO YOU WILL INTERVIEW — their role, relationship to your topic]
- Interview duration: [TARGET LENGTH — e.g., 45–60 minutes]
- Setting: [IN-PERSON / PHONE / VIDEO / FOCUS GROUP]

Topic areas I need to cover:
1. [TOPIC 1]: [WHAT YOU NEED TO UNDERSTAND ABOUT THIS TOPIC]
2. [TOPIC 2]: [WHAT YOU NEED TO UNDERSTAND]
3. [TOPIC 3]: [...]
[List all required topic areas]

Sensitivities or risks:
- [ANY SENSITIVE TOPICS — trauma, stigma, power dynamics, confidentiality concerns]
- [PARTICIPANT VULNERABILITIES — age, status, literacy, risk of harm]

Please design:
1. An opening sequence (rapport-building + study overview + consent reminder) — 5–8 minutes
2. Main interview questions: 6–10 core questions covering required topics, with 2–3 follow-up probes each
3. Probe hierarchy for each main question (follow-up prompts if the participant doesn't go deep enough)
4. A closing sequence that allows participant-led additions and a debrief
5. Interviewer notes: guidance on how to handle common interviewer challenges (long silence, off-topic tangents, distressed participant)
6. Flag any questions that risk leading or priming and suggest revisions
```

**Prompt 3: Sampling Strategy Review and Design**
```
Help me design and evaluate a sampling strategy for my research study.

Study type: [QUANTITATIVE / QUALITATIVE / MIXED METHODS]
Research question: [YOUR RQ]
Target population: [WHO YOUR FINDINGS SHOULD APPLY TO]

Current sampling plan (describe what you've planned):
- How I plan to find participants: [RECRUITMENT METHOD]
- Who I plan to include: [INCLUSION CRITERIA]
- Who I plan to exclude: [EXCLUSION CRITERIA]
- How many participants I plan to recruit: [SAMPLE SIZE TARGET]
- Sampling approach: [RANDOM / CONVENIENCE / PURPOSIVE / SNOWBALL / OTHER]

Subgroups I care about:
- [SUBGROUP 1 — e.g., novice vs. experienced participants]
- [SUBGROUP 2 — e.g., urban vs. rural settings]
- [SUBGROUP 3 — if applicable]

My research goals:
- [GENERALIZE FINDINGS TO POPULATION / ACHIEVE THEORETICAL SATURATION / COMPARE SUBGROUPS / OTHER]

Please:
1. Evaluate my current sampling plan against my stated research goals — is it appropriate?
2. Identify potential sampling frame gaps: who might be systematically missing from my proposed approach?
3. Recommend any modifications to improve representativeness or purposive alignment
4. Calculate or estimate the sample size required for my research goals (with assumptions stated)
5. Design the inclusion/exclusion criteria with clear operational definitions I can apply consistently
6. Recommend a recruitment strategy that will reach my target population reliably
```

**Prompt 4: Bias Audit of Existing Protocol**
```
Conduct a systematic bias audit of my existing data collection protocol.

My research question: [YOUR RQ]
Protocol type: [SURVEY / INTERVIEW GUIDE / OBSERVATION PROTOCOL / DATA RECORDING FORM]
My hypotheses or expected findings (be honest): [WHAT YOU EXPECT TO FIND]
My target population: [WHO YOU'RE STUDYING]

Paste your existing protocol here:
[PASTE YOUR CURRENT SURVEY / INTERVIEW GUIDE / PROTOCOL]

Please conduct a structured bias audit that identifies:
1. Confirmation bias risks: any items that are likely to produce data that confirms my hypotheses even if my hypotheses are wrong
2. Social desirability bias: any items where participants are likely to give the "right" answer rather than the true answer
3. Leading question problems: any items that suggest the expected or preferred answer
4. Acquiescence bias: any items where "agree" or "yes" responses don't meaningfully distinguish between participants
5. Sampling or access bias: any ways my data collection approach will systematically miss certain types of participants
6. Measurement validity concerns: any items that may not actually measure what they claim to measure
7. For each identified bias risk: a specific revised item or design change that would reduce it
```

**Prompt 5: Quality Assurance Protocol Design**
```
Design a quality assurance system for my data collection process.

Study overview:
- Data collection type: [SURVEY / INTERVIEWS / FIELD OBSERVATION / ARCHIVAL / MULTI-METHOD]
- Data collectors: [JUST ME / RESEARCH TEAM — number of people]
- Fieldwork duration: [HOW LONG DATA COLLECTION WILL RUN]
- Total participants / data points: [ESTIMATED SCALE]

My biggest data quality concerns:
- [CONCERN 1 — e.g., inconsistent interview technique across interviewers]
- [CONCERN 2 — e.g., missing data on key variables]
- [CONCERN 3 — e.g., inaccurate field coding]

Current quality measures (if any): [WHAT YOU ALREADY PLAN TO DO]

Please design:
1. A pre-fieldwork checklist: everything that must be in place before data collection begins
2. Embedded quality checks for each data collection event (interview, survey completion, observation session)
3. Daily/weekly data quality monitoring protocol for the fieldwork period
4. Inter-rater reliability procedure (if multiple data collectors) with calculation guidance
5. Missing data tracking and response strategy
6. Pilot test protocol: how to test the instrument with 3–5 participants before full deployment
7. Decision rules: when should a data point be flagged, quarantined, or excluded from analysis?
```

---
