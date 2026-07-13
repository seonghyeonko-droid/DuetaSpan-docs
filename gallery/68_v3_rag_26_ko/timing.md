# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "성진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-11-22",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 뭔가 새로운 걸 배우고 싶은데, 아이들 발달 단계에 대해 | S2 음… 아기가 처음 세상에 나왔을 때… | S3 …인지 발달 단계가 어떻게 되는지 알고 싶어요. | S4 아, 감각운동기라고 하네요. 신기하네요. 그럼 그 다음 단계는

     0.00s  user  발화 시작: 요즘 뭔가 새로운 걸 배우고 싶은데, 아이들 발달 단계에 대해 알아볼까 해요.
     6.41s  agent 발화 시작: 새로운 배움은 언제나 좋은 일이죠. 어떤 점이 궁금하신가요?
     6.41s  user  발화 끝
    10.69s  user  발화 시작: 음.
    10.69s  agent 발화 끝
    11.22s  user  발화 시작: 음… 아기가 처음 세상에 나왔을 때…
    11.22s  user  발화 끝
    14.43s  user  발화 시작: …인지 발달 단계가 어떻게 되는지 알고 싶어요.
    14.43s  user  발화 끝
    17.85s  <ret> 발화 (turn5 첫 프레임)
    18.17s  agent 발화 시작: <ret> 아기가 세상에 나온 후, 대략 두 살까지는 감각운동기라고 불리는 첫 번째 인지 발달 단계를 거치게
    18.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.55s]: The sensorimotor stage is the first stage of cognitive development, sp
    18.17s  user  발화 끝
    26.72s  user  발화 시작: 아, 감각운동기라고 하네요. 신기하네요. 그럼 그 다음 단계는 뭘까요?
    26.72s  agent 발화 끝
    31.53s  user  발화 끝
