# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "혜진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 캐나다에서 가장 오래 재임한 총리는 누구였나요?
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.28s  agent 발화 시작: <ret> 캐나다에서 가장 오래 재임한 총리는 윌리엄 라이언 매켄지 킹이셨습니다. 그는 정말 존경받는 분이셨
     3.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.11s]: William Lyon Mackenzie King was Canada's longest-serving prime ministe
     3.28s  user  발화 끝
    10.39s  user  발화 시작: 네.
    10.39s  agent 발화 끝
    10.78s  <ret> 발화 (turn3 첫 프레임)
    10.94s  agent 발화 시작: <ret> 윌리엄 라이언 매켄지 킹 총리는 총 이십일년 하고 백오십사일 동안 캐나다 총리를 지냈습니다 — 정
    10.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.30s]: William Lyon Mackenzie King served as Prime Minister of Canada for 21 
    10.94s  user  발화 끝
    20.23s  user  발화 시작: 그분이 어떤 정당 소속이었는지도 궁금하네요.
    20.23s  agent 발화 끝
    22.97s  agent 발화 시작: 매켄지 킹 총리는 자유당 소속이셨습니다 —
    22.97s  user  발화 끝
    26.25s  user  발화 시작: …그분은 제이차 세계대전 때 총리였었나요?
    26.25s  agent 발화 끝
    28.90s  <ret> 발화 (turn7 첫 프레임)
    28.98s  agent 발화 시작: <ret> 네, 맞습니다. 매켄지 킹 총리는 제이차 세계대전 기간 동안 캐나다를 이끌었습니다.
    28.98s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.01s]: William Lyon Mackenzie King led Canada through most of World War II.
    28.98s  user  발화 끝
    35.00s  agent 발화 시작: 윌리엄 라이언 매켄지 킹 총리는 제이차 세계대전 기간 대부분을 이끌었습니다. 그 시기는 정말 힘든 시기였죠.
    35.00s  agent 발화 끝
    43.20s  agent 발화 끝
