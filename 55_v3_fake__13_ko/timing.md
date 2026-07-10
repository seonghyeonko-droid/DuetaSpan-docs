# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "세원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 그 노래…
     1.61s  user  발화 끝
     3.77s  user  발화 시작: …새가 코에 날아들었다는 거, 누가 불렀지?
     6.96s  <ret> 발화 (turn2 첫 프레임)
     7.12s  agent 발화 시작: <ret> 아, 그 노래요? 리틀 지미 디킨스 씨가 불렀답니다.
     7.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: Little Jimmy Dickens sang the song "Let the Bird of Paradise Fly Up Yo
     7.28s  user  발화 끝
    10.90s  <ret> 발화 (turn3 첫 프레임)
    10.95s  agent 발화 끝
    10.98s  agent 발화 시작: <ret> 그분은 컨트리 음악계에서 정말 유명하셨죠.
    10.98s  ⚡SPAN 주입(IRRELEVANT) [d'=1.44s / d_lead=2.86s]: The average high temperature in Reykjavik, Iceland in January is -1.8°
    12.73s  user  발화 시작: 그래.
    13.41s  user  발화 끝
    13.84s  agent 발화 끝
    13.90s  agent 발화 시작: 혹시 다른 컨트리 가수에 대해 궁금하신 점 있으세요?
    16.12s  user  발화 시작: 음.
    16.57s  user  발화 끝
    16.80s  user  발화 시작: 아니, 됐어. 고마워.
    17.00s  agent 발화 끝
    18.68s  user  발화 끝
    19.07s  agent 발화 시작: 천만에요.
    20.02s  agent 발화 끝
