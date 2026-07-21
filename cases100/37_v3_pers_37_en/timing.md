# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Ella",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "child",
#       "text": "User has a child named Hana, age 17."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in February."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-18",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Ella, it’s lovely to meet you. I’m Tarir, a wellness c
    10.38s  agent 발화 끝
    11.55s  user  발화 시작: Oh, hi Tarir. That’s… specific. My grandma just got diagnose
    17.01s  user  발화 끝
    17.04s  agent 발화 시작: It’s completely understandable to feel lost after a new diag
    21.85s  user  발화 시작: Yeah.
    22.30s  user  발화 끝
    28.90s  agent 발화 시작: Often, the first step is understanding the diagnosis itself,
    28.91s  agent 발화 끝
    34.54s  user  발화 시작: Yeah.
    35.07s  user  발화 끝
    46.67s  agent 발화 끝
    47.11s  user  발화 시작: My mom is taking on most of the care, and she’s already exha
    49.58s  agent 발화 시작: Mm-hmm.
    50.03s  agent 발화 끝
    53.62s  agent 발화 시작: That guilt is very common, Ella. [sigh] It's important to re
    53.66s  user  발화 끝
    64.63s  user  발화 시작: Yeah, yeah.
    65.87s  user  발화 끝
    67.81s  agent 발화 끝
    68.01s  user  발화 시작: Boundaries… yeah, that sounds good. She tends to just… do ev
    72.35s  user  발화 끝
