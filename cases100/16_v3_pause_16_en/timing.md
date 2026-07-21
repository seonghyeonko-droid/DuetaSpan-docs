# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Alice",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "child",
#       "text": "User has a child named Rin, age 13."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "skill",
#       "text": "User is just getting back into bread baking."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about ancient China… | S2 …he do to centralize power, exactl | S3 …was that a difficult process, uni | S4 …he basically laid the groundwork 

     0.00s  user  발화 시작: I was reading about ancient China… and I got curious. Who fo
     5.22s  <ret> 발화 (turn1 첫 프레임)
     6.71s  user  발화 끝
     6.80s  ⚡SPAN 주입 [d'=1.58s / d_lead=7.82s]: The first emperor of a unified China was Qin Shi Huang, who reigned fr
     6.86s  agent 발화 시작: <ret> Qin Shi Huang was the first emperor of a unified China
    14.69s  agent 발화 끝
    14.82s  user  발화 시작: Wow, Qin Shi Huang. What did…
    18.12s  user  발화 끝
    19.95s  user  발화 시작: …he do to centralize power, exactly?
    20.99s  agent 발화 시작: Uh-huh.
    21.48s  agent 발화 끝
    22.57s  agent 발화 시작: He implemented a lot of standardizations—
    22.66s  user  발화 끝
    24.90s  user  발화 시작: …was that a difficult process, unifying all those states?
    25.47s  agent 발화 끝
    28.94s  <ret> 발화 (turn7 첫 프레임)
    29.29s  user  발화 끝
    29.37s  agent 발화 시작: <ret> He standardized currency, weights, measures, and even 
    29.88s  ⚡SPAN 주입 [d'=0.95s / d_lead=6.90s]: Qin Shi Huang standardized currency, weights, measures, and even the w
    32.66s  user  발화 시작: Uh-huh.
    33.05s  user  발화 끝
    36.16s  agent 발화 시작: It was a massive undertaking, and not everyone was happy abo
    36.27s  agent 발화 끝
    40.32s  user  발화 시작: I can imagine. So…
    40.35s  agent 발화 끝
    41.97s  user  발화 끝
    43.02s  user  발화 시작: …he basically laid the groundwork for future Chinese dynasti
    45.18s  <ret> 발화 (turn12 첫 프레임)
    46.49s  ⚡SPAN 주입 [d'=1.31s / d_lead=9.49s]: The Qin dynasty lasted only fifteen years, but its centralized system 
    46.55s  agent 발화 시작: <ret> The Qin dynasty lasted only fifteen years, but its cen
    46.61s  user  발화 끝
    56.04s  agent 발화 끝
