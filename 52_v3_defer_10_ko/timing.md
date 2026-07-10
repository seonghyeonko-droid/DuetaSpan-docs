# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "세준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 선전 난산구 하이테크 파크…
     2.35s  user  발화 끝
     4.27s  user  발화 시작: …좌표 좀 찾아줄 수 있어?
     5.62s  <ret> 발화 (turn2 첫 프레임)
     5.70s  agent 발화 시작: <ret> 난산구 하이테크 파크 좌표는 이십이 점 오 육, 백십사 점 영 오입니다. 혹시 다른 곳도 찾아드릴
     5.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) 22.5625, 114.0578
     5.75s  user  발화 끝
    12.56s  agent 발화 끝
    12.57s  user  발화 시작: 음… 지금 서울 날씨는 어때?
    14.56s  ⚡지연 SPAN 주입(선제발표 직전): 23.0°C, humidity 74%, wind 5.5 km/h
    15.52s  agent 발화 시작: <ret> 날씨 정보를 가져오는 데 시간이 조금 걸렸어요. 현재 서울은 이십삼도이고, 습도는 칠십사%, 바람
    15.71s  user  발화 끝
    28.79s  agent 발화 끝
