# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "Kim",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "savings",
#       "text": "User is saving for an emergency fund of six months' expenses."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "partner",
#       "text": "User's partner is named Leo."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "phone",
#       "text": "User uses an iPhone 15."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-05-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-23",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Kim, it’s lovely to meet you. I’m Klarin, and I help p
     8.74s  user  발화 시작: Oh, that’s… interesting. What does that even *mean*, exactly
     8.74s  agent 발화 끝
    12.02s  agent 발화 시작: [happy] It means exploring what truly matters to you, and bu
    12.02s  user  발화 끝
    21.12s  user  발화 시작: Mhm.
    21.12s  agent 발화 끝
    21.48s  agent 발화 시작: We can work on identifying what makes you feel disconnected,
    21.48s  user  발화 끝
    29.49s  user  발화 시작: Okay.
    29.49s  agent 발화 끝
    29.86s  user  발화 시작: I guess I just… don’t really *have* a lot of close friends r
    29.86s  user  발화 끝
    34.95s  agent 발화 시작: That’s very common, Kim. Many people find themselves in that
    34.95s  user  발화 끝
    44.42s  user  발화 시작: It’s just… frustrating, you know? I want people to *get* me.
    44.42s  agent 발화 끝
    48.43s  agent 발화 시작: [sigh] I completely understand. Feeling misunderstood is inc
    48.43s  user  발화 끝
    57.53s  agent 발화 끝
