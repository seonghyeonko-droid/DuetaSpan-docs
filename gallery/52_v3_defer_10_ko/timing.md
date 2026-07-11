# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "다은",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 영화 예매 좀 해 줄 수 있어? | S2 와, 진짜 고마워. | S3 구십이퍼센트라니, 엄청 높네. 그럼 예약 좀 해 줘. | S4 베개 높이라…

     0.00s  user  발화 시작: 이번 주 토요일에 영화 예매 좀 해 줄 수 있어?
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.01s  <ret> 발화 (turn4 첫 프레임)
     0.03s  <ret> 발화 (turn16 첫 프레임)
     0.04s  agent 발화 시작: 어떤 영화를 보고 싶으세요?
     0.04s  user  발화 끝
     0.06s  user  발화 시작: 음… 요즘 제일 인기…
     0.06s  agent 발화 끝
     0.07s  user  발화 시작: …있는 거 아무거나 괜찮아.
     0.07s  user  발화 끝
     0.09s  agent 발화 시작: <ret> 요즘 제일 인기 있는 영화는 크리스토퍼 놀란 감독의 SF 드라마 "인터스텔라"예요.
     0.09s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) The most popular movie currently playing is "인터스텔라", a s
     0.09s  user  발화 끝
     0.13s  user  발화 시작: 음.
     0.13s  agent 발화 끝
     0.13s  user  발화 시작: 오, 그거 좋지. 그럼 이번 주 토요일 저녁 일곱시에 예매해 줘.
     0.13s  user  발화 끝
     0.18s  agent 발화 시작: <ret> "인터스텔라" 칠월 십일일 저녁 일곱시, A12와 A13 좌석으로 예매 완료되었고, 확인 번호는 
     0.18s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Reservation confirmed for "인터스텔라" on July 11, 2026, at 7
     0.18s  user  발화 끝
     0.25s  user  발화 시작: 와, 진짜 고마워.
     0.25s  agent 발화 끝
     0.26s  agent 발화 시작: 천만에요. 혹시 다른 영화도 알아봐 드릴까요?
     0.26s  user  발화 끝
     0.28s  user  발화 시작: 아니, 됐어. 잠 좀 잘 자고 싶어서…
     0.28s  agent 발화 끝
     0.31s  agent 발화 시작: 수면 환경을 개선하는 데 도움을 드릴 수 있어요.
     0.31s  user  발화 끝
     0.34s  user  발화 시작: 응.
     0.34s  agent 발화 끝
     0.35s  user  발화 시작: 어떻게?
     0.35s  user  발화 끝
     0.35s  agent 발화 시작: 편안한 잠자리를 위한 몇 가지 팁을 알려드릴게요. —
     0.35s  user  발화 끝
     0.38s  user  발화 시작: … 잠깐만, 지금 내 수면 패턴이 어떤지 먼저 알아볼 수 있을까?
     0.38s  agent 발화 끝
     0.43s  agent 발화 시작: <ret> 수면 패턴을 분석해 드리겠습니다.
     0.43s  ⚡SPAN 주입 [d'=0.02s / d_lead=0.02s]: (tool result) We found a sleep analysis service offered by Dr. Lee Ji-
     0.43s  user  발화 끝
     0.44s  agent 발화 시작: 서울 수면 클리닉의 이지훈 선생님께서 개인 맞춤형 수면 계획을 전문으로 하는 수면 분석 서비스를 제공하고 계
     0.44s  agent 발화 끝
     0.51s  user  발화 시작: 어.
     0.51s  agent 발화 끝
     0.51s  agent 발화 시작: 이 선생님은 수면의 질을 높이는 데 아주 뛰어난 전문가이십니다. 지난 십년간 오백명이 넘는 환자분들을 도왔고
     0.51s  user  발화 끝
     0.52s  <ret> 발화 (turn27 첫 프레임)
     0.54s  <ret> 발화 (turn22 첫 프레임)
     0.59s  user  발화 시작: 응.
     0.59s  agent 발화 끝
     0.59s  user  발화 시작: 구십이퍼센트라니, 엄청 높네. 그럼 예약 좀 해 줘.
     0.59s  user  발화 끝
     0.62s  agent 발화 시작: <ret> 이지훈 선생님과의 수면 분석 예약이 칠월 십오일 오전 열시에 확정되었고, 확인 번호는 사 오 육 
     0.62s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Appointment with Dr. Lee Ji-hoon booked for July 15, 202
     0.62s  user  발화 끝
     0.70s  user  발화 시작: 와.
     0.70s  agent 발화 끝
     0.70s  user  발화 시작: 알았어. 고마워.
     0.70s  user  발화 끝
     0.71s  agent 발화 시작: 좋은 꿈 꾸세요. 혹시 수면 음악을 추천해 드릴까요?
     0.71s  user  발화 끝
     0.74s  user  발화 시작: 음… 좋아, 잔잔한 거 아무거나 틀어줘.
     0.74s  agent 발화 끝
     0.76s  agent 발화 시작: <ret> 브라이언 이노의 잔잔한 앰비언트 트랙 "Evening Calm"을 재생합니다.
     0.76s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) Now playing a calming ambient track titled "Evening Calm
     0.76s  user  발화 끝
     0.79s  user  발화 시작: 응.
     0.79s  agent 발화 끝
     0.80s  user  발화 시작: 아, 너무 좋다.
     0.80s  user  발화 끝
     0.81s  agent 발화 시작: 편안하게 휴식을 취하세요. 혹시 베개 높이를 조절하는 방법이 궁금하신가요?
     0.81s  user  발화 끝
     0.85s  user  발화 시작: 베개 높이라…
     0.85s  agent 발화 끝
     0.85s  agent 발화 시작: 일반적으로 옆으로 누울 때는 어깨 높이, 똑바로 누울 때는 십센티미터 정도가 적절하다고 합니다. —
     0.85s  user  발화 끝
     0.91s  user  발화 시작: 아, 그렇구나.
     0.91s  agent 발화 끝
     0.92s  agent 발화 시작: 너무 높거나 낮은 베개는 목과 어깨에 부담을 줄 수 있습니다.
     0.92s  user  발화 끝
     0.96s  user  발화 시작: 고마워. 덕분에 좀 안심되네.
     0.96s  agent 발화 끝
     0.97s  agent 발화 시작: 언제든 편하게 말씀해 주세요. 편안한 밤 보내세요.
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
