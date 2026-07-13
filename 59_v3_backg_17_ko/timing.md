# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "도안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-11",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 에루나 씨. 잠이 잘 안 와서요. | S2 그냥… 머릿속에 자꾸 생각나는 게 있어서요. | S3 아이고, 오늘따라 손님이 많네. | S4 '오펜하이머'는 어떤 영화예요?

     0.00s  user  발화 시작: 안녕하세요, 에루나 씨. 잠이 잘 안 와서요.
     3.62s  agent 발화 시작: 안녕하세요. 잠이 오지 않으실 때면, 편안하게 호흡을 맞춰보는 건 어떠세요?
     3.62s  user  발화 끝
     8.80s  user  발화 시작: 예.
     8.80s  agent 발화 끝
     9.31s  user  발화 시작: 음… 호흡은 해봤는데, 잘 모르겠어요.
     9.31s  user  발화 끝
    11.90s  agent 발화 시작: 괜찮아요. 혹시 어떤 점이 불편하신가요? 좀 더 자세히 말씀해 주시겠어요?
    11.90s  user  발화 끝
    17.08s  user  발화 시작: 네네.
    17.08s  agent 발화 끝
    17.59s  user  발화 시작: 그냥… 머릿속에 자꾸 생각나는 게 있어서요.
    17.59s  user  발화 끝
    20.46s  <ret> 발화 (turn7 첫 프레임)
    20.70s  agent 발화 시작: <ret> 미국이 독일에 전쟁을 선포한 날은 천구백사십일년 십이월 십일일입니다.
    20.70s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.14s]: The United States officially entered World War II on December 8, 1941,
    20.70s  user  발화 끝
    24.84s  user  발화 시작: 오.
    24.84s  agent 발화 끝
    25.36s  user  발화 시작: 아, 독일과의 전쟁이 언제 시작됐는지 궁금했어요.
    25.36s  user  발화 끝
    28.46s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요?
    28.46s  user  발화 끝
    31.05s  user  발화 시작: 아이고, 오늘따라 손님이 많네.
    31.05s  agent 발화 끝
    33.12s  user  발화 시작: 그… 이번 주 토요일에 영화 보러 갈 만한 곳 있을까요?
    33.12s  user  발화 끝
    37.89s  <ret> 발화 (turn13 첫 프레임)
    38.29s  agent 발화 시작: <ret> 이번 주 토요일에 상영하는 영화는 '아바타: 물의 길', '오펜하이머', '바비'가 있습니다.
    38.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) Searching for movies showing this weekend. Results: "Ava
    38.29s  user  발화 끝
    43.98s  user  발화 시작: '오펜하이머'는 어떤 영화예요?
    43.98s  agent 발화 끝
    45.38s  <ret> 발화 (turn15 첫 프레임)
    45.54s  agent 발화 시작: <ret> '오펜하이머'는 크리스토퍼 놀란 감독의 이천이십삼년 전기 스릴러 영화입니다. J. 로버트 오펜하이
    45.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.76s]: (tool result) "Oppenheimer" is a 2023 biographical thriller film direc
    45.54s  user  발화 끝
    53.30s  user  발화 시작: 아, 흥미롭네요. 그럼 토요일 예매 좀 해 줄 수 있을까요?
    53.30s  agent 발화 끝
    58.47s  agent 발화 시작: 네, '오펜하이머' 토요일 예매를 도와드리겠습니다. 몇 시로 예매해 드릴까요?
    58.47s  user  발화 끝
    63.13s  agent 발화 끝
