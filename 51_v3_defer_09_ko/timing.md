# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "우빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-26",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 달력에서 날짜 좀 클릭해 줘.
     2.49s  user  발화 끝
     2.66s  <ret> 발화 (turn1 첫 프레임)
     2.82s  agent 발화 시작: <ret> 네, 달력 iframe 안의 오늘 날짜를 클릭해 드렸습니다. 혹시 다른 날짜도 클릭해 드릴까요?
     2.82s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.90s]: (tool result) Clicked element with selector '#calendar .today'.
     9.72s  agent 발화 끝
     9.80s  user  발화 시작: 이번 주 토요일에 영화 예매 좀 해 볼까 하는데…
    12.76s  user  발화 끝
    12.80s  agent 발화 시작: 토요일에 영화를 보시려고요? 어떤 영화를 보고 싶으신가요?
    16.13s  agent 발화 끝
    16.23s  agent 발화 시작: 요즘 개봉한 영화 중에서 평점이 좋은 영화들을 찾아드릴까요—
    19.50s  user  발화 시작: … 아니, 혹시 '인터스텔라' 상영하는 곳 있으면 찾아줘.
    20.06s  agent 발화 끝
    22.91s  <ret> 발화 (turn6 첫 프레임)
    22.99s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    22.99s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.42s]: (tool result) Showing times for 'Interstellar' at Megabox Coex: 14:00,
    23.01s  user  발화 끝
    24.39s  agent 발화 시작: '인터스텔라'는 메가박스 코엑스에서 오후 두시, 다섯시, 여덟시에 상영되고 있습니다. 괜찮으신 시간대가 있으
    24.42s  agent 발화 끝
    31.34s  agent 발화 끝
