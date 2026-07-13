# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-03",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-30",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good Italian rest | S2 …if they have any openings tomorro | S3 Actually, I was thinking. | S4 I'm hoping to keep my daily spendi

     0.00s  user  발화 시작: I need to find a good Italian restaurant in Seoul.
     4.15s  agent 발화 시작: I can help with that.
     4.15s  user  발화 끝
     6.22s  user  발화 시작: And uh, something not too expensive, please.
     6.22s  agent 발화 끝
     8.58s  <ret> 발화 (turn3 첫 프레임)
     9.12s  agent 발화 시작: <ret> I found two budget-friendly Italian restaurants in Seo
     9.12s  user  발화 끝
     9.64s  ⚡SPAN 주입 [d'=1.05s / d_lead=11.61s]: (tool result) {"restaurants": [{"name": "La Tavola", "address": "27, T
    20.74s  user  발화 시작: Yeah, totally.
    20.74s  agent 발화 끝
    21.57s  user  발화 시작: La Tavola sounds good. Can you check…
    21.57s  user  발화 끝
    24.47s  user  발화 시작: …if they have any openings tomorrow evening around 7 PM?
    24.47s  user  발화 끝
    28.62s  agent 발화 시작: Exactly.
    28.62s  user  발화 끝
    29.02s  <ret> 발화 (turn8 첫 프레임)
    29.03s  agent 발화 시작: <ret> Yes, I’ve confirmed a reservation for you at La Tavola
    29.03s  agent 발화 끝
    30.52s  ⚡SPAN 주입 [d'=1.50s / d_lead=11.20s]: (tool result) {"reservation id": "LT2026071119002", "status": "confirm
    40.23s  user  발화 시작: That's great!
    40.23s  agent 발화 끝
    41.06s  agent 발화 시작: Wonderful! I'm glad I could help with that.
    41.06s  user  발화 끝
    44.37s  user  발화 시작: Actually, I was thinking.
    44.37s  agent 발화 끝
    46.03s  agent 발화 시작: I was going to suggest checking their menu online—
    46.03s  user  발화 끝
    49.77s  user  발화 시작: …do they have outdoor seating?
    49.77s  agent 발화 끝
    51.71s  <ret> 발화 (turn14 첫 프레임)
    51.84s  agent 발화 시작: <ret> Yes, La Tavola does have a charming outdoor terrace, w
    51.84s  user  발화 끝
    52.19s  ⚡SPAN 주입 [d'=1.35s / d_lead=7.05s]: (tool result) La Tavola in Seoul features a charming outdoor terrace, 
    58.89s  user  발화 시작: Yeah, yeah.
    58.89s  agent 발화 끝
    59.72s  user  발화 시작: Oh, that's lovely. I'm also trying to stick to a budget for 
    59.72s  user  발화 끝
    66.77s  agent 발화 시작: I understand completely. Budgeting is so important when trav
    66.77s  user  발화 끝
    70.50s  user  발화 시작: I'm hoping to keep my daily spending under 150,000 Korean Wo
    70.50s  agent 발화 끝
    77.14s  agent 발화 시작: Exactly.
    77.14s  user  발화 끝
    77.36s  <ret> 발화 (turn20 첫 프레임)
    77.55s  agent 발화 시작: <ret> That depends on your spending habits, of course, but— 
    77.55s  agent 발화 끝
    77.90s  ⚡SPAN 주입 [d'=0.54s / d_lead=3.73s]: The average daily cost for a tourist in Seoul is around ₩120,000 to ₩2
    92.90s  user  발화 시작: 80,000 Won sounds doable! Thanks, Dorana.
    92.90s  agent 발화 끝
    95.39s  agent 발화 시작: You're very welcome! I’m happy to assist with your financial
    95.39s  user  발화 끝
   101.19s  agent 발화 끝
