# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "준호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 준호님! 저는 오루낸이라고 해요. 오늘 하루는 어떠셨어요?
     4.65s  user  발화 시작: 음… 요즘 너무 힘들어요. 어디론가 떠나고 싶어요.
     4.65s  agent 발화 끝
     8.61s  <ret> 발화 (turn2 첫 프레임)
     8.72s  agent 발화 시작: <ret> 준호님, 혹시 알프스 야생화 사진 찍는 걸 좋아하시죠? 스위스가 딱 좋을 것 같아요.
     8.72s  user  발화 끝
     9.91s  ⚡SPAN 주입 [d'=1.30s / d_lead=7.56s]: [2026-02-02] User is into alpine wildflower photography.
    16.28s  user  발화 시작: 응응.
    16.28s  agent 발화 끝
    16.87s  user  발화 시작: 스위스요? 좋아요! 혹시 지금 스위스 날씨는 어때요?
    16.87s  user  발화 끝
    20.49s  <ret> 발화 (turn5 첫 프레임)
    20.94s  agent 발화 시작: <ret> 지금 스위스는 십팔 점 오도이고, 구름이 조금 있어요. 야생화 사진 찍기에 아주 좋겠네요!
    20.94s  user  발화 끝
    21.66s  ⚡SPAN 주입 [d'=1.17s / d_lead=7.56s]: (tool result) Temperature: 18.5°C, humidity: 62%, wind: 3.2 km/h, cond
    28.50s  agent 발화 끝
