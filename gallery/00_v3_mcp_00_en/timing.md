# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Theo",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-24",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 991 Cedar Lane."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Play What's Going On by Marvin Gay | S2 [sigh] It really is. | S3 Could you find me restaurants… | S4 …nearby that are open now?

     0.00s  user  발화 시작: Play What's Going On by Marvin Gaye.
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.40s  agent 발화 시작: <ret> Enjoy the music — it's a beautiful album.
     2.40s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.40s]: (tool result) Playing "What's Going On" by Marvin Gaye.
     2.49s  user  발화 끝
     3.13s  user  발화 시작: Right.
     3.86s  user  발화 끝
     4.80s  agent 발화 끝
     5.05s  user  발화 시작: What was Marvin Gaye’s birthdate?
     6.82s  <ret> 발화 (turn4 첫 프레임)
     7.21s  agent 발화 시작: <ret> He was born on April second, nineteen thirty-nine, in 
     7.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Marvin Gaye was born Marvin Pentz Gay Jr. on April 2, 1939, in Washing
     7.26s  user  발화 끝
    13.47s  agent 발화 끝
    13.48s  user  발화 시작: [sigh] It really is.
    15.42s  user  발화 끝
    15.56s  agent 발화 시작: Sometimes, allowing ourselves to simply *feel* the music can
    20.42s  agent 발화 끝
    21.03s  user  발화 시작: Could you find me restaurants…
    22.68s  user  발화 끝
    24.68s  user  발화 시작: …nearby that are open now?
    26.06s  <ret> 발화 (turn9 첫 프레임)
    26.21s  agent 발화 시작: <ret> There are three restaurants open now: The Corner Bistr
    26.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: (tool result) 3 restaurants found: The Corner Bistro, open until 10 PM
    26.34s  user  발화 끝
    32.79s  agent 발화 끝
