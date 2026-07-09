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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 That sounds great. Can you check i | S3 Oh, and what about parking? Is par | S4 Okay, that's good to know. Could y

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.62s  <ret> 발화 (turn1 첫 프레임)
     5.83s  agent 발화 시작: <ret> I’ve reserved three rooms at the Ocean View Hotel in S
     5.97s  user  발화 끝
     7.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) hotel_reservation: confirmation_number=AX927LZ, hotel_na
    11.66s  user  발화 시작: Mm-hmm.
    12.11s  user  발화 끝
    14.22s  agent 발화 끝
    14.24s  user  발화 시작: That sounds great. Can you check if they have a shuttle to t
    18.05s  <ret> 발화 (turn4 첫 프레임)
    18.20s  agent 발화 시작: <ret> Yes, the Ocean View Hotel does offer a complimentary a
    18.30s  user  발화 끝
    20.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) hotel_amenities: hotel_name=Ocean View Hotel, city=San D
    23.07s  agent 발화 끝
    23.08s  user  발화 시작: Oh, and what about parking? Is parking included?
    25.85s  user  발화 끝
    26.02s  agent 발화 시작: Parking is available at a rate of twenty-five dollars per ni
    30.30s  user  발화 시작: Okay, that's good to know. Could you add a request for a roo
    30.41s  agent 발화 끝
    35.63s  <ret> 발화 (turn8 첫 프레임)
    36.01s  agent 발화 시작: <ret> I can certainly add that request for you. I’ve added a
    36.22s  user  발화 끝
    37.15s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.94s]: (tool result) hotel_reservation_update: confirmation_number=AX927LZ, r
    44.45s  agent 발화 끝
