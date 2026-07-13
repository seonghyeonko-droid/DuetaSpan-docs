# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "다민",
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
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 발롱도르를 가장 많이 받은 선수는 누구인가요? | S2 와, 정말 대단하네요. 그 다음으로 많이 받은 선수는 누구죠? | S3 호날두 선수도 엄청나네요. 메시 선수와 호날두 선수의 발롱도르 | S4 이천십년과 이천십칠년은 특히 기억에 남네요.

     0.00s  user  발화 시작: 발롱도르를 가장 많이 받은 선수는 누구인가요?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.58s  agent 발화 시작: <ret> 발롱도르를 가장 많이 받은 선수는 리오넬 메시 선수인데, 총 여덟 번이나 수상 기록을 세웠습니다.
     3.58s  user  발화 끝
     4.25s  ⚡SPAN 주입 [d'=0.97s / d_lead=8.36s]: Lionel Messi has won the Ballon d'Or a record eight times.
    11.94s  user  발화 시작: 와, 정말 대단하네요. 그 다음으로 많이 받은 선수는 누구죠?
    11.94s  agent 발화 끝
    17.21s  <ret> 발화 (turn3 첫 프레임)
    17.32s  agent 발화 시작: <ret> 그 다음으로는 크리스티아누 호날두 선수입니다.
    17.32s  user  발화 끝
    17.87s  ⚡SPAN 주입 [d'=0.65s / d_lead=2.99s]: Cristiano Ronaldo has won the Ballon d'Or five times.
    20.30s  agent 발화 시작: 크리스티아누 호날두 선수는 다섯 번 발롱도르를 수상했습니다.
    20.30s  agent 발화 끝
    24.48s  user  발화 시작: 네.
    24.48s  agent 발화 끝
    25.08s  user  발화 시작: 호날두 선수도 엄청나네요. 메시 선수와 호날두 선수의 발롱도르 수상 연도를 알려줄 수 있나요?
    25.08s  user  발화 끝
    32.84s  agent 발화 시작: 네.
    32.84s  user  발화 끝
    33.33s  <ret> 발화 (turn8 첫 프레임)
    33.44s  agent 발화 시작: <ret> 메시 선수는 이천구년, 이천십년, 이천십일년, 이천십이년, 이천십오년, 이천십구년, 이천이십일년,
    33.44s  agent 발화 끝
    34.10s  ⚡SPAN 주입 [d'=0.77s / d_lead=12.54s]: (tool result) Lionel Messi won in 2009, 2010, 2011, 2012, 2015, 2019, 
    45.98s  user  발화 시작: 이천십년과 이천십칠년은 특히 기억에 남네요.
    45.98s  agent 발화 끝
    48.97s  agent 발화 시작: 두 분 모두 훌륭한 선수들이시죠. 어떤 선수가 더 좋다고 생각하세요?
    48.97s  user  발화 끝
    54.94s  agent 발화 끝
