# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Casey",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "anniversary",
#       "text": "User's anniversary is September 8."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "skill",
#       "text": "User is getting fairly good at pottery."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Lebanese."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "diet",
#       "text": "User is kosher."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "medication",
#       "text": "User takes a daily thyroid medication."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Casey, I'm Runar. It’s lovely to connect with you.
     1.27s  user  발화 시작: Yeah.
     1.77s  user  발화 끝
     3.70s  agent 발화 끝
     4.30s  user  발화 시작: Um, it’s just… I keep thinking about our anniversary.
     6.10s  agent 발화 시작: Yeah.
     6.73s  agent 발화 끝
     7.53s  <ret> 발화 (turn4 첫 프레임)
     7.74s  agent 발화 시작: <ret> Your anniversary is on September eighth, and it’s comp
     7.86s  user  발화 끝
     8.47s  ⚡SPAN 주입 [d'=0.94s / d_lead=5.14s]: [2026-04-30] User's anniversary is September 8.
    12.88s  agent 발화 끝
    13.11s  user  발화 시작: Right. Do you… remember what I was looking at for my home ne
    18.20s  <ret> 발화 (turn6 첫 프레임)
    18.58s  user  발화 끝
    18.59s  agent 발화 시작: <ret> You were asking about mesh routers for a three-story h
    19.70s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.74s]: [2026-03-06] Past chat — Setting up a home network: asked about mesh r
    24.33s  agent 발화 끝
