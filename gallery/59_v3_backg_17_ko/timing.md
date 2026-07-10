# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "연슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 아들들 시즌 오에 특별 출연한 배우가 누구였지?
     2.68s  <ret> 발화 (turn1 첫 프레임)
     2.84s  agent 발화 시작: <ret> 아들들 시즌 오에서 트리프 윈터 역할을 맡은 배우는 레이첼 미너였어요.
     2.84s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.86s]: Rachel Miner played the role of Trip Winter in the series.
     3.05s  user  발화 끝
     5.69s  user  발화 시작: 음.
     6.18s  user  발화 끝
     7.45s  user  발화 시작: 아, 그렇구나.
     7.71s  agent 발화 끝
     8.46s  user  발화 끝
     8.78s  agent 발화 시작: 혹시 다른 배우에 대해서도 궁금하신 점이 있으신가요?
    10.66s  user  발화 시작: 네.
    11.16s  user  발화 끝
    11.88s  agent 발화 끝
    12.00s  agent 발화 시작: 죄송하지만, 다른 특별 출연자에 대한 정보는 찾을 수 없었습니다.
    14.52s  user  발화 시작: 맞아요.
    15.20s  user  발화 끝
    16.26s  agent 발화 끝
    16.35s  user  발화 시작: 알았어. 그럼 오늘 날씨는 어때?
    17.95s  <ret> 발화 (turn9 첫 프레임)
    18.35s  agent 발화 시작: <ret> 지금 기온은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있습니다.
    18.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    18.42s  user  발화 끝
    24.79s  agent 발화 끝
