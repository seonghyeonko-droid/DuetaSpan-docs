# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "하린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 피자 먹고 싶은데. 삼십사 점 영 오 위도, -백십팔 점 | S2 캘리포니아 피자 키친까지 어떻게 가? | S3 잠깐만, 팔분이나 걸려? 좀 더 빠른 길은 없어? | S4 삼십육분은 너무 길어. 그럼 그냥 지금 있는 곳 주변에 괜찮은

     0.00s  user  발화 시작: 음… 피자 먹고 싶은데. 삼십사 점 영 오 위도, -백십팔 점 이 사 경도 주변에 피자집 좀 찾아줘.
     8.41s  <ret> 발화 (turn1 첫 프레임)
     8.65s  agent 발화 시작: <ret> 주변에 피자 가게 두 곳이 있어요. 캘리포니아 피자 키친 평점은 사 점 이점이고, 블레이즈 피자는
     8.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) {"results": [{"name": "California Pizza Kitchen", "vicin
     8.81s  user  발화 끝
    16.54s  agent 발화 끝
    17.19s  user  발화 시작: 캘리포니아 피자 키친까지 어떻게 가?
    19.71s  <ret> 발화 (turn3 첫 프레임)
    20.03s  agent 발화 시작: <ret> 캘리포니아 피자 키친까지는 이 점 삼마일, 약 팔분 정도 걸리고요, S 플라워 스트리트에서 북쪽으
    20.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.84s]: (tool result) {"distance": "2.3 miles", "duration": "8 minutes", "inst
    20.10s  user  발화 끝
    25.55s  user  발화 시작: 대박.
    26.18s  user  발화 끝
    27.87s  agent 발화 끝
    28.50s  user  발화 시작: 잠깐만, 팔분이나 걸려? 좀 더 빠른 길은 없어?
    32.00s  <ret> 발화 (turn6 첫 프레임)
    32.38s  user  발화 끝
    32.40s  agent 발화 시작: <ret> 도보로 가시면 일 점 팔마일, 약 삼십육분이 걸리는데, S 플라워 스트리트에서 북쪽으로 가시는 길
    32.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) {"distance": "1.8 miles", "duration": "36 minutes", "ins
    35.51s  user  발화 시작: 와.
    36.15s  user  발화 끝
    39.63s  agent 발화 끝
    39.94s  user  발화 시작: 삼십육분은 너무 길어. 그럼 그냥 지금 있는 곳 주변에 괜찮은 스테이크집은 어디야?
    46.04s  <ret> 발화 (turn9 첫 프레임)
    46.19s  user  발화 끝
    46.28s  agent 발화 시작: <ret> 지금 계신 곳 주변에는 컷 바이 볼프강 퍽 평점 사 점 오점, 플레밍스 프라임 스테이크하우스 평점
    46.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) {"results": [{"name": "CUT by Wolfgang Puck", "vicinity"
    54.53s  agent 발화 끝
