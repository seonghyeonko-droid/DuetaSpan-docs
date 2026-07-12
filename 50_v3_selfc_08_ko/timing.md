# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "소별",
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
#       "date": "2026-06-22",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 알람이 몇 개나 설정되어 있는지, 심지어 꺼진 알람도 포함해서 | S2 좋아. 그럼, 이번 주 토요일에 영화 볼 만한 거 있어? | S3 잠깐만, 혹시 다른 영화도 같이 볼까? | S4 [happy] 좋아. 그럼, 다음 주 화요일에 중요한 회의 있

     0.00s  user  발화 시작: 알람이 몇 개나 설정되어 있는지, 심지어 꺼진 알람도 포함해서 알려줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.04s  agent 발화 시작: <ret> 현재 알람이 세 개 설정되어 있습니다. 칠월 십일 오전 일곱시, 오후 여섯시 삼십분, 그리고 칠월
     0.04s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 2026-07-10T07:00:00,2026-07-10T18:30:00,2026-07-11T08:00
     0.04s  user  발화 끝
     0.08s  <ret> 발화 (turn9 첫 프레임)
     0.10s  user  발화 시작: 진짜?
     0.10s  agent 발화 끝
     0.11s  user  발화 시작: 음… 칠월 십일 오후 여섯시 삼십분 알람은 그냥 일곱시로 바꿔줘.
     0.11s  user  발화 끝
     0.15s  agent 발화 시작: <ret> 알람을 오후 일곱시로 변경했습니다. 확인 번호는 에이 엘 칠 팔 구 이입니다.
     0.15s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Alarm updated to 19:00. Confirmation ID: AL7892
     0.15s  user  발화 끝
     0.19s  user  발화 시작: 진짜?
     0.19s  agent 발화 끝
     0.19s  user  발화 시작: 고마워. 그 알람은 매일 반복되게 해 줄 수 있어?
     0.19s  user  발화 끝
     0.21s  <ret> 발화 (turn11 첫 프레임)
     0.23s  agent 발화 시작: <ret> 알람을 매일 오후 일곱시에 반복하도록 설정했습니다. 확인 번호는 에이 엘 구 공 일 이입니다.
     0.23s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Alarm set to repeat daily at 19:00. Confirmation ID: AL9
     0.23s  user  발화 끝
     0.28s  user  발화 시작: 좋아. 그럼, 이번 주 토요일에 영화 볼 만한 거 있어?
     0.28s  agent 발화 끝
     0.32s  agent 발화 시작: <ret> 이번 주 토요일에는 '인사이드 아웃 이'가 오후 두시, 다섯시, 여덟시에, 그리고 '슈퍼배드 사'
     0.32s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) "Inside Out 2" - 14:00, 17:00, 20:00, "Despicable Me 4" 
     0.32s  user  발화 끝
     0.42s  user  발화 시작: '인사이드 아웃 이' 예매해 줘. 토요일 오후 다섯시로.
     0.42s  agent 발화 끝
     0.44s  <ret> 발화 (turn16 첫 프레임)
     0.45s  agent 발화 시작: <ret> '인사이드 아웃 이' 토요일 오후 다섯시, 두 장 예매 완료되었습니다. 좌석은 에이 오, 에이 육
     0.45s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) 2 tickets for "Inside Out 2" on 2026-07-11 at 17:00 conf
     0.45s  user  발화 끝
     0.46s  <ret> 발화 (turn19 첫 프레임)
     0.53s  user  발화 시작: —
     0.53s  agent 발화 끝
     0.54s  user  발화 시작: 잠깐만, 혹시 다른 영화도 같이 볼까?
     0.54s  user  발화 끝
     0.56s  agent 발화 시작: 음… 다른 영화를 함께 보시는 것도 괜찮겠네요. 혹시 다른 장르를 선호하시나요?
     0.56s  user  발화 끝
     0.60s  user  발화 시작: 어.
     0.60s  agent 발화 끝
     0.60s  agent 발화 시작: <ret> '엘리멘탈'은 애니메이션 어드벤처 장르로, 평점이 팔 점 오점 정도입니다. 독특한 설정이 특징이라
     0.60s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: "Elemental" - Rating: 8.5/10, Genre: Animation, Adventure. Source: Rot
     0.60s  user  발화 끝
     0.65s  user  발화 시작: 진짜?
     0.65s  agent 발화 끝
     0.66s  user  발화 시작: 그 영화는 전에 봤어. 그럼, 이번 주 일요일에 맛집 추천해 줘.
     0.66s  user  발화 끝
     0.70s  agent 발화 시작: <ret> 이번 주 일요일에는 명동의 '고궁 명동'이라는 한국 비 비 큐집과 '명동 교자'라는 만두집이 인기
     0.70s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) "Gogung Myeongdong" - Korean BBQ, Rating: 4.7/5, "Myeong
     0.70s  user  발화 끝
     0.73s  <ret> 발화 (turn21 첫 프레임)
     0.78s  user  발화 시작: '고궁 명동' 예약해 줘. 일요일 저녁 일곱시로.
     0.78s  agent 발화 끝
     0.81s  agent 발화 시작: <ret> '고궁 명동' 일요일 저녁 일곱시, 두 명으로 예약 완료되었습니다. 확인 번호는 알 에스 오 육 
     0.81s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Reservation at "Gogung Myeongdong" for 2 people on 2026-
     0.81s  user  발화 끝
     0.87s  user  발화 시작: [happy] 좋아. 그럼, 다음 주 화요일에 중요한 회의 있는데, 옷 뭐 입을지 추천해 줄 수 있어?
     0.87s  agent 발화 끝
     0.93s  agent 발화 시작: 중요한 회의라면, 단정하고 신뢰감을 주는 옷차림이 좋겠네요. 네이비색 정장이나 회색 정장이 좋을 것 같아요.
     0.93s  user  발화 끝
     0.98s  user  발화 시작: 알았어. 고마워.
     0.98s  agent 발화 끝
     0.99s  agent 발화 시작: 도움이 되었다니 기쁩니다.
     0.99s  user  발화 끝
     1.00s  agent 발화 끝
