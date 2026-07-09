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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 Perfect. And what's the cancellati | S3 …Is parking included with the rese | S4 Could you also send me a copy of t

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.64s  <ret> 발화 (turn1 첫 프레임)
     5.86s  agent 발화 시작: <ret> Wonderful! I’ve reserved three rooms at the Ocean View
     6.02s  user  발화 끝
     7.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.65s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego. Thre
    12.62s  user  발화 시작: Mm-hmm.
    13.16s  user  발화 끝
    15.51s  agent 발화 끝
    15.57s  user  발화 시작: That sounds great. Can you check if they have a shuttle to t
    18.91s  <ret> 발화 (turn4 첫 프레임)
    19.06s  agent 발화 시작: <ret> Yes, the Ocean View Hotel does offer an airport shuttl
    19.13s  user  발화 끝
    20.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: (tool result) Airport shuttle available. Operates every thirty minutes
    25.60s  agent 발화 끝
    25.62s  user  발화 시작: Perfect. And what's the cancellation policy?
    28.63s  agent 발화 시작: The cancellation policy varies by room type, but generally a
    28.63s  user  발화 끝
    35.88s  user  발화 시작: …Is parking included with the reservation?
    35.91s  agent 발화 끝
    38.21s  agent 발화 시작: Parking—
    38.40s  user  발화 시작: …Is parking included with the reservation, or is that extra?
    38.41s  user  발화 끝
    39.08s  agent 발화 끝
    41.75s  <ret> 발화 (turn10 첫 프레임)
    41.96s  agent 발화 시작: <ret> Ah, good question. Let me check the parking details fo
    42.10s  user  발화 끝
    43.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.94s]: (tool result) Valet parking available at $45 per night. Self-parking i
    45.90s  agent 발화 끝
    45.91s  agent 발화 시작: Parking is available; self-parking is complimentary, while v
    51.93s  agent 발화 끝
    52.84s  user  발화 시작: Complimentary self-parking is fantastic!
    55.61s  user  발화 끝
    55.70s  agent 발화 시작: I agree, that’s a lovely perk. It makes getting around a bit
    57.57s  user  발화 시작: Yeah.
    58.20s  user  발화 끝
    61.83s  agent 발화 끝
    62.82s  user  발화 시작: Could you also send me a copy of the reservation confirmatio
    67.53s  <ret> 발화 (turn16 첫 프레임)
    67.59s  user  발화 끝
    67.60s  agent 발화 시작: <ret> Certainly. I’ve just sent a copy of the reservation co
    69.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: (tool result) Confirmation email sent to user@example.com.
    74.60s  agent 발화 끝
