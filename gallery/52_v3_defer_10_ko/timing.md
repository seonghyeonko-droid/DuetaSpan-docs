# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "라율",
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
#       "date": "2026-05-07",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아줘. 썸네일 말고.
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> 프랑스 휴가 사진 이백삼십칠개를 찾았어요. 썸네일은 제외했습니다.
     3.23s  user  발화 끝
     3.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Found 237 image files matching "프랑스 휴가 사진" excluding thu
     5.23s  user  발화 시작: 음.
     5.63s  user  발화 끝
     7.89s  user  발화 시작: 그 중에서 해변에서 찍은 사진만 보여줘.
     8.09s  agent 발화 끝
     9.94s  <ret> 발화 (turn4 첫 프레임)
    10.32s  agent 발화 시작: <ret> 해변 사진 팔십칠장이 있어요. 지금 보여드릴게요.
    10.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: (tool result) Found 87 image files containing "해변" in the filename, lo
    10.52s  user  발화 끝
    11.69s  user  발화 시작: 응.
    12.08s  user  발화 끝
    13.74s  agent 발화 끝
    14.71s  user  발화 시작: 혹시, 그 사진들 중에서 가장 큰 파일 크기 순으로 정렬해 줄 수 있어?
    19.42s  <ret> 발화 (turn7 첫 프레임)
    19.80s  user  발화 끝
    19.81s  agent 발화 시작: <ret> 잠시만 기다려 주세요. 파일 크기 순으로 정렬하는 데 시간이 조금 걸릴 것 같아요.
    19.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: (no information found)
    24.90s  agent 발화 시작: 파일 크기 순으로 정렬하는 기능은 아직 지원하지 않네요. 하지만, 최근 촬영일 순으로 정렬해서 보여드릴 수는
    24.99s  agent 발화 끝
    33.94s  agent 발화 끝
