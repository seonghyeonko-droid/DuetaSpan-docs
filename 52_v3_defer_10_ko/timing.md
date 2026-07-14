# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "태희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "employer",
#       "text": "User works at a construction firm."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "dish",
#       "text": "User's go-to comfort dish is butter chicken."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 서울시청의 정확한 위치를 알려줄 수 있을까요? 좌표가 백십삼 점 이 육, 이십삼 점 일 이 정도 되는 
     9.59s  <ret> 발화 (turn1 첫 프레임)
     9.60s  agent 발화 시작: <ret> 서울시청은 대한민국 서울특별시 중구 세종대로 백십에 위치해 있습니다.
     9.60s  user  발화 끝
    11.09s  ⚡SPAN 주입 [d'=1.50s / d_lead=3.84s]: (tool result) Seoul City Hall is located at 110 Sejong-daero, Jung-gu,
    13.44s  user  발화 시작: 아, 그렇군요. 그럼 거기서 명동까지 대중교통으로 어떻게 가나요?
    13.44s  agent 발화 끝
    16.73s  <ret> 발화 (turn3 첫 프레임)
    17.28s  agent 발화 시작: <ret> 서울시청역에서 이호선을 타고 명동역까지 가시면 약 십분 정도 걸리고, 요금은 천 이백 오십 원입니
    17.28s  user  발화 끝
    17.69s  ⚡SPAN 주입 [d'=0.95s / d_lead=6.72s]: (tool result) Transit directions from Seoul City Hall to Myeongdong: t
    24.00s  user  발화 시작: 네.
    24.00s  agent 발화 끝
    24.48s  user  발화 시작: 이야, 빠르네요. 그런데 혹시 오늘 서울 날씨는 어때요?
    24.48s  user  발화 끝
    28.25s  <ret> 발화 (turn7 첫 프레임)
    28.32s  agent 발화 시작: 그렇죠.
    28.32s  user  발화 끝
    28.55s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.20s]: The weather in Seoul today is 28.5°C, humidity 65%, wind 3.2 km/h.
    28.80s  agent 발화 시작: <ret> [happy] 오늘 서울 날씨는 섭씨 이십팔 점 오도이고, 습도는 육십오퍼센트, 바람은 시속 삼 
    28.80s  agent 발화 끝
    36.00s  agent 발화 끝
