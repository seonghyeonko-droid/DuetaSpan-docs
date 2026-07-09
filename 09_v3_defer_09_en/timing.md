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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 And can you check if they have a s | S3 Does it run late at night? | S4 No, that’s alright. Could you send

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.43s  <ret> 발화 (turn1 첫 프레임)
     5.66s  agent 발화 시작: <ret> Certainly, I’ve reserved three rooms at the Ocean View
     5.70s  user  발화 끝
     7.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.27s]: (tool result) reservation_id: 789234; hotel: Ocean View Hotel; city: S
    14.93s  agent 발화 끝
    15.64s  user  발화 시작: And can you check if they have a shuttle to the airport?
    17.92s  <ret> 발화 (turn3 첫 프레임)
    18.06s  agent 발화 시작: <ret> Yes, the Ocean View Hotel does offer a complimentary a
    18.27s  user  발화 끝
    19.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) hotel: Ocean View Hotel; airport_shuttle: true; shuttle_
    21.80s  user  발화 시작: Does it run late at night?
    22.46s  agent 발화 끝
    23.37s  agent 발화 시작: That’s a good question. The shuttle runs every thirty minute
    23.55s  user  발화 끝
    26.05s  user  발화 시작: Yeah.
    26.54s  user  발화 끝
    28.19s  agent 발화 시작: I can also set a reminder for your check-in date if you’d li
    28.23s  agent 발화 끝
    31.16s  agent 발화 끝
    31.23s  user  발화 시작: No, that’s alright. Could you send me the confirmation numbe
    34.09s  <ret> 발화 (turn9 첫 프레임)
    34.31s  agent 발화 시작: <ret> Of course. Your confirmation number is ABC123XYZ. I've
    34.46s  user  발화 끝
    36.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.75s]: (tool result) reservation_id: 789234; confirmation_number: ABC123XYZ
    42.06s  agent 발화 끝
