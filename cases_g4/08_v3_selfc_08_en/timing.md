# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Sophie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "home",
#       "text": "User's home address is 733 Juniper Lane."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "schedule",
#       "text": "User has a four-day compressed week."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "partner",
#       "text": "User's partner is named Hana."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "emergency",
#       "text": "User's emergency contact is Minjun."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "bloodtype",
#       "text": "User's blood type is B-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-04-05",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'm in Los Angeles and need to find a gas station near— no w
     2.65s  agent 발화 시작: Uh-huh.
     3.15s  agent 발화 끝
     4.53s  <ret> 발화 (turn2 첫 프레임)
     4.72s  user  발화 끝
     4.79s  agent 발화 시작: <ret> [happy] Let me see what's open for you. I found a Shel
     5.18s  ⚡SPAN 주입 [d'=0.66s / d_lead=2.31s]: (tool result) Shell Station (34.0123, -118.4912), Chevron (34.0211, -1
     9.13s  user  발화 시작: Okay.
     9.72s  user  발화 끝
    13.46s  agent 발화 끝
    13.58s  user  발화 시작: Which one is closer to the pier?
    14.00s  <ret> 발화 (turn5 첫 프레임)
    15.55s  agent 발화 시작: <ret> The pier is at two hundred Santa Monica Pier, so the S
    15.74s  user  발화 끝
    15.80s  ⚡SPAN 주입 [d'=1.80s / d_lead=5.05s]: (tool result) Santa Monica Pier is located at 200 Santa Monica Pier, S
    20.60s  agent 발화 끝
    22.36s  user  발화 시작: Thanks, Funo. I'm feeling a bit stressed with this trip.
    23.85s  agent 발화 시작: Mm-hmm.
    24.49s  agent 발화 끝
    25.29s  agent 발화 시작: [sigh] I hear you. Take a deep breath; you're doing great, a
    25.31s  user  발화 끝
    31.35s  agent 발화 끝
