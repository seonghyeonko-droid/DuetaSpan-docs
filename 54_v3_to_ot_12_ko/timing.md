# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "재찬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-23",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 ‘Three Little Pigs’라는 노래 누가 불렀는지 알아요?
     2.82s  <ret> 발화 (turn1 첫 프레임)
     2.95s  user  발화 끝
     3.13s  agent 발화 시작: <ret> 그 노래는 Green Jellÿ라는 밴드가 불렀어요. 신나는 곡이죠?
     3.14s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.79s]: Green Jellÿ performs the rock song “Three Little Pigs”.
     6.92s  agent 발화 끝
     7.07s  user  발화 시작: 잠깐만, 아까 말했던 거…
     9.13s  user  발화 끝
    10.07s  user  발화 시작: 아, 죄송해요. 다시 질문할게요. 그 밴드는 다른 노래도 많이 했어요?
    14.75s  agent 발화 시작: Green Jellÿ는 다양한 곡을 발표했답니다. 즐거운 음악을 많이 만들어낸 밴드예요.
    14.93s  user  발화 끝
    19.76s  agent 발화 끝
