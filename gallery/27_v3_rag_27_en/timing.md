# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Charlie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "home",
#       "text": "User's home address is 395 Maple Drive."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to remember something a | S2 …did she ever play tennis? | S3 Where did she go to law school? | S4 What kind of tennis did he play?

     0.00s  user  발화 시작: I'm trying to remember something about Barbara Jordan.
     2.45s  user  발화 끝
     2.55s  agent 발화 시작: It’s wonderful you’re thinking about remarkable people. What
     6.16s  user  발화 시작: Okay.
     6.79s  user  발화 끝
     8.85s  agent 발화 끝
     8.93s  user  발화 시작: Was she connected to Mark Knowles somehow?
    10.91s  <ret> 발화 (turn4 첫 프레임)
    11.30s  agent 발화 시작: <ret> They lived very different lives—Barbara Jordan was a l
    11.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: Barbara Jordan was a lawyer, civil rights leader, and politician, whil
    11.33s  user  발화 끝
    20.21s  agent 발화 끝
    20.46s  user  발화 시작: What did Barbara Jordan do as a lawyer?
    22.48s  <ret> 발화 (turn6 첫 프레임)
    22.55s  agent 발화 시작: <ret> Before politics, Barbara Jordan worked as a lawyer, de
    22.55s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.65s]: Barbara Jordan served as a lawyer before entering politics, focusing o
    22.71s  user  발화 끝
    29.38s  user  발화 시작: …did she ever play tennis?
    30.20s  agent 발화 끝
    30.83s  <ret> 발화 (turn8 첫 프레임)
    30.85s  user  발화 끝
    30.91s  agent 발화 시작: <ret> There's no record of her playing tennis, though she en
    30.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: There is no public record of Barbara Jordan playing tennis, though she
    33.38s  user  발화 시작: Nice.
    34.15s  user  발화 끝
    35.49s  agent 발화 끝
    36.62s  user  발화 시작: Okay, that makes sense. What was she known for politically?
    39.57s  <ret> 발화 (turn11 첫 프레임)
    39.89s  agent 발화 시작: <ret> Barbara Jordan broke barriers, becoming the first Afri
    39.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: Barbara Jordan was the first African American woman elected to the Tex
    40.09s  user  발화 끝
    43.02s  user  발화 시작: Yeah.
    43.46s  user  발화 끝
    47.81s  agent 발화 끝
    47.90s  user  발화 시작: Where did she go to law school?
    49.29s  <ret> 발화 (turn14 첫 프레임)
    49.44s  agent 발화 시작: <ret> She earned her law degree from Boston College Law Scho
    49.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: Barbara Jordan earned her Juris Doctor degree from Boston College Law 
    49.51s  user  발화 끝
    57.98s  agent 발화 끝
    57.99s  user  발화 시작: What year was she born?
    59.15s  <ret> 발화 (turn16 첫 프레임)
    59.31s  agent 발화 시작: <ret> Barbara Jordan was born on February twenty-sixth, nine
    59.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: Barbara Jordan was born on February 26, 1936, in Houston, Texas.
    59.51s  user  발화 끝
    65.38s  agent 발화 끝
    65.42s  user  발화 시작: And Mark Knowles… when did *he* retire from tennis?
    68.27s  <ret> 발화 (turn18 첫 프레임)
    68.51s  agent 발화 시작: <ret> Mark Knowles retired from professional tennis in two t
    68.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: Mark Knowles retired from professional tennis in 2010 after a successf
    68.66s  user  발화 끝
    74.07s  user  발화 시작: Yeah.
    74.51s  user  발화 끝
    77.02s  user  발화 시작: What kind of tennis did he play?
    77.28s  agent 발화 끝
    78.50s  <ret> 발화 (turn21 첫 프레임)
    78.90s  agent 발화 시작: <ret> Mark Knowles excelled in doubles tennis, even reaching
    78.90s  ⚡SPAN 주입 [d'=1.12s / d_lead=8.40s]: Mark Knowles was a professional tennis player specializing in doubles,
    78.95s  user  발화 끝
    87.19s  user  발화 시작: What country is he from?
    87.30s  agent 발화 끝
    88.54s  <ret> 발화 (turn23 첫 프레임)
    88.62s  agent 발화 시작: <ret> Mark Knowles is from the Bahamas, and proudly represen
    88.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: Mark Knowles is Bahamian, representing the Bahamas throughout his prof
    88.70s  user  발화 끝
    96.96s  agent 발화 끝
