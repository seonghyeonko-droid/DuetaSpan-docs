# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Nina",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to find pharmacies within three kilometers of San Fra
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.11s  <ret> 발화 (turn4 첫 프레임)
     0.14s  agent 발화 시작: <ret> I found a Walgreens at 123 Main Street in San Francisc
     0.14s  ⚡SPAN 주입 [d'=0.19s / d_lead=0.19s]: (tool result) {"results": [{"name": "Walgreens", "vicinity": "123 Main
     0.14s  user  발화 끝
     0.33s  user  발화 시작: Mm-hmm.
     0.33s  agent 발화 끝
     0.34s  user  발화 시작: Oh, um, actually, make that five kilometers.
     0.34s  user  발화 끝
     0.43s  agent 발화 시작: <ret> No problem at all. Now, within five kilometers, there’
     0.43s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: (tool result) {"results": [{"name": "CVS Pharmacy", "vicinity": "456 O
     0.43s  user  발화 끝
     0.68s  user  발화 시작: Yeah.
     0.68s  agent 발화 끝
     0.70s  agent 발화 시작: It’s wonderful you’re thinking ahead about health needs—bein
     0.70s  user  발화 끝
     0.73s  <ret> 발화 (turn8 첫 프레임)
     0.87s  user  발화 시작: Can you give me directions to the CVS?
     0.87s  agent 발화 끝
     0.97s  agent 발화 시작: <ret> It’s 4.
     0.97s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) {"routes": [{"legs": [{"distance": {"text": "4.8 km", "v
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
