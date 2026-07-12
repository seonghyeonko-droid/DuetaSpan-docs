# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "윤원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 포일의 전쟁에 제인 밀너… | S2 음, 그 배우 다른 작품에도 나왔나? | S3 잠깐만… 혹시 그 드라마… | S4 …그 시대 배경이 궁금하네요.

     0.00s  user  발화 시작: 포일의 전쟁에 제인 밀너…
     2.05s  user  발화 시작: …역을 맡은 사람이 누구였지?
     2.05s  user  발화 끝
     3.69s  <ret> 발화 (turn2 첫 프레임)
     4.09s  agent 발화 시작: <ret> 제인 밀너 역은 말리 해리스 배우가 맡았답니다.
     4.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.58s]: Mali Harries played Jane Milner in the British television drama Foyle'
     4.09s  user  발화 끝
     7.67s  user  발화 시작: 음, 그 배우 다른 작품에도 나왔나?
     7.67s  agent 발화 끝
    10.42s  <ret> 발화 (turn4 첫 프레임)
    10.74s  agent 발화 시작: <ret> 말리 해리스는 다양한 작품에 출연했는데요 — 말리 해리스는 웨일스 출신의 배우로, '바이 애니 민
    10.74s  user  발화 끝
    12.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.07s]: Mali Harries is a Welsh actress, known for her roles in television dra
    20.45s  user  발화 시작: 응.
    20.45s  agent 발화 끝
    20.96s  user  발화 시작: 잠깐만… 혹시 그 드라마…
    20.96s  user  발화 끝
    23.01s  user  발화 시작: …배경이 이차 세계대전 때였나? —
    23.01s  user  발화 끝
    25.56s  user  발화 시작: …그 시대 배경이 궁금하네요.
    25.56s  user  발화 끝
    27.45s  <ret> 발화 (turn9 첫 프레임)
    27.61s  agent 발화 시작: <ret> 그 드라마는… 이차 세계 대전 중과 직후를 배경으로 하고 있습니다.
    27.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.11s]: Foyle's War is set during and immediately after World War II, primaril
    27.61s  user  발화 끝
    32.72s  agent 발화 시작: '포일의 전쟁'은 주로 영국 남부에서, 이차 세계 대전 중 그리고 직후를 배경으로 이야기가 전개된답니다.
    32.72s  agent 발화 끝
    39.88s  agent 발화 끝
