# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Mia",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "commute",
#       "text": "User takes a shuttle bus."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "emergency",
#       "text": "User's emergency contact is Haruto."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "learning",
#       "text": "User is learning Spanish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-25",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey moshi… | S2 …quick question. Who played bass o | S3 Oh, really? That’s interesting… | S4 So, um, what about keeping in touc

     0.00s  user  발화 시작: Hey moshi…
     1.00s  user  발화 끝
     2.33s  user  발화 시작: …quick question. Who played bass on the Rolling Stones’ “Sym
     6.47s  <ret> 발화 (turn2 첫 프레임)
     6.70s  agent 발화 시작: <ret> That would be Keith Richards, actually—he stepped in t
     6.78s  user  발화 끝
     7.47s  ⚡SPAN 주입 [d'=1.01s / d_lead=7.46s]: Keith Richards played bass on the Rolling Stones’ “Sympathy for the De
    14.14s  user  발화 시작: Oh, really? That’s interesting…
    14.15s  agent 발화 끝
    17.05s  user  발화 끝
    18.51s  user  발화 시작: So, um, what about keeping in touch with old friends? I’m te
    23.50s  user  발화 끝
    23.81s  agent 발화 시작: [happy] It’s really common to struggle with that! Small, reg
    31.18s  agent 발화 끝
