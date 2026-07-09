# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Noah",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 521 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 도쿄 작년 12월 24일 날씨가 어땠어? | S2 좋아! 오늘 저녁 7시에 두 명 예약해 줘. | S3 그냥 얼어붙고 아무것도 기억 못 할 것 같아. | S4 그거 괜찮겠다. 매일 아침 8시에 시각화 연습하라고 알림 설정

     0.00s  user  발화 시작: 도쿄 작년 12월 24일 날씨가 어땠어?
     2.69s  <ret> 발화 (turn1 첫 프레임)
     2.85s  agent 발화 시작: <ret> 네, 도쿄는 12월 24일에 최고 기온이 6도, 최저 기온이 1도였고, 흐린 날씨였어요.
     2.96s  user  발화 끝
     4.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.83s]: (tool result) High: 6 degrees Celsius, Low: 1 degree Celsius, Conditio
     4.72s  user  발화 시작: 응.
     5.17s  user  발화 끝
     8.66s  user  발화 시작: 음, 추워 보이네. 일본은 크리스마스 많이 챙겨?
     8.68s  agent 발화 끝
    12.08s  user  발화 끝
    12.18s  agent 발화 시작: 공식적인 휴일은 아니지만, 선물 교환이나 장식 같은 세속적인 행사로 즐기는 편이에요.
    18.53s  agent 발화 끝
    19.34s  user  발화 시작: 그렇구나. 근처에 괜찮은 라멘집 좀 찾아 줘.
    22.08s  <ret> 발화 (turn6 첫 프레임)
    22.40s  agent 발화 시작: <ret> 라멘 히로는 0.8킬로미터 떨어져 있고, 평점은 4.5점이고, 가격은 15달러 정도 해요.
    22.48s  user  발화 끝
    24.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Ramen Hiro: 0.5 miles, 4.5 stars, Price: $15.
    29.13s  agent 발화 끝
    29.32s  user  발화 시작: 좋아! 오늘 저녁 7시에 두 명 예약해 줘.
    32.49s  <ret> 발화 (turn8 첫 프레임)
    32.57s  agent 발화 시작: <ret> 네, 예약 완료됐습니다! 오늘 저녁 7시에 라멘 히로에 두 명으로 예약해 드렸어요.
    32.69s  user  발화 끝
    32.99s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.12s]: (tool result) Reservation confirmed for two at Ramen Hiro, 7:00 PM ton
    38.62s  user  발화 시작: 오, 진짜? 카드 받는데?
    38.69s  agent 발화 끝
    40.00s  <ret> 발화 (turn10 첫 프레임)
    40.40s  agent 발화 시작: <ret> 라멘 히로는 비자, 마스터카드, 아메리칸 익스프레스 카드와 현금을 받습니다.
    40.59s  user  발화 끝
    42.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Accepted: Visa, Mastercard, American Express, cash.
    46.05s  agent 발화 끝
    46.17s  user  발화 시작: 아, 다음 주에 중요한 발표가 있어서 엄청 스트레스 받아.
    49.77s  agent 발화 시작: 발표는 긴장되기 마련이죠! 미리 스트레스를 받는 건 당연한 일이에요.
    49.78s  user  발화 끝
    54.48s  user  발화 시작: 그냥 얼어붙고 아무것도 기억 못 할 것 같아.
    54.49s  agent 발화 끝
    57.30s  user  발화 끝
    57.31s  agent 발화 시작: 그건 흔한 두려움이지만, 자신감을 키우고 불안을 관리하는 방법을 함께 찾아볼 수 있어요.
    63.04s  user  발화 시작: 어떤 방법이 있는데?
    63.06s  agent 발화 끝
    64.56s  user  발화 끝
    64.72s  agent 발화 시작: 시각화 기법을 사용하거나, 발표 연습을 하거나, 발표에 대한 생각을 바꿔보는 것을 시도해 볼 수 있어요.
    72.03s  agent 발화 끝
    72.27s  user  발화 시작: 시각화가 좋겠어. 그게 정확히 뭔데?
    75.05s  user  발화 끝
    75.27s  agent 발화 시작: 발표를 마음속으로 미리 연습하고, 성공하는 모습과 자신감을 느끼는 것을 생생하게 상상하는 거예요.
    78.34s  user  발화 시작: 음.
    78.84s  user  발화 끝
    82.37s  agent 발화 시작: 불안감을 줄이기 위해 긍정적인 내면 경험을 만드는 거죠.
    82.41s  agent 발화 끝
    84.87s  user  발화 시작: 응.
    85.08s  user  발화 끝
    85.93s  agent 발화 끝
    86.64s  user  발화 시작: 그거 괜찮겠다. 매일 아침 8시에 시각화 연습하라고 알림 설정해 줘.
    91.31s  <ret> 발화 (turn23 첫 프레임)
    91.63s  agent 발화 시작: <ret> 네, 매일 아침 8시에 시각화 연습 알림을 설정해 드렸습니다.
    91.81s  user  발화 끝
    92.59s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.16s]: (tool result) Reminder set for 8:00 AM daily: Visualize presentation.
    95.78s  agent 발화 끝
    97.10s  user  발화 시작: 와, 최고다. 브레이, 진짜 고마워.
    99.89s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다! 잘 해낼 수 있을 거예요.
   100.01s  user  발화 끝
   103.69s  agent 발화 끝
