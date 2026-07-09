# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 하재 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: 40s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-06-02] User's home address is 389 Maple Drive.
#      [2026-03-10] User is planning a trip to Vietnam in August.
#      [2026-03-09] User has a Poodle named Coco.
#      [2026-02-26] User prefers a window seat when traveling.
#   B. 과거 대화 요약:
#      [2026-06-20] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-02-28] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 How many senators are there in the | S2 Interesting. Is she a Democrat? | S3 Does he have a lot of experience? | S4 Mm-hmm. What kind of law did he pr

     0.00s  user  발화 시작: How many senators are there in the French Senate?
     2.94s  <ret> 발화 (turn1 첫 프레임)
     3.00s  agent 발화 시작: <ret> That’s a good question, understanding the structure of
     3.00s  user  발화 끝
     4.62s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.53s]: (no information found)
     7.77s  user  발화 시작: Mhm.
     8.50s  user  발화 끝
    13.24s  agent 발화 끝
    13.91s  user  발화 시작: Um, okay. What about the US Senate? How many senators are th
    18.03s  <ret> 발화 (turn4 첫 프레임)
    18.26s  agent 발화 시작: <ret> Ah, the US Senate is something I can easily help with—
    18.39s  user  발화 끝
    19.07s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.81s]: The United States Senate is composed of one hundred senators, two from
    23.54s  user  발화 시작: Okay.
    24.18s  user  발화 끝
    26.93s  agent 발화 끝
    27.08s  user  발화 시작: Right. And who is the current president pro tempore?
    29.80s  <ret> 발화 (turn7 첫 프레임)
    30.03s  agent 발화 시작: <ret> That’s a detail that changes periodically, of course— 
    30.17s  user  발화 끝
    31.56s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.17s]: As of November 29, 2023, Patty Murray is the President Pro Tempore of 
    36.81s  user  발화 시작: Interesting. Is she a Democrat?
    37.16s  agent 발화 끝
    39.05s  <ret> 발화 (turn9 첫 프레임)
    39.20s  user  발화 끝
    39.28s  agent 발화 시작: <ret> Yes, she is— Patty Murray is indeed a Democrat, repres
    40.01s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.28s]: Patty Murray is a member of the Democratic Party, representing Washing
    41.17s  user  발화 시작: Yeah, yeah.
    42.45s  user  발화 끝
    45.26s  agent 발화 끝
    45.31s  user  발화 시작: What about the Speaker of the House? Who is that?
    48.07s  <ret> 발화 (turn12 첫 프레임)
    48.14s  agent 발화 시작: <ret> Let me check on the current Speaker for you— Mike John
    48.17s  user  발화 끝
    49.59s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.60s]: (tool result) Mike Johnson is the current Speaker of the House, electe
    54.08s  user  발화 시작: October? Wow, that feels recent. Is he from Louisiana?
    54.21s  agent 발화 끝
    58.13s  <ret> 발화 (turn14 첫 프레임)
    58.52s  agent 발화 시작: <ret> Yes, he represents Louisiana— He represents Louisiana’
    58.67s  user  발화 끝
    59.09s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: Mike Johnson represents Louisiana's 4th congressional district in the 
    63.61s  agent 발화 끝
    65.09s  user  발화 시작: Does he have a lot of experience?
    67.72s  user  발화 끝
    67.72s  agent 발화 시작: —He’s been in Congress for a few years now—
    69.48s  user  발화 시작: I mean, before Congress? What did he do?
    70.12s  agent 발화 끝
    71.94s  <ret> 발화 (turn18 첫 프레임)
    72.17s  agent 발화 시작: <ret> Before entering Congress, he practiced law— He previou
    72.25s  user  발화 끝
    72.50s  ⚡SPAN 주입 [d'=0.56s / d_lead=2.35s]: Prior to his political career, Mike Johnson worked as a constitutional
    75.58s  user  발화 시작: Okay.
    76.35s  user  발화 끝
    77.19s  user  발화 시작: That makes sense. So, a lawyer turned politician.
    77.27s  agent 발화 끝
    80.65s  agent 발화 시작: It’s a common path, certainly. Many find skills translate we
    80.70s  user  발화 끝
    84.13s  user  발화 시작: Mm-hmm. What kind of law did he practice?
    84.82s  agent 발화 끝
    86.75s  <ret> 발화 (turn23 첫 프레임)
    87.14s  agent 발화 시작: <ret> That’s a more specific detail, let me look that up— He
    87.22s  user  발화 끝
    88.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.90s]: Mike Johnson specialized in appellate and constitutional law at a priv
    91.37s  user  발화 시작: Right.
    91.72s  user  발화 끝
    93.50s  user  발화 시작: Constitutional law, huh? That explains a lot.
    93.77s  agent 발화 끝
    97.00s  agent 발화 시작: [laugh] It often provides a strong foundation for understand
    97.06s  user  발화 끝
   102.15s  agent 발화 끝
   102.32s  user  발화 시작: So, it sounds like he's pretty conservative then?
   105.33s  user  발화 끝
   105.49s  agent 발화 시작: He generally aligns with conservative principles, yes—
   108.94s  <ret> 발화 (turn29 첫 프레임)
   109.09s  agent 발화 시작: <ret> He is known for his socially conservative viewpoints.
   109.24s  agent 발화 끝
   110.30s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.06s]: Mike Johnson is known for his socially conservative and constitutional
   112.15s  agent 발화 끝
