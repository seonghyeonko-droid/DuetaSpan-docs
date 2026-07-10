# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "소준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 에이스가 노히트 매치를 당한 게 언제였더라?
     3.18s  <ret> 발화 (turn1 첫 프레임)
     3.38s  user  발화 끝
     3.42s  agent 발화 시작: <ret> 에이스가 마지막으로 노히트 매치를 당한 건… 이천십팔년 사월 이십일일입니다… 천구백팔십팔년 오월 
     5.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: 에이스는 1988년 5월 11일에 로스앤젤레스에서 오하이오 주립대학교를 상대로 노히트 경기를 펼쳤습니다.
    11.30s  user  발화 시작: 잠깐만, 아까 그 얘기 다시 해 줄래?
    11.34s  agent 발화 끝
    13.73s  user  발화 시작: 아, 미안. 그래서, 그 날짜가 정확히 언제였지?
    13.79s  user  발화 끝
    16.58s  <ret> 발화 (turn4 첫 프레임)
    16.90s  agent 발화 시작: <ret> 에이스가 마지막으로 노히트 매치를 당한 날은 이천십팔년 사월 이십일일이었어요… 이천십팔년 사월 이
    17.01s  user  발화 끝
    18.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: 에이스가 마지막으로 노히트 매치를 당한 건 이천십팔년 사월 이십일일입니다.
    22.72s  user  발화 시작: 맞아요.
    23.35s  user  발화 끝
    24.31s  agent 발화 끝
    24.46s  agent 발화 시작: 야구 관련해서 궁금한 점이 있다면 언제든지 말씀해 주세요. 편안한 밤 보내세요.
    29.73s  agent 발화 끝
