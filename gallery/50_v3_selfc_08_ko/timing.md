# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "태훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
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
#       "date": "2025-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 도쿄역에서 시부야 크로싱까지 대중교통으로 제일 빠른 길은 어디 | S2 이번 주 토요일에 친구랑 같이 갈 건데, 혹시 그날 날씨는 어 | S3 아, 맞아! 이번 주말에 친구 생일인데, 시부야에서 맛있는 저 | S4 칠 팔 엑스 구 이 엘… 알았어. 고마워, 크레르!

     0.00s  user  발화 시작: 도쿄역에서 시부야 크로싱까지 대중교통으로 제일 빠른 길은 어디야?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.05s  agent 발화 시작: <ret> 도쿄역에서 시부야 크로싱까지 대중교통으로 가는 가장 빠른 길은 약 삼십삼분 정도 걸리고, JR 야
     0.05s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) The quickest route from Tokyo Station to Shibuya Crossin
     0.05s  user  발화 끝
     0.15s  user  발화 시작: 응.
     0.15s  agent 발화 끝
     0.16s  user  발화 시작: 삼십삼분이라… 음, 좀 길겠네.
     0.16s  user  발화 끝
     0.18s  agent 발화 시작: 시간은 조금 걸리지만, 환승 없이 한 번에 갈 수 있어서 편리하실 거예요.
     0.18s  user  발화 끝
     0.25s  user  발화 시작: 그래.
     0.25s  agent 발화 끝
     0.26s  user  발화 시작: 이번 주 토요일에 친구랑 같이 갈 건데, 혹시 그날 날씨는 어때?
     0.26s  user  발화 끝
     0.32s  agent 발화 시작: <ret> 이천이십육년 칠월 십일일 토요일 시부야 날씨는 이십팔 점 오도이고, 습도는 육십팔퍼센트이며, 비가
     0.32s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) The weather forecast for Shibuya, Tokyo on Saturday, Jul
     0.32s  user  발화 끝
     0.37s  <ret> 발화 (turn14 첫 프레임)
     0.41s  user  발화 시작: 와.
     0.41s  agent 발화 끝
     0.42s  agent 발화 시작: 우산을 챙기시는 게 좋겠네요. 그래도 야외 활동하기에 아주 나쁘지는 않을 거예요.
     0.42s  user  발화 끝
     0.49s  user  발화 시작: 음.
     0.49s  agent 발화 끝
     0.49s  user  발화 시작: 아, 맞아! 이번 주말에 친구 생일인데, 시부야에서 맛있는 저녁 먹을 만한 곳 좀 추천해 줄래?
     0.49s  user  발화 끝
     0.50s  <ret> 발화 (turn12 첫 프레임)
     0.58s  agent 발화 시작: <ret> 시부야에는 한 노 다이도코로 베테이—와규 소고기로 유명한 곳—와 우오베이 시부야 도겐자카—가성비 
     0.58s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) There are several highly-rated restaurants in Shibuya, i
     0.58s  user  발화 끝
     0.68s  user  발화 시작: 와규… 맛있겠다! 한 노 다이도코로 베테이 예약해 줘. 이번 주 토요일 저녁 일곱시에 두 명.
     0.68s  agent 발화 끝
     0.77s  agent 발화 시작: <ret> 한 노 다이도코로 베테이에 이천이십육년 칠월 십일일 토요일 저녁 일곱시에 두 분 예약이 완료되었습
     0.77s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) Reservation confirmed at Han no Daidokoro Bettei for 2 p
     0.77s  user  발화 끝
     0.90s  user  발화 시작: 와.
     0.90s  agent 발화 끝
     0.91s  user  발화 시작: 칠 팔 엑스 구 이 엘… 알았어. 고마워, 크레르!
     0.91s  user  발화 끝
     0.96s  agent 발화 시작: 천만에요! 친구분과 즐거운 생일 저녁 보내세요.
     0.96s  user  발화 끝
     1.00s  agent 발화 끝
