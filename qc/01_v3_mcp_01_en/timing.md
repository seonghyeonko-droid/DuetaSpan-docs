# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Paul",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "work",
#       "text": "User works as a data analyst."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "employer",
#       "text": "User works at a game studio."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in April."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-18",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to book a hotel in Busan fo | S2 Hmm, near Haeundae Beach would be  | S3 That sounds good. Can you book it  | S4 Perfect! Now, what's the weather l

     0.00s  user  발화 시작: I need to book a hotel in Busan for next weekend. Something 
     6.00s  agent 발화 시작: [happy] Busan is lovely! Let’s find a hotel for you next wee
     6.00s  user  발화 끝
    16.30s  user  발화 시작: Hmm, near Haeundae Beach would be great. And under ₩150,000 
    16.30s  agent 발화 끝
    22.30s  agent 발화 시작: Okay.
    22.30s  user  발화 끝
    22.38s  <ret> 발화 (turn4 첫 프레임)
    22.71s  ⚡SPAN 주입 [d'=0.33s / d_lead=9.01s]: (tool result) {"hotel name": "Hotel Haeundae View", "address": "268, H
    22.73s  agent 발화 시작: <ret> I found Hotel Haeundae View, it’s a three-star hotel n
    22.73s  agent 발화 끝
    31.74s  user  발화 시작: Yeah, totally.
    31.74s  agent 발화 끝
    32.60s  user  발화 시작: That sounds good. Can you book it for me, two nights, July 1
    32.60s  user  발화 끝
    38.71s  <ret> 발화 (turn7 첫 프레임)
    39.03s  agent 발화 시작: <ret> Your booking at Hotel Haeundae View is confirmed for t
    39.03s  user  발화 끝
    39.32s  ⚡SPAN 주입 [d'=0.61s / d_lead=11.15s]: (tool result) {"confirmation id": "HV260712", "hotel name": "Hotel Hae
    50.18s  user  발화 시작: Perfect! Now, what's the weather looking like there next wee
    50.18s  agent 발화 끝
    54.02s  <ret> 발화 (turn9 첫 프레임)
    54.47s  agent 발화 시작: <ret> The weather in Busan next weekend, on July 12th, will 
    54.47s  user  발화 끝
    55.33s  ⚡SPAN 주입 [d'=1.30s / d_lead=14.15s]: (tool result) {"temperature": "28.5°C", "humidity": "65%", "wind speed
    68.62s  agent 발화 끝
