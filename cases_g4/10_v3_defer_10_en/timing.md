# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Emilia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-21",
#       "category": "savings",
#       "text": "User is saving for an emergency fund of six months' expenses."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-04-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Dorami! I'm so nervous about my | S2 That makes me feel better. Oh, can | S3 I hope I didn't forget anything in | S4 Thank you so much, Dorami! I feel 

     0.00s  user  발화 시작: Hi Dorami! I'm so nervous about my first day. Can you help m
     7.36s  agent 발화 시작: Give me a moment on that one.
     7.60s  user  발화 끝
     9.02s  agent 발화 끝
     9.14s  user  발화 시작: I'm just worried I won't fit in with the team. Do you have a
    14.10s  user  발화 끝
    14.21s  agent 발화 시작: [happy] Just be yourself! Smile, introduce yourself to every
    18.35s  user  발화 시작: Okay.
    19.17s  user  발화 끝
    22.14s  agent 발화 끝
    22.51s  user  발화 시작: That makes me feel better. Oh, can you check the weather for
    25.25s  agent 발화 시작: Uh-huh.
    25.97s  agent 발화 끝
    26.95s  <ret> 발화 (turn7 첫 프레임)
    27.05s  user  발화 끝
    27.21s  agent 발화 시작: <ret> It is seventy-two degrees and sunny in New York. Perfe
    28.21s  ⚡SPAN 주입 [d'=1.26s / d_lead=5.09s]: (tool result) New York, New York, 72 degrees, sunny
    30.02s  user  발화 시작: Yeah.
    30.79s  user  발화 끝
    32.30s  agent 발화 끝
    33.89s  user  발화 시작: I hope I didn't forget anything in my bag. Should I bring a 
    36.30s  agent 발화 시작: Yeah.
    36.89s  agent 발화 끝
    37.73s  user  발화 끝
    37.74s  agent 발화 시작: Taking notes shows you're eager to learn. It's a great way t
    40.74s  user  발화 시작: ... wait, do you think I should wear a blazer or is that too
    41.44s  agent 발화 끝
    44.88s  agent 발화 시작: [curious] Did they mention a dress code? If not, a blazer is
    44.91s  user  발화 끝
    46.98s  user  발화 시작: Yeah.
    47.75s  user  발화 끝
    51.42s  agent 발화 시작: You've got this! Just take a deep breath.
    51.46s  agent 발화 끝
    53.70s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Times Square, New York, New York, Pool, RID2-005697, con
    54.15s  agent 발화 시작: <ret> Oh — about that ride you asked for earlier. Your pool 
    54.24s  agent 발화 끝
    59.21s  user  발화 시작: Mm-hmm.
    59.90s  user  발화 끝
    64.77s  agent 발화 끝
    64.92s  user  발화 시작: Thank you so much, Dorami! I feel way more prepared now.
    67.33s  agent 발화 시작: Mhm.
    68.15s  agent 발화 끝
    68.52s  agent 발화 시작: [happy] You're very welcome! Go knock their socks off. I'm r
    68.67s  user  발화 끝
    73.38s  agent 발화 끝
