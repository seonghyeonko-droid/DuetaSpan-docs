# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "현서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-08-26",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 베노님, 보스턴에서 괜찮은 이탈리아 식당 좀 찾아주실 수 있을 | S2 트라토리아 일 파니노… 거기는 예약이 가능한가요? 이번 주 토 | S3 …혹시 거기 파스타 종류가… | S4 아니요, 괜찮아요. 예약 변경은 다음 주 토요일로 해주세요.

     0.00s  user  발화 시작: 베노님, 보스턴에서 괜찮은 이탈리아 식당 좀 찾아주실 수 있을까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.05s  agent 발화 시작: <ret> 보스턴에서 이탈리아 음식을 맛볼 수 있는 식당으로는, 하노버 스트리트 삼백삼십오번지에 있는 지아코
     0.05s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Restaurants in Boston serving Italian cuisine include Gi
     0.05s  user  발화 끝
     0.11s  <ret> 발화 (turn6 첫 프레임)
     0.15s  user  발화 시작: 지아코모스, 음… 거긴 좀 시끄러울까 봐 걱정되는데, 다른 곳도 있을까요? 좀 조용한 곳으로요.
     0.15s  agent 발화 끝
     0.22s  agent 발화 시작: <ret> 좀 더 조용한 분위기를 원하신다면, 파멘터 스트리트 십일번지에 있는 트라토리아 일 파니노를 추천해
     0.22s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) Trattoria Il Panino, located at 11 Parmenter Street, is 
     0.22s  user  발화 끝
     0.29s  <ret> 발화 (turn11 첫 프레임)
     0.35s  user  발화 시작: 와.
     0.35s  agent 발화 끝
     0.35s  user  발화 시작: 트라토리아 일 파니노… 거기는 예약이 가능한가요? 이번 주 토요일 저녁에 두 명으로 예약하고 싶어요.
     0.35s  user  발화 끝
     0.43s  agent 발화 시작: <ret> 트라토리아 일 파니노에 이번 주 토요일 저녁 일곱시에 두 분으로 예약이 완료되었습니다. 확인 번호
     0.43s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (tool result) Reservation confirmed at Trattoria Il Panino for July 11
     0.43s  user  발화 끝
     0.54s  user  발화 시작: 토요일이요? 아, 이번 주 토요일이 아니라 다음 주 토요일로 부탁드려도 될까요?
     0.54s  agent 발화 끝
     0.61s  agent 발화 시작: 다음 주 토요일로 변경해 드릴까요? —
     0.61s  user  발화 끝
     0.64s  user  발화 시작: …혹시 거기 파스타 종류가…
     0.64s  agent 발화 끝
     0.64s  <ret> 발화 (turn15 첫 프레임)
     0.66s  user  발화 시작: …뭐가 있는지 알 수 있을까요?
     0.66s  user  발화 끝
     0.69s  agent 발화 시작: <ret> 트라토리아 일 파니노의 메뉴에는 스파게티 카르보나라, 페투치네 알프레도, 랍스터 라비올리와 같은 
     0.69s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Trattoria Il Panino's menu features classic pasta dishes
     0.69s  user  발화 끝
     0.79s  user  발화 시작: 아.
     0.79s  agent 발화 끝
     0.80s  agent 발화 시작: 파스타 종류가 다양해서 선택의 폭이 넓으실 거예요.
     0.80s  user  발화 끝
     0.84s  user  발화 시작: 아니요, 괜찮아요. 예약 변경은 다음 주 토요일로 해주세요.
     0.84s  agent 발화 끝
     0.88s  agent 발화 시작: <ret> 트라토리아 일 파니노 예약이 다음 주 토요일 저녁 일곱시, 두 분으로 변경되었습니다. 새로운 확인
     0.88s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) Reservation updated at Trattoria Il Panino for July 18, 
     0.88s  user  발화 끝
     1.00s  agent 발화 끝
