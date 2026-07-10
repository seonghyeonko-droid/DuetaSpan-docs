# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "성람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-15",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 볼 만한 영화 좀 찾아줘. | S2 근데 혹시 어제 있었던 야구 경기 결과는 어떻게 됐어? | S3 더우면… 시원한 카페라도 찾아봐 줄래? | S4 아, 맞아! 고마워.

     0.00s  user  발화 시작: 이번 주 토요일에 볼 만한 영화 좀 찾아줘.
     2.49s  user  발화 끝
     2.54s  <ret> 발화 (turn1 첫 프레임)
     2.60s  agent 발화 시작: <ret> 토요일에 '인사이드 아웃 이'가 두시, 네시 삼십분, 일곱시에 상영될 예정이에요. 혹시 다른 영화
     2.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: {"movies": [{"title": "Inside Out 2", "times": ["14:00", "16:30", "19:
     9.88s  agent 발화 끝
     9.98s  user  발화 시작: 음… 아니, 그 영화 괜찮아 보이네.
    13.12s  user  발화 끝
    13.35s  agent 발화 시작: 다행이에요. 가족 영화로도 좋고, 친구들과 함께 보기도 좋겠네요.
    17.29s  user  발화 시작: 근데 혹시 어제 있었던 야구 경기 결과는 어떻게 됐어?
    17.75s  agent 발화 끝
    20.13s  <ret> 발화 (turn5 첫 프레임)
    20.20s  agent 발화 시작: <ret> 죄송하지만, 어제 야구 경기 결과에 대한 정보를 찾을 수 없었어요.
    20.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: (no information found)
    20.43s  user  발화 끝
    24.51s  agent 발화 끝
    24.56s  user  발화 시작: 아, 그래? 음… 그럼, 혹시 내일 날씨는 어때?
    28.56s  <ret> 발화 (turn7 첫 프레임)
    28.88s  agent 발화 시작: <ret> 내일 서울은 이십팔도, 습도는 육십오%, 바람은 시속 칠 점 이킬로미터로 예상됩니다. 꽤 덥겠어요
    28.88s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.41s]: (tool result) 28.0°C, humidity 65%, wind 7.2 km/h
    29.05s  user  발화 끝
    36.12s  user  발화 시작: 더우면… 시원한 카페라도 찾아봐 줄래?
    36.29s  agent 발화 끝
    38.58s  <ret> 발화 (turn9 첫 프레임)
    38.97s  agent 발화 시작: <ret> 강남구에 있는 '커피빈'이 평점이 사 점 오점이에요. 시원하게 커피 한 잔 하기에 괜찮겠네요.
    38.98s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.35s]: {"restaurants": [{"name": "Coffee Bean", "address": "Gangnam-gu", "rat
    39.12s  user  발화 끝
    41.97s  user  발화 시작: 우와.
    42.46s  user  발화 끝
    45.33s  agent 발화 끝
    46.23s  user  발화 시작: 오, 좋아! 근데 잠깐만, 어제 친구한테 보냈던 메시지 내용이 뭐였지?
    50.62s  <ret> 발화 (turn12 첫 프레임)
    51.01s  agent 발화 시작: <ret> 이천이십육년 칠월 구일에 “오늘 저녁에 같이 저녁 먹자”라고 메시지를 보냈습니다.
    51.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [2026-07-09] 오늘 저녁에 같이 저녁 먹자.
    51.22s  user  발화 끝
    56.74s  user  발화 시작: 아, 맞아! 고마워.
    56.80s  agent 발화 끝
    58.22s  user  발화 끝
    58.44s  agent 발화 시작: 천만에요. 혹시 저녁 메뉴도 제가 추천해 드릴까요?
    60.67s  user  발화 시작: 어.
    61.30s  user  발화 끝
    62.74s  agent 발화 끝
    63.04s  user  발화 시작: 아니, 괜찮아. 지금은 그냥 카페부터 가볼까.
    65.99s  user  발화 끝
    66.30s  agent 발화 시작: 시원한 카페에서 잠시 쉬면서 기분 전환하는 것도 좋겠네요.
    69.90s  agent 발화 끝
