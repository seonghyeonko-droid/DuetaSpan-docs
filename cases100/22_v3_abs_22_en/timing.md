# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Emil",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "child",
#       "text": "User has a child named Daniel, age 4."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "allergy",
#       "text": "User is allergic to soy."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What area of Kent is begining to d | S2 …about a disagreement with my sist | S3 Yeah, it’s just… she doesn’t seem  | S4 I think I need to practice saying 

     0.00s  user  발화 시작: What area of Kent is begining to develop cultural and academ
     5.13s  agent 발화 시작: And I’m afraid I don’t have specific information on developi
     5.28s  user  발화 끝
     7.90s  user  발화 시작: Yeah.
     8.49s  user  발화 끝
    10.41s  user  발화 시작: Oh. Well, I’m feeling really stressed…
    10.51s  agent 발화 끝
    13.45s  user  발화 끝
    14.91s  user  발화 시작: …about a disagreement with my sister.
    17.12s  user  발화 끝
    17.51s  agent 발화 시작: [sigh] Disagreements with family can be so draining, can’t t
    24.05s  user  발화 시작: Yeah, it’s just… she doesn’t seem to listen to my side at al
    24.22s  agent 발화 끝
    27.61s  user  발화 끝
    28.08s  agent 발화 시작: It's incredibly frustrating when you feel unheard, isn’t it?
    35.13s  user  발화 시작: Yeah, yeah.
    36.23s  user  발화 끝
    39.20s  agent 발화 시작: Really focusing on what she's *saying*, and reflecting it ba
    39.40s  agent 발화 끝
    42.70s  user  발화 시작: Yeah.
    43.33s  user  발화 끝
    50.75s  user  발화 시작: That sounds… good, actually. But I’m worried about setting b
    50.84s  agent 발화 끝
    56.53s  user  발화 끝
    56.54s  agent 발화 시작: That's very wise of you to think about boundaries! Setting k
    61.29s  user  발화 시작: Yeah.
    62.11s  user  발화 끝
    67.81s  agent 발화 끝
    67.81s  agent 발화 시작: [happy] It’s not about shutting her out, but about clearly c
    71.46s  user  발화 시작: Yeah.
    72.23s  user  발화 끝
    77.23s  agent 발화 끝
    77.79s  user  발화 시작: I think I need to practice saying “no” more often.
    80.16s  agent 발화 시작: [happy] That’s a fantastic realization! It takes courage, bu
    80.29s  user  발화 끝
    90.46s  agent 발화 끝
