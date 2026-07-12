# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "연율",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-13",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-10-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아델의 Someone Like You를 거실에서 틀어줘. | S2 고마워. 혹시… 내일 모레 알람 맞춰줄 수 있어? | S3 …혹시 집 근처에 분위기 좋은… | S4 음… 이번 주말에 부산 갈까 생각 중인데, 기차표 예매해 줄 

     0.00s  user  발화 시작: 아델의 Someone Like You를 거실에서 틀어줘.
     2.58s  <ret> 발화 (turn1 첫 프레임)
     2.66s  agent 발화 시작: <ret> 아델의 Someone Like You를 거실에서 재생합니다. 확인 번호는 팔 구 엑스 제트 이 삼
     2.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.54s]: (tool result) Playing "Someone Like You" by Adele in the living room. 
     2.66s  user  발화 끝
    10.21s  user  발화 시작: 오늘 날씨 어때?
    10.21s  agent 발화 끝
    11.14s  <ret> 발화 (turn3 첫 프레임)
    11.54s  agent 발화 시작: <ret> 현재 서울의 날씨는 이십팔 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속 칠 점 이킬로미터입니다
    11.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.66s]: (tool result) The current weather in Seoul is 28.5°C, humidity 68%, wi
    11.54s  user  발화 끝
    18.19s  user  발화 시작: 이번 주 토요일에 영화 보러 갈 만한 곳 있어?
    18.19s  agent 발화 끝
    21.79s  <ret> 발화 (turn5 첫 프레임)
    22.19s  agent 발화 시작: <ret> 이번 주 토요일에 롯데시네마 월드타워에서 '인사이드 아웃 이'를 상영합니다. 두시, 다섯시 삼십분
    22.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: (tool result) "Inside Out 2" is playing at Lotte Cinema World Tower, s
    22.19s  user  발화 끝
    28.40s  user  발화 시작: 응.
    28.40s  agent 발화 끝
    28.84s  user  발화 시작: 다섯시 삼십분으로 예매해 줘.
    28.84s  user  발화 끝
    30.22s  <ret> 발화 (turn8 첫 프레임)
    30.62s  agent 발화 시작: <ret> '인사이드 아웃 이' 다섯시 삼십분 상영 티켓 두 장 예매 완료되었습니다. 확인 번호는 와이 칠 
    30.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.76s]: (tool result) Two tickets for "Inside Out 2" at Lotte Cinema World Tow
    30.62s  user  발화 끝
    40.38s  user  발화 시작: 고마워. 혹시… 내일 모레 알람 맞춰줄 수 있어?
    40.38s  agent 발화 끝
    43.93s  agent 발화 시작: 몇 시로 맞춰드릴까요?
    43.93s  user  발화 끝
    45.26s  user  발화 시작: 아, 일곱시에 맞춰줘.
    45.26s  agent 발화 끝
    46.36s  <ret> 발화 (turn12 첫 프레임)
    46.60s  agent 발화 시작: <ret> 내일 오전 일곱시에 알람을 설정했습니다. 푹 주무세요.
    46.60s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.11s]: (tool result) Alarm set for 7:00 AM tomorrow.
    46.60s  user  발화 끝
    49.70s  user  발화 시작: 오늘 저녁 메뉴 추천해 줘.
    49.70s  agent 발화 끝
    51.68s  <ret> 발화 (turn14 첫 프레임)
    51.92s  agent 발화 시작: <ret> 명동 고궁이라는 한식집이 평점 사 점 오점에, 이백미터 거리에 있습니다. 괜찮으시겠어요?
    51.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.88s]: (tool result) "Gogung Myeongdong" serves Korean cuisine, rated 4.5 sta
    51.92s  user  발화 끝
    56.80s  user  발화 시작: 맞아.
    56.80s  agent 발화 끝
    57.25s  user  발화 시작: 음… 거기는 좀 멀리 떨어져 있네. —
    57.25s  user  발화 끝
    60.35s  user  발화 시작: …혹시 집 근처에 분위기 좋은…
    60.35s  user  발화 끝
    62.57s  user  발화 시작: …카페 알아봐 줄 수 있어?
    62.57s  user  발화 끝
    64.55s  <ret> 발화 (turn19 첫 프레임)
    64.79s  agent 발화 시작: <ret> 집 근처에 카페 레이어드가 평점 사 점 이점에 오백미터 거리에 있습니다. 분위기가 좋다고 합니다.
    64.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: (tool result) "Cafe Layered" is a popular cafe, 500m away, with a 4.2-
    64.79s  user  발화 끝
    71.00s  user  발화 시작: 응.
    71.00s  agent 발화 끝
    71.45s  user  발화 시작: 오, 거기는 가보고 싶었는데.
    71.45s  user  발화 끝
    73.22s  agent 발화 시작: 전에 말씀하신 적이 있으셨나요? 기억이 잘 안 나네요.
    73.22s  user  발화 끝
    76.77s  user  발화 시작: 아니, 그냥 처음 듣는 얘기야.
    76.77s  agent 발화 끝
    78.99s  agent 발화 시작: 아, 그러셨군요. 혹시 다른 계획은 없으신가요?
    78.99s  user  발화 끝
    81.65s  user  발화 시작: 응.
    81.65s  agent 발화 끝
    82.10s  user  발화 시작: 음… 이번 주말에 부산 갈까 생각 중인데, 기차표 예매해 줄 수 있어?
    82.10s  user  발화 끝
    87.26s  <ret> 발화 (turn27 첫 프레임)
    87.42s  agent 발화 시작: <ret> 부산행 기차는 서울역에서 오전 아홉시, 열두시, 오후 세시에 출발합니다.
    87.42s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.99s]: (tool result) Trains to Busan depart from Seoul Station at 9:00 AM, 12
    87.42s  user  발화 끝
    91.42s  user  발화 시작: 열두시 기차로 예매해 줘.
    91.42s  agent 발화 끝
    92.95s  <ret> 발화 (turn29 첫 프레임)
    93.19s  agent 발화 시작: <ret> 부산행 열두시 기차 티켓 한 장 예매 완료되었습니다. 확인 번호는 큐 삼 팔 알 오 이입니다. 즐
    93.19s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.43s]: (tool result) One ticket to Busan on the 12:00 PM train, confirmed. Co
    93.19s  user  발화 끝
   101.62s  user  발화 시작: 고마워, 패라.
   101.62s  agent 발화 끝
   102.51s  agent 발화 시작: 천만에요.
   102.51s  user  발화 끝
   102.95s  agent 발화 끝
