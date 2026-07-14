# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Casey",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "home",
#       "text": "User's home address is 196 Cedar Lane."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about the Meat Inspe | S2 Sorry, where were we? Right, the M | S3 Huh. Do you know who the Secretary | S4 Wow, that *is* a long time. Thanks

     0.00s  user  발화 시작: I was reading about the Meat Inspection Act… who was actuall
     7.01s  <ret> 발화 (turn1 첫 프레임)
     7.56s  agent 발화 시작: <ret> Well, the responsibility for enforcing the Meat Inspec
     7.56s  user  발화 끝
     7.90s  ⚡SPAN 주입 [d'=1.41s / d_lead=11.54s]: The Secretary of Agriculture was put in charge of enforcing the provis
    19.09s  user  발화 시작: Oh, just tell him I’ll be five minutes.
    19.09s  agent 발화 끝
    22.28s  user  발화 시작: Sorry, where were we? Right, the Meat Inspection Act…
    22.28s  user  발화 끝
    25.86s  agent 발화 시작: We were talking about who enforced the Act. [happy] As I was
    25.86s  user  발화 끝
    36.60s  user  발화 시작: Huh. Do you know who the Secretary of Agriculture *was* in 1
    36.60s  agent 발화 끝
    41.08s  <ret> 발화 (turn6 첫 프레임)
    41.37s  agent 발화 시작: <ret> That would have been James Wilson; he served as Secret
    41.37s  user  발화 끝
    41.38s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.95s]: James Wilson served as the United States Secretary of Agriculture from
    51.32s  user  발화 시작: Yeah.
    51.32s  agent 발화 끝
    51.71s  user  발화 시작: Wow, that *is* a long time. Thanks, Eloen.
    51.71s  user  발화 끝
    54.90s  user  발화 끝
