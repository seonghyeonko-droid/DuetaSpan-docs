# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Alice",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 프랑스 휴가 사진 찾아줘. 작년 거, 썸네일 말고.
     4.02s  <ret> 발화 (turn1 첫 프레임)
     4.09s  agent 발화 시작: <ret> 네, 알겠습니다. 작년 프랑스 휴가 사진 세 개 찾았어요. 에펠탑, 니스 해변, 루아르 계곡 성 
     4.31s  user  발화 끝
     4.52s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.83s]: (tool result) filename:Paris_Eiffel_Tower.jpg, size:2.5MB; filename:Ni
     8.17s  user  발화 시작: 맞아.
     8.80s  user  발화 끝
    10.72s  agent 발화 끝
    13.45s  user  발화 시작: 잠깐만, 루아르 계곡 성은 내가 분명히 지웠는데?
    17.30s  agent 발화 시작: 아, 그러셨군요. 잠시만 확인해 볼게요.
    17.52s  user  발화 끝
    18.92s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) filename:Loire_Valley_Chateau.jpg, size:3.1MB, last_modi
    19.63s  agent 발화 시작: <ret> 확인해 봤는데, 파일이 복구된 것 같아요. 루아르 성 사진이 최근에 복구된 것 같아요. 혹시 실수
    19.79s  agent 발화 끝
    28.34s  agent 발화 끝
