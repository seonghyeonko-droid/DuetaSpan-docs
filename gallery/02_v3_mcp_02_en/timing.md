# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Charlie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm trying to figure out what peop | S2 [sigh] Sounds…pleasant. Okay, back | S3 That's much better. Okay, I think  | S4 …so much. That's really helpful.

     0.00s  user  발화 시작: I'm trying to figure out what people are saying about the ne
     6.36s  <ret> 발화 (turn1 첫 프레임)
     6.60s  agent 발화 시작: <ret> It appears Andrew Witty became CEO of UnitedHealth Gro
     6.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.42s]: (tool result) Andrew Witty assumed the role of CEO at UnitedHealth Gro
     6.76s  user  발화 끝
    16.02s  agent 발화 끝
    17.42s  user  발화 시작: Oh, wow, that’s recent. I guess I should look into GSK too. 
    24.56s  <ret> 발화 (turn3 첫 프레임)
    24.72s  agent 발화 시작: <ret> The weather in London is currently eighteen point five
    24.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.51s]: (tool result) The current weather in London is 18.5°C, with 68% humidi
    24.84s  user  발화 끝
    28.70s  user  발화 시작: Yeah.
    29.28s  user  발화 끝
    34.23s  agent 발화 끝
    34.29s  user  발화 시작: [sigh] Sounds…pleasant. Okay, back to work stress. I need to
    44.48s  <ret> 발화 (turn6 첫 프레임)
    44.88s  agent 발화 시작: <ret> It does sound rather lovely, doesn’t it? Finding the r
    44.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: (tool result) Dr. Eleanor Vance, PhD, specializes in burnout at Seattl
    44.91s  user  발화 끝
    53.72s  agent 발화 시작: Dr. Eleanor Vance, a PhD, specializes in burnout at the Seat
    53.82s  agent 발화 끝
    59.93s  user  발화 시작: Yeah.
    60.41s  user  발화 끝
    64.33s  agent 발화 끝
    64.62s  user  발화 시작: July seventeenth… that’s a little far out. Is there anyone w
    69.79s  <ret> 발화 (turn10 첫 프레임)
    70.09s  agent 발화 시작: <ret> Dr. Anya Sharma, a PsyD, has an opening on July twelft
    70.11s  ⚡SPAN 주입 [d'=0.64s / d_lead=11.39s]: (tool result) Dr. Anya Sharma, PsyD, has availability on July 12th at 
    70.22s  user  발화 끝
    77.21s  user  발화 시작: Uh-huh.
    77.66s  user  발화 끝
    81.36s  user  발화 시작: That's much better. Okay, I think I'll book an appointment w
    81.49s  agent 발화 끝
    85.98s  <ret> 발화 (turn13 첫 프레임)
    86.06s  agent 발화 시작: <ret> Your appointment with Dr. Anya Sharma is confirmed for
    86.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) Appointment with Dr. Anya Sharma booked for July 12th at
    86.17s  user  발화 끝
    91.73s  user  발화 시작: Mm-hmm.
    92.36s  user  발화 끝
    95.24s  agent 발화 끝
    95.77s  user  발화 시작: Great, thank you…
    97.37s  user  발화 끝
    99.12s  user  발화 시작: …so much. That's really helpful.
   101.71s  user  발화 끝
   102.07s  agent 발화 시작: You’re very welcome. It’s good to know I could assist you in
   112.88s  agent 발화 끝
