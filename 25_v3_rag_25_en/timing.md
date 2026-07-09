# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 So, I was reading about Jack Sock  | S2 Never played each other? That seem | S3 Okay, the Australian Open. So, a d | S4 An Olympic gold! That's fantastic.

     0.00s  user  발화 시작: So, I was reading about Jack Sock and Raffaella Reggi… what 
     6.54s  <ret> 발화 (turn1 첫 프레임)
     6.70s  agent 발화 시작: <ret> Jack Sock and Raffaella Reggi both played professional
     6.90s  user  발화 끝
     7.96s  user  발화 시작: Yeah.
     8.05s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.21s]: [source: Wikipedia] Jack Sock and Raffaella Reggi both competed as pro
     8.32s  user  발화 끝
    10.72s  user  발화 시작: Tennis, huh? I always thought Jack Sock might have tried bas
    10.90s  agent 발화 끝
    17.19s  <ret> 발화 (turn4 첫 프레임)
    17.35s  agent 발화 시작: <ret> Jack Sock’s highest career ranking in singles was numb
    17.35s  user  발화 끝
    19.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [source: ATP Tour] Jack Sock achieved a career-high ATP singles rankin
    22.67s  user  발화 시작: Eight? That's pretty good! Was Reggi as highly ranked? I don
    23.00s  agent 발화 끝
    29.07s  <ret> 발화 (turn6 첫 프레임)
    29.39s  user  발화 끝
    29.39s  agent 발화 시작: <ret> Raffaella Reggi’s highest WTA singles ranking was sixt
    30.91s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.39s]: [source: ITF Tennis] Raffaella Reggi reached a career-high WTA singles
    35.79s  agent 발화 끝
    35.95s  user  발화 시작: Oh, sixteen! That *is* good. So they were both pretty succes
    42.24s  <ret> 발화 (turn8 첫 프레임)
    42.64s  agent 발화 시작: <ret> Jack Sock and Raffaella Reggi did not play each other 
    42.67s  user  발화 끝
    44.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: [source: Tennis Abstract] Jack Sock and Raffaella Reggi never competed
    47.56s  user  발화 시작: Never played each other? That seems… unlikely, given they we
    47.73s  agent 발화 끝
    54.48s  <ret> 발화 (turn10 첫 프레임)
    54.63s  agent 발화 시작: <ret> Jack Sock won four ATP Tour titles, notably the Paris 
    54.78s  user  발화 끝
    56.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: [source: ESPN] Jack Sock won four ATP Tour titles during his career, i
    61.05s  user  발화 시작: Four titles is decent. What about Reggi? Did she win any tou
    61.12s  agent 발화 끝
    66.38s  <ret> 발화 (turn12 첫 프레임)
    66.78s  agent 발화 시작: <ret> Raffaella Reggi won six WTA singles titles, plus a Gra
    66.84s  user  발화 끝
    68.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: [source: WTA Tour] Raffaella Reggi won six WTA Tour singles titles and
    70.36s  user  발화 시작: Yeah.
    70.94s  user  발화 끝
    73.45s  agent 발화 끝
    73.65s  user  발화 시작: A Grand Slam! That’s impressive. Which one?
    76.72s  <ret> 발화 (turn15 첫 프레임)
    77.12s  agent 발화 시작: <ret> Raffaella Reggi won the Australian Open doubles title 
    77.26s  user  발화 끝
    78.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: [source: Australian Open] Raffaella Reggi won the Australian Open wome
    82.96s  agent 발화 끝
    83.21s  user  발화 시작: Okay, the Australian Open. So, a doubles title. I’m still cu
    88.53s  <ret> 발화 (turn17 첫 프레임)
    88.60s  agent 발화 시작: <ret> Jack Sock retired from professional tennis in December
    88.62s  user  발화 끝
    90.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: [source: Tennis Week] Jack Sock retired from professional tennis in De
    94.35s  agent 발화 끝
    94.91s  user  발화 시작: Oh, he retired recently. That’s a shame. What about Reggi? I
   101.10s  <ret> 발화 (turn19 첫 프레임)
   101.26s  user  발화 끝
   101.34s  agent 발화 시작: <ret> Raffaella Reggi retired from professional tennis in tw
   102.86s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.95s]: [source: Last Word On Tennis] Raffaella Reggi retired from professiona
   104.43s  user  발화 시작: Yeah.
   104.84s  user  발화 끝
   106.20s  user  발화 시작: So both are retired now. That makes sense. Did Reggi ever co
   106.30s  agent 발화 끝
   113.07s  <ret> 발화 (turn22 첫 프레임)
   113.47s  agent 발화 시작: <ret> Raffaella Reggi captained the Italian Fed Cup team fro
   113.61s  user  발화 끝
   115.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: [source: Italian Tennis Federation] Raffaella Reggi served as the capt
   118.89s  user  발화 시작: The Fed Cup captain? That's a big role! She stayed involved,
   119.31s  agent 발화 끝
   123.68s  <ret> 발화 (turn24 첫 프레임)
   123.92s  agent 발화 시작: <ret> Jack Sock won an Olympic gold medal in doubles with St
   124.03s  user  발화 끝
   125.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: [source: Olympics] Jack Sock won a gold medal in doubles at the 2016 R
   127.49s  user  발화 시작: Right.
   128.22s  user  발화 끝
   129.39s  agent 발화 끝
   130.29s  user  발화 시작: An Olympic gold! That's fantastic. I'm glad to hear he had t
   136.05s  <ret> 발화 (turn27 첫 프레임)
   136.29s  agent 발화 시작: <ret> Raffaella Reggi reached the quarterfinal stage of the 
   136.31s  user  발화 끝
   138.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: [source: USTA] Raffaella Reggi reached the quarterfinals of the 1990 F
   141.22s  user  발화 시작: The French Open quarterfinals is good. So they both had pret
   141.38s  agent 발화 끝
   147.81s  agent 발화 시작: Yes, both athletes demonstrated remarkable skill and commitm
   147.98s  user  발화 끝
   153.22s  user  발화 시작: Thanks, Zura. That was really informative.
   153.22s  agent 발화 끝
   155.85s  user  발화 끝
   155.95s  agent 발화 시작: You’re very welcome. It’s a pleasure to explore these storie
   160.29s  agent 발화 끝
