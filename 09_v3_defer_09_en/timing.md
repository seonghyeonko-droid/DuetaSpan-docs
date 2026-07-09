# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 Great. And what about parking. | S3 …is it included in the price or is | S4 Perfect. Could you send me a copy 

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.91s  <ret> 발화 (turn1 첫 프레임)
     6.15s  agent 발화 시작: <ret> Absolutely. I’ve reserved three rooms at the Ocean Vie
     6.21s  user  발화 끝
     7.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.62s]: (tool result) Reservation confirmed; confirmation number is XL729K; th
    12.27s  user  발화 시작: Right.
    12.58s  user  발화 끝
    16.77s  agent 발화 끝
    16.86s  user  발화 시작: That sounds perfect. Can you also check if they have a shutt
    21.00s  <ret> 발화 (turn4 첫 프레임)
    21.15s  agent 발화 시작: <ret> Certainly. The Ocean View Hotel does offer an airport 
    21.25s  user  발화 끝
    23.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: (tool result) Airport shuttle: available, runs every thirty minutes, $
    28.26s  user  발화 시작: Great. And what about parking.
    28.29s  agent 발화 끝
    30.19s  agent 발화 시작: Parking is available—
    30.20s  user  발화 끝
    31.03s  user  발화 시작: …is it included in the price or is that extra?
    31.62s  agent 발화 끝
    33.72s  agent 발화 시작: That’s a good question. Parking at the Ocean View Hotel is a
    33.80s  user  발화 끝
    40.35s  agent 발화 끝
    40.69s  user  발화 시작: Okay, add parking for seven nights then, please.
    42.80s  <ret> 발화 (turn10 첫 프레임)
    43.19s  agent 발화 시작: <ret> No problem. I’ve added parking for seven nights to you
    43.37s  user  발화 끝
    44.08s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.20s]: (tool result) Parking added; confirmation XL729K updated; total cost n
    49.23s  user  발화 시작: Oh.
    49.73s  user  발화 끝
    51.39s  agent 발화 끝
    52.57s  user  발화 시작: Perfect. Could you send me a copy of the updated confirmatio
    56.89s  <ret> 발화 (turn13 첫 프레임)
    56.95s  agent 발화 시작: <ret> Of course. I've just sent the updated confirmation to 
    57.06s  user  발화 끝
    58.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) Confirmation sent to user@example.com.
    63.90s  agent 발화 끝
