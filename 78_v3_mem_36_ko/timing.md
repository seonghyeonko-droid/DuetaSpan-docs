# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "다담",
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
#       "date": "2026-03-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 안녕하세요. | S2 음… 전에 교토 여행 계획 세우고 있었던 거 기억해요? | S3 아니요, 그건 됐어요. 혹시 제가 꽃가루 알레르기가 있던가요? | S4 아, 그렇군요. 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 다담님. 저는 다담님을 도와드리는 에이전트, 티악입니다.
     4.96s  agent 발화 끝
     5.66s  user  발화 시작: 어, 안녕하세요.
     7.22s  user  발화 끝
     7.43s  agent 발화 시작: 혹시 제가 기억하고 있는 내용 중에 궁금한 점이 있으실까요?
     9.36s  user  발화 시작: 응.
     9.58s  user  발화 끝
    11.27s  agent 발화 끝
    11.76s  user  발화 시작: 음… 전에 교토 여행 계획 세우고 있었던 거 기억해요?
    15.96s  <ret> 발화 (turn5 첫 프레임)
    16.18s  agent 발화 시작: <ret> 네, 다담님께서 올해 십이월에 교토 여행을 계획하고 계신다는 걸 기억하고 있습니다.
    16.20s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.46s]: [2026-01-22] User is planning a trip to Kyoto in December.
    16.29s  user  발화 끝
    18.81s  user  발화 시작: 와.
    19.31s  user  발화 끝
    21.47s  agent 발화 시작: 혹시 여행 계획에 대해 더 자세히 여쭤봐 드릴까요?
    21.65s  agent 발화 끝
    24.48s  agent 발화 끝
    24.84s  user  발화 시작: 아니요, 그건 됐어요. 혹시 제가 꽃가루 알레르기가 있던가요?
    28.12s  <ret> 발화 (turn9 첫 프레임)
    28.27s  agent 발화 시작: <ret> 네, 다담님께서는 꽃가루 알레르기가 있으신 걸로 기록되어 있습니다.
    28.28s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.67s]: [2025-05-27] User is allergic to pollen.
    28.49s  user  발화 끝
    32.76s  agent 발화 시작: 봄철에는 특히 조심하시는 게 좋겠습니다.
    32.95s  agent 발화 끝
    35.19s  user  발화 시작: 아, 그렇군요. 감사합니다.
    35.35s  agent 발화 끝
    37.82s  user  발화 끝
