# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Riley",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "anniversary",
#       "text": "User's anniversary is September 1."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "skill",
#       "text": "User is a complete beginner at salsa dancing."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "schedule",
#       "text": "User has rotating night shifts."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is low-sodium."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "employer",
#       "text": "User works at a regional bank."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-14",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-02-13",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] Hello Riley, I’m Runar, and I’m here to help you nav
     2.81s  user  발화 시작: Yeah.
     3.30s  user  발화 끝
     6.90s  agent 발화 끝
     7.79s  user  발화 시작: Runar… that’s an interesting name. I’m just… feeling really 
    13.04s  agent 발화 시작: It’s perfectly normal to feel lost after a relationship ends
    13.12s  user  발화 끝
    16.97s  user  발화 시작: Yeah.
    17.37s  user  발화 끝
    20.86s  agent 발화 시작: [sigh] Remember, rebuilding takes time. Focus on small, achi
    21.01s  agent 발화 끝
    30.51s  agent 발화 끝
