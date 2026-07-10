# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Can you create an annual subscript | S2 …will that include access to the p | S3 Wonderful! What’s the total cost f | S4 Okay, perfect. Can you send me the

     0.00s  user  발화 시작: Can you create an annual subscription plan for basic support
     4.81s  <ret> 발화 (turn1 첫 프레임)
     5.05s  agent 발화 시작: <ret> I’ve created an annual plan for you—
     5.05s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.40s]: (tool result) Subscription created: Plan ID – SU9012-A-2026
     5.28s  user  발화 끝
     6.71s  user  발화 시작: …will that include access to the premium tutorials?
     7.45s  agent 발화 끝
    10.23s  <ret> 발화 (turn3 첫 프레임)
    10.39s  agent 발화 시작: <ret> I’ve updated your plan to premium, which gives you acc
    10.39s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.71s]: (tool result) Subscription updated: Plan ID – SU9012-P-2026
    10.46s  user  발화 끝
    15.11s  agent 발화 끝
    15.22s  user  발화 시작: Wonderful! What’s the total cost for the year?
    18.34s  <ret> 발화 (turn5 첫 프레임)
    18.57s  agent 발화 시작: <ret> The total cost for the year will be one hundred forty-
    18.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: The annual premium support plan for product 9012 costs 149.99 US dolla
    18.74s  user  발화 끝
    23.67s  agent 발화 끝
    23.82s  user  발화 시작: Okay, perfect. Can you send me the invoice?
    26.25s  <ret> 발화 (turn7 첫 프레임)
    26.41s  agent 발화 시작: <ret> Your invoice, INV-20260710-4587, has just been sent to
    26.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: (tool result) Invoice created: INV-20260710-4587
    26.50s  user  발화 끝
    34.75s  agent 발화 끝
