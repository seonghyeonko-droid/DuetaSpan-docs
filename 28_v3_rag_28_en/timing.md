# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Alice",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m trying to settle in, and I’m wondering about things to d
     5.37s  agent 발화 시작: Welcome to the city! It's wonderful you're thinking about ex
     5.37s  user  발화 끝
     9.97s  user  발화 시작: Yeah, but I feel a bit lost. Is there a good museum nearby?
     9.97s  agent 발화 끝
    14.73s  <ret> 발화 (turn3 첫 프레임)
    14.96s  agent 발화 시작: <ret> There is a wonderful museum quite close by—the Nationa
    14.96s  user  발화 끝
    15.03s  ⚡SPAN 주입 [d'=0.30s / d_lead=11.51s]: The National Museum of Korea houses over 400,000 artifacts and artwork
    26.46s  user  발화 시작: Four hundred thousand? That sounds… huge. What are the littl
    26.46s  agent 발화 끝
    34.20s  <ret> 발화 (turn5 첫 프레임)
    34.52s  agent 발화 시작: <ret> Those little things orbiting the atom are called elect
    34.52s  user  발화 끝
    34.98s  ⚡SPAN 주입 [d'=0.78s / d_lead=6.90s]: Electrons orbit the nucleus of an atom in specific pathways, or energy
    41.42s  agent 발화 끝
