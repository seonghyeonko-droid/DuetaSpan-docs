# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "재온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 혹시 메릴랜드 주를 세운 사람에 대해 아세요? | S2 그럼 그 사람의 출생 연도는 언제예요? | S3 … 그분이 영국 귀족이었던 건 알고 있는데… | S4 …그 식민지를 세우게 된 특별한 이유가 있었나요?

     0.00s  user  발화 시작: 안녕하세요. 혹시 메릴랜드 주를 세운 사람에 대해 아세요?
     4.67s  user  발화 끝
     4.85s  agent 발화 시작: 안녕하세요. 어떤 분에 대해 궁금하신가요? 도와드릴 수 있을 것 같아요.
     8.79s  user  발화 시작: 메릴랜드 주를 세운 사람 말이에요.
     8.92s  agent 발화 끝
    10.67s  <ret> 발화 (turn3 첫 프레임)
    10.83s  agent 발화 시작: <ret> 메릴랜드 식민지를 세운 사람은 세실 칼버트 두대 볼티모어 남작으로, 천육백삼십이년에 식민지 헌장을
    10.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.45s]: Cecil Calvert, 2nd Baron Baltimore, was granted the charter for the Pr
    10.91s  user  발화 끝
    14.34s  user  발화 시작: 음.
    14.84s  user  발화 끝
    18.29s  agent 발화 끝
    18.49s  user  발화 시작: 그럼 그 사람의 출생 연도는 언제예요?
    20.73s  <ret> 발화 (turn6 첫 프레임)
    20.80s  agent 발화 시작: <ret> 세실 칼버트는 천육백오년 팔월 팔일에 영국에서 태어났습니다—
    20.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.55s]: Cecil Calvert was born on August 8, 1605, in England.
    20.99s  user  발화 끝
    24.36s  agent 발화 끝
    24.46s  user  발화 시작: … 그분이 영국 귀족이었던 건 알고 있는데…
    27.50s  user  발화 끝
    29.17s  user  발화 시작: …그 식민지를 세우게 된 특별한 이유가 있었나요?
    32.04s  <ret> 발화 (turn9 첫 프레임)
    32.12s  agent 발화 시작: <ret> 메릴랜드는 천육백삼십사년에 잉글랜드에서 박해를 받던 잉글랜드 가톨릭 신자들을 위한 피난처로 세실 
    32.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: Maryland was established in 1634 as a haven for English Catholics, who
    32.22s  user  발화 끝
    42.13s  agent 발화 끝
