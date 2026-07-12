# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "지국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오레오 쿠키가 미국에서 처음 팔린 곳이 어디였는지 아세요 | S2 음... 이번 주 토요일에 영화 보러 가고 싶은데, 괜찮은 영 | S3 아니요, 됐어요. 그럼, 혹시 내일 날씨 어때요? | S4 아, 맞아요. 그때 그랬었죠.

     0.00s  user  발화 시작: 혹시 오레오 쿠키가 미국에서 처음 팔린 곳이 어디였는지 아세요?
     4.39s  <ret> 발화 (turn1 첫 프레임)
     4.55s  agent 발화 시작: <ret> 오레오 쿠키가 미국에서 처음 판매된 곳은 뉴저지 주 호보켄이었답니다.
     4.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.55s]: Hoboken, New Jersey.
     4.55s  user  발화 끝
     9.01s  <ret> 발화 (turn2 첫 프레임)
     9.09s  agent 발화 시작: <ret> 저는 여러분의 일정을 관리하고, 생산성을 높이는 데 도움을 드릴 수 있어요.
     9.09s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.56s]: The current price of Tesla stock is $253.87 as of 2:27 PM PDT.
     9.09s  agent 발화 끝
    14.65s  user  발화 시작: 그치.
    14.65s  agent 발화 끝
    15.16s  user  발화 시작: 아, 그렇군요. 그럼 호보켄은 어떤 곳이에요?
    15.16s  user  발화 끝
    17.87s  <ret> 발화 (turn5 첫 프레임)
    18.19s  agent 발화 시작: <ret> 호보켄은 뉴저지 주 허드슨 카운티에 있는 도시이고, 뉴욕 대도시권에 속해 있어요.
    18.19s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.56s]: Hoboken is a city in Hudson County, New Jersey, United States, part of
    18.19s  user  발화 끝
    23.75s  user  발화 시작: 뉴욕이랑 가까운 곳이네요?
    23.75s  agent 발화 끝
    25.26s  agent 발화 시작: 네, 뉴욕과 아주 가까운 곳이랍니다. 멋진 곳이죠.
    25.26s  user  발화 끝
    28.80s  user  발화 시작: 응.
    28.80s  agent 발화 끝
    29.30s  user  발화 시작: 음... 이번 주 토요일에 영화 보러 가고 싶은데, 괜찮은 영화 있을까요?
    29.30s  user  발화 끝
    34.54s  <ret> 발화 (turn10 첫 프레임)
    34.86s  agent 발화 시작: <ret> 이번 주 토요일에 볼 만한 영화로는 '인사이드 아웃 이', '배드 보이 라이드 오어 다이', '가
    34.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.59s]: (tool result) MovieFinder: Searching for movies now. Results: 'Inside 
    34.86s  user  발화 끝
    43.45s  user  발화 시작: '인사이드 아웃 이'가 제일 끌리네요. 영화 시간 좀 알아봐 주시겠어요?
    43.45s  agent 발화 끝
    48.26s  <ret> 발화 (turn12 첫 프레임)
    48.50s  agent 발화 시작: <ret> '인사이드 아웃 이'는 메가박스 코엑스에서 오후 두시 삼십분, 다섯시, 일곱시 삼십분에 상영된답니
    48.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: (tool result) MovieTimes: 'Inside Out 2' showings at 2:30 PM, 5:00 PM,
    48.50s  user  발화 끝
    54.56s  user  발화 시작: 맞아.
    54.56s  agent 발화 끝
    55.07s  agent 발화 시작: 혹시 지금 바로 예매해 드릴까요?
    55.07s  user  발화 끝
    57.59s  user  발화 시작: 아니요, 아직은요. 그냥 알아만 봐 주세요.
    57.59s  agent 발화 끝
    60.63s  agent 발화 시작: 네, 알겠습니다. 혹시 다른 영화를 알아볼까요?
    60.63s  user  발화 끝
    63.66s  user  발화 시작: 아니요, 됐어요. 그럼, 혹시 내일 날씨 어때요?
    63.66s  agent 발화 끝
    67.03s  <ret> 발화 (turn18 첫 프레임)
    67.19s  agent 발화 시작: <ret> 내일 서울 날씨는 섭씨 이십팔도, 습도 육십오퍼센트, 바람은 시속 삼 점 이킬로미터로 예상됩니다.
    67.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.57s]: (tool result) Weather: Tomorrow in Seoul will be 28.0°C, humidity 65%,
    67.19s  user  발화 끝
    73.76s  user  발화 시작: 꽤 덥겠네요.
    73.76s  agent 발화 끝
    74.77s  agent 발화 시작: 네, 꽤 더울 것 같아요. 시원한 물을 많이 드세요.
    74.77s  user  발화 끝
    79.32s  user  발화 시작: 알겠습니다. 혹시 제가 지난번에 뭐라고 말씀드렸었죠?
    79.32s  agent 발화 끝
    82.19s  <ret> 발화 (turn22 첫 프레임)
    82.35s  agent 발화 시작: <ret> 이천이십사년 칠월 삼일에 "저는 오늘 너무 피곤해요"라고 말씀하셨어요.
    82.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.04s]: [2024-07-03] 저는 오늘 너무 피곤해요.
    82.35s  user  발화 끝
    86.39s  user  발화 시작: 아, 맞아요. 그때 그랬었죠.
    86.39s  agent 발화 끝
    88.41s  agent 발화 시작: 힘든 하루였군요. 충분히 쉬셨기를 바랍니다.
    88.41s  user  발화 끝
    90.94s  user  발화 시작: 네, 덕분에 좀 쉬었어요.
    90.94s  agent 발화 끝
    92.96s  agent 발화 시작: 다행이에요. 저는 여러분이 편안하게 휴식을 취하실 수 있도록 도와드릴 수 있어요.
    92.96s  user  발화 끝
    98.52s  agent 발화 끝
