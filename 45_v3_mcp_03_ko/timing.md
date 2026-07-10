# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "세민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 혹시 제일 가까운 우체국 주소가 어떻게 돼요? | S2 아니요, 괜찮아요. 그냥 거기 갈게요. | S3 혹시 길에서 교통 체증이 있을까요? | S4 음… 그래도 괜찮아요.

     0.00s  user  발화 시작: 안녕하세요. 혹시 제일 가까운 우체국 주소가 어떻게 돼요?
     3.67s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> 안녕하세요. 가장 가까운 우체국 주소는 백이십삼 메인 스트리트, 애니타운, 캘리포니아 구 일 이 
     3.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.70s]: (tool result) 123 Main Street, Anytown, CA 91234
     4.25s  user  발화 끝
     7.97s  user  발화 시작: 네.
     8.37s  user  발화 끝
    11.69s  agent 발화 끝
    12.11s  user  발화 시작: 음… 거기는 지금 영업시간이 어떻게 돼요?
    15.31s  <ret> 발화 (turn4 첫 프레임)
    15.39s  agent 발화 시작: <ret> 지금은 영업 중이고, 오늘 오후 다섯시까지 영업합니다.
    15.39s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.32s]: (tool result) Open today until 5:00 PM
    15.66s  user  발화 끝
    16.75s  user  발화 시작: 정말요?
    17.43s  user  발화 끝
    18.40s  user  발화 시작: 오, 다행이다.
    18.71s  agent 발화 끝
    19.49s  agent 발화 시작: 네, 다행이네요.
    19.64s  user  발화 끝
    20.82s  agent 발화 끝
    21.12s  user  발화 시작: 이번 주 토요일에 거기 갈 수 있을까요?
    23.97s  agent 발화 시작: 이번 주 토요일에도 영업을 할 거예요.
    24.07s  user  발화 끝
    24.91s  user  발화 시작: 네.
    25.55s  user  발화 끝
    26.50s  agent 발화 끝
    26.54s  agent 발화 시작: 토요일에도 영업을 합니다. 혹시 다른 궁금한 점이 있으신가요? — 토요일에는 오전 아홉시부터 오후 한시까지 
    31.18s  user  발화 시작: 네.
    31.68s  user  발화 끝
    34.70s  agent 발화 끝
    34.84s  user  발화 시작: 아, 토요일에는 시간이 짧네요.
    37.10s  user  발화 끝
    37.20s  agent 발화 시작: 네, 토요일에는 시간이 조금 짧습니다. 혹시 다른 우체국을 알아볼까요?
    41.87s  agent 발화 끝
    42.34s  user  발화 시작: 아니요, 괜찮아요. 그냥 거기 갈게요.
    44.39s  agent 발화 시작: 네, 알겠습니다. 그 우체국에 가시는군요.
    44.65s  user  발화 끝
    46.92s  agent 발화 끝
    47.45s  user  발화 시작: 혹시 거기로 가는 가장 빠른 길을 알려줄 수 있을까요?
    50.96s  <ret> 발화 (turn18 첫 프레임)
    51.04s  agent 발화 시작: <ret> 현재 위치에서 백이십삼 메인 스트리트까지 자동차로 오 점 이마일, 약 십분 정도 걸립니다.
    51.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: (tool result) Drive 5.2 miles, approximately 10 minutes.
    51.24s  user  발화 끝
    57.11s  agent 발화 끝
    57.19s  user  발화 시작: 십분이면 괜찮네요.
    58.66s  user  발화 끝
    58.67s  agent 발화 시작: 네, 십분이면 괜찮으시겠네요. 길 안내를 시작할까요?
    60.64s  user  발화 시작: 네.
    61.22s  user  발화 끝
    61.86s  agent 발화 끝
    61.95s  user  발화 시작: 네, 시작해주세요.
    63.29s  agent 발화 시작: 길 안내를 시작하겠습니다. 지금부터 안내에 따라 이동해주세요.
    63.51s  user  발화 끝
    67.55s  agent 발화 끝
    67.61s  user  발화 시작: 혹시 길에서 교통 체증이 있을까요?
    70.07s  <ret> 발화 (turn25 첫 프레임)
    70.22s  agent 발화 시작: <ret> 현재 약간의 교통 체증이 예상되어, 삼분 정도 더 걸릴 수 있습니다.
    70.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: (tool result) Moderate traffic expected, adding 3 minutes to the trip.
    70.34s  user  발화 끝
    74.29s  agent 발화 끝
    74.37s  user  발화 시작: 아, 그렇군요.
    75.43s  agent 발화 시작: 네, 그렇습니다. 조금 더 주의해서 운전하세요.
    75.57s  user  발화 끝
    78.06s  agent 발화 끝
    78.21s  user  발화 시작: 알겠습니다.
    78.84s  agent 발화 시작: 네, 안전하게 가세요.
    79.03s  user  발화 끝
    80.27s  agent 발화 끝
    80.36s  user  발화 시작: 그런데, 혹시 그 우체국에 주차 공간이 있나요?
    84.16s  <ret> 발화 (turn31 첫 프레임)
    84.32s  agent 발화 시작: <ret> 그 우체국에는 길가 주차 공간이 제한적으로 있습니다.
    84.32s  ⚡SPAN 주입 [d'=0.56s / d_lead=3.33s]: (tool result) Limited street parking available.
    84.43s  user  발화 끝
    86.09s  user  발화 시작: 음.
    86.73s  user  발화 끝
    87.65s  agent 발화 끝
    88.02s  user  발화 시작: 아, 길가 주차라…
    89.76s  user  발화 끝
    90.19s  agent 발화 시작: 네, 길가 주차만 가능합니다. 조금 불편할 수도 있겠네요.
    94.26s  agent 발화 끝
    94.31s  user  발화 시작: 음… 그래도 괜찮아요.
    96.34s  user  발화 끝
    96.55s  agent 발화 시작: 네, 괜찮으시다면 다행입니다.
    98.16s  agent 발화 끝
    99.08s  user  발화 시작: 오늘 날씨는 어때요?
   100.60s  <ret> 발화 (turn38 첫 프레임)
   100.68s  agent 발화 시작: <ret> 애니타운의 날씨는 현재 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다.
   100.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
   100.83s  user  발화 끝
   107.31s  agent 발화 끝
   107.97s  user  발화 시작: 꽤 덥네요.
   108.99s  agent 발화 시작: 네, 꽤 더운 날씨입니다. 시원하게 우체국에 다녀오세요.
   109.07s  user  발화 끝
   110.33s  user  발화 시작: 네.
   110.87s  user  발화 끝
   112.36s  agent 발화 끝
   112.58s  user  발화 시작: 고마워요.
   113.40s  user  발화 끝
   113.48s  agent 발화 시작: 천만에요.
   114.16s  agent 발화 끝
