# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "노우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 노우 씨, 안녕하세요. 저는 카엔이라고 해요. 힘든 시간들을 함께 걸어갈 수 있도록 돕는 상담가입니다.
     4.90s  user  발화 시작: 아.
     5.40s  user  발화 끝
     6.78s  user  발화 시작: 혹시 제가 뭘 털어놓으면 괜찮은 걸까요?
     6.81s  agent 발화 끝
     9.31s  user  발화 끝
     9.41s  agent 발화 시작: 어떤 이야기든 편하게 말씀해 주세요. 지금 느끼는 감정을 나누는 것만으로도 큰 도움이 될 수 있어요.
    13.58s  user  발화 시작: 어.
    14.40s  user  발화 끝
    16.05s  agent 발화 시작: 혹시 지금 가장 마음이 무거운 부분이 있으신가요? 어떤 생각 때문에 이렇게 저를 찾아오셨는지 궁금하네요.
    16.13s  agent 발화 끝
    22.35s  agent 발화 끝
