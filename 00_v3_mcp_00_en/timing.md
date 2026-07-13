# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Max",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "home",
#       "text": "User's home address is 120 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What is the address of… | S2 Oh, that’s good to know. And what’ | S3 Hmm, sounds pleasant. I'm thinking | S4 Just a quick visit, maybe three da

     0.00s  user  발화 시작: What is the address of…
     1.73s  user  발화 시작: …the Hockey Hall of Fame?
     1.73s  user  발화 끝
     3.24s  <ret> 발화 (turn2 첫 프레임)
     3.46s  agent 발화 시작: <ret> [happy] The Hockey Hall of Fame is at 155 Front Street
     3.46s  user  발화 끝
     4.01s  ⚡SPAN 주입 [d'=0.76s / d_lead=9.00s]: (tool result) {"name": "Hockey Hall of Fame", "formatted address": "15
    12.45s  user  발화 시작: Oh, that’s good to know. And what’s the weather like there r
    12.45s  agent 발화 끝
    16.86s  <ret> 발화 (turn4 첫 프레임)
    16.95s  agent 발화 시작: <ret> [curious] Right now in Toronto, it’s 22.8 degrees Cels
    16.95s  user  발화 끝
    17.65s  ⚡SPAN 주입 [d'=0.79s / d_lead=7.96s]: (tool result) {"city": "Toronto", "country": "Canada", "latitude": 43.
    24.91s  user  발화 시작: Hmm, sounds pleasant. I'm thinking of visiting next week.
    24.91s  agent 발화 끝
    28.02s  agent 발화 시작: Yeah.
    28.02s  user  발화 끝
    28.37s  agent 발화 시작: That sounds lovely! Toronto is a great city to explore. Are 
    28.37s  agent 발화 끝
    35.63s  user  발화 시작: Just a quick visit, maybe three days. I want to see a Blue J
    35.63s  agent 발화 끝
    40.82s  agent 발화 시작: Uh-huh.
    40.82s  user  발화 끝
    41.17s  agent 발화 시작: [laugh] A Blue Jays game sounds perfect for a quick trip! I 
    41.17s  agent 발화 끝
    48.44s  agent 발화 끝
