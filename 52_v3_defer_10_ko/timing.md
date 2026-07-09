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


     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아줘, 썸네일 말고.
     3.42s  <ret> 발화 (turn1 첫 프레임)
     3.49s  agent 발화 시작: <ret> 네, 알겠습니다. 작년 프랑스 휴가 사진이 삼십칠장 검색됐어요. 썸네일은 제외했습니다.
     3.69s  user  발화 끝
     4.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.15s]: (tool result) Found 37 files matching "프랑스 휴가 사진" excluding "썸네일" from
     6.99s  user  발화 시작: 오.
     7.81s  user  발화 끝
     9.23s  agent 발화 끝
    11.94s  user  발화 시작: 그중에 에펠탑 사진만 보여줘.
    14.07s  <ret> 발화 (turn4 첫 프레임)
    14.15s  agent 발화 시작: <ret> 에펠탑 사진만 찾아서 보여드릴게요. 에펠탑이 포함된 사진이 십이장 있어요.
    14.34s  user  발화 끝
    15.19s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.35s]: (tool result) Filtered 12 files containing "에펠탑" from the 37 "프랑스 휴가 사
    19.43s  agent 발화 끝
