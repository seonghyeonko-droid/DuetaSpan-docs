# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "가경",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-22",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 날씨 어때?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.03s  agent 발화 시작: <ret> 오늘 서울은 섭씨 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요. 
     0.03s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: 23.0°C, humidity 74%, wind 5.5 km/h
     0.03s  user  발화 끝
     0.08s  <ret> 발화 (turn4 첫 프레임)
     0.15s  <ret> 발화 (turn6 첫 프레임)
     0.20s  user  발화 시작: 음.
     0.20s  agent 발화 끝
     0.21s  user  발화 시작: 음… 이번 주 토요일에 영화 보러 갈 만한 영화 있어?
     0.21s  user  발화 끝
     0.32s  agent 발화 시작: <ret> 지금 바로는 이번 주 토요일 영화 정보를 찾을 수가 없네요. 잠시만 기다려 주시겠어요?
     0.32s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (no information found)
     0.32s  user  발화 끝
     0.45s  user  발화 시작: 응, 기다릴게.
     0.45s  agent 발화 끝
     0.47s  agent 발화 시작: <ret> 영화 정보를 찾아보는 동안, 혹시 요즘 스트레스 많이 받으세요? 지금은 서울 시간으로 이천이십육년
     0.47s  user  발화 끝
     0.57s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul right now.
     1.00s  agent 발화 끝
